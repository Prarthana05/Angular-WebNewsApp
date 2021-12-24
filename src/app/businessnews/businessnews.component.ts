import { Component, OnInit } from '@angular/core';
import {NewsapiserviceService} from '../service/newsapiservice.service';
@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.css']
})
export class BusinessnewsComponent implements OnInit {

  constructor(private _service:NewsapiserviceService) { }
  businessnewsDisplay:any = [];
  ngOnInit(): void {
    this._service.businessNews().subscribe((result)=>{
      // console.log(result);
      this.businessnewsDisplay=result.articles;
  })

}
}
