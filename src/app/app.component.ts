import { Component, ViewEncapsulation } from '@angular/core';
import { GalleryComponent } from './gallery/gallery.component';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'Welcome to the ultimate Gender-neutral premium dating site';


}
