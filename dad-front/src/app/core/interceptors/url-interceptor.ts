import {HttpInterceptorFn} from '@angular/common/http';

const BASE_URL = 'http://localhost:8085'; // cámbialo por tu URL

export const urlInterceptor: HttpInterceptorFn = (req, next) => {
  if (!req.url.startsWith('http')) {
    const apiReq = req.clone({
      url: `${BASE_URL}/${req.url}`
    });
    return next(apiReq);
  }

  return next(req);
};
