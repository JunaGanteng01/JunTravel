// Countdown Timer untuk Header dan Penawaran
function startCountdown() {
    // Set waktu target (7 hari dari sekarang)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);
    targetDate.setHours(23, 59, 59, 999);

    function updateCountdown() {
        const now = new Date();
        const timeLeft = targetDate - now;

        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            // Update header countdown
            const headerDays = document.getElementById('days');
            const headerHours = document.getElementById('hours');
            const headerMinutes = document.getElementById('minutes');

            if (headerDays) headerDays.textContent = days.toString().padStart(2, '0');
            if (headerHours) headerHours.textContent = hours.toString().padStart(2, '0');
            if (headerMinutes) headerMinutes.textContent = minutes.toString().padStart(2, '0');

            // Update mobile countdown
            const mobileDays = document.getElementById('mobileDays');
            const mobileHours = document.getElementById('mobileHours');
            const mobileMinutes = document.getElementById('mobileMinutes');

            if (mobileDays) mobileDays.textContent = days.toString().padStart(2, '0');
            if (mobileHours) mobileHours.textContent = hours.toString().padStart(2, '0');
            if (mobileMinutes) mobileMinutes.textContent = minutes.toString().padStart(2, '0');

            // Update offer countdown
            const offerDays = document.getElementById('offerDays');
            const offerHours = document.getElementById('offerHours');
            const offerMinutes = document.getElementById('offerMinutes');
            const offerSeconds = document.getElementById('offerSeconds');

            if (offerDays) offerDays.textContent = days.toString().padStart(2, '0');
            if (offerHours) offerHours.textContent = hours.toString().padStart(2, '0');
            if (offerMinutes) offerMinutes.textContent = minutes.toString().padStart(2, '0');
            if (offerSeconds) offerSeconds.textContent = seconds.toString().padStart(2, '0');
        } else {
            // Countdown selesai
            const countdownElements = document.querySelectorAll('.countdown-timer, .countdown-container');
            countdownElements.forEach(element => {
                element.innerHTML = '<span style="color: #e74c3c;">Penawaran Berakhir!</span>';
            });
        }
    }

    // Update setiap detik
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Swiper Testimoni Initialization
let testimoniSwiper;

function initTestimoniSwiper() {
    testimoniSwiper = new Swiper('.testimoni-swiper', {
        // Basic settings
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        
        // Navigation
        navigation: {
            nextEl: '.testimoni-next',
            prevEl: '.testimoni-prev',
        },
        
        // Pagination
        pagination: {
            el: '.testimoni-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        
        // Effects
        effect: 'slide',
        speed: 600,
        
        // Responsive breakpoints
        breakpoints: {
            768: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 1,
                spaceBetween: 40,
            },
        },
        
        // Events
        on: {
            init: function () {
                console.log('Testimoni Swiper initialized');
            },
            slideChange: function () {
                // Slide change event handler
                console.log('Slide changed to:', this.activeIndex);
            },
        },
    });
}

