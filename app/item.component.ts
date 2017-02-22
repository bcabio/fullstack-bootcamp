import { Component } from '@angular/core'
import { ItemService } from './item.service'

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
	// item: Object;
	name: string;
	image_url: string;
	description: string;
	constructor(itemService :ItemService){
		// let item = itemService.getItems();
		// console.log(item.description);
		
		this.ID = itemService.getItemID();
		this.name = itemService.getItemName();
		this.image_url = itemService.getItemImage();
		this.description = itemService.getItemDescription();
	} 
}