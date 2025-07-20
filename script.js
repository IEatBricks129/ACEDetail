// This event listener ensures the code runs only after the HTML is fully loaded.
document.addEventListener('DOMContentLoaded', function() {

    const animatedElement = document.getElementById("animated-name");

    // Exit if the element isn't found
    if (!animatedElement) {
        return;
    }

    let currentAngle = 0;
    let currentDirection = 0; // 0 for increasing, 1 for decreasing
    const STEP = 1; // Smaller step for a very smooth animation
    const INTERVAL = 25; // Update every 25ms

    function spin() {
        if (currentDirection === 0) {
            if (currentAngle < 360) {
                currentAngle += STEP;
            } else {
                currentDirection = 1;
                currentAngle -= STEP;
            }
        } else {
            if (currentAngle > 0) {
                currentAngle -= STEP;
            } else {
                currentDirection = 0;
                currentAngle += STEP;
            }
        }
        // Apply the 3D rotation
        animatedElement.style.transform = `rotate3d(0, 1, 0.2, ${currentAngle}deg)`;
    }

    // Start the animation loop
    setInterval(spin, INTERVAL);
});