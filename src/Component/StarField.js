import React, { useEffect } from 'react';
import './StarField.css';

const numStars = 150; // Number of stars
const totalAnimationDuration = 5; // Total animation duration in seconds

const StarField = () => {
  useEffect(() => {
    const starField = document.querySelector(".star-field");

    // Creating stars
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;

      // Random opacity between 0 and 1 for each star
      star.style.opacity = Math.random();

      // Random color selection for 10% of stars
      if (Math.random() < 0.1) {
        star.classList.add("colored-star");
        const colors = ["yellow", "blue", "green", "purple", "pink"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        star.style.backgroundColor = randomColor;
      }

      // Random animation duration between 1 and 4 seconds for each star
      star.style.animationDuration = `${Math.random() * 3 + 1}s`;

      // Random delay between 0 and 10 seconds for each star
      star.style.animationDelay = `${Math.random() * totalAnimationDuration}s`;

      starField.appendChild(star);
    }
  }, []);

  return (
    <div className="star-field"></div>
  );
}

export default StarField;
