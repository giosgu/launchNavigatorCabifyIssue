import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LaunchNavigator } from '@ionic-native/launch-navigator';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,  public launchNavigator:LaunchNavigator) {

  }

  comoLlegar(){
    this.launchNavigator.navigate("-34.545073, -58.449725", {
      appSelection: {
        dialogHeaderText: "Seleccione la app asociada",
        cancelButtonText: "Cancelar",
      }
    })
    .then(
      success => console.log('Launched navigator'),
      error => alert('Hubo un error al comenzar la navegación ' +  error)
    );

  }
}
