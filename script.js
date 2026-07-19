document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('header nav');

  if (!toggle || !nav) return;

  function closeMenu() {
    nav.classList.remove('is-open');
    toggle.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  function openMenu() {
    nav.classList.add('is-open');
    toggle.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
  }

  toggle.addEventListener('click', function () {
    if (nav.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close the menu when a link inside it is tapped
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Close the menu if the viewport is resized back to desktop width
  window.addEventListener('resize', function () {
    if (window.innerWidth > 820) closeMenu();
  });
});

 //WHATSAPP
/**
 * WhatsApp Floating Hover Button
 * -------------------------------
 * Just include this script on your page (before </body>) and it will
 * automatically inject a floating WhatsApp button in the bottom-right corner.
 *
 * <script src="whatsapp-button.js"></script>
 *
 * Customize the CONFIG values below to fit your business.
 */

(function () {
  const CONFIG = {
    phoneNumber: "9824987774", // Replace with your number, country code + number, no + or spaces
    message: "Hello! I have a question.", // Pre-filled message
    position: "right", // "right" or "left"
    bottomOffset: "20px",
    sideOffset: "20px",
    buttonSize: "60px",
    backgroundColor: "#25D366",
    hoverColor: "#1EBE5D",
    showTooltip: true,
    tooltipText: "Chat with us on WhatsApp",
  };

  function init() {
    const link = document.createElement("a");
    link.href = `https://wa.me/${CONFIG.phoneNumber}?text=${encodeURIComponent(CONFIG.message)}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.id = "wa-float-button";
    link.setAttribute("aria-label", "Chat on WhatsApp");

    link.innerHTML = `
      <svg viewBox="0 0 32 32" width="32" height="32" fill="#fff">
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.825.738 5.475 2.03 7.773L0 32l8.443-2.014A15.9 15.9 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333c-2.51 0-4.87-.68-6.902-1.864l-.494-.293-5.014 1.196 1.222-4.887-.32-.503A13.27 13.27 0 0 1 2.667 16C2.667 8.64 8.64 2.667 16 2.667S29.333 8.64 29.333 16 23.36 29.333 16 29.333z"/>
        <path d="M23.472 19.328c-.407-.204-2.41-1.19-2.783-1.326-.373-.136-.645-.204-.917.204-.271.407-1.05 1.326-1.288 1.598-.237.271-.475.305-.882.102-.407-.204-1.72-.634-3.276-2.02-1.211-1.08-2.03-2.415-2.268-2.822-.237-.407-.025-.627.18-.83.184-.184.407-.475.61-.712.204-.238.271-.407.407-.68.136-.27.068-.508-.034-.712-.102-.204-.917-2.208-1.257-3.024-.33-.795-.667-.688-.917-.7-.237-.012-.51-.014-.78-.014-.272 0-.713.102-1.086.508-.373.407-1.424 1.392-1.424 3.396 0 1.994 1.457 3.925 1.660 4.196.203.271 2.865 4.375 6.945 6.135.97.419 1.727.669 2.317.856.973.31 1.858.266 2.558.161.78-.116 2.41-.984 2.75-1.936.34-.951.34-1.766.237-1.936-.102-.17-.373-.271-.78-.475z"/>
      </svg>
    `;

    // Base button styling
    Object.assign(link.style, {
      position: "fixed",
      bottom: CONFIG.bottomOffset,
      [CONFIG.position]: CONFIG.sideOffset,
      width: CONFIG.buttonSize,
      height: CONFIG.buttonSize,
      backgroundColor: CONFIG.backgroundColor,
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
      zIndex: "9999",
      transition: "background-color 0.3s ease, transform 0.3s ease",
      cursor: "pointer",
    });

    link.addEventListener("mouseenter", () => {
      link.style.backgroundColor = CONFIG.hoverColor;
      link.style.transform = "scale(1.08)";
      if (CONFIG.showTooltip) tooltip.style.opacity = "1";
    });
    link.addEventListener("mouseleave", () => {
      link.style.backgroundColor = CONFIG.backgroundColor;
      link.style.transform = "scale(1)";
      if (CONFIG.showTooltip) tooltip.style.opacity = "0";
    });

    document.body.appendChild(link);

    // Optional tooltip
    let tooltip;
    if (CONFIG.showTooltip) {
      tooltip = document.createElement("div");
      tooltip.textContent = CONFIG.tooltipText;
      Object.assign(tooltip.style, {
        position: "fixed",
        bottom: `calc(${CONFIG.bottomOffset} + ${CONFIG.buttonSize} / 2 - 14px)`,
        [CONFIG.position]: `calc(${CONFIG.sideOffset} + ${CONFIG.buttonSize} + 10px)`,
        backgroundColor: "#333",
        color: "#fff",
        padding: "6px 10px",
        borderRadius: "6px",
        fontSize: "13px",
        whiteSpace: "nowrap",
        opacity: "0",
        pointerEvents: "none",
        transition: "opacity 0.3s ease",
        zIndex: "9999",
      });
      document.body.appendChild(tooltip);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();