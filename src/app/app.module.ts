import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { ShareButtonsModule } from "ngx-sharebuttons";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";

const appRoutes: Routes = [
  {
    path: "",
    component: MainComponent
  },
  {
    path: "subroute",
    loadChildren: "./submodule/submodule.module#SubmoduleModule"
  }
];
@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [
    BrowserModule,
    CoreModule,
    ShareButtonsModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MainComponent]
})
export class AppModule {}