// Smooth scrolling untuk navigasi
function scrollToBooking() {
    const penawaranSection = document.querySelector('.penawaran');
    if (penawaranSection) {
        penawaranSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Smooth scrolling untuk navigasi
function scrollToKontak() {
    const kontakSection = document.querySelector('.kontak');
    if (kontakSection) {
        kontakSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Smooth scrolling ke section tertentu
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Mobile menu toggle - Let Bootstrap handle it
// No custom toggle needed, Bootstrap handles this automatically

// Form submission handler
function handleFormSubmission(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Simulasi pengiriman form
    const submitButton = form.querySelector('.btn-submit');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Mengirim...';
    submitButton.disabled = true;
    
    setTimeout(() => {
        submitButton.textContent = 'Pesan Terkirim!';
        submitButton.style.background = '#27ae60';
        
        setTimeout(() => {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            submitButton.style.background = '';
            form.reset();
        }, 2000);
    }, 1500);
}

// Scroll animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.destinasi-card, .testimoni-content, .info-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Parallax effect untuk hero section
function handleParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroImage = document.querySelector('.hero-image img');
        
        if (heroImage) {
            const rate = scrolled * -0.5;
            heroImage.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Navbar background change on scroll
function handleNavbarScroll() {
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.header');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(18, 18, 18, 0.98)';
        } else {
            navbar.style.background = 'rgba(18, 18, 18, 0.95)';
        }
    });
}

// Button hover effects
function addButtonEffects() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-hero, .btn-offer, .btn-secondary');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Loading animation
function showLoadingAnimation() {
    const body = document.body;
    body.style.opacity = '0';
    
    window.addEventListener('load', () => {
        body.style.transition = 'opacity 0.5s ease';
        body.style.opacity = '1';
    });
}

// Hero section animations dan interactions
function initHeroAnimations() {
    // Animate floating cards on scroll
    const floatingCards = document.querySelectorAll('.floating-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, { threshold: 0.1 });
    
    floatingCards.forEach(card => {
        observer.observe(card);
    });
    
    // Add click handlers for floating cards
    floatingCards.forEach(card => {
        card.addEventListener('click', () => {
            scrollToSection('destinasi');
        });
    });
    
    // Animate stats numbers
    const statNumbers = document.querySelectorAll('.stat-number');
    const animateNumbers = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalNumber = target.textContent;
                const isPlus = finalNumber.includes('+');
                const isSlash = finalNumber.includes('/');
                const number = parseInt(finalNumber.replace(/[^0-9]/g, ''));
                
                let current = 0;
                const increment = number / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= number) {
                        current = number;
                        clearInterval(timer);
                    }
                    
                    if (isPlus) {
                        target.textContent = Math.floor(current) + 'K+';
                    } else if (isSlash) {
                        target.textContent = Math.floor(current) + '/7';
                    } else {
                        target.textContent = Math.floor(current) + '+';
                    }
                }, 30);
            }
        });
    };
    
    const statsObserver = new IntersectionObserver(animateNumbers, { threshold: 0.5 });
    statNumbers.forEach(stat => statsObserver.observe(stat));
}

// Testimoni stats animation
// Mobile testimoni navigation enhancement
function initMobileTestimoniEnhancement() {
    const testimoniNavigation = document.querySelector('.testimoni-navigation');
    const testimoniPagination = document.querySelector('.testimoni-pagination');
    
    if (window.innerWidth <= 480) {
        // Add touch feedback for mobile
        if (testimoniNavigation) {
            const buttons = testimoniNavigation.querySelectorAll('button');
            buttons.forEach(button => {
                button.addEventListener('touchstart', function() {
                    this.style.transform = 'scale(0.9)';
                });
                
                button.addEventListener('touchend', function() {
                    this.style.transform = 'scale(1)';
                });
            });
        }
        
        // Add touch feedback for pagination
        if (testimoniPagination) {
            const bullets = testimoniPagination.querySelectorAll('.swiper-pagination-bullet');
            bullets.forEach(bullet => {
                bullet.addEventListener('touchstart', function() {
                    this.style.transform = 'scale(0.9)';
                });
                
                bullet.addEventListener('touchend', function() {
                    this.style.transform = 'scale(1)';
                });
            });
        }
        
        // Add swipe gesture indicator
        const swiper = document.querySelector('.testimoni-swiper');
        if (swiper) {
            let touchStartX = 0;
            let touchEndX = 0;
            
            swiper.addEventListener('touchstart', function(e) {
                touchStartX = e.changedTouches[0].screenX;
            });
            
            swiper.addEventListener('touchend', function(e) {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            });
            
            function handleSwipe() {
                const swipeThreshold = 50;
                const diff = touchStartX - touchEndX;
                
                if (Math.abs(diff) > swipeThreshold) {
                    if (diff > 0) {
                        // Swipe left - next slide
                        if (testimoniSwiper) {
                            testimoniSwiper.slideNext();
                        }
                    } else {
                        // Swipe right - previous slide
                        if (testimoniSwiper) {
                            testimoniSwiper.slidePrev();
                        }
                    }
                }
            }
        }
    }
}

