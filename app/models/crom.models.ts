export class ProjectDetails {
    name: String;
    repos: RepoName[];
}

export class RepoName {
    name: String;
}

export class RepoDetails {
    projectName: string;
    repoName: string;
    url: string;
    permissions: Permission[];
}

export class Permission {
    permission: string;
}

export class Version {
    commitId: string;
    version: string;
    createdAt: string;
    versionParts: string[];
}