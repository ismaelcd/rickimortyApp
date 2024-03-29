import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-form-search',
	template: `<input
		#inputSearch
		autofocus
		type="text"
		class="form-control-lg"
		placeholder="Search..."
		(keyup)="onSearch(inputSearch.value)"
	/>`,
	styles: ['input {width:100%}'],
})
export class FormSearchComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit(): void {}

	/* escuchamos al form y lo pasamos como parametro a la url */
	onSearch(value: string) {
		console.log('Buscar=>', value);

		if (value && value.length > 3) {
			this.router.navigate(['/character-list'], {
				queryParams: { q: value },
			});
		}
	}
}
