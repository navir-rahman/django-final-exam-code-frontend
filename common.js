"use strict";

let logged = false;


//log out
document.getElementById('logout').addEventListener('submit', function(event) {
    event.preventDefault();
const url = 'https://django-final-backend.onrender.com/user/logout/';
fetch(url, {
    method: 'GET',

  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to login');
      }
    })
    .then(data => {
        localStorage.getItem('token', data.token);
        localStorage.removeItem('token');
        logged = false;
        console.log(data.data);
        // window.location.href = '/dashboard';

    })
    .catch(error => {
      console.error('Error:', error);
    });

})