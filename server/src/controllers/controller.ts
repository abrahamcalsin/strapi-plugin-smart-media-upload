export default {
  index(ctx) {
    ctx.body = 'Media Upload Plugin is running';
  },

  async upload(ctx) {
    try {
      // In Strapi v5, files are in ctx.request.files
      const requestFiles = ctx.request.files;
      const requestBody = ctx.request.body;

      // Check multiple possible locations for files (robust detection)
      const files =
        requestFiles?.file || requestFiles?.files || requestBody?.files || requestBody?.file;
      const folderId = requestBody?.folderId;

      if (!files) {
        strapi.log.warn('Media Upload: No files found in request');
        return ctx.throw(
          400,
          'No files were uploaded. Please ensure you are sending "file" or "files" in a form-data request.'
        );
      }

      const uploadService = strapi.plugin('upload').service('upload');
      const filesToUpload = Array.isArray(files) ? files : [files];

      strapi.log.info(
        `Media Upload: Uploading ${filesToUpload.length} file(s) to folder: ${folderId || 'default'}`
      );

      const uploadedFiles = await uploadService.upload({
        data: {
          fileInfo: {
            folder: folderId ? parseInt(folderId, 10) : undefined,
          },
        },
        files: filesToUpload,
      });

      ctx.body = uploadedFiles;
    } catch (error: any) {
      strapi.log.error('Media Upload Error:', error);

      if (error.status && error.status < 500) {
        throw error;
      }

      ctx.throw(500, error instanceof Error ? error.message : 'Internal Server Error');
    }
  },
};
