import { Component, HostListener } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WizeMaster';

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    // Handle scroll event here
    console.log('Scrolled');
  }
  onScroll(event: Event): void {
    // Handle scroll event here
    console.log('Scrolled');
  }
}
