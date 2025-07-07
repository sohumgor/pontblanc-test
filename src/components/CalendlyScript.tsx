
import { useEffect } from 'react';

declare global {
  interface Window {
    Calendly: any;
  }
}

const CalendlyScript = () => {
  useEffect(() => {
    // Check if Calendly is already loaded
    if (window.Calendly) {
      return;
    }

    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => {
      console.log('Calendly script loaded successfully');
      // Ensure Calendly object is available
      if (window.Calendly) {
        console.log('Calendly object is available');
      }
    };
    script.onerror = () => {
      console.error('Failed to load Calendly script');
    };
    document.head.appendChild(script);

    // Load Calendly CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      const existingLink = document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]');
      
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
      if (existingLink) {
        document.head.removeChild(existingLink);
      }
    };
  }, []);

  return null;
};

export default CalendlyScript;
