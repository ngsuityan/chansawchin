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

    const lifeStory = `我的妈妈出生于1967年2月3日。从小，她就是一个勤奋好学的人，最终在毕业后成为了一名备受尊敬的补习老师。她教导了许多学生，并且在她的教育生涯中，许多学生都受益匪浅。

在她年轻的时候，妈妈曾在一家豆水豆腐店工作，期间积累了丰富的经验，也结交了许多朋友。1991年12月2日，妈妈迎来了她人生的重要时刻，她与我父亲结婚，开启了他们共同生活的新篇章。

婚后，妈妈的生活变得更加忙碌。1995年，她迎来了我的姐姐；1998年，她生下了我；2003年，她又迎来了我的弟弟。作为一个母亲，她总是不辞辛劳地照顾我们三兄妹，给予我们无尽的爱与关怀。

妈妈一直是个勤劳的女人。她曾经营过美食档口，为家庭提供经济支持；她也曾制作鞋花，手艺精湛，受到许多人的喜爱。随着两个女儿相继进入大学，妈妈开始在一家民宿担任清洁工作。她的工作不仅勤勉，而且细致入微，深得民宿老板和顾客的好评。

尽管妈妈的生活并不富裕，但她总是尽其所能地给我们最好的。她用自己的一生，默默地支持着我们的成长与梦想。

然而，生活并不总是顺遂的。2024年年初，妈妈被确诊患上了淋巴癌。这对我们全家来说是一个巨大的打击，尤其是在我弟弟刚刚开始大学生活的时候。尽管她顽强地与病魔抗争，但最终在2024年7月4日晚上10点02分，她离开了我们，离开了这个她无比珍爱的世界。

妈妈的一生充满了辛劳，但她从未抱怨，总是竭尽全力给予我们最好的。在她短暂的一生中，有过很多坎坷，但也有许多美好的时刻。她是我们的支柱，是我们心中的英雄。虽然她已经离开，但她的爱与教诲将永远留在我们心中，激励我们勇敢前行。`;

    function loadLifeStory() {
        const lifeStoryContainer = document.getElementById('lifeStoryContent');
        const paragraph = document.createElement('p');
        paragraph.textContent = lifeStory;
        lifeStoryContainer.appendChild(paragraph);
    }

    const quotes = [
        { quote: "做得到就做,做不到放弃也没关系,开心最重要。", author: "陈秀菁" },
        { quote: "自己开心最重要。", author: "陈秀菁" },
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
    loadLifeStory();
    loadQuotes();
});