import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-wait-list',
  standalone: true,
  imports: [],
  templateUrl: './wait-list.component.html',
  styleUrl: './wait-list.component.css'
})
export class WaitListComponent {

  constructor(private location: Location) {}

  regresar(): void {
    this.location.back();
  }
}
