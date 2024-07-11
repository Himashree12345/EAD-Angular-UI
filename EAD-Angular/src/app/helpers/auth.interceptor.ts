import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LocalStorageService, StorageKeys } from '../services/local-storage.service';
import { User } from '../models/model';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const _storage = inject(LocalStorageService);
  const authToken = _storage.get(StorageKeys.Token);
  const user = _storage.get<User>(StorageKeys.User);

  if (authToken) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`,
        AccountId: user.accountId.toString(),
        UserId: user.id.toString(),
        ShowActualError: "true"
      }
    });
    return next(authReq);
  }

  // If no token is present, proceed with the original request
  return next(req);
};
