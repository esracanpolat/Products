import fs from 'fs';

export interface Catalogue {
	products: Array<Product>;
	categories: Array<Category>;
	sliders: Array<Slider>;
}

export interface Product {
	id: number;
	name: string;
	description: string;
	price: number;
	category: number;
	isFavorite: boolean;
}

export interface Category {
	id: number;
	name: string;
	description: string;
}

export interface Slider {
	image: string;
	productId: number;
}

const DB_FILE = process.cwd() + '/db.json';

export class Database {
	private catalogue: Catalogue;
	static database: Database;
	static get instance() {
		if (this.database === undefined || this.database === null) {
			this.database = new Database();
		}
		return this.database;
	}

	constructor() {
		this.catalogue = this.load();
	}

	load(): Catalogue {
		const file = fs.readFileSync(DB_FILE);
		return JSON.parse(file.toString()) as Catalogue;
	}

	get Catalogue(): Catalogue {
		return this.catalogue;
	}

	set Catalogue(catalogue: Catalogue) {
		this.catalogue = catalogue;
	}

	save() {
		const json = JSON.stringify(this.catalogue);
		fs.writeFileSync(DB_FILE, json, 'utf8');
	}
}
