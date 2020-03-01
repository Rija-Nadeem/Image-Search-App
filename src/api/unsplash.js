import axios from 'axios';

export default axios.create({
    BaseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 0975ff0e02458ed35bad943b56504e4d20c757f09e5519ad585dd7026761e284' 
    }
});