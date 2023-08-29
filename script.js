document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            // Get the target section's ID from the href attribute
            const targetId = link.getAttribute('href').substring(1);

            // Find the target section by its ID
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Scroll to the target section with smooth animation
                window.scrollTo({
                    top: targetSection.offsetTop - 80, // Adjust the offset as needed
                    behavior: 'smooth',
                });

                // Remove the active class from all links
                navLinks.forEach((navLink) => {
                    navLink.classList.remove('active');
                });

                // Add the active class to the clicked link
                link.classList.add('active');
            }
        });
    });
});
