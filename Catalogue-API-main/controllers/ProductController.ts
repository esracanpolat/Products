import { Request, Response } from 'express';
import { Database } from '../utils/Database';

export async function getProducts(request: Request, response: Response) {
	try {
		const { id } = request.params;
		const data = Database.instance.Catalogue.products.filter(
			product => product.category.toString() === id.toString()
		);
		return response.json(data);
	} catch (error: any) {
		return response.status(500).json({ error: true, message: error.message });
	}
}

export async function getProduct(request: Request, response: Response) {
	try {
		const { id } = request.params;

		const products = Database.instance.Catalogue.products;
		const data = products.find(product => product.id.toString() === id.toString());
		if (!data) {
			return response.status(404).json({ error: true, message: 'Cant find category' });
		}
		return response.json(data);
	} catch (error: any) {
		return response.status(500).json({ error: true, message: error.message });
	}
}

export async function addProduct(request: Request, response: Response) {
	try {
		const { name, description, category, price } = request.body;
		const data = {
			name,
			description,
			category,
			price,
			id: Math.round(Math.random() * 1000000000),
			isFavorite: false,
		};
		Database.instance.Catalogue.products = [...Database.instance.Catalogue.products, data];

		Database.instance.save();
		return response.send();
	} catch (error: any) {
		return response.status(500).json({ error: true, message: error.message });
	}
}
