# Reviews viewer

This is a test assignment for Node.js and ReactJS.

## How to run

#### Server
1. Go to `server/` folder
2. `npm ci` to install dependencies
3. `npm start` (or `npm run dev:watch` for dev mode)
4. Server will start on port `8080`

#### Client
1. Go to `client/` folder
2. `npm ci` to install dependencies
3. `npm start` 
4. App is available at [http://localhost:3000]()

------------------------

### Assignment
This is an assignment that requires performing a set of mathematical average calculations and a web UI for visualisation.

A JSON file that contains a collection of reviews for one single accommodation is provided. It is expected that the calculations be performed on the server side using Node.js.

Use those reviews to perform the following tasks:

1) Calculations :
  - calculate the average of the general rating of the accommodation.
  - calculate the average of each of the rating aspects of the accommodation.
  - calculate the average or each traveledWith value of the accommodation.

Keep in mind that each review has to have a weight value in the calculations.
The weight value can be calculated as follows:
when the review is older than 5 years its weight value defaults to 0.5. Otherwise it equals: 1 - (current_year - year_of_review)*0.

2) Build a UI to visualise  the calculated rating values of the accommodation along with the list of reviews. It is up to you to choose how to serve reviews from the server; the choice will influence the assessment though. The following functionality is required:
  - filter by traveledWith value.
  - sort by travel date or review submission date.

3) (Nice to implement but not required) implement a pagination functionality.

