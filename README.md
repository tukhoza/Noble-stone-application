# Noble-stone-application
Web application that provides business services such as photography, videography, and graphic design. Based on clients' interests, users can request a quotation through the application. The app includes a dashboard for the team to monitor, manage, and respond to client requests, track request status, and communicate with clients.

Technologies
- Language: Java (backend), TypeScript (frontend)
- Frameworks: Spring Boot (backend), Angular (frontend)
- Deployment: Angular application is embedded into the Spring Boot application (served as static assets)
- Database: H2 (in-memory) for development

Notes
- The project uses Spring Boot to run the Java backend and serve the built Angular frontend.
- H2 is configured for development; switch to a production-ready database
