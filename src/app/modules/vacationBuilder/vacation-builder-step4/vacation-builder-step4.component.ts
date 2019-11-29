import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { SidebarService } from 'src/app/services/sidebar-service/sidebar-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { plusOne } from 'src/app/models/plusOne';
import { OrderService } from 'src/app/services/order/order.service';


@Component({
  selector: 'app-vacation-builder-step4',
  templateUrl: './vacation-builder-step4.component.html',
  styleUrls: ['./vacation-builder-step4.component.scss']
})
export class VacationBuilderStep4Component implements OnInit {


  //validacion personas y habitaciones

  public huespedesTextfield;
  public maxHuespedes = 4;
  public habitacionesTextfield;

  validarHuespedesYHabitaciones() {

    if ((this.habitacionesTextfield*this.maxHuespedes) >= this.huespedesTextfield) {
      //validacion aprobada
      alert("Aprobada");
    
    } else {
      alert("Negada");
      // if (this.habitacionesTextfield < this.huespedesTextfield){

      //   //validacion aprobada
      //   alert("Aprobada");
        
      // }else {
      //     //validacion negada
      //     alert("Negada");
      //   }
    }

  } 

  


  steps = {
    step_one: true,
    step_two: false,
  }

  vacationRounds = {
    round_one: true,
    round_two: false,
  }


  enableStep = false;
  loading = false;
  public clientBasicForm: FormGroup;
  public clientInfoForm: FormGroup;
  public plusOneForm: FormGroup;
  plusOnesCompletes = false;
  modalStatus = new BehaviorSubject(false);


  plusOnes: plusOne[] = [];

  constructor(private sideBarSV: SidebarService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute, private orderSV: OrderService) { }

  ngOnInit() {
    this.createClientBasicForm();
    this.createClientInfoForm();
    this.createPlusOneForm();
  }

  addPlusOne() {
    this.plusOnes.push(this.plusOneForm.value);
    // console.log(this.plusOnes);
    this.plusOneForm.reset();
    this.checkPlusOne();
  }

  createClientBasicForm() {
    this.clientBasicForm = this.fb.group({
      numberPeople: ['', Validators.required],
      numberHabs: ['', Validators.required],
    });
  }

  createClientInfoForm() {
    this.clientInfoForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      IDType: ['', Validators.required],
      ID: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  createPlusOneForm() {
    this.plusOneForm = this.fb.group({
      namePlus: ['', Validators.required],
      lastNamePlus: ['', Validators.required],
      agePlus: ['', Validators.required],
      IDTypePlus: ['', Validators.required],
      IDPlus: ['', Validators.required],
    });
  }


  public inputTextfield: string;
  public inputTextfield2: string;
  public inputTextfield3: string;
  public inputTextfield4: string;
  public inputTextfield5: string;
  public inputTextfield6: string;
  public inputTextfield7: string;
  public apareceBorde: boolean = false;
  public colorBorde: boolean = false;

  saveChanges() {

    var empty = /^$/;
    var regex = /^[a-zA-Z]+$/;
    var regex2 = /^([0-9])*$/;
    if (!regex.test(this.inputTextfield) && !empty.test(this.inputTextfield)) {

      if (!regex.test(this.inputTextfield2) && !empty.test(this.inputTextfield2)) {

        if (!regex.test(this.inputTextfield3) && !empty.test(this.inputTextfield3)) {

          if (!regex.test(this.inputTextfield4) && !empty.test(this.inputTextfield4)) {

            if (!regex2.test(this.inputTextfield5) && !empty.test(this.inputTextfield5)) {

              if (!regex2.test(this.inputTextfield6) && !empty.test(this.inputTextfield6)) {

                if (!regex2.test(this.inputTextfield7) && !empty.test(this.inputTextfield7)) {
        
                  this.apareceBorde = true;
                  this.colorBorde = true;
                }
              }
            }
          }
        }
      }

    } else {
      this.loading = true;
    }


    
  }

  goToStep(step) {

    this.validarHuespedesYHabitaciones();

    this.stepsToFalse();
    switch (step) {
      case 1:
        this.steps.step_one = true;
        break;
      case 2:
        this.steps.step_two = true;
        break;

      default:
        break;
    }
  }

  goTovacationRound(round) {
    this.roundsToFalse();
    switch (round) {
      case 1:
        this.vacationRounds.round_one = true;
        break;
      case 2:
        this.vacationRounds.round_two = true;
        break;

      default:
        break;
    }
  }

  saveInfo() {
    const auxBooking = {
      roomQuantity: this.clientBasicForm.controls.numberHabs.value,
      plusOneQuantity: (this.clientBasicForm.controls.numberPeople.value - 1),
      plusOne: this.plusOnes
    }

    const auxOrder = {
      name: this.clientInfoForm.controls.name.value,
      lastName: this.clientInfoForm.controls.lastName.value,
      IDType: this.clientInfoForm.controls.IDType.value,
      ID: this.clientInfoForm.controls.ID.value,
      phoneNumber: this.clientInfoForm.controls.phoneNumber.value,
      email: this.clientInfoForm.controls.email.value,
      address: this.clientInfoForm.controls.address.value,
      status: 3,
      statusName: 'Por Confirmar'
    }

    console.log(auxOrder, auxBooking);
    console.log('clicked!');
    
    this.orderSV.updateBooking(auxBooking);
    this.orderSV.updateOrder(auxOrder);
    // this.router.navigate(["vacationBuilder/step2"]);
    this.toggleModalStatus();
  }

  checkPlusOne() {

    if (this.plusOnes.length === this.clientBasicForm.controls.numberPeople.value) {
      this.plusOnesCompletes = true;
    }
  }

  stepsToFalse() {
    this.steps.step_one = false;
    this.steps.step_two = false;
  }

  newBooking(){
    this.orderSV.saveActualBooking();
    this.router.navigate(["vacationBuilder/step1"]);
  }

  lastBooking(){
    this.orderSV.saveActualBooking();
    this.router.navigate(["vacationBuilder/step5"]);
  }

  roundsToFalse() {
    this.vacationRounds.round_one = false;
    this.vacationRounds.round_two = false;
  }

  toggleModalStatus() {
    this.modalStatus.next(!this.modalStatus.value);
  }

}
