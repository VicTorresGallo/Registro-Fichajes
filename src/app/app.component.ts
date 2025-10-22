import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonToolbar, IonSplitPane, IonHeader, IonContent, IonList } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonList, IonContent, IonHeader, IonSplitPane, IonToolbar, IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {}
}