function initTestimoniStats() {
    const testimoniStats = document.querySelectorAll('.testimoni-stats .stat-number');
    
    const animateTestimoniStats = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = target.textContent;
                
                if (finalValue.includes('.')) {
                    // Handle decimal numbers like 4.9
                    const number = parseFloat(finalValue);
                    let current = 0;
                    const increment = number / 50;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= number) {
                            current = number;
                            clearInterval(timer);
                        }
                        target.textContent = current.toFixed(1);
                    }, 30);
                } else if (finalValue.includes('%')) {
                    // Handle percentage like 98%
                    const number = parseInt(finalValue);
                    let current = 0;
                    const increment = number / 50;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= number) {
                            current = number;
                            clearInterval(timer);
                        }
                        target.textContent = Math.floor(current) + '%';
                    }, 30);
                } else if (finalValue.includes('+')) {
                    // Handle numbers with + like 2,500+
                    const number = parseInt(finalValue.replace(/[^0-9]/g, ''));
                    let current = 0;
                    const increment = number / 50;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= number) {
                            current = number;
                            clearInterval(timer);
                        }
                        target.textContent = Math.floor(current).toLocaleString() + '+';
                    }, 30);
                }
            }
        });
    };
    
    const testimoniStatsObserver = new IntersectionObserver(animateTestimoniStats, { threshold: 0.5 });
    testimoniStats.forEach(stat => testimoniStatsObserver.observe(stat));
}

// Utility functions
function formatNumber(num) {
    return num.toString().padStart(2, '0');
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Responsive image loading
function loadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Error handling untuk countdown
function handleCountdownError() {
    const countdownElements = document.querySelectorAll('[id*="countdown"], [id*="Days"], [id*="Hours"], [id*="Minutes"], [id*="Seconds"]');
    
    countdownElements.forEach(element => {
        if (!element.textContent || element.textContent === 'NaN') {
            element.textContent = '00';
        }
    });
}

// Call error handling setiap 10 detik
setInterval(handleCountdownError, 10000);

// Function to open Google Maps
function openGoogleMaps() {
    try {
        console.log('openGoogleMaps function called');
        
        // Koordinat untuk Bali (Jl. Sudirman, Denpasar)
        const lat = -8.6500;
        const lng = 115.2167;
        const address = "Jl. Sudirman No. 123, Denpasar, Bali 80234, Indonesia";
        
        // Deteksi apakah user menggunakan mobile atau desktop
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        let mapsUrl;
        
        if (isMobile) {
            // Untuk mobile, gunakan Google Maps app atau web
            mapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
        } else {
            // Untuk desktop, buka di browser
            mapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
        }
        
        // Buka Google Maps di tab/window baru
        const newWindow = window.open(mapsUrl, '_blank');
        
        if (!newWindow) {
            // Fallback jika popup diblokir
            window.location.href = mapsUrl;
        }
        
        // Log untuk debugging
        console.log('Opening Google Maps:', mapsUrl);
        console.log('Is Mobile:', isMobile);
        
    } catch (error) {
        console.error('Error in openGoogleMaps:', error);
        // Fallback URL
        window.open('https://www.google.com/maps/search/?api=1&query=-8.6500,115.2167', '_blank');
    }
}

// Function to scroll to maps section
function scrollToMaps() {
    const mapsSection = document.getElementById('lokasi');
    if (mapsSection) {
        mapsSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Function untuk mendapatkan petunjuk arah
function getDirections() {
    try {
        console.log('getDirections function called');
        
        // Koordinat untuk Bali (Jl. Sudirman, Denpasar)
        const lat = -8.6500;
        const lng = 115.2167;
        const address = "Jl. Sudirman No. 123, Denpasar, Bali 80234, Indonesia";
        
        // Deteksi apakah user menggunakan mobile atau desktop
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        let directionsUrl;
        
        if (isMobile) {
            // Untuk mobile, gunakan Google Maps app dengan mode directions
            directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
        } else {
            // Untuk desktop, buka di browser dengan mode directions
            directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
        }
        
        // Buka Google Maps dengan mode directions di tab/window baru
        const newWindow = window.open(directionsUrl, '_blank');
        
        if (!newWindow) {
            // Fallback jika popup diblokir
            window.location.href = directionsUrl;
        }
        
        // Log untuk debugging
        console.log('Opening Google Maps Directions:', directionsUrl);
        console.log('Is Mobile:', isMobile);
        
    } catch (error) {
        console.error('Error in getDirections:', error);
        // Fallback URL
        window.open('https://www.google.com/maps/dir/?api=1&destination=-8.6500,115.2167', '_blank');
    }
}

// Test function untuk memastikan buttons bekerja
function testButtonFunctions() {
    console.log('Testing button functions...');
    console.log('openGoogleMaps function:', typeof openGoogleMaps);
    console.log('getDirections function:', typeof getDirections);
    
    // Test jika functions tersedia di global scope
    if (typeof openGoogleMaps === 'function') {
        console.log('✅ openGoogleMaps function is available');
    } else {
        console.error('❌ openGoogleMaps function is NOT available');
    }
    
    if (typeof getDirections === 'function') {
        console.log('✅ getDirections function is available');
    } else {
        console.error('❌ getDirections function is NOT available');
    }
}

// Function untuk bind button events
function bindMapButtons() {
    console.log('Binding map button events...');
    
    // Bind openGoogleMaps button
    const openMapsButtons = document.querySelectorAll('button[onclick*="openGoogleMaps"]');
    openMapsButtons.forEach((button, index) => {
        console.log(`Binding openGoogleMaps button ${index + 1}`);
        button.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('openGoogleMaps button clicked');
            openGoogleMaps();
        });
    });
    
    // Bind getDirections button
    const directionsButtons = document.querySelectorAll('button[onclick*="getDirections"]');
    directionsButtons.forEach((button, index) => {
        console.log(`Binding getDirections button ${index + 1}`);
        button.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('getDirections button clicked');
            getDirections();
        });
    });
    
    console.log(`Found ${openMapsButtons.length} openGoogleMaps buttons`);
    console.log(`Found ${directionsButtons.length} getDirections buttons`);
}

