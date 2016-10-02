import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { CromProjectComponent } from "./crom-project/crom-project.component";
import { routing } from "./app.routing";
import { HomePageComponent } from "./home-page.component";
import { CromProjectService } from "./crom-project/crom-project.services";

@NgModule({
    imports: [BrowserModule, HttpModule, routing],
    declarations: [AppComponent, CromProjectComponent, HomePageComponent],
    providers: [CromProjectService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

