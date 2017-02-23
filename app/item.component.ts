import { Component } from '@angular/core'
import { ItemService, Item } from './item.service'

@Component({
	selector: 'item',
	template: `
		<div class="item" id="{{ID}}">
            <img src="res/{{image_url}}" class="item-image">
            <h3>{{name}}</h3>
            <ul class="item-text"></ul>
            <button>Add to cart</button>
        </div>
        `,
    providers: [ItemService]
})
export class ItemComponent{
	ID: string;
	name: string;
	image_url: string;
	description: string;
	item: Item;
	constructor(itemService :ItemService){

		itemService.getItems().subscribe(
			item => {console.log(item.description)},
			error => console.error('Error: '), 
			() => console.log("completed!")
			);
		// console.log(item);
		console.log(this.item);
		// this.name = this.item.name;
		// this.ID = this.item.ID;
		// this.image_url = this.item.image_url;
		// this.description = this.item.description;

		// this.item = itemService.getItems();
		// this.ID = itemService.getItemID();
		// this.name = itemService.getItemName();
		// this.image_url = itemService.getItemImage();
		// this.description = itemService.getItemDescription();
	} 
}