// Initialize semua fungsi ketika DOM loaded
document.addEventListener('DOMContentLoaded', function() {
    // Ensure Bootstrap doesn't interfere with custom functionality
    console.log('Bootstrap integration: Active');
    
    // Test button functions
    testButtonFunctions();
    
    // Bind button click events
    bindMapButtons();
    
    // Start countdown timer
    startCountdown();
    
    // Initialize testimoni carousel
    initTestimoniSwiper();
    
    // Setup form submission
    const contactForm = document.getElementById('kontakForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmission);
    }
    
    // Bootstrap handles navbar toggle automatically, no custom code needed
    
    // Setup scroll animations
    handleScrollAnimations();
    
    // Setup parallax effect
    handleParallax();
    
    // Setup navbar scroll effect
    handleNavbarScroll();
    
    // Add button effects
    addButtonEffects();
    
    // Initialize hero animations
    initHeroAnimations();
    
    // Initialize testimoni stats animation
    initTestimoniStats();
    
    // Initialize mobile testimoni enhancement
    initMobileTestimoniEnhancement();
    
    // Initialize booking functionality
    initBookingFunctionality();
    
    // Show loading animation
    showLoadingAnimation();
    
    // Close mobile menu when clicking on links - Bootstrap compatible
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const navMenu = document.querySelector('.navbar-collapse');
            const hamburger = document.querySelector('.navbar-toggler');
            
            // Only close if menu is open (has 'show' class)
            if (navMenu && navMenu.classList.contains('show')) {
                // Use Bootstrap's Collapse API
                const bsCollapse = bootstrap.Collapse.getInstance(navMenu) || new bootstrap.Collapse(navMenu, {
                    toggle: false
                });
                bsCollapse.hide();
            }
        });
    });

    // Initialize FAQ accordion
    initFAQAccordion();
});

