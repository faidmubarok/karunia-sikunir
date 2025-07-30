document.addEventListener('DOMContentLoaded', () => {
    // Handle mobile hamburger menu (if you add one)
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            // Add functionality to toggle a mobile menu
        });
    }

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Function to handle booking button click
function bookRoom(roomName) {
    const phoneNumber = '6281210953882'; // Nomor WhatsApp yang sudah diperbarui
    const message = `Halo, saya ingin memesan ${roomName} di Karunia Villa Sikunir.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
}

// Function to scroll to the rooms section
function scrollToRooms() {
    const roomsSection = document.getElementById('rooms');
    if (roomsSection) {
        roomsSection.scrollIntoView({
            behavior: 'smooth'
        });
    }
}
