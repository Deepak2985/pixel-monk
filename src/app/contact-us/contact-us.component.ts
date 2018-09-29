import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  contactForm=this.fb.group({
    name: [''],
    phone:[''],
    email:[''],
    message:['']
  });
  ngOnInit() {
  }

  onSubmit(){
    console.log(this.contactForm.value);
  }

}
