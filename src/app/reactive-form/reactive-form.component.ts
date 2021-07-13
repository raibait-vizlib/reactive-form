import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  simpleForm: FormGroup;

  onSubmit(){
    console.log(this.simpleForm);
  }

  constructor(){
    this.simpleForm = new FormGroup({
      'name': new FormControl(null),
      'surname': new FormControl(null),
      'email': new FormControl(null),
    });
  }

  ngOnInit(): void {
  }

}
