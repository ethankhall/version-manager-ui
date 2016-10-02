import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomePageComponent } from "./home-page.component";
import { projectRoutes, projectRouting } from "./crom-views/crom-view.routing";

const appRoutes: Routes = [
    ...projectRoutes,
    {
        path: '',
        component: HomePageComponent
    }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
