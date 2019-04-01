import { Component, OnInit } from '@angular/core';
import {DataService }from '../data.service'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-createauthor',
  templateUrl: './createauthor.component.html',
  styleUrls: ['./createauthor.component.css']
})
export class CreateauthorComponent implements OnInit {
  submitted: boolean;
  UserFormDetails: FormGroup;
  constructor(private data: DataService,private fb: FormBuilder,) { 
    this.UserFormDetails = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9. ]*$"), this.noWhitespaceValidator])],
      phoneNumber: ['', Validators.compose([Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10)])],
      emailId: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      // business_client_manager_detail: this.fb.array([]),
    });
  }

  ngOnInit() {
  }
create(){
  if (this.UserFormDetails.status === 'INVALID') {
    this.submitted = true;
  } else if (this.UserFormDetails.status === 'VALID') {
  
  this.data.createAuthor(this.UserFormDetails.value).subscribe((res)=>{
    console.log('res',res);
  })
}
}
noWhitespaceValidator(control: FormControl) {
  let hasOnlyWhiteSpace = (control.value).trim().length === 0;
  let hasLength = (control.value).length > 0;
  let isValid = hasOnlyWhiteSpace && hasLength;
  return isValid === false ? null : { 'whitespace': true }
}
}
