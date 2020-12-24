const uniq = require('uniq');
const axios = require('axios');

const data = [1, 2, 3, 4, 4, 3, 5 ];
console.log(uniq(data));

axios.get('https://jsonplaceholder.typicode.com/posts').then(function(response) {
  if(response.status === 200) {
    const postData = response.data;
    console.log(postData);

    // localStorage.setItem('postData', postData);
  }
})
