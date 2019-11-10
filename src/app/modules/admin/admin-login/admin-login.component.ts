import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  // loading = false;
  public loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,
    private route: ActivatedRoute) { }


  createLoginForm() {
    this.loginForm = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit() {
    this.createLoginForm()
  }

  // authData() {

  //   this.loading = true;
  // }

}
