import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {PortalModule} from '@angular/cdk/portal';
import {LayoutModule} from '@angular/cdk/layout';

import { SharedModule } from 'src/app/shared/shared.module';
import { ButtonsModule, TypographyModule } from 'src/app/widgets';

import { NavbarComponent } from './containers/navbar/navbar.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavbarItemComponent } from './components/navbar-item/navbar-item.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { SearchButtonComponent } from './components/search-button/search-button.component';
import { NavbarSectionComponent } from './components/navbar-section/navbar-section.component';
import { NavbarContainerComponent } from './components/navbar-container/navbar-container.component';
import { NavbarMobileComponent } from './containers/navbar-mobile/navbar-mobile.component';
import { NavbarDesktopComponent } from './containers/navbar-desktop/navbar-desktop.component';
import { NavbarMenuButtonComponent } from './components/navbar-menu-button/navbar-menu-button.component';
import { NavbarMenuComponent } from './components/navbar-menu/navbar-menu.component';
import { NavbarMenuItemComponent } from './components/navbar-menu-item/navbar-menu-item.component';

@NgModule({
  declarations: [
    NavbarComponent,
    LogoComponent,
    NavbarItemComponent,
    SearchbarComponent,
    SearchButtonComponent,
    NavbarSectionComponent,
    NavbarContainerComponent,
    NavbarMobileComponent,
    NavbarDesktopComponent,
    NavbarMenuButtonComponent,
    NavbarMenuComponent,
    NavbarMenuItemComponent
  ],
  imports: [
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatExpansionModule,
    PortalModule,
    LayoutModule,
    SharedModule,
    ButtonsModule,
    TypographyModule
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
