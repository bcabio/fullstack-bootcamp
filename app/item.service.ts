import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

@Injectable()
export class ItemService {

	constructor(private http: Http){

	}
		private url: string = 'http://localhost:5000/items';
	
    getItems(): Observable<Item>{
		// return this.http.get(this.url).toPromise().then((res: Response) => res.json().data);
		// console.log(this.http.get(this.url).map(response => response.json()));
		return this.http.get(this.url).map(response => response.json());
	}

	// getItemName(): string{
	// 	// return this.http.get(`${this.url}/${body['id']}`).map((res: Response) => res.json());
	// 	return "name";
	// }

	// getItemID(): string{
	// 	// return this.http.get(`${this.url}/${body['id']}`).map((res: Response) => res.json());
	// 	return "GTX_1080";
	// }

	// getItemImage(): string{
	// 	return 'GTX1080.jpeg';
	// }

	// getItemDescription(){
	// 	return " Real Base Clock: 1721 MHz / Real Boost Clock: 1860 MHz; Memory Detail: 8192MB GDDR5X\nCompletely adjustable RGB LED using EVGA Precision XOC\nWhat you see is what you get! – No additional software required to achieve listed clock speeds\nDouble BIOS, Refer user manual below\nDX12 OSD Support with EVGA Precision XOC";
	// }
}

export interface Item{
	ID: string;
	name: string;
	image_url: string;
	description: string;
}
