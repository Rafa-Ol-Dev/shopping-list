import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyShoppingListComponent } from "./my-shopping-list/my-shopping-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyShoppingListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shopping-list';
}
