import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar-service/sidebar-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order/order.service';
import { payment } from 'src/app/models/payment';

@Component({
  selector: 'app-vacation-builder-step5',
  templateUrl: './vacation-builder-step5.component.html',
  styleUrls: ['./vacation-builder-step5.component.scss']
})
export class VacationBuilderStep5Component implements OnInit {

  steps = {
    step_one: true,
    step_two: false,
    step_three: false,
  }

  clientPayment: payment;

  public paymentForm: FormGroup;

  constructor(private sideBarSV: SidebarService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute, private orderSV: OrderService) { }

  ngOnInit() {
    this.createPaymentForm();
    this.paymentForm.controls.amount.setValue(this.orderSV.order.amount);
  }

  goToStep(step) {
    this.stepsToFalse();
    switch (step) {
      case 1:
        this.steps.step_one = true;
        break;
      case 2:
        this.steps.step_two = true;
        break;
      case 3:
        this.steps.step_three = true;
        break;

      default:
        break;
    }
  }

  stepsToFalse() {
    this.steps.step_one = false;
    this.steps.step_two = false;
    this.steps.step_three = false;
  }

  createPaymentForm() {
    this.paymentForm = this.fb.group({
      amount: [''],
      originBank: ['', Validators.required],
      destinationBank: ['', Validators.required],
      transferNumber: ['', Validators.required],
    });
  }

  saveInfo() {

    this.clientPayment = {
      amount: this.paymentForm.controls.amount.value,
      destinationBank: this.paymentForm.controls.destinationBank.value,
      originBank: this.paymentForm.controls.originBank.value,
      transferNumber: this.paymentForm.controls.transferNumber.value,
    }

    const auxOrder = {
      payment: this.clientPayment,
    }
    this.orderSV.updateOrder(auxOrder);
    this.goToStep(3);
    console.log(this.orderSV.order);
    this.orderSV.order.amount = 500;
    this.orderSV.order.locator = "AA1234";
    this.orderSV.create(this.orderSV.order)
        .then(res => {
          alert('¡Se ha agregado exitosamente el hotel!');
          this.orderSV.order = null;
        }).catch(err => {
          alert('Ha habido un error con la información introducida');
          console.log(err);
        });
    // this.router.navigate(["home"]);
  }

}
