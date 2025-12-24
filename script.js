document.addEventListener('DOMContentLoaded', () => {
    // 1. Dynamic Age Calculation
    const birthDateString = "2005-03-07"; // Sesuai dengan HTML: 07 Maret 2005

    function calculateAge(dateString) {
        const birthDate = new Date(dateString);
        const today = new Date();

        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    // Update the DOM
    const ageElement = document.getElementById('my-age');
    if (ageElement) {
        ageElement.textContent = calculateAge(birthDateString) + " Tahun";
    }

    // 2. Interactive Tilt Effect for Profile Image
    const profileContainer = document.querySelector('.profile-img-container');
    const profileImg = document.querySelector('.profile-img');

    if (profileContainer && profileImg) {
        profileContainer.addEventListener('mousemove', (e) => {
            const rect = profileContainer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const xPct = x / rect.width;
            const yPct = y / rect.height;

            const rotateX = (0.5 - yPct) * 20; // Max rotation deg
            const rotateY = (xPct - 0.5) * 20;

            profileImg.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });

        profileContainer.addEventListener('mouseleave', () => {
            profileImg.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    }

    // 3. Smooth Reveal Animation for List Items on Scroll (Optional enrichment)
    const listItems = document.querySelectorAll('.data-list li');
    listItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-10px)';
        item.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;

        // Trigger animation after load
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 800); // Wait for cards to slide up
    });
});
