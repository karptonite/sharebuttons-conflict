import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}
  title: Observable<string>;

  ngOnInit() {
    const headers = new HttpHeaders().set("Add-Prefix", "1");
    this.title = this.http
      .get<any>("/books/v1/volumes?q=Karenina", { headers })
      .map(results => {
        return results.items[0].volumeInfo.title;
      });
  }
}
