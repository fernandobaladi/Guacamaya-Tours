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

  usuarioCampo = '';
  constrasenaCampo = '';

  usuario = "guacatours@gmail.com"
  contrasena = "12345Guaca";

  loginButton() {

    if (this.usuarioCampo == this.usuario && this.constrasenaCampo == this.contrasena) {
      
      this.router.navigate(["/admin/dashboard"]);
      
    } else {
      alert('Usuario no encontrado, por favot ingresa un usuario válido');
      this.usuarioCampo = "";
      this.constrasenaCampo = "";
    }
  }

  // authData() {

  //   this.loading = true;
  // }

}