// Paket Promo Booking Functions
function bookPaket(paketType) {
    console.log(`Booking paket: ${paketType}`);
    
    // Paket details
    const paketDetails = {
        basic: {
            name: 'Indonesia Explorer',
            price: 'Rp 2.500.000',
            duration: '4 Hari 3 Malam',
            destinations: ['Bali', 'Denpasar', 'Ubud']
        },
        premium: {
            name: 'Indonesia + Singapura',
            price: 'Rp 5.000.000',
            duration: '6 Hari 5 Malam',
            destinations: ['Bali', 'Singapura', 'Marina Bay', 'Sentosa']
        },
        luxury: {
            name: 'Ultimate Indonesia-Singapura',
            price: 'Rp 7.500.000',
            duration: '8 Hari 7 Malam',
            destinations: ['Bali', 'Singapura', 'Marina Bay Sands', 'Gardens by the Bay', 'Universal Studios', 'Sentosa Island']
        }
    };
    
    const paket = paketDetails[paketType];
    
    if (!paket) {
        console.error('Paket tidak ditemukan:', paketType);
        return;
    }
    
    // Show booking modal or redirect to contact
    showBookingModal(paket);
}

function showBookingModal(paket) {
    // Create modal HTML
    const modalHTML = `
        <div class="booking-modal-overlay" id="bookingModal">
            <div class="booking-modal">
                <div class="booking-modal-header">
                    <h3>Konfirmasi Pemesanan</h3>
                    <button class="close-modal" onclick="closeBookingModal()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="booking-modal-body">
                    <div class="paket-summary">
                        <h4>${paket.name}</h4>
                        <div class="paket-info">
                            <div class="info-row">
                                <span class="label">Harga:</span>
                                <span class="value price">${paket.price}</span>
                            </div>
                            <div class="info-row">
                                <span class="label">Durasi:</span>
                                <span class="value">${paket.duration}</span>
                            </div>
                            <div class="info-row">
                                <span class="label">Destinasi:</span>
                                <span class="value">${paket.destinations.join(', ')}</span>
                            </div>
                        </div>
                    </div>
                    <div class="booking-form">
                        <h5>Data Pemesan</h5>
                        <form id="bookingForm">
                            <div class="form-group">
                                <input type="text" id="bookingName" name="name" placeholder="Nama Lengkap" required>
                            </div>
                            <div class="form-group">
                                <input type="email" id="bookingEmail" name="email" placeholder="Email" required>
                            </div>
                            <div class="form-group">
                                <input type="tel" id="bookingPhone" name="phone" placeholder="Nomor Telepon" required>
                            </div>
                            <div class="form-group">
                                <input type="number" id="bookingGuests" name="guests" placeholder="Jumlah Peserta" min="1" required>
                            </div>
                            <div class="form-group">
                                <input type="text" id="bookingDate" name="date" placeholder="Pilih Tanggal Keberangkatan" readonly required>
                            </div>
                            <div class="form-group">
                                <textarea id="bookingNotes" name="notes" placeholder="Catatan Tambahan (Opsional)" rows="3"></textarea>
                            </div>
                            <button type="submit" class="btn-booking-submit">
                                <i class="fas fa-paper-plane"></i>
                                Kirim Pemesanan
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Initialize Flatpickr for booking date
    const dateInput = document.getElementById('bookingDate');
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    flatpickr("#bookingDate", {
        enableTime: false,
        dateFormat: "d-m-Y",
        minDate: tomorrow,
        locale: "id",
        placeholder: "Pilih Tanggal Keberangkatan",
        allowInput: false,
        clickOpens: true,
        static: true
    });
    
    // Add form submission handler
    const bookingForm = document.getElementById('bookingForm');
    bookingForm.addEventListener('submit', handleBookingSubmission);
    
    // Show modal with animation
    const modal = document.getElementById('bookingModal');
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.remove();
            document.body.style.overflow = '';
        }, 300);
    }
}

function handleBookingSubmission(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const submitButton = form.querySelector('.btn-booking-submit');
    const originalText = submitButton.innerHTML;
    
    // Show loading state
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
    submitButton.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Show success state
        submitButton.innerHTML = '<i class="fas fa-check"></i> Berhasil Dikirim!';
        submitButton.style.background = '#27ae60';
        
        // Show success message
        showBookingSuccess();
        
        // Reset form after delay
        setTimeout(() => {
            closeBookingModal();
        }, 2000);
    }, 1500);
}

function showBookingSuccess() {
    // Create success notification
    const successHTML = `
        <div class="booking-success" id="bookingSuccess">
            <div class="success-content">
                <i class="fas fa-check-circle"></i>
                <h4>Pemesanan Berhasil!</h4>
                <p>Tim kami akan menghubungi Anda dalam 24 jam untuk konfirmasi lebih lanjut.</p>
                <button onclick="closeBookingSuccess()" class="btn-success-close">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', successHTML);
    
    const success = document.getElementById('bookingSuccess');
    setTimeout(() => {
        success.classList.add('show');
    }, 100);
    
    // Auto close after 5 seconds
    setTimeout(() => {
        closeBookingSuccess();
    }, 5000);
}

