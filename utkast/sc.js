function getVectorToMouse() {
    const mouseX = mousePosition.x - playerX;
    const mouseY = mousePosition.y - playerY;
    const distance = Math.sqrt(mouseX ** 2 + mouseY ** 2);
    const angle = Math.atan2(mouseY, mouseX);
    return { distance, angle };
  }
  
  function updatePlayerPosition(deltaTime) {
    const { distance, angle } = getVectorToMouse();
    const speed = 0.1; // Hastighet i pixlar per millisekund
    const dx = speed * deltaTime * Math.cos(angle);
    const dy = speed * deltaTime * Math.sin(angle);
    if (distance > 5) {
      // Rör bara spelaren om avståndet är större än 5 pixlar
      playerX += dx;
      playerY += dy;
    }
  }
  let mousePosition = { x: 0, y: 0 };
  gameCanvas.addEventListener("click", (e) => {
    mousePosition.x = e.clientX - gameCanvas.offsetLeft;
    mousePosition.y = e.clientY - gameCanvas.offsetTop;
  });
  
  function animate(timestamp) {
    const deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    c.clearRect(0, 0, gameCanvas.width, gameCanvas.height); // Clear screen
    updatePlayerPosition(deltaTime);
    c.fillRect(playerX, playerY, playerWidth, playerHeight); // Draw player
    requestAnimationFrame(animate);
  }
  
  let lastTime = 0;
  animate(0);