import gsap from "gsap";

/**
 * Animate the hero header elements with a staggered fade-in and slide-up.
 */
export const animateHero = (containerRef) => {
  if (!containerRef) return;
  const elements = containerRef.querySelectorAll(".gsap-hero-elem");
  if (!elements.length) return;

  gsap.fromTo(
    elements,
    { opacity: 0, y: 24 },
    {
      opacity: 1,
      y: 0,
      duration: 0.85,
      stagger: 0.12,
      ease: "power3.out",
    }
  );
};

/**
 * Animate card containers appearing on screen
 */
export const animateCardsEntrance = (elements) => {
  if (!elements) return;
  gsap.fromTo(
    elements,
    { opacity: 0, y: 28, scale: 0.98 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.7,
      stagger: 0.14,
      ease: "power3.out",
    }
  );
};

/**
 * Animate counter number from 0 to target
 */
export const animateCounter = (element, targetValue, duration = 1.6) => {
  if (!element) return;
  const obj = { value: 0 };
  gsap.to(obj, {
    value: targetValue,
    duration: duration,
    ease: "power2.out",
    onUpdate: () => {
      element.innerText = Math.round(obj.value);
    },
  });
};

/**
 * Animate SVG circle stroke for score gauge
 */
export const animateGaugeCircle = (circleRef, percentage, circumference) => {
  if (!circleRef) return;
  const targetOffset = circumference - (percentage / 100) * circumference;

  gsap.fromTo(
    circleRef,
    { strokeDashoffset: circumference },
    {
      strokeDashoffset: targetOffset,
      duration: 1.8,
      ease: "power2.out",
    }
  );
};

/**
 * Staggered animation for horizontal category progress bars
 */
export const animateCategoryBars = (containerRef) => {
  if (!containerRef) return;
  const bars = containerRef.querySelectorAll(".gsap-progress-fill");
  if (!bars.length) return;

  bars.forEach((bar) => {
    const targetWidth = bar.getAttribute("data-width") || "0%";
    gsap.fromTo(
      bar,
      { width: "0%" },
      {
        width: targetWidth,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.2,
      }
    );
  });
};

/**
 * Animate tab switch content
 */
export const animateTabChange = (tabContentRef) => {
  if (!tabContentRef) return;
  gsap.fromTo(
    tabContentRef,
    { opacity: 0, y: 10 },
    {
      opacity: 1,
      y: 0,
      duration: 0.35,
      ease: "power2.out",
    }
  );
};

/**
 * Bouncy pop-in for file uploaded card
 */
export const animateFileSuccess = (fileCardRef) => {
  if (!fileCardRef) return;
  gsap.fromTo(
    fileCardRef,
    { opacity: 0, scale: 0.94, y: 12 },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.5,
      ease: "back.out(1.6)",
    }
  );
};

/**
 * Button tactile pulse interaction
 */
export const animateButtonSubmit = (buttonRef) => {
  if (!buttonRef) return;
  const tl = gsap.timeline();
  tl.to(buttonRef, { scale: 0.96, duration: 0.1, ease: "power1.in" })
    .to(buttonRef, { scale: 1.02, duration: 0.2, ease: "power1.out" })
    .to(buttonRef, { scale: 1, duration: 0.15, ease: "power1.out" });
};
