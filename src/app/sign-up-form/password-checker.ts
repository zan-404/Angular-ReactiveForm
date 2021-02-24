import {FormGroup, ValidationErrors} from "@angular/forms"

export function PasswordChecker (pass1:string , pass2:string):ValidationErrors | null
{
    return (formGroup:FormGroup)=>
    {
        const password = formGroup.controls.pass1;
        const confirmPassword = formGroup.controls.pass2;

        if (password.value !== confirmPassword.value)
        {
            confirmPassword.setErrors({mustMatch:true})
        }
        else{
            confirmPassword.setErrors(null)
        }
    }


}
