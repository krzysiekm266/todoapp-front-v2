import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todoapp-front-v2';
  show:boolean = true;

  ngOnInit(): void {
    this.show = true;
  }

  hideApp() {
    this.show = false;
  }
}
