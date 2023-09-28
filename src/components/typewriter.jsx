"use client";
import React, { useState, useEffect } from "react";

const Typewriter = ({ text, delay, speed }) => {
  const [displayText, setDisplayText] = useState("");
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    let timeout;

    if (delay) {
      timeout = setTimeout(() => {
        setTyping(true);
      }, delay);
    } else {
      setTyping(true);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [delay]);

  useEffect(() => {
    if (typing) {
      let currentIndex = -1;
      const typeText = () => {
        if (currentIndex < text.length) {
          setDisplayText((prevText) => prevText + text.charAt(currentIndex));
          currentIndex++;
          setTimeout(typeText, speed); // Adjust typing speed here
        } else {
          setTyping(false);
        }
      };
      typeText();
    }
  }, [text, typing]);

  return (
    <span>
      {displayText}
      <span className="animate-blink">_</span>
    </span>
  );
};

export default Typewriter;
