# 🎬 FINAL INTEGRATION GUIDE
## Hero Carousel + AdMob Ads Integration for index.html

---

## 📋 STEP-BY-STEP INSTRUCTIONS

### ✅ STEP 1: ADD ADMOB SDK IN `<head>` SECTION

**Location:** After line 6 (after `<title>` tag)

**Add this:**
```html
<!-- Google AdMob SDK -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5411788341265146"
     crossorigin="anonymous"></script>
```

---

### ✅ STEP 2: ADD ADMOB CSS IN `<style>` SECTION

**Location:** Before closing `</style>` tag (around line 700)

**Add this:**
```css
/* ========== ADMOB ADS STYLING ========== */
.ad-container {
    width: 100%;
    max-width: 100%;
    margin: 20px auto;
    text-align: center;
    background: rgba(0,0,0,0.05);
    padding: 10px;
    border-radius: 8px;
    min-height: 90px;
}

.banner-ad {
    margin: 30px 0;
}

.ad-label {
    font-size: 10px;
    color: #888;
    margin-bottom: 5px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

@keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
}

@media (max-width: 768px) {
    .ad-container {
        margin: 15px 0;
        padding: 8px;
    }
}

/* ========== HERO CAROUSEL CSS ========== */
.hero-carousel-section {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    overflow: hidden;
    background: #000;
    margin-top: 70px;
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
    background: linear-gradient(135deg, #FFB347 0%, #E69A36 100%);
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(255, 179, 71, 0.4);
    text-transform: uppercase;
    letter-spacing: 1px;
}

.watch-now-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(255, 179, 71, 0.6);
    background: linear-gradient(135deg, #E69A36 0%, #FFB347 100%);
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
    background: #FFB347;
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
    background: rgba(255, 179, 71, 0.8);
    transform: translateY(-50%) scale(1.1);
}

.carousel-nav.prev {
    left: 20px;
}

.carousel-nav.next {
    right: 20px;
}

.hero-section {
    display: none !important;
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
    }
    .carousel-content p {
        font-size: 0.9rem;
    }
    .watch-now-btn {
        padding: 12px 30px;
        font-size: 0.95rem;
    }
}
```

---

### ✅ STEP 3: ADD HERO CAROUSEL HTML

**Location:** Replace the old hero section (around line 800-850)

**Find this:**
```html
<!-- HERO SECTION -->
<section class="hero-section" id="home">
    ...existing hero content...
</section>
```

