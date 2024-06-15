import { Component, OnInit } from '@angular/core';
import { UrlService } from '../../services/url.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  data: any | undefined 
  isLoggedIn: boolean = false;
  url: string = '';

  constructor(private urlService: UrlService, private router: Router, private authService: AuthService) {
    this.authService.isLoggedIn.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    });
  }

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

  addUrl() {
    this.urlService.addUrl(this.url).subscribe(response => {
      this.data.push(response);
      this.url = '';
    }, error => {
      console.error('Error adding URL:', error);
    });
  }

  navigateToInfo(id: number): void {
    this.router.navigate(['/urlinfo', id]);
  }
}
