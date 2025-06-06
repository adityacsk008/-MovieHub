document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const body = document.body; // For no-scroll

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            const isExpanded = mainNav.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
            menuToggle.classList.toggle('active');
            body.classList.toggle('no-scroll', isExpanded); 
        });
    }

    // Theme Toggler
    const themeToggle = document.getElementById('theme-toggle');
    function applyTheme(theme) {
        if (theme === 'night') {
            document.body.classList.add('night-mode');
            if(themeToggle) {
                themeToggle.setAttribute('aria-label', 'Switch to Day Mode');
                themeToggle.title = 'Switch to Day Mode';
            }
            localStorage.setItem('theme', 'night');
        } else { 
            document.body.classList.remove('night-mode');
            if(themeToggle) {
                themeToggle.setAttribute('aria-label', 'Switch to Night Mode');
                themeToggle.title = 'Switch to Night Mode';
            }
            localStorage.setItem('theme', 'day');
        }
    }
    const savedTheme = localStorage.getItem('theme') || 'day'; // Default to day
    applyTheme(savedTheme);
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.body.classList.contains('night-mode') ? 'night' : 'day';
            applyTheme(currentTheme === 'night' ? 'day' : 'night');
        });
    }

    // Nav Link Active State & Smooth Scroll
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');

            if (mainNav.classList.contains('active')) { // Close mobile nav on link click
                mainNav.classList.remove('active');
                if(menuToggle) {
                    menuToggle.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
                body.classList.remove('no-scroll'); // Re-enable scroll
            }
        });
    });

    // Set active link based on scroll position
    const sections = document.querySelectorAll('main section[id]');
    const header = document.querySelector('header');
    let headerHeight = 0;
    if(header) headerHeight = header.offsetHeight;

    function updateActiveLinkOnScroll() {
        let currentSectionId = '';
        const scrollY = window.pageYOffset;
        let inCategorySubSection = false; 

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Section is considered current if its top is within a certain range from viewport top
            if (scrollY >= (sectionTop - headerHeight - sectionHeight * 0.5) && scrollY < (sectionTop + sectionHeight - headerHeight - sectionHeight * 0.5)) {
                currentSectionId = section.getAttribute('id');
            }
            // Check if current iterated section is a movie category sub-section
            if (['hindi-movies', 'south-movies', 'bollywood-movies', 'web-series', 'english-movies'].includes(section.getAttribute('id'))) {
                if (scrollY >= (sectionTop - headerHeight - sectionHeight * 0.5) && scrollY < (sectionTop + sectionHeight - headerHeight - sectionHeight * 0.5)) {
                    inCategorySubSection = true;
                }
            }
        });
        
        // Prioritize hero section for "Home" link if at the very top
        if (document.getElementById('hero')) {
             const heroSection = document.getElementById('hero');
             if (scrollY < (heroSection.offsetTop + heroSection.offsetHeight - headerHeight - 150) ) {
                currentSectionId = 'hero'; // Map hero to 'home' for nav link
             }
        }


        navLinks.forEach(link => {
            link.classList.remove('active');
            const linkHref = link.getAttribute('href');
            if (linkHref) {
                const linkTargetId = linkHref.substring(1);

                if (linkTargetId === currentSectionId) {
                    link.classList.add('active');
                } else if (linkTargetId === 'home' && currentSectionId === 'hero') {
                    link.classList.add('active');
                }
                // Activate "Categories" nav link if viewing categories overview or any category sub-section,
                // but not if "Tags" section is the current one.
                else if (linkTargetId === 'categories-overview' && 
                         (currentSectionId === 'categories-overview' || inCategorySubSection) &&
                         currentSectionId !== 'tags-section') {
                    link.classList.add('active');
                }
            }
        });
         // Final check: if no link is active and user is at the top, activate 'Home'
        const isActiveLinkPresent = Array.from(navLinks).some(navLink => navLink.classList.contains('active'));
        if (!isActiveLinkPresent && scrollY < 50 ) {
            const homeLink = document.querySelector('.main-nav a[href="#home"]');
            if (homeLink) {
                 navLinks.forEach(nav => nav.classList.remove('active')); // Clear others just in case
                 homeLink.classList.add('active');
            }
        }
    }
    
    window.addEventListener('scroll', updateActiveLinkOnScroll);
    updateActiveLinkOnScroll(); // Call on page load

    // Intersection Observer for Animations
    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.05 // Trigger animation when 5% of element is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('movie-card')) {
                    entry.target.classList.add('animate-in');
                } else if (entry.target.matches('.movie-gallery-section > .container > h2, .placeholder-section > .container > h2, .contact-section > .container > h2, .categories-list-section > .container > h2, .contact-section .container, .movie-gallery-section .container > h3, #tags-section .tag-link')) {
                    entry.target.classList.add('section-animate-in');
                }
                observer.unobserve(entry.target); 
            }
        });
    };

    const animationObserver = new IntersectionObserver(observerCallback, observerOptions);

    // Observe movie cards
    const movieCards = document.querySelectorAll('.movie-card');
    movieCards.forEach((card, index) => {
        card.style.animationDelay = `${(index % 10) * 0.03}s`; // Subtle stagger
        animationObserver.observe(card);
    });

    // Observe other elements like section titles, h3s, and tags
    const elementsToAnimate = document.querySelectorAll(
        '.movie-gallery-section > .container > h2, .placeholder-section > .container > h2, .contact-section > .container > h2, .categories-list-section > .container > h2, .contact-section .container, .movie-gallery-section .container > h3, #tags-section .tag-link'
    );
    let tagAnimationDelayCounter = 0;
    elementsToAnimate.forEach(el => {
        if (el.classList.contains('tag-link')) { 
            el.style.animationDelay = `${tagAnimationDelayCounter * 0.05}s`;
            tagAnimationDelayCounter++;
        } else if (el.tagName === 'H3') { // Stagger H3s a bit differently
             el.style.animationDelay = `0.1s`;
        }
        animationObserver.observe(el);
    });
    
    // CSS for body.no-scroll: body.no-scroll { overflow: hidden; }
});



