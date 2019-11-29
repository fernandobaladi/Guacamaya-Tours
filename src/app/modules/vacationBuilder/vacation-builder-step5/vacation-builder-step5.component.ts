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

  finalAmount = 0;
  clientPayment: payment;
  minDate: Date;
  maxDate: Date;

  public paymentForm: FormGroup;

  constructor(private sideBarSV: SidebarService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute, private orderSV: OrderService) { 
      this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 0);
    this.maxDate.setDate(this.maxDate.getDate() -0);
    }

  ngOnInit() {
    this.createPaymentForm();

    this.orderSV.order.bookings.forEach(element => {

      
      this.finalAmount = ((element.plusOneQuantity + 1) * element.room.price) + this.finalAmount;

      if (element.hotel.fullday) {
        this.finalAmount = (element.hotel.fulldayPrice * (element.plusOneQuantity + 1)) + this.finalAmount;
      }
      console.log(this.finalAmount);
    });
    this.paymentForm.controls.amount.setValue(this.finalAmount);

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
      orderClientDate: [''],
      amount: [''],
      originBank: ['', Validators.required],
      destinationBank: ['', Validators.required],
      transferNumber: ['', Validators.required],
    });
  }

  saveInfo() {
    
    this.paymentForm.controls.amount.setValue(this.finalAmount);
    this.clientPayment = {
      // amount: this.paymentForm.controls.amount.value,
      amount: this.finalAmount,
      destinationBank: this.paymentForm.controls.destinationBank.value,
      originBank: this.paymentForm.controls.originBank.value,
      transferNumber: this.paymentForm.controls.transferNumber.value,
    }

    const auxOrder = {
      payment: this.clientPayment,
      orderDate: this.paymentForm.controls.orderClientDate.value,
    }
    this.orderSV.updateOrder(auxOrder);
    this.goToStep(3);
    console.log(this.orderSV.order);
    this.orderSV.order.locator = "AA1248";



    this.orderSV.create(this.orderSV.order)
        .then(res => {
          alert('¡Se ha agregado exitosamente la reserva!');
        }).catch(err => {
          alert('Ha habido un error con la información introducida');
          console.log(err);
        });
        this.orderSV.order = null;
    // this.router.navigate(["home"]);
  }

}
