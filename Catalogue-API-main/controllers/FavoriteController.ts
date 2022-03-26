import { Request, Response } from 'express';
import { Database } from '../utils/Database';

export async function addToFavorite(request: Request, response: Response) {
	try {
		const { productId } = request.body;
		console.log(productId);
		// Change only given product
		Database.instance.Catalogue.products = Database.instance.Catalogue.products.map(product => {
			if (product.id.toString() === productId.toString()) {
				product = {
					...product,
					isFavorite: !product.isFavorite,
				};
			}
			return product;
		});

		Database.instance.save();
		return response.send();
	} catch (error: any) {
		return response.status(500).json({ error: true, message: error.message });
	}
}

export async function getFavorites(request: Request, response: Response) {
	try {
		const data = Database.instance.Catalogue.products.filter(
			product => product.isFavorite
		);
		return response.json(data);
	} catch (error: any) {
		return response.status(500).json({ error: true, message: error.message });
	}
}