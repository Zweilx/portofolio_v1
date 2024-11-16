let activeCard = null; // Keeps track of the currently active card

    function updateContent(content, element) {
    const contentOutput = document.getElementById('content-output');
    contentOutput.innerText = content;

    // Reset previous active card styles
    if (activeCard) {
        activeCard.classList.remove('bg-black', 'text-white', 'py-8');
        activeCard.classList.add('bg-white', 'text-black', 'py-6');
    }

    // Set the clicked card as active
    element.classList.remove('bg-white', 'text-black', 'py-6');
    element.classList.add('bg-black', 'text-white', 'py-8');

    // Update the active card reference
    activeCard = element;
}

// Set Card 1 as active on page load
window.onload = function () {
    const firstCard = document.querySelector('.flex.flex-col .card');
    updateContent('I learn it since i was in 8th grade with Timedoor Academy Online, I’ve been tought about the basics of website development from them, and i completed a few projects from them. Im still learning about website development,like using framework and git function ', firstCard);
};