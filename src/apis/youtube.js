import axios from 'axios';

const KEY = 'AIzaSyBkptJwlw0LcKxWzj6LpIxvk_eB46Gx8rI';

export default axios.create({
    baseURL: 'https://www.googleleapis.com/youtube/v3',

    params:{ 
    part: 'snippet',
    maxResults: 5,
    key: KEY

}
});

