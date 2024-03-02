import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';

export default async function photoApi(query, page) {
    const response = await axios.get('/search/photos', {
        params: {
            client_id: 'B0QdBD4Et1BUUwUrk696xKOlu-q0z5ngKMJdIDovyaQ',
            query,
            page,
            per_page: 12,
        },
    });
    return response.data;
}
