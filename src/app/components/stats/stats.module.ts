import {NgModule} from "@angular/core";
import {StatsComponent} from "./stats.component";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {ChartsModule} from "ng2-charts";
import {FormsModule} from "@angular/forms";
require("chart.js/dist/Chart.bundle.min.js")

const routes: Routes = [
  {path: '', component: StatsComponent}
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StatsComponent]
})
export class StatsModule { }
