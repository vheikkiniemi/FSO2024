sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: Redirection to /exampleapp/notes ???
    deactivate server

Request URL:
https://studies.cs.helsinki.fi/exampleapp/new_note
Request Method:
POST
Status Code:
302 Found
Remote Address:
128.214.137.97:443
Referrer Policy:
strict-origin-when-cross-origin


    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes
    
    Browser: POST https://studies.cs.helsinki.fi/exampleapp/new_note --> Server: Redirection to /exampleapp/notes ???;
    Server: Redirection to /exampleapp/notes ??? --> Browser: GET https://studies.cs.helsinki.fi/exampleapp/notes;


Here is a simple flow chart:

```mermaid
graph TD;
    Server: POS --> Browser:;
    Browser: --> C;
```
