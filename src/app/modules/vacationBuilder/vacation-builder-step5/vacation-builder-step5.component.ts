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
  paymentType: string;
  finalAmount = 0;
  clientPayment: payment;
  finalLocator = '';
  public paymentForm: FormGroup;

  constructor(private sideBarSV: SidebarService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute, private orderSV: OrderService) { }

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
    this.generateLocator();
  }

  goToStep(step) {
    this.stepsToFalse();
    switch (step) {
      case 1:
        this.steps.step_one = true;
        break;
      case 2:
        this.steps.step_two = true;
        this.paymentType = 'Transferencia';
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

  getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
  }
  generateLocator(){
    let firstLetter = '';
    let secondLetter = '';
    if (this.getRandomInt(2) === 0) {
      firstLetter = 'A';
    } else {
      firstLetter = 'B';
    }
    if (this.getRandomInt(2) === 0) {
      secondLetter = 'C';
    } else {
      secondLetter = 'D';
    }
    this.finalLocator = this.finalLocator.concat(firstLetter);
    this.finalLocator = this.finalLocator.concat(secondLetter);
    let firstNumb = this.getRandomInt(10).toString();
    let secondNumb = this.getRandomInt(10).toString();
    let thirdNumb = this.getRandomInt(10).toString();
    let fourthNumb = this.getRandomInt(10).toString();
    this.finalLocator = this.finalLocator.concat(firstNumb);
    this.finalLocator = this.finalLocator.concat(secondNumb);
    this.finalLocator = this.finalLocator.concat(thirdNumb);
    this.finalLocator = this.finalLocator.concat(fourthNumb);
    console.log(this.finalLocator);
    
  }
  createPaymentForm() {
    this.paymentForm = this.fb.group({
      amount: [''],
      originBank: ['', Validators.required],
      destinationBank: ['', Validators.required],
      transferNumber: ['', Validators.required],
      type: ['']
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
      type: this.paymentType
    }

    const auxOrder = {
      payment: this.clientPayment,
    }
    this.orderSV.updateOrder(auxOrder);
    this.goToStep(3);
    console.log(this.orderSV.order);


    this.orderSV.order.locator = this.finalLocator;



    this.orderSV.create(this.orderSV.order)
        .then(res => {
          alert('¡Se ha agregado exitosamente la reserva!');
        }).catch(err => {
          alert('Ha habido un error con la información introducida');
          console.log(err);
        });
        this.orderSV.order = null;
    this.router.navigate(["home"]);
  }

}
