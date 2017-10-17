import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SubcomponentComponent } from "./subcomponent/subcomponent.component";
import { RouterModule, Routes } from "@angular/router";
import { ShareButtonsModule } from "ngx-sharebuttons";

const routes: Routes = [{ path: "", component: SubcomponentComponent }];

@NgModule({
  // If you remove ShareButtonsModule in the imports here, the http
  // request works
  imports: [CommonModule, RouterModule.forChild(routes), ShareButtonsModule],
  declarations: [SubcomponentComponent],
  exports: [SubcomponentComponent],
  entryComponents: [SubcomponentComponent]
})
export class SubmoduleModule {}
