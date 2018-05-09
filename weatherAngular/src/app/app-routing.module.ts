import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BurbankComponent } from './burbank/burbank.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { SeattleComponent } from './seattle/seattle.component';
import { WashingtonDcComponent } from './washington-dc/washington-dc.component';

const routes: Routes = [
  { path: "burbank", component: BurbankComponent },
  { path: "chicago", component: ChicagoComponent },
  { path: "dallas", component: DallasComponent },
  { path: "san-jose", component: SanJoseComponent },
  { path: "seattle", component: SeattleComponent },
  { path: "washington-dc", component: WashingtonDcComponent },
  { path: "", pathMatch: "full", component: SanJoseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
