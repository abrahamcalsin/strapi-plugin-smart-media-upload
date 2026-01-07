import type { Core } from '@strapi/strapi';

const bootstrap = ({ strapi }: { strapi: Core.Strapi }) => {
  strapi.log.info('Media Upload Plugin: Bootstrapping...');
};

export default bootstrap;
