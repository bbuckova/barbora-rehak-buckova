// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Load news content
    loadNewsContent();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize timeline animations
    initTimelineAnimations();
    
    // Initialize project card interactions
    initProjectInteractions();
    
    // Initialize parallax effect
    initParallaxEffect();
});

// Load news content from data
function loadNewsContent() {
    const newsContainer = document.getElementById('news-container');
    
    // News data - easily editable
    const newsData = [
        {
            date: "January 2025",
            title: "New Publication in Scientific Reports",
            description: "Our latest work on 'Amplitude entropy captures chimera resembling behavior in the altered brain dynamics during seizures' has been published.",
            link: "https://www.nature.com/articles/s41598-025-97854-y"
        },
        {
            date: "January 2025", 
            title: "PRECOGNITION Project Protocol Published",
            description: "Our protocol for 'Learning latent profiles via cognitive growth charting in psychosis' is now available in Schizophrenia Bulletin Open.",
            link: "https://academic.oup.com/schizbullopen/article/6/1/sgaf007/8109912"
        },
        {
            date: "February 2025",
            title: "Invited Speaker at Pint of Science",
            description: "Upcoming public talk: 'Mind the Gap: How to analyze what's missing' - making science accessible to everyone.",
            link: "https://www.linkedin.com/feed/update/urn:li:activity:7331037003343409152/"
        },
    ];
    
    // Generate news HTML
    newsData.forEach(item => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        newsItem.innerHTML = `
            <div class="news-date">${item.date}</div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <a href="${item.link}" class="news-link">Read More →</a>
        `;
        newsContainer.appendChild(newsItem);
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Timeline animation on scroll
function initTimelineAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Initialize timeline items for animation
    document.querySelectorAll('.timeline-item').forEach((item, index) => {
        item.classList.add('animate');
        observer.observe(item);
        
        // Add staggered delay for smoother effect
        setTimeout(() => {
            item.style.transitionDelay = `${index * 0.2}s`;
        }, 100);
    });
}

// Project cards interaction
function initProjectInteractions() {
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Add subtle parallax effect to hero background
function initParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

// Utility function to update news easily
function addNewsItem(date, title, description, link = "#") {
    const newsContainer = document.getElementById('news-container');
    const newsItem = document.createElement('div');
    newsItem.className = 'news-item';
    newsItem.innerHTML = `
        <div class="news-date">${date}</div>
        <h3>${title}</h3>
        <p>${description}</p>
        <a href="${link}" class="news-link">Read More →</a>
    `;
    // Add to beginning of news container
    newsContainer.insertBefore(newsItem, newsContainer.firstChild);
}