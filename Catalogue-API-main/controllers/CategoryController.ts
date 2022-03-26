import { Request, Response } from 'express';
import { Database } from '../utils/Database';

export async function getCategories(request: Request, response: Response) {
	try {
		const data = Database.instance.Catalogue.categories;
		return response.json(data);
	} catch (error: any) {
		return response.status(500).json({ error: true, message: error.message });
	}
}

export async function getCategory(request: Request, response: Response) {
	try {
		const { id } = request.params;

		const categories = Database.instance.Catalogue.categories;
		const data = categories.find(category => category.id.toString() === id.toString());
		if (!data) {
			return response.status(404).json({ error: true, message: 'Cant find category' });
		}
		return response.json(data);
	} catch (error: any) {
		return response.status(500).json({ error: true, message: error.message });
	}
}

export async function addCategory(request: Request, response: Response) {
	try {
		const { name, description } = request.body;
		const data = {
			name,
			description,
			id: Math.round(Math.random() * 1000000000),
		};
		Database.instance.Catalogue.categories = [...Database.instance.Catalogue.categories, data];

		Database.instance.save();
		return response.send();
	} catch (error: any) {
		return response.status(500).json({ error: true, message: error.message });
	}
}
