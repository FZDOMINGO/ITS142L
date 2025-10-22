// What's New Panel Toggle
const whatsNewBtn = document.getElementById('whatsNewBtn');
const whatsNewPanel = document.getElementById('whatsNewPanel');
const closePanel = document.getElementById('closePanel');

whatsNewBtn.addEventListener('click', () => {
    whatsNewPanel.classList.toggle('active');
});

closePanel.addEventListener('click', () => {
    whatsNewPanel.classList.remove('active');
});

// What's New Panel Tabs
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons and contents
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Show corresponding content
        const tabId = btn.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// BIR in Action Carousel Functionality
let currentSlide = 0;
let autoPlayInterval;
let isPlaying = true;

const carouselTrack = document.getElementById('carouselTrack');
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pauseBtn = document.getElementById('pauseBtn');

function updateCarousel() {
    const slideWidth = slides[0].clientWidth;
    carouselTrack.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    
    // Update indicators
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 5000);
    isPlaying = true;
    pauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
    isPlaying = false;
    pauseBtn.innerHTML = '<i class="fas fa-play"></i>';
}

// Event Listeners for BIR in Action Carousel
nextBtn.addEventListener('click', () => {
    nextSlide();
    stopAutoPlay();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    stopAutoPlay();
});

pauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        stopAutoPlay();
    } else {
        startAutoPlay();
    }
});

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        goToSlide(index);
        stopAutoPlay();
    });
});

// Start autoplay on page load
startAutoPlay();

// Update carousel on window resize
window.addEventListener('resize', updateCarousel);

// Announcement Banner Carousel Functionality
let currentAnnouncementSlide = 0;
let announcementAutoPlayInterval;
let announcementIsPlaying = true;

const announcementCarouselTrack = document.getElementById('announcementCarouselTrack');
const announcementSlides = document.querySelectorAll('.announcement-slide');
const announcementIndicators = document.querySelectorAll('.announcement-indicator');
const prevAnnouncementBtn = document.getElementById('prevAnnouncementBtn');
const nextAnnouncementBtn = document.getElementById('nextAnnouncementBtn');
const pauseAnnouncementBtn = document.getElementById('pauseAnnouncementBtn');

function updateAnnouncementCarousel() {
    const slideWidth = announcementSlides[0].clientWidth;
    announcementCarouselTrack.style.transform = `translateX(-${currentAnnouncementSlide * slideWidth}px)`;
    
    // Update indicators
    announcementIndicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentAnnouncementSlide);
    });
}

function nextAnnouncementSlide() {
    currentAnnouncementSlide = (currentAnnouncementSlide + 1) % announcementSlides.length;
    updateAnnouncementCarousel();
}

function prevAnnouncementSlide() {
    currentAnnouncementSlide = (currentAnnouncementSlide - 1 + announcementSlides.length) % announcementSlides.length;
    updateAnnouncementCarousel();
}

function goToAnnouncementSlide(index) {
    currentAnnouncementSlide = index;
    updateAnnouncementCarousel();
}

function startAnnouncementAutoPlay() {
    announcementAutoPlayInterval = setInterval(nextAnnouncementSlide, 6000);
    announcementIsPlaying = true;
    pauseAnnouncementBtn.innerHTML = '<i class="fas fa-pause"></i>';
}

function stopAnnouncementAutoPlay() {
    clearInterval(announcementAutoPlayInterval);
    announcementIsPlaying = false;
    pauseAnnouncementBtn.innerHTML = '<i class="fas fa-play"></i>';
}

// Announcement Event Listeners
nextAnnouncementBtn.addEventListener('click', () => {
    nextAnnouncementSlide();
    stopAnnouncementAutoPlay();
});

prevAnnouncementBtn.addEventListener('click', () => {
    prevAnnouncementSlide();
    stopAnnouncementAutoPlay();
});

pauseAnnouncementBtn.addEventListener('click', () => {
    if (announcementIsPlaying) {
        stopAnnouncementAutoPlay();
    } else {
        startAnnouncementAutoPlay();
    }
});

announcementIndicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        goToAnnouncementSlide(index);
        stopAnnouncementAutoPlay();
    });
});

// Start announcement autoplay on page load
startAnnouncementAutoPlay();

// Update announcement carousel on window resize
window.addEventListener('resize', updateAnnouncementCarousel);

// Search Functionality
const searchBar = document.getElementById('searchBar');
const searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', () => {
    const searchTerm = searchBar.value.trim();
    if (searchTerm) {
        alert(`Searching for: ${searchTerm}\n\nThis would redirect to search results page in a live implementation.`);
    }
});

searchBar.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Add active class to navigation based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-menu li a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Close What's New panel when clicking outside
document.addEventListener('click', (e) => {
    if (!whatsNewPanel.contains(e.target) && !whatsNewBtn.contains(e.target)) {
        whatsNewPanel.classList.remove('active');
    }
});

// Prevent panel from closing when clicking inside
whatsNewPanel.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Add animation on scroll for cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.quick-link-card, .eservice-card, .info-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Language toggle functionality
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// Animated Counter for Statistics
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60 FPS
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current).toLocaleString();
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target.toLocaleString();
        }
    };

    updateCounter();
}

// Observe stats section for counter animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                if (stat.textContent === '0') {
                    animateCounter(stat);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Console message
console.log('%c🏛️ BIR Website Redesign', 'font-size: 20px; color: #003366; font-weight: bold;');
console.log('%cImproved user experience with better navigation and organization', 'font-size: 14px; color: #666;');
console.log('%cDeveloped by: FZDOMINGO', 'font-size: 12px; color: #ff6b35;');
console.log('%cDate: 2025-10-19', 'font-size: 12px; color: #666;');