/* ============================================
   JavaScript Vanilla para Interatividade
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
  
  // ===== Navigation Smooth Scroll =====
  const navLinks = document.querySelectorAll('.showcase-nav-menu a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ===== Form Interactivity =====
  const inputs = document.querySelectorAll('input, select, textarea');
  
  inputs.forEach(input => {
    // Focus event
    input.addEventListener('focus', function() {
      this.style.borderColor = 'var(--primary)';
      this.style.boxShadow = '0 0 0 3px rgba(112, 10, 255, 0.1)';
    });

    // Blur event
    input.addEventListener('blur', function() {
      this.style.borderColor = 'var(--input)';
      this.style.boxShadow = 'none';
    });
  });

  // ===== Button Hover Effects =====
  const buttons = document.querySelectorAll('button');
  
  buttons.forEach(button => {
    // Add ripple effect on click
    button.addEventListener('click', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Create ripple element
      const ripple = document.createElement('span');
      ripple.style.position = 'absolute';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.style.width = '0';
      ripple.style.height = '0';
      ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
      ripple.style.borderRadius = '50%';
      ripple.style.pointerEvents = 'none';
      ripple.style.animation = 'ripple-animation 0.6s ease-out';

      // Add ripple animation
      if (!document.querySelector('style[data-ripple]')) {
        const style = document.createElement('style');
        style.setAttribute('data-ripple', 'true');
        style.textContent = `
          @keyframes ripple-animation {
            to {
              width: 500px;
              height: 500px;
              opacity: 0;
            }
          }
        `;
        document.head.appendChild(style);
      }

      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  });

  // ===== Color Swatches - Copy Color =====
  const colorSwatches = document.querySelectorAll('.color-swatch');
  
  colorSwatches.forEach(swatch => {
    swatch.addEventListener('click', function() {
      const bgColor = window.getComputedStyle(this).backgroundColor;
      
      // Copy to clipboard
      const rgb = bgColor.match(/\d+/g);
      if (rgb) {
        const hex = '#' + rgb.slice(0, 3).map(x => {
          const num = parseInt(x);
          const hexNum = num.toString(16);
          return hexNum.length === 1 ? '0' + hexNum : hexNum;
        }).join('').toUpperCase();

        // Create temporary input to copy
        const temp = document.createElement('input');
        temp.value = hex;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);

        // Show feedback
        const originalText = this.textContent;
        this.textContent = '✓ Copiado!';
        setTimeout(() => {
          this.textContent = originalText;
        }, 2000);
      }
    });

    // Hover effect
    swatch.style.cursor = 'pointer';
  });

  // ===== Contact Card Interaction =====
  const contactCards = document.querySelectorAll('.contact-card');
  
  contactCards.forEach(card => {
    card.addEventListener('click', function() {
      contactCards.forEach(c => c.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // ===== Table Row Interaction =====
  const tableRows = document.querySelectorAll('.ticket-grid-tbody tr');
  
  tableRows.forEach(row => {
    row.style.cursor = 'pointer';
    
    row.addEventListener('click', function() {
      tableRows.forEach(r => r.style.backgroundColor = '');
      this.style.backgroundColor = 'var(--primary-50)';
    });

    row.addEventListener('mouseleave', function() {
      this.style.backgroundColor = '';
    });
  });

  // ===== Sorting Functionality =====
  const sortButtons = document.querySelectorAll('.ticket-grid-sort-btn');
  let currentSort = { field: null, direction: null };

  sortButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const field = this.textContent.toLowerCase().split('\n')[0];
      
      // Update visual indicator
      sortButtons.forEach(b => {
        b.querySelector('.ticket-grid-sort-icon').style.opacity = '0.3';
      });
      
      if (currentSort.field === field) {
        currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
      } else {
        currentSort.field = field;
        currentSort.direction = 'asc';
      }
      
      this.querySelector('.ticket-grid-sort-icon').style.opacity = '1';
    });
  });

  // ===== Pagination =====
  const paginationBtns = document.querySelectorAll('.ticket-grid-pagination-btn');
  let currentPage = 1;

  paginationBtns.forEach((btn, index) => {
    btn.addEventListener('click', function() {
      if (index === 0) {
        currentPage = Math.max(1, currentPage - 1);
      } else {
        currentPage += 1;
      }
      
      // Update pagination info
      const paginationInfo = document.querySelector('.ticket-grid-pagination-info');
      if (paginationInfo) {
        paginationInfo.textContent = `Mostrando ${(currentPage - 1) * 3 + 1}-${currentPage * 3} de 12`;
      }
      
      // Disable/enable buttons
      paginationBtns[0].disabled = currentPage === 1;
      paginationBtns[1].disabled = currentPage === 4;
    });
  });

  // Set initial button states
  if (paginationBtns.length > 0) {
    paginationBtns[0].disabled = true;
  }

  // ===== Modal/Sidebar Simulation =====
  const showModalButtons = document.querySelectorAll('[data-modal]');
  
  showModalButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const modalId = this.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add('active');
      }
    });
  });

  // ===== Empty State Buttons =====
  const emptyStateButtons = document.querySelectorAll('.empty-state button');
  
  emptyStateButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      // Simulate action
      console.log('Action: ' + this.textContent);
    });
  });

  // ===== Tab Navigation (if implemented) =====
  const tabTriggers = document.querySelectorAll('[data-tab-trigger]');
  
  tabTriggers.forEach(trigger => {
    trigger.addEventListener('click', function() {
      const tabGroup = this.closest('[data-tab-group]');
      if (!tabGroup) return;

      // Remove active from all triggers
      tabGroup.querySelectorAll('[data-tab-trigger]').forEach(t => {
        t.classList.remove('active');
      });

      // Add active to clicked trigger
      this.classList.add('active');

      // Hide all content
      tabGroup.querySelectorAll('[data-tab-content]').forEach(content => {
        content.style.display = 'none';
      });

      // Show selected content
      const contentId = this.getAttribute('data-tab-trigger');
      const content = document.querySelector(`[data-tab-content="${contentId}"]`);
      if (content) {
        content.style.display = 'block';
      }
    });
  });

  // ===== Tooltip Simulation =====
  const elementsWithTooltip = document.querySelectorAll('[title]');
  
  elementsWithTooltip.forEach(el => {
    el.addEventListener('mouseover', function() {
      const tooltipText = this.getAttribute('title');
      // In a real implementation, create tooltip DOM element
      // For now, just verify title attribute works
    });
  });

  // ===== Search Input Behavior =====
  const searchInputs = document.querySelectorAll('[placeholder*="Buscar"], [placeholder*="buscar"], [placeholder*="search"]');
  
  searchInputs.forEach(input => {
    let searchTimeout;
    
    input.addEventListener('input', function() {
      clearTimeout(searchTimeout);
      
      searchTimeout = setTimeout(() => {
        // Simulate search
        const searchValue = this.value;
        console.log('Searching for: ' + searchValue);
        
        // Example: filter table rows
        const tableRows = document.querySelectorAll('.ticket-grid-tbody tr');
        tableRows.forEach(row => {
          const rowText = row.textContent.toLowerCase();
          row.style.display = rowText.includes(searchValue.toLowerCase()) ? '' : 'none';
        });
      }, 300);
    });

    // Clear search on ESC key
    input.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        this.value = '';
        this.dispatchEvent(new Event('input'));
      }
    });
  });

  // ===== Keyboard Navigation =====
  document.addEventListener('keydown', function(e) {
    // ESC key closes modals (if any)
    if (e.key === 'Escape') {
      // Handle modal close
    }

    // Tab navigation for accessibility
    if (e.key === 'Tab') {
      // Ensure focus management
    }
  });

  // ===== Add Print Support =====
  const printBtn = document.createElement('button');
  printBtn.textContent = '🖨️ Imprimir';
  printBtn.className = 'btn-secondary';
  printBtn.style.position = 'fixed';
  printBtn.style.bottom = '2rem';
  printBtn.style.right = '2rem';
  printBtn.style.zIndex = '999';
  printBtn.style.display = 'none';

  printBtn.addEventListener('click', function() {
    window.print();
  });

  // Only show print button on desktop
  if (window.innerWidth > 1024) {
    document.body.appendChild(printBtn);
    printBtn.style.display = 'flex';
  }

  window.addEventListener('resize', function() {
    if (window.innerWidth > 1024) {
      printBtn.style.display = 'flex';
    } else {
      printBtn.style.display = 'none';
    }
  });

  // ===== Accessibility - Skip to Content =====
  const skipLink = document.createElement('a');
  skipLink.href = '#tokens';
  skipLink.textContent = 'Pular para o conteúdo';
  skipLink.style.position = 'absolute';
  skipLink.style.top = '-40px';
  skipLink.style.left = '0';
  skipLink.style.backgroundColor = 'var(--primary)';
  skipLink.style.color = 'white';
  skipLink.style.padding = 'var(--spacing-md)';
  skipLink.style.zIndex = '1000';

  skipLink.addEventListener('focus', function() {
    this.style.top = '0';
  });

  skipLink.addEventListener('blur', function() {
    this.style.top = '-40px';
  });

  document.body.prepend(skipLink);

  // ===== Console Feedback =====
  console.log('%c✨ Design System - Plataforma Omnichannel CRM', 'font-size: 16px; color: #700AFF; font-weight: bold;');
  console.log('%cVersão 1.0.0 - HTML/CSS Pure Web', 'font-size: 12px; color: #475569;');
  console.log('%cPronto para importar no Figma usando html.to.design', 'font-size: 12px; color: #22c55e; font-weight: bold;');

});
