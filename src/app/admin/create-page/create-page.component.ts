import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ICategory} from "../../../environments/interface";

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreatePageComponent implements OnInit{

  form!: FormGroup
  categories: ICategory[] = [
    {value: 'set', viewValue: 'Сеты'},
    {value: 'sushi', viewValue: 'Роллы и суши'},
    {value: 'wok', viewValue: 'WOK'},
    {value: 'dessert', viewValue: 'Десерты'},
    {value: 'drink', viewValue: 'Напитки'},
  ]

  modules = {
    toolbar: [
      ['image']
    ]
  }
  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      weight: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      composition: new FormControl('', [Validators.required]),
      new: new FormControl(false),
      tempura: new FormControl(false),
      sale: new FormControl(false),
    })
  }

  submit() {
    console.log(this.form)
  }
}
