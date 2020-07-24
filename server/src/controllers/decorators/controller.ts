import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';
import { NextFunction, Request, Response, RequestHandler } from 'express';

function bodyValidators(keys: string[]): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      res.status(422).send('Invalid Request');
      return;
    }
    for (const key of keys) {
      if (!req.body[key]) {
        res.status(422).send('Missing property ${key}');
        return;
      }
    }
    next();
  };
}

export function controller(routePrefix: string) {
  return function (constructor: Function) {
    const router = AppRouter.getInstance();
    for (const key in constructor.prototype) {
      const routeHandler = constructor.prototype[key];
      const path = Reflect.getMetadata(
        MetadataKeys.path,
        constructor.prototype,
        key
      );
      const method: Methods = Reflect.getMetadata(
        MetadataKeys.method,
        constructor.prototype,
        key
      );
      const middlewares =
        Reflect.getMetadata(
          MetadataKeys.middleware,
          constructor.prototype,
          key
        ) || [];
      const requiredBodyProps =
        Reflect.getMetadata(
          MetadataKeys.validator,
          constructor.prototype,
          key
        ) || [];

      const validator = bodyValidators(requiredBodyProps);
      if (path) {
        router[method](
          routePrefix + path,
          ...middlewares,
          validator,
          routeHandler
        );
      }
    }
  };
}
