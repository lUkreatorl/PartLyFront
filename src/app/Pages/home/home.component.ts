import { Component, OnInit } from '@angular/core';
import { UrlService } from '../../services/url.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  data: any | undefined 

  constructor(private urlService: UrlService, private router: Router) { }

  ngOnInit(): void {
    this.urlService.getData().subscribe(
      response => {
        this.data = response;
        console.log(this.data);
      },
      error => {
        console.error('There was an error!', error);
      }
    );
  }

  navigateToInfo(id: number): void {
    this.router.navigate(['/urlinfo', id]);
  }
}
