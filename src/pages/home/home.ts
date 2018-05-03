import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
firstName = '';
lastName = '';
dateOfBirth = '';

splash = true;
tabBarElement: any;

  constructor(public navCtrl: NavController) {
    this.tabBarElement = document.querySelector('.tabbar');
  }

//Get a number between 1-100 using first and last name
//Method will use charCodeAt method to return a numberI.E 'd' in Darren will return 100
//This will combine firstName and lastName, convert to lowercase
//Calculates number by Iterating over sum 0 increments by 1 loops and added letters.charCodeAt(i) to sum, so 'd' will add 100
  get number(){
    const letters = (this.firstName + this.lastName).toLowerCase();
    let sum = 0;
    for (let i = 0; i < letters.length; i++){
      sum += letters.charCodeAt(i);
    }
    return sum % 101;
}
  ionViewDidLoad() {
    this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
      this.tabBarElement.style.display = 'flex';
    }, 4000);
  }


}
