import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { ProjectCreateComponent } from "./project-create.component";
import { CanActivateLoggedInUser } from "../services/can-activate-loggedin-user";

export const createRoutes: Routes = [{
    path: "create",
    children: [
        { path: "project", component: ProjectCreateComponent, canActivate: [CanActivateLoggedInUser] }
    ]
}];

export const createRouting: ModuleWithProviders = RouterModule.forChild(createRoutes);