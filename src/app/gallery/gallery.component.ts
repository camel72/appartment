import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
 
  images: any[];

    ngOnInit() {
        this.images = [];
        this.images.push(
        {source: '/assets/nicholas.jpg', alt: 'PDP wig', title: 'PDP wig'}
        );
    }

}
