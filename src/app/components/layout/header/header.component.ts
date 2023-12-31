import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IRouter } from 'src/app/interface/router.interface';
import { RouterService } from 'src/app/service/router-service/router.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  routes: IRouter[] = this.routerService.routes;
  routeHistory$: Observable<IRouter[]> = this.routerService.getHistory();
  constructor(private routerService: RouterService) {}

  navigateTo(route: IRouter): void {
    this.routerService.navigateTo(route);
  }
  removeRouteHistory(route: IRouter): void {
    this.routerService.deleteFromHistory(route);
  }
}
