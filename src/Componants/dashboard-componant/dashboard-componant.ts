import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-dashboard-componant',
  imports: [RouterOutlet, RouterLink, RouterLinkActive ],
  templateUrl: './dashboard-componant.html',
  styleUrl: './dashboard-componant.css'
})
export class DashboardComponant {

}
