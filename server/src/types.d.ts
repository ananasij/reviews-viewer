import { Middleware } from 'koa';

export declare interface Route {
    path:       string | string[];
    method:     'get' | 'post';
    actions:    Middleware[];
}
