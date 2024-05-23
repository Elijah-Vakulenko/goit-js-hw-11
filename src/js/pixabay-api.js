function getImages() {
    const BASE_URL = 'https://pixabay.com/api/';
    const END_POINT = '';
    const params = new URLSearchParams({
        key: '44023178-1b17cf85b995cf2d6fd44a474',
        q,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });

    const url = `${BASE_URL}${END_POINT}?${params}`;

    return fetch(url).then(response => response.json());
}

