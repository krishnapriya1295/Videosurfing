import axios from 'axios'



const KEY='AIzaSyDZL8tY8A3H8ssH13fqUYsb5YjnIaVCf4c';

export default axios.create({
baseURL:'https://www.googleapis.com/youtube/v3',
params:{
    part:'snippet',
    maxResults:5,
    key:KEY
}
});
