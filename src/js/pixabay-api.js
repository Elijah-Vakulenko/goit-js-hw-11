export function getImages(query) {
    const BASE_URL = 'https://pixabay.com/api/';
    const params = new URLSearchParams({
        key: '44023178-1b17cf85b995cf2d6fd44a474', // ← Персональний ключ
        q: query, //← Введений нами запит
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: 1,
        per_page: 20,
    });

    const url = `${BASE_URL}?${params}`;

    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        return response.json();
    })
        .then(data => {
        if (data.totalHits === 0) {
                iziToast.error({
                    title: 'Error!',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                });
                throw new Error('No images found');
            }
            return data;
        })
        .catch(error => {
            console.error("Error fetching images:", error);
        });
};