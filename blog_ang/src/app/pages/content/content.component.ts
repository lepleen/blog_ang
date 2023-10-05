import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
	@Input()
	photoCover:string="https://uploads.jovemnerd.com.br/wp-content/uploads/2017/06/doctor-who-all-doctors.png"
	@Input()
	contentTitle:string="What is Lorem Ipsum?"
	@Input()
	contentDescription:string="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

  constructor(
		private route:ActivatedRoute
	) { }

  ngOnInit(): void {
		this.route.paramMap.subscribe(value =>
			console.log(value.get("id"))
		)
  }

}
