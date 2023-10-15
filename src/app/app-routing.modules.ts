import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevoirsComponent } from './devoirs/devoirs.component';

const routes: Routes = [
    {
        path: "devoirs", component: DevoirsComponent
    }
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRootingModule { }