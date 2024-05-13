import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import { MatDialog } from '@angular/material/dialog'
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

form: FormGroup = this.fb.group({
from_name: 'Dome Street High School',
to_name: '',
message: 'You are now Registered to this school',
to_email: '',
})

constructor(private fb: FormBuilder){}

//I M P O R T A N T    C O P Y   A N D   P A S T E----> npm install @emailjs/browser --save   (To get the email to work)
async send(){
  emailjs.init('XrYO15yDOjIjqJ4zY');
  let response = await emailjs.send("service_rb6gk1r","template_iexyv1p",{
    from_name: this.form.value.from_name,
    to_name: this.form.value.to_name,
    message: this.form.value.message,
    to_email: this.form.value.to_email,
    });

    alert('Email has been sent')
    this.form.reset();
}




  
}
