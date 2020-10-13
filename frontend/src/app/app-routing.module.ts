import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ClockComponent } from './views/clock/clock.component';
import { CounterComponent } from './views/counter/counter.component';
import { PomodoroWatchComponent } from './views/pomodoro-watch/pomodoro-watch.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "clock",
    component: ClockComponent
  },
  {
    path: "counter",
    component: CounterComponent
  },
  {
    path: "pomodoro-watch",
    component: PomodoroWatchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
