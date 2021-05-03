import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tech01',
  templateUrl: './tech01.component.html',
  styleUrls: ['../app.component.css'],
})
export class Tech01Component implements OnInit {
  title = 'angular-practice';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }



}
