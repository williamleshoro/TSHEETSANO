/**
 * TSHEETSANO Community Based Organization & Enterprise
 * Standalone Client-side Interactive Application Script
 */

// Core App Configuration & Metadata Catalog Database
const METADATA = {
  images: {
    hero: 'src/assets/images/tsheetsano_hero_1780660950381.png',
    drTefo: 'src/assets/images/dr_tefo_makutsoane_1780660966137.png',
    gardens: 'src/assets/images/community_gardens_1780660981486.png',
    medicinal: 'src/assets/images/medicinal_plants_1780660999130.png',
    logo: 'src/assets/images/tsheetsano_logo_1780661484232.png',
  },
  
  stats: [
    { targetNumber: 20, suffix: '+' },
    { targetNumber: 150, suffix: '+' },
    { targetNumber: 12, suffix: '' },
    { targetNumber: 4500, suffix: '+' },
  ],

  products: {
    'prod1': {
      id: 'prod1',
      title: 'Organic Medicinal Plants',
      description: 'Carefully wildcrafted and organically grown local flora including Artemisia, Sutherlandia (Cancer Bush), and African Potato, preserved for purity and high therapeutic efficacy.',
      tag: 'Premium Quality',
      imageUrl: 'src/assets/images/medicinal_plants_1780660999130.png',
      benefits: ['Anti-inflammatory properties', 'Fights respiratory alignment', 'Traditional systemic detoxifier'],
      usage: 'Infuse 1-2 teaspoons of leaves in warm water for 5 minutes, strain and sip daily.',
      origin: 'Harvested from Botshabelo medicinal greenhouses and wild slopes.'
    },
    'prod2': {
      id: 'prod2',
      title: 'Herbal Remedies',
      description: 'Traditionally prepared organic herbal infusions, concentrated teas, and plant-based mixtures formulated by Dr. Tefo to restore physical wellness and systemic vitality.',
      tag: 'Authentic Traditional',
      imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80',
      benefits: ['Digestive relief', 'Spiritual calmness and fatigue remedy', 'Immune amplification'],
      usage: 'Boil as tea blend once daily before sleep, or inhale hot vapor to relieve nasal pressure.',
      origin: 'Curated and hand-mixed under Dr. Tefo\'s traditional supervision.'
    },
    'prod3': {
      id: 'prod3',
      title: 'Organic Agricultural Produce',
      description: 'Nutritious, chemical-free greens, spinach, carrots, and sweet potatoes freshly harvested daily from our sustainable crop development gardens in Botshabelo.',
      tag: '100% Organic',
      imageUrl: 'src/assets/images/community_gardens_1780660981486.png',
      benefits: ['Essential micronutrient source', 'Pesticide & chemical-free food source', 'Locally harvested freshness'],
      usage: 'Rinse thoroughly under cool tap. Best consumed fresh or steamed.',
      origin: 'TSHEETSANO high-yield communal crop gardens.'
    },
    'prod4': {
      id: 'prod4',
      title: 'Seedlings and Plant Materials',
      description: 'Vigorous seedlings of both essential vegetables and key African medicinal herbs developed in our community nursery to start your own sustainable home gardens.',
      tag: 'Nursery Stock',
      imageUrl: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80',
      benefits: ['Vigorous, climate-resilient root stocks', 'High yield potential', 'Cultivation-ready instructions included'],
      usage: 'Transplant in rich organic soil with compost, water twice weekly early morning.',
      origin: 'Cooperative organic plant nursery.'
    },
    'prod5': {
      id: 'prod5',
      title: 'Traditional Health Products',
      description: 'Ancestrally blessed and carefully processed natural tonics and skin balms crafted using cold-pressed oils and local aromatic herbs.',
      tag: 'Wellness & Care',
      imageUrl: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=80',
      benefits: ['Skin protectant and emollient', 'Muscle soreness soothing relief', 'Overall vitality enhancer'],
      usage: 'Massage gently onto active joints, or consume directed dosages orally for system tonics.',
      origin: 'Cold-pressed natural seeds formulated with aromatic herbs.'
    },
    'prod6': {
      id: 'prod6',
      title: 'Community Garden Produce',
      description: 'High-yield seasonal basket assortments sourced from our cooperative network, designed to provide food security and fresh nutrition directly to local families.',
      tag: 'Community Grown',
      imageUrl: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&w=600&q=80',
      benefits: ['Assorted multi-veggie budget baskets', 'Supports local South African small-scale farmers', 'Ultimate nutritional density'],
      usage: 'Perfect for preparing complete healthy meals and family staples.',
      origin: 'Aggregated cooperative community garden crops.'
    }
  },

  gallery: [
    {
      id: 'gal1',
      title: 'Thriving Communal Gardens',
      category: 'gardens',
      imageUrl: 'src/assets/images/community_gardens_1780660981486.png',
      description: 'Locals caring for organic crops and establishing absolute security in our food garden in Botshabelo.'
    },
    {
      id: 'gal2',
      title: 'Medicinal Plant Nursery',
      category: 'medicinal',
      imageUrl: 'src/assets/images/medicinal_plants_1780660999130.png',
      description: 'Cultivation and preparation of essential traditional healing plants and herbs.'
    },
    {
      id: 'gal3',
      title: 'Cooperative Agricultural Training',
      category: 'training',
      imageUrl: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80',
      description: 'Empowering community members and local youth with sustainable farming skills and plant processing.'
    },
    {
      id: 'gal4',
      title: 'Traditional Healing Consultancy',
      category: 'healing',
      imageUrl: 'src/assets/images/dr_tefo_makutsoane_1780660966137.png',
      description: 'One-on-one traditional African diagnostic and health consultation with Dr. Doctor Tefo Makutsoane.'
    },
    {
      id: 'gal5',
      title: 'Youth Gardening Initiative',
      category: 'projects',
      imageUrl: 'src/assets/images/tsheetsano_hero_1780660950381.png',
      description: 'Youth from the Free State participating in organic cultivation and local retail operations.'
    },
    {
      id: 'gal6',
      title: 'High-Yield Harvesting',
      category: 'gardens',
      imageUrl: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&w=800&q=80',
      description: 'Abundant growth of organic vegetables packed with nutrition, prepared for community distribution.'
    },
    {
      id: 'gal7',
      title: 'Empowerment Workshop',
      category: 'training',
      imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
      description: 'Training community leaders to replicate self-reliance agricultural programs.'
    },
    {
      id: 'gal8',
      title: 'Indigenous Herb Dryhouse',
      category: 'medicinal',
      imageUrl: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=800&q=80',
      description: 'Controlled and sterilized drying process of medicinal herbs for safe wellness products.'
    }
  ]
};

