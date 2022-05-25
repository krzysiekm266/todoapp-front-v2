<<<<<<< HEAD
import { Component ,OnInit} from '@angular/core';
=======
import { Observable } from 'rxjs';
import { Component, Input, Output } from '@angular/core';
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
>>>>>>> e8c0897abab3dc84aaf8f3ad6c50a0dabc1e9691

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todoapp-front-v2';
<<<<<<< HEAD
  show:boolean = true;

  ngOnInit(): void {
    this.show = true;
  }

  hideApp() {
    this.show = false;
  }
=======
  faHouseChimney = faHouseChimney;

  constructor() {

  }

>>>>>>> e8c0897abab3dc84aaf8f3ad6c50a0dabc1e9691
}
