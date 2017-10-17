import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Component({
  selector: "app-subcomponent",
  templateUrl: "./subcomponent.component.html",
  styleUrls: ["./subcomponent.component.css"]
})
export class SubcomponentComponent implements OnInit {
  constructor(private http: HttpClient) {}
  title: Observable<string>;

  ngOnInit() {
    const headers = new HttpHeaders().set("Add-Prefix", "1");
    this.title = this.http
      .get<any>("/books/v1/volumes?q=tolkien", { headers })
      .map(results => {
        return results.items[0].volumeInfo.title;
      });
  }
}
