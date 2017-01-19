import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', redirectTo: 'admin', pathMatch: 'full'},
    { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' },
    { path: 'global', loadChildren: 'app/global/global.module#GlobalModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes /*,{ useHash: true }*/)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
