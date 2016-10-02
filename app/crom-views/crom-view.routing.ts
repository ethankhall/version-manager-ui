import { CromRepoComponent } from "./crom-repo.component";
import { CromProjectComponent } from "./crom-project.component";
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

export const projectRoutes: Routes = [{
    path: 'project/:projectName',
    children: [
        {
            path: '',
            component: CromProjectComponent
        },
        {
            path: ':repoName',
            component: CromRepoComponent
        }
    ]
}];

export const projectRouting: ModuleWithProviders = RouterModule.forChild(projectRoutes);