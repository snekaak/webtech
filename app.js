class FormValidation{
    formValues = {
        username : "",
        email : "",
        phonenumber : "",
        password : "",
        confirmpassword : ""
    }
    errorValues = {
        usernameErr : "",
        emailErr : "",
        phonenumberErr : "",
        passwordErr : "",
        confirmpasswordErr : "",
    }
    showErrorMsg(index,msg){
        const form_group = documet.getElementsByClassName('form-group')[index]
        form_group.classList.add('error')
        form_group.getElementsByTagName('span')[0].textContent = msg        

    }
    showSuccessMsg(index){
        const form_group = documet.getElementsByClassName('form-group')[index]
        form_group.classList.remoe('error')
        form_group.classList.add('success')


    }
    getInputs(){
        this.formValues.username = document.getElementById('username').value.trim()
        this.formValues.email = document.getElementById('email').value.trim()
        this.formValues.phonenumber = document.getElementById('phonenumber').value.trim()
        this.formValues.password = document.getElementById('password').value.trim()
        this.formValues.confirmpassword = document.getElementById('confirmpassword').value.trim()
        }
    validateUsername(){

    }

    validateEmail(){

    }
    validatePhonenumber(){

    }
    validatePassword(){

    }
    validateConfirmpassword(){

    }
    alertMessage(){

    }
    removeInputs(){

    }
}

const ValidateUserInputs = new FormValidation()
document.getElementsByClassName('form')[0].addEventListener('submit' , () =>{
    ValidateUserInputs.getInputs()
})