import { NgModule } from "@angular/core";
import { ShoppingListComponent } from "./shopping-list.component";
import { AddItemComponent } from "./add-item/add-item.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        ShoppingListComponent,
        AddItemComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class ShoppingListModule{

}