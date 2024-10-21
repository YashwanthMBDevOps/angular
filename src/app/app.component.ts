import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { AbilitiesComponent } from './component/abilities/abilities.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AbilitiesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_practice';
}