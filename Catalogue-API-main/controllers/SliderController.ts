import { Request, Response } from 'express';
import { Database } from '../utils/Database';

export async function getSliders(request: Request, response: Response) {
	try {
		const data = Database.instance.Catalogue.sliders;
		return response.json(data);
	} catch (error: any) {
		return response.status(500).json({ error: true, message: error.message });
	}
}

export async function addSlider(request: Request, response: Response) {
	try {
		const { image, productId } = request.body;
		const data = {
			productId,
			image,
		};
		Database.instance.Catalogue.sliders = [...Database.instance.Catalogue.sliders, data];

		Database.instance.save();
		return response.send();
	} catch (error: any) {
		return response.status(500).json({ error: true, message: error.message });
	}
}