// Global Gallery state for calculations
let activeGalleryItems = [...METADATA.gallery];
let currentLightboxIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileMenu();
  initRouter();
  initCounterAnimations();
  initProductModal();
  initGalleryFilter();
  initGalleryLightbox();
  initContactFormValidation();
  initBackToTopButton();
  initScrollAnimationTrigger();
});

/**
 * Navbar transparent to background color scroll monitor
 */
function initNavbarScroll() {
  const header = document.getElementById('navbar-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.className = 'fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-brand-dark-green/95 backdrop-blur-md shadow-lg py-3 text-white';
    } else {
      header.className = 'fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-gradient-to-b from-black/60 to-transparent py-5 text-white';
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // invoke immediately to set initial position
}

/**
 * Mobile Drawer Menu toggle
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle-btn');
  const mobilePanel = document.getElementById('mobile-nav-panel');
  if (!toggleBtn || !mobilePanel) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = mobilePanel.classList.contains('hidden');
    if (isExpanded) {
      mobilePanel.classList.remove('hidden');
      toggleBtn.innerHTML = '<i class="fa-solid fa-xmark w-6 h-6 flex items-center justify-center text-xl"></i>';
    } else {
      mobilePanel.classList.add('hidden');
      toggleBtn.innerHTML = '<i class="fa-solid fa-bars w-6 h-6 flex items-center justify-center text-xl"></i>';
    }
  });

  // Close when clicking empty backdrops inside mobile navbar routes
  const mobileLinks = mobilePanel.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobilePanel.classList.add('hidden');
      toggleBtn.innerHTML = '<i class="fa-solid fa-bars w-6 h-6 flex items-center justify-center text-xl"></i>';
    });
  });
}

/**
 * Robust Client-Side Tab/Page Router based on URL Hash
 */
function initRouter() {
  const sections = ['home', 'about', 'products', 'services', 'gallery', 'contact'];
  
  const handleRouting = () => {
    let hash = window.location.hash.slice(1);
    
    // Default to 'home' if empty or invalid selection
    if (!hash || !sections.includes(hash)) {
      hash = 'home';
    }

    // Toggle pages visibility and entry animations
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        if (id === hash) {
          el.classList.remove('hidden');
          // Give a small timeout to let the browser register display block before fading
          setTimeout(() => {
            el.classList.add('is-visible');
          }, 10);
        } else {
          el.classList.add('hidden');
          el.classList.remove('is-visible');
        }
      }
    });

    // Scroll instantly to the top of the viewport for the new active "page"
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });

    // Keep nav header/links selection styled correctly
    updateNavSelection(hash);
  };

  const updateNavSelection = (activeId) => {
    // 1. Desktop Nav Update
    const desktopLinks = document.querySelectorAll('#desktop-nav-menu a');
    desktopLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      const existingLine = link.querySelector('.active-underline-marker');
      if (existingLine) existingLine.remove();
      link.className = 'relative py-2 text-sm font-medium tracking-wide uppercase transition-colors duration-200 text-white/90 hover:text-brand-gold';

      if (href === `#${activeId}`) {
        link.className = 'relative py-2 text-sm font-medium tracking-wide uppercase transition-colors duration-200 text-brand-gold';
        const marker = document.createElement('span');
        marker.className = 'active-underline-marker absolute bottom-0 left-0 w-full h-0.5 bg-brand-gold rounded-full';
        link.appendChild(marker);
      }
    });

    // 2. Mobile Nav Update
    const mobileLinks = document.querySelectorAll('#mobile-nav-panel a');
    mobileLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('tel:')) return;
      
      link.className = 'block px-3 py-2.5 rounded-md text-base font-medium text-white/80 hover:bg-brand-green/40 hover:text-white';
      
      if (href === `#${activeId}`) {
        link.className = 'block px-3 py-2.5 rounded-md text-base font-semibold text-brand-gold bg-brand-green/50';
      }
    });

    // 3. Footer Links active state coloring
    const footerLinks = document.querySelectorAll('#footer-main a');
    footerLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${activeId}`) {
        link.classList.add('text-brand-gold', 'font-semibold');
      } else if (href && href.startsWith('#')) {
        link.classList.remove('text-brand-gold', 'font-semibold');
      }
    });
  };

  // Listen to hash changes globally
  window.addEventListener('hashchange', handleRouting);
  
  // Initialize routes immediately on page load
  handleRouting();
}

/**
 * Trigger stat counting animation when stats block scrolls in place
 */
function initCounterAnimations() {
  const counters = document.querySelectorAll('.stat-count-element');
  if (counters.length === 0) return;

  const countOptions = {
    threshold: 0.3,
    once: true
  };

  const observer = new IntersectionObserver((entries, self) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const targetVal = parseInt(counter.getAttribute('data-target-value'), 10);
        const suffix = counter.getAttribute('data-suffix') || '';
        
        let current = 0;
        const duration = 2000;
        const stepTime = Math.max(Math.floor(duration / targetVal), 20);

        const interval = setInterval(() => {
          current += Math.ceil(targetVal / 40);
          if (current >= targetVal) {
            counter.innerText = targetVal.toLocaleString() + suffix;
            clearInterval(interval);
          } else {
            counter.innerText = current.toLocaleString() + suffix;
          }
        }, stepTime);

        self.unobserve(counter);
      }
    });
  }, countOptions);

  counters.forEach(counter => observer.observe(counter));
}

/**
 * Product detail modal handling
 */
function initProductModal() {
  const modalRoot = document.getElementById('product-modal-root');
  const closeBtn = document.getElementById('product-modal-close-btn');
  const learnMoreBtns = document.querySelectorAll('[id^="learn-more-btn-"]');

  if (!modalRoot) return;

  // Open modal details
  learnMoreBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-product-id');
      const product = METADATA.products[id];
      if (!product) return;

      // Update contents
      document.getElementById('modal-img').setAttribute('src', product.imageUrl);
      document.getElementById('modal-tag').innerText = product.tag;
      document.getElementById('modal-title').innerText = product.title;
      document.getElementById('modal-description').innerText = product.description;
      document.getElementById('modal-usage').innerText = product.usage;
      document.getElementById('modal-origin').innerText = 'Origin: ' + product.origin;

      // Populate benefits checkmarks
      const benefitsContainer = document.getElementById('modal-benefits-list');
      benefitsContainer.innerHTML = '';
      product.benefits.forEach(benefit => {
        const li = document.createElement('li');
        li.className = 'text-gray-650 text-xs sm:text-sm flex items-start gap-2';
        li.innerHTML = `<i class="fa-solid fa-circle-check shrink-0 mt-0.5 text-brand-green"></i> <span>${benefit}</span>`;
        benefitsContainer.appendChild(li);
      });

      // Update social links
      const text = encodeURIComponent(`Hello TSHEETSANO team, I would like to inquire about ordering/purchasing: ${product.title}. Please provide options. Thank you!`);
      const waBtn = document.getElementById('modal-whatsapp-link');
      waBtn.setAttribute('href', `https://wa.me/27836980596?text=${text}`);

      // Open Modal
      modalRoot.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    });
  });

  // Close modal configurations
  const closeModal = () => {
    modalRoot.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  };

  closeBtn.addEventListener('click', closeModal);
  modalRoot.querySelector('.fixed.inset-0.bg-black\\/60').addEventListener('click', closeModal);

  // Close on Escape keyboard click
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modalRoot.classList.contains('hidden')) {
      closeModal();
    }
  });
}

