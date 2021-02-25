import { MobileviewComponent } from './mobileview/mobileview.component';
import { DesktopviewComponent } from './desktopview/desktopview.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, Router, RouterModule, Routes } from '@angular/router';
import { ApplicationStateService } from './application-state.service';


const desktop_routes: Routes = [
  { path: '', component: DesktopviewComponent }
];

const mobile_routes: Routes = [
  { path: '', component: MobileviewComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(desktop_routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  public constructor(private router: Router,
    private applicationStateService: ApplicationStateService) {

    if (applicationStateService.getIsMobileResolution()) {
      router.resetConfig(mobile_routes);
    }
  }
}
