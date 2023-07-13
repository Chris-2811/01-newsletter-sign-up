const form = document.getElementById('form');
const email = document.getElementById('email');
const modal = document.getElementById('modal-container');
const container = document.getElementById('container');
const emailSuccess = document.getElementById('email-success')
const dismiss = document.getElementById('dismiss')
const error = document.getElementById('error')

// Check the email
function checkEmail(e) {
 e.preventDefault()

 const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email.value === '') {
    alert('Please enter email address!');
  } else {
    if(re.test(email.value.trim())) {
        container.style.display = 'none'
        modal.style.display = 'block'
        emailSuccess.innerText = email.value
    } else {
        showError()
    }
  }
}

// Show error message
function showError() {
    form.classList.add('error')

    error.style.visibility 
    error.innerText = 'Valid email required'
}

// Add Eventlistener
form.addEventListener('submit', checkEmail);
dismiss.addEventListener('click', e=> {
    modal.style.display = 'none'
    email.value = ''
    container.style.display = 'flex'
})
