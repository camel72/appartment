import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
 
  images: any[];

    ngOnInit() {
        this.images = [];        
        this.images.push({source: '/assets/pdp.jpg', alt: 'previously known as Petra', title: 'pdp'});
        this.images.push({source: '/assets/eloise.jpeg', alt: 'previously known as Brubo', title: 'eloise'});        
        this.images.push({source: '/assets/gert.jpeg', alt: 'previously known as Sabine', title: 'Rocket Sciencer'});        
    }
  }
