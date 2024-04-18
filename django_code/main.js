const all_vaccines_url = `http://127.0.0.1:8000/vaccine/all_vaccine/`;


const fetchGetRequest = (url) => {
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json' 
        },
    })
    .then(response => {
        if (response.ok) {
            
            return response.json();
        } else {
            console.log(response);
            throw new Error('Error response: ' + response);
        }
    });
};
const fetchPostRequest = (url, data) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: data,
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            console.error('Error response:', response); // Log the error response
            throw new Error('Error response: ' + response.statusText);  
            return response.json();
        }
    });
}




// logout
			// //log out
			document.getElementById('logout').addEventListener('click', function(event) {
			    event.preventDefault();
			    fetch(logout_url, {
			        method: 'GET',
			        headers: {
						'Authorization': `Bearer ${localStorage.getItem('token')}`,
			        },
			    })
			        .then(response => {
			        if (response.ok) {
			            return response.json();
			        } else {
			            console.log(response)
			            throw new Error('Failed to logout: ' + response);
			        }
			        })
			        .then(data => {
			            // localStorage.getItem('token', data.token);
			            localStorage.removeItem('token');
			            localStorage.removeItem('user_id');
			            localStorage.removeItem('user_role');
			            localStorage.removeItem('logged');
			            
			            console.log(data.data);
			            // window.location.href = '/dashboard';

			        })
			        .catch(error => {
			        console.error('Error:', error);
			        });

			})
			





