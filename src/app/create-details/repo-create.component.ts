import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { RepoApiService } from "../services/rest-api/repo-api.services";
import { ConstantApiService, BumperList } from "../services/rest-api/constant-api.services";

@Component({
    templateUrl: "repo-create.component.html"
})
export class RepoCreateComponent implements OnInit {

    projectName: String = "";
    form: FormGroup;
    bumpers: BumperList = new BumperList();

    constructor(private repoService: RepoApiService, private router: Router, fb: FormBuilder,
                private route: ActivatedRoute, private constantApi: ConstantApiService) {
        this.form = fb.group({
            "repoName": ["", Validators.required],
            "scmUrl": [""],
            "bumper": ["", Validators.required]
        });
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.projectName = params["projectName"];
        });

        this.constantApi.findAllVersionBumpers().then(result => {
            console.log(result);
            this.bumpers = result
        });
    }

    onSubmit(): void {
        // this.repoService.createRepo(this.form.value.repoName).then(result => {
        //     if(result == ProjectCreateResponse.REJECTED) {
        //         window.alert("Unable to create project with name " + this.form.value.projectName);
        //     } else {
        //         this.router.navigate(['/project', this.form.value.projectName])
        //     }
        // });
    }
}
