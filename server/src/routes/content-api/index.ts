export default () => ({
  type: 'content-api',
  routes: [
    {
      method: 'GET',
      path: '/',
      handler: 'controller.index',
      config: {
        policies: [],
      },
    },
    {
      method: 'POST',
      path: '/upload',
      handler: 'controller.upload',
      config: {
        policies: [],
      },
    },
  ],
});
