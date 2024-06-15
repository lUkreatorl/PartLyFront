import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UrlService } from '../../services/url.service';
import { urlMapper } from '../../interfaces/urlMapper';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-urlinfo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './urlinfo.component.html',
  styleUrls: ['./urlinfo.component.scss']
})
export class UrlinfoComponent implements OnInit {
  url!: urlMapper;

  constructor(
    private urlService: UrlService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.urlService.getInfo(id).subscribe(
        response => {
          this.url = response as urlMapper;
          console.log(this.url);
        },
        error => {
          console.error('There was an error!', error);
        }
      );
    }
  }
}
