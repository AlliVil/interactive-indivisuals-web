import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { FooterComponent } from './containers/footer/footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    SharedModule
  ],
  exports: [FooterComponent]
})
export class FooterModule { }
