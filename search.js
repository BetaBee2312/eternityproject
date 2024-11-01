function searchImages() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const images = document.querySelectorAll('#imageContainer img');

    images.forEach(image => {
        const altText = image.alt.toLowerCase();
        if (altText.includes(input)) {
            image.classList.remove('hidden');
        } else {
            image.classList.add('hidden');
        }
    });
}