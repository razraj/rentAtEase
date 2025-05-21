# Pocketbase Backend

Run this application on a MacOS ARM64 machine.
PocketBase is an open source backend consisting of embedded database (SQLite).

## What's inside?

Custom Bakend API with Database integration.

### Develop

Start the application by running.

```
./pocketbase serve
```

```
http://127.0.0.1:8090 - if pb_public directory exists, serves the static content from it (html, css, images, etc.)
http://127.0.0.1:8090/_/ - superusers dashboard
http://127.0.0.1:8090/api/ - REST-ish API

```

### Important Links

- [Pocketbase](https://pocketbase.io/) Pocketbase backend

### Files

Each uploaded file could be accessed by requesting its file url:
http://127.0.0.1:8090/api/files/COLLECTION_ID_OR_NAME/RECORD_ID/FILENAME

If your file field has the Thumb sizes option, you can get a thumb of the image file by adding the thumb query parameter to the url like this: http://127.0.0.1:8090/api/files/COLLECTION_ID_OR_NAME/RECORD_ID/FILENAME?thumb=100x300

### TODO

- signup verification skipped for now.
- check [Add paths](https://ui.tailus.io/react/get-started/installation/)