**Replace with this:**
```html
<!-- NEW HERO CAROUSEL SECTION -->
<section class="hero-carousel-section" id="home">
    <div class="carousel-container">
        <div class="carousel-slide active">
            <img src="https://iili.io/F2SglQ2.jpg" alt="Animal Movie">
            <div class="carousel-content">
                <h2>Animal</h2>
                <p>A dark and intense action crime drama exploring the complex relationship between a father and son.</p>
                <a href="mainmovies/animal.html" class="watch-now-btn">▶ Watch Now</a>
            </div>
        </div>
        <div class="carousel-slide">
            <img src="https://iili.io/F2Sgchl.jpg" alt="Jawan Movie">
            <div class="carousel-content">
                <h2>Jawan</h2>
                <p>A high-octane action thriller following a man driven by a personal vendetta to rectify the wrongs in society.</p>
                <a href="mainmovies/jawan.html" class="watch-now-btn">▶ Watch Now</a>
            </div>
        </div>
        <div class="carousel-slide">
            <img src="https://iili.io/F2SgaI4.jpg" alt="Fighter Movie">
            <div class="carousel-content">
                <h2>Fighter</h2>
                <p>India's first aerial action film showcasing elite fighter pilots protecting the nation's airspace.</p>
                <a href="mainmovies/fighter.html" class="watch-now-btn">▶ Watch Now</a>
            </div>
        </div>
        <div class="carousel-slide">
            <img src="https://iili.io/F2SgXkb.jpg" alt="Maharaja Movie">
            <div class="carousel-content">
                <h2>Maharaja</h2>
                <p>An intense action thriller that follows a barber whose life takes a dramatic turn.</p>
                <a href="mainmovies/maharaja.html" class="watch-now-btn">▶ Watch Now</a>
            </div>
        </div>
        <div class="carousel-slide">
            <img src="https://iili.io/F2SgEE7.jpg" alt="12th Fail Movie">
            <div class="carousel-content">
                <h2>12th Fail</h2>
                <p>An inspiring biographical drama about perseverance and determination.</p>
                <a href="12thFail.html" class="watch-now-btn">▶ Watch Now</a>
            </div>
        </div>
        <div class="carousel-slide">
            <img src="https://iili.io/F2SPjcP.jpg" alt="Article 370 Movie">
            <div class="carousel-content">
                <h2>Article 370</h2>
                <p>A gripping political thriller exploring one of India's most significant constitutional decisions.</p>
                <a href="mainmovies/article370.html" class="watch-now-btn">▶ Watch Now</a>
            </div>
        </div>
    </div>
    <button class="carousel-nav prev" onclick="changeSlide(-1)">❮</button>
    <button class="carousel-nav next" onclick="changeSlide(1)">❯</button>
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

---

### ✅ STEP 4: ADD BANNER AD AFTER HERO

**Location:** Right after the hero carousel section (after `</section>`)

**Add this:**
```html
<!-- AdMob Banner Ad -->
<div class="ad-container banner-ad">
    <div class="ad-label">Advertisement</div>
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-5411788341265146"
         data-ad-slot="1020552131"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
    <script>
         (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
</div>
```

---

### ✅ STEP 5: ADD REWARDED INTERSTITIAL AD

**Location:** Between content sections (e.g., after "Trending" section)

**Add this:**
```html
<!-- AdMob Rewarded Interstitial Ad -->
<div class="ad-container">
    <div class="ad-label">Advertisement</div>
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-5411788341265146"
         data-ad-slot="4374022529"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
    <script>
         (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
</div>
```

---

### ✅ STEP 6: ADD JAVASCRIPT BEFORE `</body>`

**Location:** Before closing `</body>` tag (last line of file)

**Add this:**
```javascript
<script>
/* ========== HERO CAROUSEL JAVASCRIPT ========== */
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
    if (currentSlide >= totalSlides) currentSlide = 0;
    else if (currentSlide < 0) currentSlide = totalSlides - 1;
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
    if (currentSlide >= totalSlides) currentSlide = 0;
    showSlide(currentSlide);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(autoSlide, 5000);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

if (slides.length > 0) {
    startAutoSlide();
    const carouselSection = document.querySelector('.hero-carousel-section');
    if (carouselSection) {
        carouselSection.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
        carouselSection.addEventListener('mouseleave', () => startAutoSlide());
    }
}

/* ========== ADMOB INTEGRATION ========== */

// APP OPEN AD
window.addEventListener('load', function() {
    const appOpenAdContainer = document.createElement('div');
    appOpenAdContainer.id = 'app-open-ad';
    appOpenAdContainer.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.95); z-index: 10000;
        display: flex; flex-direction: column; align-items: center; justify-content: center;
    `;
    appOpenAdContainer.innerHTML = `
        <div style="background: white; padding: 30px; border-radius: 15px; text-align: center; max-width: 90%; margin-bottom: 30px;">
            <h2 style="color: #E50914; margin-bottom: 10px; font-size: 28px;">Welcome to StreamFlix</h2>
            <p style="color: #666; font-size: 14px;">Loading your entertainment...</p>
        </div>
        <ins class="adsbygoogle" style="display:block; width: 90%; max-width: 400px;"
             data-ad-client="ca-pub-5411788341265146" data-ad-slot="8409648060"
             data-ad-format="auto" data-full-width-responsive="true"></ins>
        <button id="close-app-open-ad" style="margin-top: 30px; padding: 15px 40px;
            background: linear-gradient(135deg, #E50914 0%, #ff6b6b 100%); color: white;
            border: none; border-radius: 30px; font-size: 18px; font-weight: 600;
            cursor: pointer; box-shadow: 0 4px 15px rgba(229, 9, 20, 0.4); display: none;">
            Enter StreamFlix</button>
    `;
    document.body.appendChild(appOpenAdContainer);
    (adsbygoogle = window.adsbygoogle || []).push({});
    setTimeout(() => { document.getElementById('close-app-open-ad').style.display = 'block'; }, 3000);
    document.getElementById('close-app-open-ad').addEventListener('click', () => {
        appOpenAdContainer.style.animation = 'fadeOut 0.5s ease';
        setTimeout(() => { document.body.removeChild(appOpenAdContainer); }, 500);
    });
});

// INTERSTITIAL AD
let interstitialAdShown = false;
function loadInterstitialAd() {
    if (!interstitialAdShown) {
        const interstitialContainer = document.createElement('div');
        interstitialContainer.style.cssText = `position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.9); z-index: 9999; display: flex; flex-direction: column;
            align-items: center; justify-content: center;`;
        interstitialContainer.innerHTML = `
            <div style="background: white; padding: 20px; border-radius: 10px; text-align: center; max-width: 90%; margin-bottom: 20px;">
                <h3 style="color: #333; margin-bottom: 10px;">Please Wait</h3>
                <p style="color: #666; font-size: 14px;">Advertisement loading...</p>
            </div>
            <ins class="adsbygoogle" style="display:block; width: 90%; max-width: 400px;"
                 data-ad-client="ca-pub-5411788341265146" data-ad-slot="8528889954"
                 data-ad-format="auto" data-full-width-responsive="true"></ins>
            <button id="close-interstitial-ad" style="margin-top: 20px; padding: 12px 30px;
                background: #E50914; color: white; border: none; border-radius: 25px;
                font-size: 16px; cursor: pointer; display: none;">Continue</button>
        `;
        document.body.appendChild(interstitialContainer);
        (adsbygoogle = window.adsbygoogle || []).push({});
        setTimeout(() => { document.getElementById('close-interstitial-ad').style.display = 'block'; }, 5000);
        document.getElementById('close-interstitial-ad').addEventListener('click', () => {
            document.body.removeChild(interstitialContainer);
        });
        interstitialAdShown = true;
    }
}
setTimeout(loadInterstitialAd, 30000);

// REWARDED AD
function showRewardedAd(callback) {
    const rewardedAdContainer = document.createElement('div');
    rewardedAdContainer.style.cssText = `position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.9); z-index: 9999; display: flex; flex-direction: column;
        align-items: center; justify-content: center;`;
    rewardedAdContainer.innerHTML = `
        <div style="background: white; padding: 20px; border-radius: 10px; text-align: center; max-width: 90%; margin-bottom: 20px;">
            <h3 style="color: #333; margin-bottom: 10px;">🎬 Watch Ad to Continue</h3>
            <p style="color: #666; font-size: 14px;">Please watch this ad to access the content</p>
        </div>
        <ins class="adsbygoogle" style="display:block; width: 90%; max-width: 400px;"
             data-ad-client="ca-pub-5411788341265146" data-ad-slot="3060940858"
             data-ad-format="auto" data-full-width-responsive="true"></ins>
        <button id="close-rewarded-ad" style="margin-top: 20px; padding: 12px 30px;
            background: #46d369; color: white; border: none; border-radius: 25px;
            font-size: 16px; cursor: pointer; display: none;">Continue to Content</button>
    `;
    document.body.appendChild(rewardedAdContainer);
    (adsbygoogle = window.adsbygoogle || []).push({});
    setTimeout(() => { document.getElementById('close-rewarded-ad').style.display = 'block'; }, 5000);
    document.getElementById('close-rewarded-ad').addEventListener('click', () => {
        document.body.removeChild(rewardedAdContainer);
        if (callback) callback();
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const playButtons = document.querySelectorAll('.btn-play');
    playButtons.forEach(btn => {
        const originalOnclick = btn.getAttribute('onclick');
        btn.removeAttribute('onclick');
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            showRewardedAd(() => { if (originalOnclick) eval(originalOnclick); });
        });
    });
});
</script>
```

---

## ✅ DONE!

All integrations complete:
- ✅ Hero Carousel (6 movies, auto-slide)
- ✅ App Open Ad
- ✅ Banner Ad
- ✅ Interstitial Ad
- ✅ Rewarded Ad
- ✅ Rewarded Interstitial Ad

**Test your site and enjoy! 🎉**
