import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { Travel } from '../travel.class';

@Component({
  selector: 'app-any',
  templateUrl: './any.component.html',
  styleUrls: ['./any.component.scss']
})
export class AnyComponent implements OnInit {

  anyForm!:FormGroup;
  newTravel$!:Observable<Travel>;
  travel!: Travel;


  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.anyForm = this.formBuilder.group(
      {
        title: [null],
        description: [null],
        imageUrl: [null],
        location: [null]
      });
    this.newTravel$ = this.anyForm.valueChanges.pipe(
      map(formValue => ({
          ...formValue,
          creationDate:new Date()
      }))
      /*
      L'objet émis par l'observable est une instance de class Travel retrounée par Tap
      ...formValue contient les valeurs du formulaires
      les inputs de formulaire doivent avoir le même nom que les attributs de la classe travel
      */
     /* 
     dans la fonction Map, il manque l'association entre le champ Input Theme à associer
      à l'attribut Topic de la class Travel
      */
  );;
  }

  onSubmitForm() {
    console.log(this.anyForm.value);
  }
}
