import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {YtdownComponent} from "./ytdown/ytdown.component";
import {HomeComponent} from "./home/home.component";
import {SearchTrendsComponent} from "./search-trends/search-trends.component";

const routes: Routes = [{
  path: '',
  component: HomeComponent
},{
  path: 'YouTube-Downloader',
  component: YtdownComponent
},{
  path: 'search-trends',
  component: SearchTrendsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
