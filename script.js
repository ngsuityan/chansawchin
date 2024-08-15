document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuIcon = document.getElementById("mobile-menu-icon");
    const navLinks = document.querySelector(".nav-links");

    mobileMenuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });

    // Sample data (replace with actual data)
    const lifeImages = [
        { src: './img/young.jpeg', alt: '陈秀菁 年轻时的照片' },
        { src: 'image2.jpg', alt: '陈秀菁 和家人在一起' },
        { src: 'image3.jpg', alt: '陈秀菁 享受爱好' },
    ];

    const featuredPhotos = [
        { src: 'featured1.jpg', alt: 'Featured photo 1' },
        { src: 'featured2.jpg', alt: 'Featured photo 2' },
        { src: 'featured3.jpg', alt: 'Featured photo 3' },
        { src: 'featured4.jpg', alt: 'Featured photo 4' },
    ];

    const timelineEvents = [
        { date: '1967年2月3日', title: '出生', description: '陈秀菁 诞生于...' },
        { date: '1985年', title: '高中毕业', description: '在 ... 高中毕业' },
        { date: '1990年', title: '大学毕业', description: '获得 ... 学位' },
        { date: '1995年', title: '事业起步', description: '开始在 ... 工作' },
    ];

    const quotes = [
        { quote: "生活中最重要的不是位置，而是方向。", author: "陈秀菁" },
        { quote: "微笑是世界上最好的化妆品。", author: "陈秀菁" },
    ];

    function loadLifeImages() {
        const carousel = document.getElementById('lifeImageCarousel');
        lifeImages.forEach(image => {
            const img = document.createElement('img');
            img.src = image.src;
            img.alt = image.alt;
            carousel.appendChild(img);
        });
    }

    function loadFeaturedPhotos() {
        const gallery = document.getElementById('photoGallery');
        featuredPhotos.forEach(photo => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            const img = document.createElement('img');
            img.src = photo.src;
            img.alt = photo.alt;
            item.appendChild(img);
            gallery.appendChild(item);
        });
    }

    function loadTimelineEvents() {
        const timeline = document.getElementById('timelineContent');
        timelineEvents.forEach(event => {
            const item = document.createElement('div');
            item.className = 'timeline-item';
            item.innerHTML = `
                <div class="timeline-date">${event.date}</div>
                <div class="timeline-description">
                    <h3>${event.title}</h3>
                    <p>${event.description}</p>
                </div>
            `;
            timeline.appendChild(item);
        });
    }

    function loadQuotes() {
        const quotesList = document.getElementById('quotesList');
        quotes.forEach(quote => {
            const item = document.createElement('div');
            item.className = 'quote-item';
            item.innerHTML = `
                <blockquote>
                    <p>"${quote.quote}"</p>
                    <footer>— ${quote.author}</footer>
                </blockquote>
            `;
            quotesList.appendChild(item);
        });
    }

    // Load all content
    loadLifeImages();
    loadFeaturedPhotos();
    loadTimelineEvents();
    loadQuotes();
});