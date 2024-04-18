
//  tokens
const token = localStorage.getItem('token');
const user_id = localStorage.getItem('user_id');
const user_role = localStorage.getItem('user_role');


// default variables





// window.onload = function () {
  
//   fetchGetRequest(vaccineHistory_url)
//     .then(data => {
//       let vaccineHistory_context = ' ';
//       // console.log(data)
//       data.forEach(d => {
//         vaccineHistory_context += `
//         <tr>
//           <td class="adm are asb avz axq">${d.vaccine}</td>
//           <td class="adm are asb avz axq">${d.date_taken}</td>
//         </tr>
//             `}
//       )

//       let table = `
//       <table class="ts acc ach">
//         <thead>
//           <tr>
//             <th scope="col" class="arz atm aub avj avz awf axu cgf">Vaccine Name</th>
//             <th scope="col" class="are arz avj avz awf axu">Date</th>
//           </tr>
//         </thead>
//         <tbody class="acc acg">
//           ${vaccineHistory_context}
//         </tbody>
//       </table>
//       `

//       // document.getElementById('add_campaign_form').innerHTML = table
//     }).catch(error => console.log(error))

// }







// ADD NEW VACCINE

// document.getElementById('add_campaign_form').addEventListener('submit', function (event) {
//   event.preventDefault();
//   if (!token) {
//     console.error('Token not found');
//     return;
//   }
//   // Retrieve form data
//   var formData = new FormData();
//   formData.append('name', document.getElementById('v_name').value);
//   formData.append('campaign_name', document.getElementById('campaign_name').value);
//   formData.append('dose_count', document.getElementById('dose_count').value);
//   formData.append('first_dose_date', document.getElementById('first_dose_date').value);
//   formData.append('status', document.getElementById('status').checked ? 1 : 0);
//   formData.append('description', document.getElementById('description').value);
//   formData.append('image', document.getElementById('image').files[0]);

//   for (const pair of formData.entries()) {
//     console.log(pair[0], pair[1]);
//   }

//   fetch(add_url, {
//     method: 'POST',
//     headers: {
//       'Authorization': `Bearer ${token}`,
//     },
//     body: formData
//   })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Failed to upload data');
//       }
//       return response.json();
//     })
//     .then(result => {
//       console.log('Data uploaded successfully:', result);
//       // Handle success response as needed
//     })
//     .catch(error => {
//       console.error('Error uploading data:', error);
//       // Handle error as needed
//     });
// });



// get vaccines information






const orderVaccines = (id) => {
  fetch(`https://django-final-backend.onrender.com/history/order/123`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,

    },
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Handle successful response
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
}





// let default_vaccine_id 
// update default_vaccine_id
const default_vaccine_id_update = (id) => {

    document.getElementById('save_form_data').classList.add('hide')
    document.getElementById('update_form_data').classList.remove('hide')
    document.getElementById('update_form_data').setAttribute('onclick', `update_vaccine(${id})`)

}




// const update_vaccine = (id) => {
//     let updateUrl = `https://django-final-backend.onrender.com/vaccine/update/${id}/`
//     // console.log(id, updateUrl)

//     if (!token) {
//       console.error('Token not found');
//       return;
//     }
//     // Retrieve form data
//     // var formData = new FormData();
//     // formData.append('id', id);
//     // formData.append("initiated_by", "user");
//     // formData.append('name', document.getElementById('v_name').value);
//     // formData.append('image', document.getElementById('image').files[0]);
//     // formData.append('description', document.getElementById('description').value);
//     // formData.append('dose_count', document.getElementById('dose_count').value);
//     // formData.append('status', document.getElementById('status').checked ? 1 : 0);
//     // formData.append('campaign_name', document.getElementById('campaign_name').value);
//     // formData.append("initiated_date", "2024-02-22T19:52:00Z");

//     var formData = {
//         "id": 3,
//         "initiated_by": "user",
//         "name": "vacc 3",
//         "image": null,
//         "description": "dis s\\",
//         "dose_count": 3,
//         "status": false,
//         "campaign_name": "c3",
//         "initiated_date": "2024-02-22T19:52:00Z"
//     }

//     console.log('formData', formData);
//   fetch(updateUrl, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'multipart/form-data',
//       'Authorization': `Bearer ${token}`,

//     },
//     body: JSON.stringify(formData)
//   })
//   .then(response => {
//     console.log(response);
//     if (!response.ok) {
    
//       throw new Error('Network response was not ok');
//     }
//     // Handle successful response
//   })
//   .catch(error => {
//     console.error( error);
//   });
// }



// Post/ patch request