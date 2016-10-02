import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { RepoComponent } from "./repo.component";
import { ProjectComponent } from "./project.component";
import { VersionComponent } from "./version.component";

export const projectRoutes: Routes = [{
    path: 'project/:projectName',
    children: [
        {
            path: '',
            component: ProjectComponent
        },
        {
            path: ':repoName',
            children: [
                {
                    path: '',
                    component: RepoComponent
                },
                {
                    path: ':versionId',
                    component: VersionComponent
                }
            ]
        }
    ]
}];

export const projectRouting: ModuleWithProviders = RouterModule.forChild(projectRoutes);