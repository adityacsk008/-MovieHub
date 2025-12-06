# Hero Carousel Update Instructions

## Step 1: Add CSS (Add this in the `<style>` section, before the closing `</style>` tag)

```css
/* ========== HERO CAROUSEL STYLES ========== */
.hero-carousel-section {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
    overflow: hidden;
    background: #000;
}

.carousel-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.carousel-slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 1s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.carousel-slide.active {
    opacity: 1;
    z-index: 1;
}

.carousel-slide img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.6);
}

.carousel-content {
    position: relative;
    z-index: 2;
    padding: 0 5%;
    max-width: 600px;
    color: white;
    margin-left: 3%;
}

.carousel-content h2 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 8px rgba(0,0,0,0.8);
    line-height: 1.2;
}

.carousel-content p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    line-height: 1.6;
    text-shadow: 1px 1px 4px rgba(0,0,0,0.8);
    max-width: 500px;
}

.watch-now-btn {
    display: inline-block;
    padding: 15px 40px;
    background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(6, 182, 212, 0.4);
    text-transform: uppercase;
    letter-spacing: 1px;
}

.watch-now-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(6, 182, 212, 0.6);
    background: linear-gradient(135deg, #0891b2 0%, #06b6d4 100%);
}

.carousel-indicators {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 12px;
    z-index: 3;
}

.indicator {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid transparent;
}

.indicator.active {
    background: #06b6d4;
    transform: scale(1.3);
    border-color: white;
}

.carousel-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    z-index: 3;
    backdrop-filter: blur(5px);
}

.carousel-nav:hover {
    background: rgba(6, 182, 212, 0.8);
    transform: translateY(-50%) scale(1.1);
}

.carousel-nav.prev {
    left: 20px;
}

.carousel-nav.next {
    right: 20px;
}

/* Hide old hero section */
.hero-section {
    display: none !important;
}

/* Responsive Design for Carousel */
@media (max-width: 1024px) {
    .carousel-content h2 {
        font-size: 2.5rem;
    }
    
    .carousel-content p {
        font-size: 1rem;
    }
}

@media (max-width: 768px) {
    .hero-carousel-section {
        padding-bottom: 75%;
    }
    
    .carousel-content {
        padding: 0 4%;
        margin-left: 2%;
        max-width: 90%;
    }
    
    .carousel-content h2 {
        font-size: 1.8rem;
        margin-bottom: 0.8rem;
    }
    
    .carousel-content p {
        font-size: 0.9rem;
        margin-bottom: 1.5rem;
    }
    
    .watch-now-btn {
        padding: 12px 30px;
        font-size: 0.95rem;
    }
    
    .carousel-nav {
        width: 40px;
        height: 40px;
        font-size: 1.2rem;
    }
    
    .carousel-nav.prev {
        left: 10px;
    }
    
    .carousel-nav.next {
        right: 10px;
    }
    
    .carousel-indicators {
        bottom: 20px;
        gap: 8px;
    }
    
    .indicator {
        width: 10px;
        height: 10px;
    }
}

@media (max-width: 480px) {
    .carousel-content h2 {
        font-size: 1.5rem;
    }
    
    .carousel-content p {
        font-size: 0.85rem;
        margin-bottom: 1.2rem;
    }
    
    .watch-now-btn {
        padding: 10px 25px;
        font-size: 0.9rem;
    }
}
```

## Step 2: Replace OLD Hero Section HTML

**FIND THIS (around line 293-298):**
```html
<main>
    <!-- Hero Section -->
    <section id="hero" class="hero-section">
        <div class="container">
            <h1>Discover Your Next Favorite Movie</h1>
            <p>Explore a vast collection of films across all genres.</p>
        </div>
    </section>
```

