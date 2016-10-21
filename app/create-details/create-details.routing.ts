import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { ProjectCreateComponent } from "./project-create.component";

export const createRoutes: Routes = [{
    path: "create",
    children: [
        { path: "project", component: ProjectCreateComponent },
    ]
}];

export const createRouting: ModuleWithProviders = RouterModule.forChild(createRoutes);