/**
 * Filter portfolio gallery dynamic photos
 */
function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('#gallery-filters-row button');
  const galleryGrid = document.getElementById('gallery-images-grid');
  const emptyGalleryEl = document.getElementById('empty-gallery');

  if (filterBtns.length === 0 || !galleryGrid) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle button active classes
      filterBtns.forEach(b => {
        b.className = 'px-4.5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all duration-300 bg-white hover:bg-brand-green/10 text-brand-dark-green border border-gray-200/60';
      });
      btn.className = 'px-4.5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all duration-300 bg-brand-dark-green text-brand-gold shadow-md scale-[1.03]';

      const filterVal = btn.getAttribute('data-filter');
      
      // Filter list data
      if (filterVal === 'all') {
        activeGalleryItems = [...METADATA.gallery];
      } else {
        activeGalleryItems = METADATA.gallery.filter(item => item.category === filterVal);
      }

      // Re-populate images layout
      rebuildGalleryGrid();
    });
  });

  function rebuildGalleryGrid() {
    galleryGrid.innerHTML = '';
    
    if (activeGalleryItems.length === 0) {
      if (emptyGalleryEl) emptyGalleryEl.classList.remove('hidden');
      return;
    }

    if (emptyGalleryEl) emptyGalleryEl.classList.add('hidden');

    activeGalleryItems.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'relative aspect-square rounded-3xl overflow-hidden shadow-md border border-gray-150/70 group cursor-pointer bg-white fade-in-section is-visible';
      card.setAttribute('data-index', index);
      
      card.innerHTML = `
        <img
          src="${item.imageUrl}"
          alt="${item.title}"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-brand-dark-green/90 via-brand-dark-green/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white text-left">
          <span class="text-brand-gold text-[9px] uppercase tracking-widest font-bold font-sans block mb-1">
            ${item.category}
          </span>
          <h3 class="font-serif font-bold text-base leading-tight">
            ${item.title}
          </h3>
          <p class="text-[11px] text-white/80 line-clamp-1 mt-1 font-sans">
            ${item.description}
          </p>
        </div>
        <div class="absolute top-4 right-4 bg-brand-gold/90 text-brand-dark-green p-2.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100 shadow-md">
          <i class="fa-solid fa-magnifying-glass-plus w-4 h-4 flex items-center justify-center"></i>
        </div>
      `;

      card.addEventListener('click', () => {
        openLightbox(index);
      });

      galleryGrid.appendChild(card);
    });
  }
}

