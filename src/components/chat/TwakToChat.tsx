"use client";
import React, { useEffect } from "react";

const TawkToChat: React.FC = () => {
  useEffect(() => {
    // Create the script element
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://embed.tawk.to/66658a709a809f19fb3bbdc4/1hvua9i14";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    // Insert the script element into the DOM
    const scriptPlaceholder = document.getElementsByTagName("script")[0];
    if (scriptPlaceholder && scriptPlaceholder.parentNode) {
      scriptPlaceholder.parentNode.insertBefore(script, scriptPlaceholder);
    }

    // Optional: Clean up the script when the component unmounts
    return () => {
      if (scriptPlaceholder && scriptPlaceholder.parentNode) {
        scriptPlaceholder.parentNode.removeChild(script);
      }
    };
  }, []);

  return null; // This component doesn't render anything visually
};

export default TawkToChat;
