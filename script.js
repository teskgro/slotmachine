// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select the GIF element
    const gifElement = document.getElementById('cursor-gif');

    // Check if the element exists
    if (!gifElement) {
        console.error('GIF element not found. Make sure the ID "cursor-gif" is correct.');
        return;
    }

    // Event listener to track mouse movement
    document.addEventListener('mousemove', (event) => {
        const { clientX, clientY } = event;
        gifElement.style.left = `${clientX}px`;
        gifElement.style.top = `${clientY}px`;
    });
});