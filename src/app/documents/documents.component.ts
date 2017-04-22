import { Component } from '@angular/core';
import { Document } from './document';

@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
		pageTitle: string = "Freelance Dashboard"
	   documents: Document[] = [ 
	   	{ 
	   		title: "My First Doc", 
	   	  description: "afdasdf l;akdjas;fjd", 
	   	  file_url: "http://google.com", 
	   	  updated_at: '11/11/16', 
	   	  image_url: "https://cdn.pixabay.com/photo/2014/09/24/14/29/mac-459196_960_720.jpg",
	   	},
	   	{ 
	   		title: "My Second Doc", 
	   	  description: "afdasdf l;akdjas;fjd", 
	   	  file_url: "http://google.com", 
	   	  updated_at: '11/11/16', 
	   	  image_url: "https://cdn.pixabay.com/photo/2014/12/27/15/31/camera-581126_960_720.jpg",
	   	},
	   	{ 
	   		title: "My Last Doc", 
	   	  description: "afdasdf l;akdjas;fjd", 
	   	  file_url: "http://google.com", 
	   	  updated_at: '11/11/16', 
	   	  image_url: "https://cdn.pixabay.com/photo/2015/01/01/23/04/mouse-586244_960_720.jpg",
	   	}
		]
}