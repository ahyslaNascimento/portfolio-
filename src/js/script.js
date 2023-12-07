document.addEventListener("DOMContentLoaded", function () {
    const particles = document.getElementById("animated-background");
  
    const numberOfParticles = 100;
  
    for (let i = 0; i < numberOfParticles; i++) {
      const span = document.createElement("span");
      span.className = "circle";
  
      span.style.width = `${Math.random() * 10 + 10}px`;
      span.style.height = span.style.width;
      span.style.left = `${Math.random() * 100}vw`;
      span.style.animationDuration = `${Math.random() * 3 + 2}s`;
  
      particles.appendChild(span);
    }
  });
  
  
