import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipstercrudSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [JhipstercrudSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class JhipstercrudHomeModule {}