function closeBookingSuccess() {
    const success = document.getElementById('bookingSuccess');
    if (success) {
        success.classList.remove('show');
        setTimeout(() => {
            success.remove();
        }, 300);
    }
}

// Add CSS for booking modal
function addBookingModalStyles() {
    const styles = `
        <style id="bookingModalStyles">
            .booking-modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                display: none;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                opacity: 0;
                transition: opacity 0.3s ease;
            }
            
            .booking-modal-overlay.show {
                opacity: 1;
            }
            
            .booking-modal {
                background: #2a2a2a;
                border-radius: 20px;
                max-width: 600px;
                width: 90%;
                max-height: 90vh;
                overflow-y: auto;
                box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
                border: 1px solid rgba(243, 156, 18, 0.2);
                transform: scale(0.8);
                transition: transform 0.3s ease;
            }
            
            .booking-modal-overlay.show .booking-modal {
                transform: scale(1);
            }
            
            .booking-modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 2rem 2rem 1rem;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            }
            
            .booking-modal-header h3 {
                color: #f39c12;
                font-size: 1.5rem;
                font-weight: 700;
                margin: 0;
            }
            
            .close-modal {
                background: none;
                border: none;
                color: #888;
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0.5rem;
                border-radius: 50%;
                transition: all 0.3s ease;
            }
            
            .close-modal:hover {
                color: #f39c12;
                background: rgba(243, 156, 18, 0.1);
            }
            
            .booking-modal-body {
                padding: 2rem;
            }
            
            .paket-summary {
                background: rgba(42, 42, 42, 0.8);
                padding: 1.5rem;
                border-radius: 15px;
                margin-bottom: 2rem;
                border: 1px solid rgba(243, 156, 18, 0.1);
            }
            
            .paket-summary h4 {
                color: #f39c12;
                font-size: 1.3rem;
                margin-bottom: 1rem;
            }
            
            .info-row {
                display: flex;
                justify-content: space-between;
                margin-bottom: 0.75rem;
                padding: 0.5rem 0;
                border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            }
            
            .info-row:last-child {
                border-bottom: none;
                margin-bottom: 0;
            }
            
            .info-row .label {
                color: #888;
                font-weight: 500;
            }
            
            .info-row .value {
                color: #ffffff;
                font-weight: 600;
            }
            
            .info-row .value.price {
                color: #f39c12;
                font-size: 1.1rem;
            }
            
            .booking-form h5 {
                color: #ffffff;
                font-size: 1.2rem;
                margin-bottom: 1.5rem;
                text-align: center;
            }
            
            .booking-form .form-group {
                margin-bottom: 1.5rem;
            }
            
            .booking-form input,
            .booking-form textarea {
                width: 100%;
                padding: 1rem 1.5rem;
                border: 2px solid rgba(68, 68, 68, 0.5);
                border-radius: 12px;
                background: rgba(26, 26, 26, 0.8);
                color: #ffffff;
                font-size: 1rem;
                transition: all 0.3s ease;
            }
            
            .booking-form input:focus,
            .booking-form textarea:focus {
                outline: none;
                border-color: #f39c12;
                background: rgba(26, 26, 26, 1);
                box-shadow: 0 0 0 4px rgba(243, 156, 18, 0.1);
            }
            
            .booking-form input::placeholder,
            .booking-form textarea::placeholder {
                color: #888;
            }
            
            /* Booking datepicker styling */
            #bookingDate {
                cursor: pointer !important;
                width: 100% !important;
                background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23f39c12'%3e%3cpath fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd'/%3e%3c/svg%3e") !important;
                background-repeat: no-repeat !important;
                background-position: right 12px center !important;
                background-size: 20px 20px !important;
                padding-right: 45px !important;
            }
            
            #bookingDate:focus {
                background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23ffffff'%3e%3cpath fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd'/%3e%3c/svg%3e") !important;
            }
            
            .btn-booking-submit {
                width: 100%;
                padding: 1.2rem 2rem;
                background: linear-gradient(135deg, #f39c12, #e67e22);
                border: none;
                border-radius: 12px;
                color: #ffffff;
                font-size: 1.1rem;
                font-weight: 700;
                cursor: pointer;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                box-shadow: 0 8px 25px rgba(243, 156, 18, 0.4);
            }
            
            .btn-booking-submit:hover {
                background: linear-gradient(135deg, #e67e22, #d35400);
                transform: translateY(-2px);
                box-shadow: 0 12px 30px rgba(243, 156, 18, 0.6);
            }
            
            .btn-booking-submit:disabled {
                opacity: 0.7;
                cursor: not-allowed;
                transform: none;
            }
            
            .booking-success {
                position: fixed;
                top: 20px;
                right: 20px;
                background: #27ae60;
                color: #ffffff;
                padding: 1.5rem 2rem;
                border-radius: 15px;
                box-shadow: 0 10px 30px rgba(39, 174, 96, 0.3);
                z-index: 10001;
                transform: translateX(400px);
                transition: transform 0.3s ease;
                max-width: 400px;
            }
            
            .booking-success.show {
                transform: translateX(0);
            }
            
            .success-content {
                position: relative;
            }
            
            .success-content i {
                font-size: 2rem;
                margin-bottom: 0.5rem;
                display: block;
            }
            
            .success-content h4 {
                font-size: 1.2rem;
                margin-bottom: 0.5rem;
            }
            
            .success-content p {
                font-size: 0.9rem;
                opacity: 0.9;
                margin: 0;
            }
            
            .btn-success-close {
                position: absolute;
                top: -10px;
                right: -10px;
                background: rgba(255, 255, 255, 0.2);
                border: none;
                color: #ffffff;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.8rem;
            }
            
            @media (max-width: 768px) {
                .booking-modal {
                    width: 95%;
                    margin: 1rem;
                }
                
                .booking-modal-header,
                .booking-modal-body {
                    padding: 1.5rem;
                }
                
                .booking-success {
                    top: 10px;
                    right: 10px;
                    left: 10px;
                    max-width: none;
                    transform: translateY(-100px);
                }
                
                .booking-success.show {
                    transform: translateY(0);
                }
            }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', styles);
}

// Initialize booking functionality
function initBookingFunctionality() {
    addBookingModalStyles();
    console.log('Booking functionality initialized');
}

// Console log untuk debugging
console.log('JUNTRAVEL Website Loaded Successfully!');
console.log('Countdown Timer: Active');
console.log('Swiper Testimoni: Active');
console.log('Smooth Scrolling: Active');
console.log('Responsive Design: Active');
console.log('Hero Animations: Active');
console.log('Testimoni Stats Animation: Active');
console.log('Paket Promo Booking: Active');

// FAQ Accordion
function initFAQAccordion() {
    const faqButtons = document.querySelectorAll('.faq-question > button');
    if (!faqButtons.length) return;

    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const expanded = button.getAttribute('aria-expanded') === 'true';
            const answerId = button.getAttribute('aria-controls');
            const answerEl = document.getElementById(answerId);

            // Close others (accordion behavior)
            document.querySelectorAll('.faq-question > button[aria-expanded="true"]').forEach(openBtn => {
                if (openBtn !== button) {
                    openBtn.setAttribute('aria-expanded', 'false');
                    const openAnswer = document.getElementById(openBtn.getAttribute('aria-controls'));
                    if (openAnswer) openAnswer.hidden = true;
                }
            });

            // Toggle current
            button.setAttribute('aria-expanded', String(!expanded));
            if (answerEl) {
                answerEl.hidden = expanded;
            }
        });
    });
}
