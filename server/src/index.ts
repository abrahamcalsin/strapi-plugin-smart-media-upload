import type { Core } from '@strapi/strapi';

import bootstrap from './bootstrap';
import destroy from './destroy';
import register from './register';

import config from './config';
import contentTypes from './content-types';
import controllers from './controllers';
import middlewares from './middlewares';
import policies from './policies';
import routes from './routes';
import services from './services';

export default {
  register,
  bootstrap,
  destroy,
  config,
  controllers: controllers as any,
  routes,
  services: services as any,
  contentTypes,
  policies: policies as any,
  middlewares: middlewares as any,
};