**REPLACE WITH THIS:**
```html
<main>
    <!-- NEW Hero Carousel Section -->
    <section class="hero-carousel-section">
        <div class="carousel-container">
            <!-- Slide 1: Animal -->
            <div class="carousel-slide active">
                <img src="https://iili.io/F2SglQ2.jpg" alt="Animal Movie">
                <div class="carousel-content">
                    <h2>Animal</h2>
                    <p>A dark and intense action crime drama exploring the complex relationship between a father and son. When his father's life is threatened, a man embarks on a violent path of revenge.</p>
                    <a href="mainmovies/animal.html" class="watch-now-btn">▶ Watch Now</a>
                </div>
            </div>

            <!-- Slide 2: Jawan -->
            <div class="carousel-slide">
                <img src="https://iili.io/F2Sgchl.jpg" alt="Jawan Movie">
                <div class="carousel-content">
                    <h2>Jawan</h2>
                    <p>A high-octane action thriller following a man driven by a personal vendetta to rectify the wrongs in society. Shah Rukh Khan delivers a powerful dual role performance.</p>
                    <a href="mainmovies/jawan.html" class="watch-now-btn">▶ Watch Now</a>
                </div>
            </div>

            <!-- Slide 3: Fighter -->
            <div class="carousel-slide">
                <img src="https://iili.io/F2SgaI4.jpg" alt="Fighter Movie">
                <div class="carousel-content">
                    <h2>Fighter</h2>
                    <p>India's first aerial action film showcasing elite fighter pilots protecting the nation's airspace. Experience breathtaking aerial sequences and intense dogfights.</p>
                    <a href="mainmovies/fighter.html" class="watch-now-btn">▶ Watch Now</a>
                </div>
            </div>

            <!-- Slide 4: Maharaja -->
            <div class="carousel-slide">
                <img src="https://iili.io/F2SgXkb.jpg" alt="Maharaja Movie">
                <div class="carousel-content">
                    <h2>Maharaja</h2>
                    <p>An intense action thriller that follows a barber whose life takes a dramatic turn. What begins as a simple theft investigation unravels into a complex web of crime and revenge.</p>
                    <a href="mainmovies/maharaja.html" class="watch-now-btn">▶ Watch Now</a>
                </div>
            </div>

            <!-- Slide 5: 12th Fail -->
            <div class="carousel-slide">
                <img src="https://iili.io/F2SgEE7.jpg" alt="12th Fail Movie">
                <div class="carousel-content">
                    <h2>12th Fail</h2>
                    <p>An inspiring biographical drama about perseverance and determination. The story of a man who overcomes failures to achieve his dreams against all odds.</p>
                    <a href="12thFail.html" class="watch-now-btn">▶ Watch Now</a>
                </div>
            </div>

            <!-- Slide 6: Article 370 -->
            <div class="carousel-slide">
                <img src="https://iili.io/F2SPjcP.jpg" alt="Article 370 Movie">
                <div class="carousel-content">
                    <h2>Article 370</h2>
                    <p>A gripping political thriller exploring one of India's most significant constitutional decisions. Intense drama and powerful performances bring this historic event to life.</p>
                    <a href="mainmovies/article370.html" class="watch-now-btn">▶ Watch Now</a>
                </div>
            </div>
        </div>

        <!-- Navigation Buttons -->
        <button class="carousel-nav prev" onclick="changeSlide(-1)">❮</button>
        <button class="carousel-nav next" onclick="changeSlide(1)">❯</button>

        <!-- Indicators -->
        <div class="carousel-indicators">
            <span class="indicator active" onclick="goToSlide(0)"></span>
            <span class="indicator" onclick="goToSlide(1)"></span>
            <span class="indicator" onclick="goToSlide(2)"></span>
            <span class="indicator" onclick="goToSlide(3)"></span>
            <span class="indicator" onclick="goToSlide(4)"></span>
            <span class="indicator" onclick="goToSlide(5)"></span>
        </div>
    </section>
```

## Step 3: Add JavaScript (Add this before the closing `</body>` tag)

```javascript
<script>
// Hero Carousel JavaScript
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;
let autoSlideInterval;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
}

function changeSlide(direction) {
    currentSlide += direction;
    
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    
    showSlide(currentSlide);
    resetAutoSlide();
}

function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
    resetAutoSlide();
}

function autoSlide() {
    currentSlide++;
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(autoSlide, 5000);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

startAutoSlide();

const carouselSection = document.querySelector('.hero-carousel-section');
if (carouselSection) {
    carouselSection.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });

    carouselSection.addEventListener('mouseleave', () => {
        startAutoSlide();
    });
}
</script>
```

## Done! 🎉

Your hero carousel is now ready with:
- ✅ 16:9 aspect ratio
- ✅ 6 featured movies with auto-sliding
- ✅ Left-aligned content (movie name, description, watch button)
- ✅ Auto-slide every 5 seconds
- ✅ Manual navigation (arrows + dots)
- ✅ Fully responsive
- ✅ Hover to pause