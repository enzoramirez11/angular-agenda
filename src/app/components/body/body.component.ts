import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var bootstrap:any;

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})



export class BodyComponent implements OnInit {
  loading= false
  showFiller = false;
  constructor(private router:Router) { }
  ngOnInit(): void {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
  }
  fakeLoading() {
    this.loading=true 
    setTimeout(() => {
      this.loading=false
    }, 300);
  }

}
