import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  sellerSignUpForm! : FormGroup;

  constructor( private fb: FormBuilder){

  }

  ngOnInit(): void {
    this.sellerSignUpForm= this.fb.group({
      name : [''],
      password : [''],
      email:['']
    })
  }

  signUp(data:any){
    console.warn(data)
  }

}
