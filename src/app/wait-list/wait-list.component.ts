import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { NgFor } from '@angular/common'; 
import { Location } from '@angular/common';

@Component({
  selector: 'app-wait-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './wait-list.component.html',
  styleUrl: './wait-list.component.css'
})

@Injectable({
  providedIn: 'root',
})


export class WaitListComponent {
  datos: any;
  constructor(private http: HttpClient,  private location: Location) {}

  getData(): Observable<any> {
    const url = 'http://localhost:3000/wait/all';
    return this.http.get<any>(url);
  }

  ngOnInit(): void {
      this.getData().subscribe(
        (response) => {
          this.datos = response;
        }, 
        (error) => {
          console.log("Error al traer los datos", error)
        }
      )
  }
  regresar(): void {
    this.location.back();
  }
}
