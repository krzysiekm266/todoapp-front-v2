import { Observable } from 'rxjs';
import { Component, Input, Output } from '@angular/core';
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todoapp-front-v2';
  faHouseChimney = faHouseChimney;

  constructor() {

  }

}
