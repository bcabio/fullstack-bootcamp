import { Component } from '@angular/core'
import { ItemService, Item } from './item.service'

@Component({
	selector: 'item',
	template: `

		<div *ngFor="let item of itemList" class="item" id="{{item.ID}}">
            <img src="res/{{item.image_url}}" class="item-image">
            <h3>{{item.name}}</h3>
            <ul class="item-text">{{item.description}}</ul>
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
	// item: Item;
	itemList: Array<Item> = []; 
	constructor(itemService :ItemService){

		itemService.getItems().subscribe(
			res => {
				let tempItem: Item;
				console.log(this.itemList);
				for(var k in res){
					tempItem = res[k];
					this.itemList.push(tempItem);
				}
				console.log(this.itemList);
			},
			error => console.error('Error: '), 
			() => console.log("completed!")
			);
		// console.log(item);
		// console.log(this.item);
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