<p align="center">
  <img src="https://res.cloudinary.com/abrahamcalsin/image/upload/v1767803355/Smart%20Media%20Upload%20-%20NPM/smart-media-upload-logo_mskpi4.png" width="120" alt="Smart Media Upload Logo">
</p>

<h1 align="center">Strapi Plugin Smart Media Upload (v5)</h1>

<p align="center">An advanced Strapi v5 plugin that provides an intelligent API endpoint for direct file uploads to specific folders in the Media Library.</p>

## Features

- **Precise Folder Targeting**: Automate file organization by uploading directly to any `folderId`.
- **Dedicated API Endpoint**: Clean and separate `POST /api/smart-media-upload/upload-file`.
- **Strapi v5 Native**: Leveraging the latest Strapi architecture for maximum performance.
- **Robust Multi-part Detection**: Smartly handles `file` and `files` payloads.
- **Developer Friendly**: Simplified integration for mobile apps and external frontends.

## Installation

```bash
# Using pnpm
pnpm add strapi-plugin-smart-media-upload

# Using npm
npm install strapi-plugin-smart-media-upload
```

## Configuration

Enable the plugin in `config/plugins.ts`:

```typescript
export default {
  // ...
  'smart-media-upload': {
    enabled: true,
  },
  // ...
};
```

## Usage

### Direct Upload via API

Send a `POST` request to `/api/smart-media-upload/upload-file` with `multipart/form-data`.

**Body Parameters:**

- `file` (File): The file you want to upload.
- `folderId` (string/number, optional): The ID of the folder in the Media Library where the file should be saved.

**Example with Fetch:**

```javascript
const formData = new FormData();
formData.append('file', fileInput.files[0]);
formData.append('folderId', '4');

const response = await fetch('http://localhost:1337/api/smart-media-upload/upload-file', {
  method: 'POST',
  body: formData,
});

const data = await response.json();
console.log(data);
```

## Permissions

By default, the endpoint is public (`auth: false`). You can customize this in the plugin's route configuration if you need to restrict access to authenticated users or specific roles.

## License

MIT
