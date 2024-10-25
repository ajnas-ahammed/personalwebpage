const namee = document.getElementById('namee');
const secondname =document.getElementById('secondname');
const email = document.getElementById('email');
const message = document.getElementById('message');
const form =document.getElementById('form');

const namee_error =document.getElementById('namee_error');
const email_error =document.getElementById('email_error')

form.addEventListener('submit',(e)=>
{

    var email_check =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(namee.value === '' || namee.value== null)
    {
        e.preventDefault();
        namee_error.innerHTML = "Please enter your first name";
    }
    else{
        namee_error.innerHTML = "";
    }



    if(namee.value === '' || namee.value== null)
        {
            e.preventDefault();
            secondname_error.innerHTML = "Please enter your second name name";
        }
        else{
            secondname_error.innerHTML = "";
        }

    if(!email.value.match(email_check)){
        e.preventDefault();
        email_error.innerHTML = "Please enter a valid email";

    }
    else{
        email_error.innerHTML = "";
    }



    if(message.value === '' || message.value== null)
        {
            e.preventDefault();
            message_error.innerHTML = "Please enter your message";
        }
        else{
            namee_error.innerHTML = "";
        }

})

