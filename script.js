document.addEventListener('DOMContentLoaded', () => {
    const teamCards = document.querySelectorAll('.team-card');
    const modal = document.getElementById('member-modal');
    const closeModalBtn = document.querySelector('.close-btn');
    const modalBody = document.getElementById('modal-body');
    const scrollToTopBtn = document.getElementById('scroll-to-top');

    // Team members data with placeholder images (URL & name same, only improvement in image)
    const teamMembersData = [
        {
            id: 1,
            name: "Jane Doe",
            title: "Lead Developer",
            bio: "Jane is an expert in front-end architecture and a dedicated mentor to junior developers. She enjoys solving complex problems and leading the team to success.",
            image: "https://placehold.co/200x200/FFDCDC/333333?text=Jane"
        },
        {
            id: 2,
            name: "John Smith",
            title: "UX/UI Designer",
            bio: "With a keen eye for aesthetics and user-centric design, John crafts beautiful and intuitive interfaces that delight users. He believes good design is invisible.",
            image: "https://placehold.co/200x200/FFDCDC/333333?text=John"
        },
        {
            id: 3,
            name: "Sarah Chen",
            title: "Product Manager",
            bio: "Sarah is a strategic thinker who excels at turning ideas into successful products. Her strong communication skills and vision keep the team aligned and motivated.",
            image: "https://placehold.co/200x200/FFDCDC/333333?text=Sarah"
        },
        {
            id: 4,
            name: "Alex Rivera",
            title: "Data Scientist",
            bio: "Alex is a data enthusiast who loves to uncover hidden patterns and trends. His analytical skills help the team make data-driven decisions and improve our products.",
            image: "https://placehold.co/200x200/FFDCDC/333333?text=Alex"
        }
    ];

    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Open modal on team card click
    teamCards.forEach(card => {
        card.addEventListener('click', () => {
            const memberId = parseInt(card.dataset.id);
            const member = teamMembersData.find(m => m.id === memberId);

            if (member) {
                modalBody.innerHTML = `
                    <img src="${member.image}" alt="${member.name}">
                    <h3>${member.name}</h3>
                    <p class="job-title">${member.title}</p>
                    <p>${member.bio}</p>
                `;
                modal.style.display = 'block';
            }
        });
    });

    // Close modal when 'x' clicked
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal on outside click
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Scroll to top button functionality
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
