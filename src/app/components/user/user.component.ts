'use strict';

import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	name:string;
	age:number;
	hobbies:string[];
	posts:Post[];

	constructor(private dataService:DataService) { }

	ngOnInit() {
		this.name = "Khoi";
		this.age = 28;
		this.hobbies = ['game','computer','astronomy'];
		this.dataService.getPost().subscribe((posts)=>{
			this.posts=posts;
		});

	}

	addHobby(hobby){
		this.hobbies.push(hobby);
		return false;
	}

	deleteHobby(i){
		this.hobbies.splice(i,1);
		return false;
	}

}

interface Post{
	id:number,
	title:string,
	body:string,
	userId:number
}

// aAsync().then(() => bAsync()).then(() => cAsync()).done(() => finish);