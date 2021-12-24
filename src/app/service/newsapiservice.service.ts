import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {

  constructor(private _http:HttpClient) { }
    newsApiUrl="https://newsapi.org/v2/top-headlines?country=in&apiKey=bb0b36ca920d4fb9a56e6c2103d7a7d9"

    //tech api

    techApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=bb0b36ca920d4fb9a56e6c2103d7a7d9"

    //business api

    buisnessUrl="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=bb0b36ca920d4fb9a56e6c2103d7a7d9"
    
  topHeading():Observable<any>{  
  return this._http.get(this.newsApiUrl)

  }

  techNews():Observable<any>
  {
    return this._http.get(this.techApiUrl)
  }

  businessNews():Observable<any>{
    return this._http.get(this.buisnessUrl)
  }

}
