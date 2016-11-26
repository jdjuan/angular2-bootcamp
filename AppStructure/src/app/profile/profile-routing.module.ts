import { ProfileComponent } from './profile.component';
import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'profile', component: ProfileComponent }
  ])],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}