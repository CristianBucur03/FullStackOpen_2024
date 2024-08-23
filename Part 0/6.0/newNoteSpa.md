Browser->>Server: HTTPS https://studies.cs.helsinki.fi/exampleapp/spa
Server-->>Browser: spa HTML
Browser->>Server:HTTPS GET https://studies.cs.helsinki.fi/exampleapp/main.css
Server-->>Browser: main.css
Browser->>Server: HTTPS GET https://studies.cs.helsinki.fi/exampleapp/spa.js
Server-->>Browser: spa.js
Browser->>Server: HTTPS GET https://studies.cs.helsinki.fi/exampleapp/data.json
Server-->>Browser: data.json
Browser->> Server: HTTPS GET https://studies.cs.helsinki.fi/favicon.ico
Server-->> Browser: 404 Not Found
Browser->>Server: HTTPS POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa\nContent-Type: application/json\n\n{"content":"NewSpa","date":"2024-08-23T12:47:21.220Z"}
Server-->>Browser: HTTP 200 OK\nContent-Type: application/json\n\n{"message":"note created"}
