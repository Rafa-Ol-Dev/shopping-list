// SHOPPING LIST

// DESCRIÇÃO: Uma aplicação para gerenciar uma lista de compras.
 
// FUNCIONALIDADES:
// Adicionar itens à lista de compras.
// Marcar itens como comprados.
// Remover itens da lista.

// *PASSOS RECOMENDADOS*
// 1. Montar fixo, com valores fixos;
// 2. Deixar a estrutura com os dados vindo dinamicamente (Já ensinado nas aulas);
// 3. Implementar as funcionalidades (Parte já apresentada na aula [o que não souber, primeiro pesquisar nas fontes recomendadas: Fóruns, documentação, chatgpt; então, se não conseguir, me pedir ajuda {@Gabriel}]).

import { Component } from '@angular/core';
import { MainContentComponent } from "./items/items.component";

@Component({
  selector: 'app-my-shopping-list',
  standalone: true,
  imports: [MainContentComponent],
  templateUrl: './my-shopping-list.component.html',
  styleUrl: './my-shopping-list.component.scss'
})
export class MyShoppingListComponent {
  listTitle = 'SHOPPING LIST'
  listItems:string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4']
}
