import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { CromProjectComponent } from "./crom-project/crom-project.component";
import { HomePageComponent } from "./home-page.component";

const appRoutes: Routes = [
    {
        path: 'projects',
        component: CromProjectComponent
    },
    {
        path: '',
        component: HomePageComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
