import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()
export class TestInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // FIXME not for checking current user
    if (req.headers.has("Add-Prefix")) {
      const headers = req.headers.delete("Add-Prefix");
      const prefixedRequest = req.clone({
        url: "https://www.googleapis.com" + req.url,
        headers
      });
      return next.handle(prefixedRequest);
    } else {
      return next.handle(req);
    }
  }
}
