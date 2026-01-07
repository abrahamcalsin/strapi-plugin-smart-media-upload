export default {
  'content-api': {
    type: 'content-api',
    routes: [
      {
        method: 'GET',
        path: '/',
        handler: 'controller.index',
        config: {
          auth: false,
        },
      },
      {
        method: 'POST',
        path: '/upload-file',
        handler: 'controller.upload',
        config: {
          auth: false,
        },
      },
    ],
  },
};