/**
 * Image lightbox presentation handling
 */
function initGalleryLightbox() {
  const lightbox = document.getElementById('lightbox-container');
  if (!lightbox) return;

  const closeBtn = lightbox.querySelector('.fa-xmark').parentElement;
  const prevBtn = lightbox.querySelector('.fa-chevron-left').parentElement;
  const nextBtn = lightbox.querySelector('.fa-chevron-right').parentElement;

  // Add event listener to initial cards loaded on load
  const initialCards = document.querySelectorAll('[id="gallery-images-grid"] > div');
  initialCards.forEach((card, idx) => {
    card.addEventListener('click', () => {
      openLightbox(idx);
    });
  });

  function closeLightbox() {
    lightbox.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.querySelector('.absolute.inset-0.bg-black\\/95').addEventListener('click', closeLightbox);

  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentLightboxIndex = (currentLightboxIndex - 1 + activeGalleryItems.length) % activeGalleryItems.length;
    updateLightboxContent();
  });

  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentLightboxIndex = (currentLightboxIndex + 1) % activeGalleryItems.length;
    updateLightboxContent();
  });

  // Keyboard support listener
  document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('hidden')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextBtn.click();
    if (e.key === 'ArrowLeft') prevBtn.click();
  });
}

function openLightbox(index) {
  const lightbox = document.getElementById('lightbox-container');
  if (!lightbox) return;

  currentLightboxIndex = index;
  updateLightboxContent();
  lightbox.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

function updateLightboxContent() {
  const item = activeGalleryItems[currentLightboxIndex];
  if (!item) return;

  const lightbox = document.getElementById('lightbox-container');
  lightbox.querySelector('img').setAttribute('src', item.imageUrl);
  lightbox.querySelector('img').setAttribute('alt', item.title);
  lightbox.querySelector('.cap-category').innerText = `Category: ${item.category} (${currentLightboxIndex + 1} of ${activeGalleryItems.length})`;
  lightbox.querySelector('.cap-title').innerText = item.title;
  lightbox.querySelector('.cap-desc').innerText = item.description;
}

/**
 * Dynamic message submissions verification
 */
function initContactFormValidation() {
  const form = document.getElementById('contact-form-node');
  if (!form) return;

  const nameInput = document.getElementById('form-name-input');
  const emailInput = document.getElementById('form-email-input');
  const phoneInput = document.getElementById('form-phone-input');
  const messageInput = document.getElementById('form-message-input');
  const toast = document.getElementById('form-success-toast');
  const submitBtn = document.getElementById('form-submit-submit-btn');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Clear previous error messages
    document.querySelectorAll('.form-error-msg-span').forEach(el => el.remove());
    document.querySelectorAll('input, textarea').forEach(el => el.classList.remove('border-red-500', 'focus:ring-red-500'));

    let isValid = true;

    // Validation checks
    if (!nameInput.value.trim()) {
      showError(nameInput, 'Full name is required.');
      isValid = false;
    } else if (nameInput.value.trim().length < 3) {
      showError(nameInput, 'Name must be at least 3 characters.');
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim()) {
      showError(emailInput, 'Email address is required.');
      isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
      showError(emailInput, 'Please provide a valid email structure.');
      isValid = false;
    }

    const phoneRegex = /^\+?[0-9\s-]{10,15}$/;
    if (!phoneInput.value.trim()) {
      showError(phoneInput, 'Contact number is required.');
      isValid = false;
    } else if (!phoneRegex.test(phoneInput.value.replace(/\s+/g, ''))) {
      showError(phoneInput, 'Enter a valid telephone number (e.g., 083 698 0596).');
      isValid = false;
    }

    if (!messageInput.value.trim()) {
      showError(messageInput, 'Please input your query details or message.');
      isValid = false;
    } else if (messageInput.value.trim().length < 15) {
      showError(messageInput, 'Your message must be at least 15 characters long.');
      isValid = false;
    }

    if (!isValid) return;

    // Simulation of Submitting process
    const originalBtnHTML = submitBtn.innerHTML;
    submitBtn.setAttribute('disabled', 'true');
    submitBtn.innerHTML = '<span class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>';

    setTimeout(() => {
      submitBtn.removeAttribute('disabled');
      submitBtn.innerHTML = originalBtnHTML;
      form.reset();
      
      // Display success message
      toast.classList.remove('hidden');
      setTimeout(() => {
        toast.classList.add('hidden');
      }, 6000);
    }, 1500);
  });

  function showError(inputEl, messageMsg) {
    inputEl.classList.add('border-red-500', 'focus:ring-red-500');
    const span = document.createElement('span');
    span.className = 'form-error-msg-span text-red-500 text-xs mt-1 block font-medium';
    span.innerText = messageMsg;
    inputEl.parentElement.appendChild(span);
  }
}

/**
 * Scroll to top trigger button
 */
function initBackToTopButton() {
  const container = document.getElementById('floating-actions-container');
  if (!container) return;

  const toggleFloatingButton = () => {
    if (window.scrollY > 400) {
      container.classList.remove('hidden');
    } else {
      container.classList.add('hidden');
    }
  };

  const toTopBtn = document.getElementById('to-top-floating-btn');
  if (toTopBtn) {
    toTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  window.addEventListener('scroll', toggleFloatingButton);
  toggleFloatingButton();
}

/**
 * Add simple CSS-powered intersection observer animations
 */
function initScrollAnimationTrigger() {
  const animatedEls = document.querySelectorAll('.fade-in-section');
  if (animatedEls.length === 0) return;

  const animObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        animObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animatedEls.forEach(el => animObserver.observe(el));
}
