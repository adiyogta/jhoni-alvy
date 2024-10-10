import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AlvyyatunJhoniComponent } from './alvyyatun-main/alvyyatun-jhoni.component';
import { AlvyyatunMainComponent } from './alvyyatun-main/alvyyatun-main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AlvyyatunJhoniComponent, AlvyyatunMainComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jhoni-alvyyatun';
}
