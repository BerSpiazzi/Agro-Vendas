import {MatListModule} from "@angular/material/list";
import {MatDrawer, MatSidenavModule} from "@angular/material/sidenav";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {Component, ViewChild} from "@angular/core";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    RouterOutlet,
    RouterLink,
    MatIconModule,
    MatToolbarModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router: Router) {
  }

  @ViewChild('drawer') drawer!: MatDrawer;

  toggleDrawer() {
    this.drawer.toggle();
  }

  logout() {
    this.router.navigate(['/login']);
  }


}
