import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
	@Input()
	photoCover:string=""
	@Input()
	contentTitle:string=""
	@Input()
	contentDescription:string="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
	private id:string | null="0"

  constructor(
		private route:ActivatedRoute
	) { }

  ngOnInit(): void {
		this.route.paramMap.subscribe( value =>
			this.id = value.get("id")
		)
		this.setValuesComponent(this.id)
  }

	setValuesComponent(id:string | null){
		const result = dataFake.filter(article =>  article.id == id)[0]
		this.contentTitle = result.title
		this.contentDescription = result.description
		this.photoCover = result.photoCover
	}

}
