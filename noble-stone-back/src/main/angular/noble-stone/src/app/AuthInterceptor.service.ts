import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { Observable } from "rxjs";




export function AuthInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
    
    const authToken = localStorage.getItem("token") as string;

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    if (req.url == "/api/items/getallitems" || req.url == "/api/auth/authenticate" || req.url == "/api/quotes/savequote"){
      return next(req);
    }
    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + authToken)
    });

    return next(authReq);
  }

  export const hasTokennGuard: CanActivateFn = (state) => {
    const router: Router = inject(Router);

    const hasTokennGuard = localStorage.getItem("token") ? true : false;
  
    return hasTokennGuard || router.navigate(['unauthorized']);
  };