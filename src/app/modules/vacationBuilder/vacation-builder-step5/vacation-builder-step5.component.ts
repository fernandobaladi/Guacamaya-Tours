import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar-service/sidebar-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order/order.service';
import { payment } from 'src/app/models/payment';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';

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

  public paymentForm: FormGroup;

  constructor(private sideBarSV: SidebarService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute, private orderSV: OrderService) { }

    //paypal
    public payPalConfig?: IPayPalConfig;

  ngOnInit() {
    this.initConfig();

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

  //PRECIO DE LA COMPRA DE PAYPAL
  public precio = 10.99;
  public precioString = this.precio.toString();

  //paypal
  private initConfig(): void {
    this.payPalConfig = {
    currency: 'USD',
    clientId: 'sb',
    createOrderOnClient: (data) => <ICreateOrderRequest>{
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: this.precioString,
            breakdown: {
              item_total: {
                currency_code: 'USD',
                value: this.precioString
              }
            }
          },
          items: [
            {
              name: 'Enterprise Subscription',
              quantity: '1',
              category: 'DIGITAL_GOODS',
              unit_amount: {
                currency_code: 'USD',
                value: this.precioString,
              },
            }
          ]
        }
      ]
    },
    advanced: {
      commit: 'true'
    },
    style: {
      label: 'paypal',
      layout: 'vertical'
    },
    onApprove: (data, actions) => {
      console.log('onApprove - transaction was approved, but not authorized', data, actions);
      actions.order.get().then(details => {
        console.log('onApprove - you can get full order details inside onApprove: ', details);
      });
    },
    onClientAuthorization: (data) => {
      console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
      //this.showSuccess = true;
    },
    onCancel: (data, actions) => {
      console.log('OnCancel', data, actions);
    },
    onError: err => {
      console.log('OnError', err);
    },
    onClick: (data, actions) => {
      console.log('onClick', data, actions);
    },
  };
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
    this.router.navigate(["home"]);
  }

}
