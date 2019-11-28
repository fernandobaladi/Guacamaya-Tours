import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { SidebarService } from 'src/app/services/sidebar-service/sidebar-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { plusOne } from 'src/app/models/plusOne';


@Component({
  selector: 'app-vacation-builder-step4',
  templateUrl: './vacation-builder-step4.component.html',
  styleUrls: ['./vacation-builder-step4.component.scss']
})
export class VacationBuilderStep4Component implements OnInit {

  steps = {
    step_one: true,
    step_two: false,
  }

  vacationRounds = {
    round_one: true,
    round_two: false,
  }

  
  enableStep=false;
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
    private route: ActivatedRoute,) { }

  ngOnInit() {
    this.createClientBasicForm();
    this.createClientInfoForm();
    this.createPlusOneForm();
  }

  addPlusOne(){
    this.plusOnes.push(this.plusOneForm.value);
    console.log(this.plusOnes);
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
      phone: ['', Validators.required],
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

  saveChanges() {
    this.loading = true;
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

  checkPlusOne(){

    if(this.plusOnes.length === this.clientBasicForm.controls.numberPeople.value){
      this.plusOnesCompletes = true;
    }
  }

  stepsToFalse() {
    this.steps.step_one = false;
    this.steps.step_two = false;
  }

  roundsToFalse() {
    this.vacationRounds.round_one = false;
    this.vacationRounds.round_two = false;
  }

  toggleModalStatus() {
    this.modalStatus.next(!this.modalStatus.value);
  }

}
