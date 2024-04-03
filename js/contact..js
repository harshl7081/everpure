const form = document.getElementById('form');
const Name = document.getElementById('Name');
const username = document.getElementById('form');
const mobile = document.getElementById('form');;
const text = document.getElementById('form');;
const errorElement = document.getElementById('Error');;


form.addEventListener('Submit', (e) => {
    let message = []
    if(Name.value === '' || Name.value === null){
        message.push('Name is required')
    }
    
    if (message.lenght > 0) {
        e.preventDefault()
        errorElement.innerText = mmessage.join (', ')
    }
})
