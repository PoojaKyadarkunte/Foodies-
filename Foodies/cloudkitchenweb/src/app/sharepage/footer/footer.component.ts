import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  home:string="home";
  menu: string = 'menu'; // Define 'menu' property with a default value of 'menu'
  about: string = 'about';
  contact: string = 'contact';
  

}
