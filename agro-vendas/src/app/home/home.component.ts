import {MatListModule} from "@angular/material/list";
import {MatDrawer, MatSidenavModule} from "@angular/material/sidenav";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {Component, ViewChild} from "@angular/core";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    RouterOutlet,
    RouterLink,
    MatIconModule,
    MatToolbarModule,
    NgIf
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


  toHome() {

    this.router.navigate(['/home']);
  }

  isHome() {
    return this.router.isActive('/home', true);
  }
}
