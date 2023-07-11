import { Component } from '@angular/core';
import{ NgForm} from '@angular/forms';
import { User } from 'src/app/model/user';
@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {

  user=new User("Ajay","a@gmail.com","Trainer","Male","pune");

  formSubmitted(userForm:NgForm){

    console.log(userForm);
    console.log(userForm.value);
    console.log(userForm.value);
    console.log(userForm.form.controls['name'].value);

  }
}
