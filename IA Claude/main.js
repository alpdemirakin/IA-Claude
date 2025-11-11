// ============================================
// Main JavaScript for IA Website
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // Mobile Navigation
    // ============================================
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // ============================================
    // Sticky Header
    // ============================================
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // ============================================
    // Scroll to Top Button
    // ============================================
    const scrollToTopBtn = document.getElementById('scrollToTop');

    if (scrollToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });

        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ============================================
    // Smooth Scrolling for Anchor Links
    // ============================================
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ============================================
    // Animation on Scroll (AOS)
    // ============================================
    function initAOS() {
        const aosElements = document.querySelectorAll('[data-aos]');
        
        const aosObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('aos-animate');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        aosElements.forEach(element => {
            aosObserver.observe(element);
        });
    }

    initAOS();

    // ============================================
    // Language Switcher
    // ============================================
    const langButtons = document.querySelectorAll('.lang-btn');
    const translations = {
        tr: {
            // Navigation
            'home': 'Anasayfa',
            'about': 'Hakkımızda',
            'services': 'Hizmetlerimiz',
            'publications': 'Yayınlar',
            'careers': 'Kariyer',
            'contact': 'İletişim',
            'request_proposal': 'Teklif Al',
            
            // Hero Section
            'hero_title': 'Her Adımda En Yüksek Kalite',
            'hero_subtitle': 'Muhasebe, vergi, bordro ve hukuk danışmanlığında 25 yılı aşkın uluslararası deneyim',
            'free_consultation': 'Ücretsiz Danışmanlık Alın',
            
            // Services
            'our_services': 'Hizmetlerimiz',
            'services_subtitle': 'Kapsamlı mali ve hukuki danışmanlık çözümleri',
            
            // Footer
            'quick_links': 'Hızlı Bağlantılar',
            'newsletter': 'Bülten',
            'newsletter_text': 'Güncel haberler ve vergi değişiklikleri hakkında bilgi alın',
            'subscribe': 'Abone Ol',
            'email_placeholder': 'E-posta adresiniz'
        },
        en: {
            // Navigation
            'home': 'Home',
            'about': 'About Us',
            'services': 'Services',
            'publications': 'Publications',
            'careers': 'Careers',
            'contact': 'Contact',
            'request_proposal': 'Request Proposal',
            
            // Hero Section
            'hero_title': 'Highest Quality in Each Step',
            'hero_subtitle': 'Over 25 years of international experience in accounting, tax, payroll, and legal consulting',
            'free_consultation': 'Get Free Consultation',
            
            // Services
            'our_services': 'Our Services',
            'services_subtitle': 'Comprehensive financial and legal consulting solutions',
            
            // Footer
            'quick_links': 'Quick Links',
            'newsletter': 'Newsletter',
            'newsletter_text': 'Get updates on news and tax changes',
            'subscribe': 'Subscribe',
            'email_placeholder': 'Your email address'
        }
    };

    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            
            // Update active state
            langButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Store preference
            localStorage.setItem('preferredLanguage', lang);
            
            // Update page language
            document.documentElement.lang = lang;
            
            // Update translatable content
            updateTranslations(lang);
            
            // Show notification
            showNotification(lang === 'tr' ? 'Dil değiştirildi' : 'Language changed');
        });
    });

    function updateTranslations(lang) {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang][key]) {
                if (element.tagName === 'INPUT' && element.type === 'email') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
    }

    // Load saved language preference
    const savedLang = localStorage.getItem('preferredLanguage') || 'tr';
    const activeLangBtn = document.querySelector(`[data-lang="${savedLang}"]`);
    if (activeLangBtn) {
        activeLangBtn.click();
    }

    // ============================================
    // Form Validation & Submission
    // ============================================
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form type
            const isNewsletter = form.classList.contains('newsletter-form');
            const isContact = form.classList.contains('contact-form');
            const isProposal = form.classList.contains('proposal-form');
            
            // Validate form
            if (validateForm(form)) {
                // Show loading state
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.disabled = true;
                submitBtn.textContent = 'Gönderiliyor...';
                
                // Simulate form submission
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                    
                    // Show success message
                    const lang = document.documentElement.lang;
                    const messages = {
                        newsletter: {
                            tr: 'Bültenimize başarıyla abone oldunuz!',
                            en: 'Successfully subscribed to our newsletter!'
                        },
                        contact: {
                            tr: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.',
                            en: 'Your message has been sent successfully. We will get back to you soon.'
                        },
                        proposal: {
                            tr: 'Teklif talebiniz alındı. Ekibimiz en kısa sürede sizinle iletişime geçecek.',
                            en: 'Your proposal request has been received. Our team will contact you shortly.'
                        }
                    };
                    
                    let messageType = 'contact';
                    if (isNewsletter) messageType = 'newsletter';
                    if (isProposal) messageType = 'proposal';
                    
                    showNotification(messages[messageType][lang], 'success');
                    form.reset();
                }, 1500);
            }
        });
    });

    function validateForm(form) {
        let isValid = true;
        const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                showError(input, 'Bu alan zorunludur');
            } else if (input.type === 'email' && !validateEmail(input.value)) {
                isValid = false;
                showError(input, 'Geçerli bir e-posta adresi giriniz');
            } else {
                clearError(input);
            }
        });
        
        return isValid;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function showError(input, message) {
        clearError(input);
        input.classList.add('error');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        errorDiv.style.color = '#e74c3c';
        errorDiv.style.fontSize = '0.85rem';
        errorDiv.style.marginTop = '4px';
        input.parentNode.appendChild(errorDiv);
    }

    function clearError(input) {
        input.classList.remove('error');
        const errorMessage = input.parentNode.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    }

    // ============================================
    // Notification System
    // ============================================
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        Object.assign(notification.style, {
            position: 'fixed',
            top: '100px',
            right: '20px',
            padding: '16px 24px',
            backgroundColor: type === 'success' ? '#4caf50' : '#2196f3',
            color: '#ffffff',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            zIndex: '10000',
            animation: 'slideInRight 0.3s ease',
            fontSize: '0.95rem',
            fontWeight: '500'
        });
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    // ============================================
    // Lazy Loading Images
    // ============================================
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });

    // ============================================
    // Counter Animation
    // ============================================
    function animateCounter(element, target, duration = 2000) {
        let current = 0;
        const increment = target / (duration / 16);
        const isSuffix = element.textContent.includes('+');
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + (isSuffix ? '+' : '');
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + (isSuffix ? '+' : '');
            }
        }, 16);
    }

    const statNumbers = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.textContent.replace(/\D/g, ''));
                animateCounter(entry.target, target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });

    // ============================================
    // Search Functionality (for Publications page)
    // ============================================
    const searchInput = document.getElementById('searchInput');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            filterPublications(searchTerm, getActiveFilter());
        });
    }

    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                const filter = this.getAttribute('data-filter');
                const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
                filterPublications(searchTerm, filter);
            });
        });
    }

    function filterPublications(searchTerm, category) {
        const publications = document.querySelectorAll('.publication-card');
        
        publications.forEach(pub => {
            const title = pub.querySelector('h3').textContent.toLowerCase();
            const content = pub.querySelector('p').textContent.toLowerCase();
            const pubCategory = pub.querySelector('.publication-category').textContent.toLowerCase();
            
            const matchesSearch = title.includes(searchTerm) || content.includes(searchTerm);
            const matchesCategory = category === 'all' || pubCategory.includes(category.toLowerCase());
            
            if (matchesSearch && matchesCategory) {
                pub.style.display = '';
                setTimeout(() => {
                    pub.style.opacity = '1';
                    pub.style.transform = 'translateY(0)';
                }, 10);
            } else {
                pub.style.opacity = '0';
                pub.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    pub.style.display = 'none';
                }, 300);
            }
        });
    }

    function getActiveFilter() {
        const activeBtn = document.querySelector('.filter-btn.active');
        return activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
    }

    // ============================================
    // File Upload Preview
    // ============================================
    const fileInputs = document.querySelectorAll('input[type="file"]');
    
    fileInputs.forEach(input => {
        input.addEventListener('change', function() {
            const fileName = this.files[0]?.name || 'Dosya seçilmedi';
            let fileLabel = this.nextElementSibling;
            
            if (!fileLabel || !fileLabel.classList.contains('file-label')) {
                fileLabel = document.createElement('span');
                fileLabel.className = 'file-label';
                fileLabel.style.marginLeft = '10px';
                fileLabel.style.color = '#4caf50';
                this.parentNode.appendChild(fileLabel);
            }
            
            fileLabel.textContent = fileName;
        });
    });

    // ============================================
    // Accordion Functionality (for FAQ)
    // ============================================
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.parentElement;
            const accordionContent = this.nextElementSibling;
            const isActive = accordionItem.classList.contains('active');
            
            // Close all accordions
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.accordion-content').style.maxHeight = null;
            });
            
            // Open clicked accordion if it wasn't active
            if (!isActive) {
                accordionItem.classList.add('active');
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            }
        });
    });

    // ============================================
    // Modal Functionality
    // ============================================
    const modalTriggers = document.querySelectorAll('[data-modal]');
    const modals = document.querySelectorAll('.modal');
    const modalCloses = document.querySelectorAll('.modal-close');
    
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    modalCloses.forEach(close => {
        close.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // ============================================
    // Parallax Effect
    // ============================================
    const parallaxElements = document.querySelectorAll('.hero');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.backgroundPositionY = -(scrolled * speed) + 'px';
        });
    });

    // ============================================
    // Copy to Clipboard
    // ============================================
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const textToCopy = this.getAttribute('data-copy');
            
            navigator.clipboard.writeText(textToCopy).then(() => {
                showNotification('Panoya kopyalandı!', 'success');
            }).catch(err => {
                console.error('Copy failed:', err);
            });
        });
    });

    // ============================================
    // Print Functionality
    // ============================================
    const printButtons = document.querySelectorAll('.print-btn');
    
    printButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.print();
        });
    });

    // ============================================
    // Back Button
    // ============================================
    const backButtons = document.querySelectorAll('.back-btn');
    
    backButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            window.history.back();
        });
    });

    // ============================================
    // Initialize Tooltips
    // ============================================
    const tooltips = document.querySelectorAll('[data-tooltip]');
    
    tooltips.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltipText = this.getAttribute('data-tooltip');
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = tooltipText;
            
            Object.assign(tooltip.style, {
                position: 'absolute',
                padding: '8px 12px',
                backgroundColor: '#333',
                color: '#fff',
                borderRadius: '4px',
                fontSize: '0.85rem',
                whiteSpace: 'nowrap',
                zIndex: '10000',
                pointerEvents: 'none'
            });
            
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.top = (rect.top - tooltip.offsetHeight - 8) + 'px';
            tooltip.style.left = (rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2)) + 'px';
            
            this.tooltipElement = tooltip;
        });
        
        element.addEventListener('mouseleave', function() {
            if (this.tooltipElement) {
                this.tooltipElement.remove();
                this.tooltipElement = null;
            }
        });
    });

});

// ============================================
// Add CSS Animations
// ============================================
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }

    input.error,
    textarea.error,
    select.error {
        border-color: #e74c3c !important;
    }

    .modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 10000;
        align-items: center;
        justify-content: center;
    }

    .modal.active {
        display: flex;
    }

    .modal-content {
        background-color: white;
        padding: 40px;
        border-radius: 12px;
        max-width: 600px;
        width: 90%;
        max-height: 90vh;
        overflow-y: auto;
        position: relative;
    }

    .modal-close {
        position: absolute;
        top: 16px;
        right: 16px;
        font-size: 1.5rem;
        cursor: pointer;
        color: #666;
        transition: color 0.2s;
    }

    .modal-close:hover {
        color: #e74c3c;
    }
`;
document.head.appendChild(style);
