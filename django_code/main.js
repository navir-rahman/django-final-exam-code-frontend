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
        }
    });
}




// login





