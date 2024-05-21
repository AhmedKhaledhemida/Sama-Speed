import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {
  divActive: { [key: string]: boolean } = {};

  toggleDiv(divId: string): void {
    this.divActive[divId] = !this.divActive[divId];
  }
}
