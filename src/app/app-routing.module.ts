import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { ElectronicsComponent } from "./electronics/electronics.component";
import { FoodComponent } from "./food/food.component";

const appRoutes : Routes = [
    { path: '', component: AppComponent },
    { path: 'food', component: FoodComponent },
    { path: 'electronics', component: ElectronicsComponent }  
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}