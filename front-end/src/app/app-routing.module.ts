import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {YtdownComponent} from "./ytdown/ytdown.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [{
  path: '',
  component: HomeComponent
},{
  path: 'YouTubeDownloader',
  component: YtdownComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
