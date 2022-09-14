import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TaskService } from './services/task.service';
import { TaskTrackerService } from './services/task-tracker.service';
import { WelcomeComponent } from './components/welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule

  ],
  providers: [TaskService,TaskTrackerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
