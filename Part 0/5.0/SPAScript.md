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
