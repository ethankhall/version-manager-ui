import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { ServicesModule } from "../services/services.module";
import { createRouting} from "./create-details.routing";
import { ProjectCreateComponent } from "./project-create.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CanActivateLoggedInUser } from "../services/can-activate-loggedin-user";

@NgModule({
    imports: [BrowserModule, HttpModule, ServicesModule, createRouting, FormsModule, ReactiveFormsModule],
    declarations: [ProjectCreateComponent],
    providers: [CanActivateLoggedInUser]
})
export class CreateDetailsModule {}