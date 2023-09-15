import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navebar',
  templateUrl: './navebar.component.html',
  styleUrls: ['./navebar.component.scss']
})
export class NavebarComponent {
  items: MenuItem[] | undefined;

  constructor(private router: Router){}
  ngOnInit(){
    this.items = [
      {
          label: 'Logout',
          icon: 'pi pi-power-off',
          command: () => {
            // this.signout();
        }
      }];
  }

  signout(){
    this.router.navigate(['/login'])
  }
}
