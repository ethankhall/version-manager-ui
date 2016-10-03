import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomePageComponent } from "./home-page.component";
import { projectRoutes } from "./project-details/project-details.routing";

const appRoutes: Routes = [
    ...projectRoutes,
    {
        path: "",
        component: HomePageComponent
    }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
