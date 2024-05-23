function getImages() {
    const BASE_URL = 'https://pixabay.com/api/';
    const params = new URLSearchParams({
        key: '44023178-1b17cf85b995cf2d6fd44a474',
        q,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
          per_page: 20,
    });

    const url = `${BASE_URL}?${params}`;

    return fetch(url).then(response => response.json())
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      }
      return data.hits;
    });
};


