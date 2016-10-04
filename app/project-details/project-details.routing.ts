import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { RepoComponent } from "./repo.component";
import { ProjectListComponent } from "./project-list.component";
import { VersionComponent } from "./version.component";
import { RepoListComponent } from "./repo-list.component";

export const projectRoutes: Routes = [{
    path: "project",
    children: [
        { path: "", component: ProjectListComponent },
        {
            path: ':projectName',
            children: [
                { path: "", component: RepoListComponent },
                {
                    path: ":repoName",
                    children: [
                        {
                            path: "",
                            component: RepoComponent
                        },
                        {
                            path: ":versionId",
                            component: VersionComponent
                        }
                    ]
                }
            ]
        }
    ]
}];

export const projectRouting: ModuleWithProviders = RouterModule.forChild(projectRoutes);