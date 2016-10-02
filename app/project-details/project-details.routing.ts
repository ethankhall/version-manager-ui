import { RepoComponent } from "./repo.component";
import { ProjectComponent } from "./project.component";
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

export const projectRoutes: Routes = [{
    path: 'project/:projectName',
    children: [
        {
            path: '',
            component: ProjectComponent
        },
        {
            path: ':repoName',
            component: RepoComponent
        }
    ]
}];

export const projectRouting: ModuleWithProviders = RouterModule.forChild(projectRoutes);