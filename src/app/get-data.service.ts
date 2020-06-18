import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class GetDataService {
  constructor(private _http: HttpClient) {}

  greet() {
    return this._http.get(
      "https://opentdb.com/api.php?amount=10&category=21&difficulty=medium"
    );
  }
}
