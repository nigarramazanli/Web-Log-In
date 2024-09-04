// document.addEventListener("DOMContentLoaded", function() {
//     const form = document.querySelector(".form");
//     const validationMessage = "Zəhmət olmasa buranı doldurun";
//     console.log(validationMessage)
//     console.log("Hersey gozel olur.")
//     const requiredFields = form.querySelectorAll('select[required], input[required]');
//     function validateForm() {
//         let isValid = true;
//         // const form = document.getElementById('myForm');

//         // Get all required select and input elements within the form

//         // Loop through each required field
//         requiredFields.forEach(field => {
//             const validationMessageDiv = field.nextElementSibling;

//             // Reset validation message
//             if (validationMessageDiv) {
//                 validationMessageDiv.textContent = '';
//             }

//             // Check if the field is empty
//             if (!field.value) {
//                 if (validationMessageDiv) {
//                     validationMessageDiv.textContent = 'Zəhmət olmasa buranı doldurun';
//                 }
//                 isValid = false;
//             }
//         });

//         // Return false to prevent form submission if validation fails
//         return isValid;
//     }

//     form.addEventListener('submit', function(event) {
//         if (!validateForm()) {
//             event.preventDefault(); // Prevent form submission if validation fails
//         }
//         if();
//     });
// });


let form = document.getElementById('myForm');
const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('yox');

    const fields = form.querySelectorAll("select, input"); // Select all <select> and <input> elements

    console.log(fields);
        let isValid = true;

        fields.forEach(field => {
            const validationMessage = field.closest('div').querySelector('.validation-message');
            
            if (!field.value.trim()) { // Check if the field is empty (trims whitespace)
                validationMessage.textContent = 'Burani doldurun';
                isValid = false;
            } else {
                validationMessage.textContent = ''; // Clear the error message if the field has a value
            }
        });
    
     let formData = new FormData(form);
     axios.post('https://httpbin.org/post',formData)
     .then(res => console.log(res.data.form))
     .catch(err => console.log(err));



})

