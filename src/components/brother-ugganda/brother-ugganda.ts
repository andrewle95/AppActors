import { Component } from '@angular/core';

/**
 * Generated class for the BrotherUggandaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'brother-ugganda',
  templateUrl: 'brother-ugganda.html'
})
export class BrotherUggandaComponent {

  text: string;

  constructor() {
    console.log('Hello BrotherUggandaComponent Component');
    this.text = 'Hello World';
  }

}
