import { TaskPageComponent } from './features/tasks/pages/task-page/task-page.component';
import { LoginPageComponent } from './features/login/pages/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'tasks', component: TaskPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
