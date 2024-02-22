import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

	produtos: string[] = [];
	menuType: string = 'diretor';

	constructor() {
		this.produtos = [
			'Mouse',
			'Teclado',
			'Cabos',
			'Fonte'
		];
	}

	adicionar() {
		this.produtos.push(`Produto ${this.produtos.length}`);
	}

	remover(index: number) {
		this.produtos.splice(index, 1);
	}

}
