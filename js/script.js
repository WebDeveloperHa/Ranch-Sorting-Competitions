document.addEventListener('DOMContentLoaded', () => {
    // Make header sticky on scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Dummy data for upcoming events (in a real app, this would come from an API)
    const upcomingEvents = [
        {
            name: "Phoenix Ranch Sorting Classic",
            date: "October 12-14, 2024",
            location: "Phoenix, AZ"
        },
        {
            name: "Texas State Finals",
            date: "November 2-3, 2024",
            location: "Fort Worth, TX"
        },
        {
            name: "California Showdown",
            date: "November 23, 2024",
            location: "Sacramento, CA"
        }
    ];

    // Function to render event cards
    const renderEventCards = () => {
        const container = document.querySelector('.event-cards-container');
        container.innerHTML = upcomingEvents.map(event => `
            <div class="event-card">
                <div class="event-card-content">
                    <h3>${event.name}</h3>
                    <p>Date: ${event.date}</p>
                    <p>Location: ${event.location}</p>
                    <a href="registration.html" class="btn btn-primary">Register</a>
                </div>
            </div>
        `).join('');
    };

    renderEventCards();
});


document.addEventListener('DOMContentLoaded', () => {
    // Make header sticky on scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Dummy data for upcoming events (using a full date for countdown)
    const upcomingEvents = [
        {
            name: "Phoenix Ranch Sorting Classic",
            date: "October 12, 2025",
            location: "Phoenix, AZ",
            countdownTo: new Date('2025-10-12T09:00:00') // Use a full date string for accurate countdown
        },
        {
            name: "Texas State Finals",
            date: "November 2, 2025",
            location: "Fort Worth, TX",
            countdownTo: new Date('2025-11-02T10:00:00')
        },
        {
            name: "California Showdown",
            date: "November 23, 2025",
            location: "Sacramento, CA",
            countdownTo: new Date('2025-11-23T08:30:00')
        }
    ];

    // Function to update countdown timers
    const updateCountdowns = () => {
        const timers = document.querySelectorAll('.countdown-timer');
        timers.forEach(timer => {
            const countdownDate = new Date(timer.getAttribute('data-countdown-to')).getTime();
            const now = new Date().getTime();
            const distance = countdownDate - now;

            if (distance < 0) {
                timer.innerHTML = '<div class="expired">Event is Underway!</div>';
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            timer.innerHTML = `
                <div><div class="value">${days}</div><div class="label">Days</div></div>
                <div><div class="value">${hours}</div><div class="label">Hours</div></div>
                <div><div class="value">${minutes}</div><div class="label">Mins</div></div>
                <div><div class="value">${seconds}</div><div class="label">Secs</div></div>
            `;
        });
    };

    // Function to render event cards
    const renderEventCards = () => {
        const container = document.querySelector('.event-cards-container');
        container.innerHTML = upcomingEvents.map(event => `
            <div class="event-card">
                <div class="event-card-content">
                    <h3>${event.name}</h3>
                    <p>Date: ${event.date}</p>
                    <p>Location: ${event.location}</p>
                    <a href="registration.html" class="btn btn-primary">Register</a>
                </div>
                <div class="countdown-timer" data-countdown-to="${event.countdownTo.toISOString()}"></div>
            </div>
        `).join('');
        
        // Start the countdown timer
        setInterval(updateCountdowns, 1000);
        updateCountdowns(); // Initial call to prevent a 1-second delay
    };

    renderEventCards();
});