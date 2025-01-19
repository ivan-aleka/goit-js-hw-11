export const fetchImages = (query, page = 1, perPage = 9) => {
  const searchParams = {
    key: '48303854-cd498063b7025b62fb7eab433',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page,
    per_page: perPage,
  };

  return fetch(
    `https://pixabay.com/api/?${new URLSearchParams(searchParams).toString()}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
