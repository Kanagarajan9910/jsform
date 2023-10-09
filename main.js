// function validate(){
//     var name = document.getElementById('name');
//     var email = document.getElementById('email');
//     var message = document.getElementById('message');

//     if(name.trim() === " "){
//         alert('wrong credentials');
//         return;
//     }
//     if(email.trim() === " "){
//         alert('wrong credentials');
//         return;
//     }
//     if(message.trim() === " "){
//         alert('wrong credentials');
//         return;
//     }
//     var formData = {
//         name:name,
//         email:email,
//         message:message
//     };

//     localStorage.setItem('formData',JSON.stringify(formData));

//     window.location.href = 'result.html';
// }