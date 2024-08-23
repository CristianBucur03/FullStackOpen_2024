Browser->>Server: HTTPS POST https://studies.cs.helsinki.fi/exampleapp/notes
Server-->>Browser:
Browser->>Server:HTTPS GET https://studies.cs.helsinki.fi/exampleapp/notes
Server-->>Browser: HTML code
Browser->>Server: HTTPS GET https://studies.cs.helsinki.fi/exampleapp/main.css
Server-->>Browser: css code. main.css
Browser->>Server: HTTPS GET https://studies.cs.helsinki.fi/exampleapp/main.js
Server-->>Browser: javaScript code. main.js
Browser->> Server: HTTPS GET https://studies.cs.helsinki.fi/exampleapp/data.json
Server-->> Browser: data.json [...Object { content: "tt", date: "2024-08-23T12:11:47.723Z" }]
Browser->> Server: HTTPS GET https://studies.cs.helsinki.fi/favicon.ico
Server-->>Browser: HTML code
