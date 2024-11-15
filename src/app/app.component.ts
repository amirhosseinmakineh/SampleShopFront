import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteheaderComponent } from "./sharedcomponents/siteheader/siteheader.component";
import { SliderComponent } from './pages/index/slider/slider.component';
import { IndexComponent } from "./pages/index/index.component";
import { SitefooterComponent } from "./sharedcomponents/sitefooter/sitefooter.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SiteheaderComponent, IndexComponent, SitefooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sampleshopFront';
}
