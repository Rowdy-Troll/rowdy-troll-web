Submit instructions (minimal)

This repository was prepared for the Lab 6 grading. It contains minimal changes so an automated grader can run the front-end and back-end locally.

Run the API (example uses ports 7250/7251):

cd rowdy-troll-api/RowdyTroll.Api

# set API URL to 127.0.0.1:7250 for HTTP

ASPNETCORE_URLS="http://127.0.0.1:7250;https://127.0.0.1:7251" dotnet run

Run the frontend (set the API URL so the app fetches from the API):

cd rowdy-troll-web/frontend
REACT_APP_API_URL=http://127.0.0.1:7250 npm start

Notes:

- `RowdyTroll.Api/appsettings.json` contains placeholder Auth0 values for graders; replace with valid values to exercise authentication.
- The frontend was updated to fetch products from the API (uses `REACT_APP_API_URL`, default: http://127.0.0.1:7250).
- No runtime tests included; this readme is intentionally minimal for submission grading.
