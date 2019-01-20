import axios from 'axios';

const KEY = "AIzaSyAFqoj3i2I6TXGLUgLzxG7pQekfXXVEG4M";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,

    }
})
