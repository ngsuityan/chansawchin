document.addEventListener("DOMContentLoaded", function () {
    const photoContainer = document.getElementById('photoContainer');
    const categorySelect = document.getElementById('categorySelect');

    // Sample photo data (replace with your actual photo data)
    const photos = [
        { src: 'path/to/photo1.jpg', alt: 'Description 1', category: 'childhood' },
        { src: 'path/to/photo2.jpg', alt: 'Description 2', category: 'youth' },
        { src: 'path/to/photo3.jpg', alt: 'Description 3', category: 'family' },
        // Add more photos here...
    ];

    function displayPhotos(category = 'all') {
        photoContainer.innerHTML = '';
        const filteredPhotos = category === 'all'
            ? photos
            : photos.filter(photo => photo.category === category);

        filteredPhotos.forEach(photo => {
            const photoItem = document.createElement('div');
            photoItem.className = 'photo-item';
            photoItem.innerHTML = `
                <img src="${photo.src}" alt="${photo.alt}" loading="lazy">
            `;
            photoContainer.appendChild(photoItem);
        });
    }

    categorySelect.addEventListener('change', (e) => {
        displayPhotos(e.target.value);
    });

    // Initial display
    displayPhotos();
}); 