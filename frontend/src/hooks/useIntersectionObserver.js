export function useIntersectionObserver() {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    });
    setTimeout(() => {
      const elements = document.querySelectorAll('.fade-element');
      elements.forEach((element) => observer.observe(element));
    }, 100);
  
    return () => {
      // Clean up the observer on unmount
      observer.disconnect();
    };
  }