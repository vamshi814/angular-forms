import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent {

  name?:string;
  email?:string;
  
  OnSubmit(form: any) {
    console.log(form.value);
    console.log(this.name);
    console.log(this.email);
  }

}
