import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './views/list/list.component';
import { PartComponent } from './views/part/part.component';

const routes: Routes = [
  {
  path: "",
  component: ListComponent
  },
  {
    path: "part_id",
    component: PartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
