import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThreadComponent } from './thread/thread.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ThreadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'semicolon24';
}
