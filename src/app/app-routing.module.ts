import { HistoryComponent } from './components/history/history.component';
import { FutureLaunchesComponent } from './components/launches/future-launches/future-launches.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main.component';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { PastLaunchesComponent } from './components/launches/past-launches/past-launches.component';

const routes: Routes = [
   { path: '', component : MainComponent, data:{title:'Home'} },
   { path: 'past', component: PastLaunchesComponent, data:{title:'Past Launches'}},
   { path: 'future', component: FutureLaunchesComponent, data:{title:'Future Launches'}},
   { path: 'history', component: HistoryComponent, data:{title:'History'}},
   { path: '**', redirectTo: '' } 
];

@NgModule({
  imports: [ 
    CommonModule,
    ComponentsModule,
    RouterModule.forRoot(routes)],
  exports: [CommonModule,
    ComponentsModule,
    RouterModule]
})
export class AppRoutingModule { }
