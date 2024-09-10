# Full Stack AWS-React Application
<img width="951" alt="Screen Shot 2024-09-10 at 12 52 10 PM" src="https://github.com/user-attachments/assets/79ea20c3-ba6f-4c22-96df-f62634a8ef6f">
This is a comprehensive full-stack AWS application, designed to provide a seamless user experience. Upon signing in or registering, users are welcomed by a beautiful homepage, offering easy access to their client portfolio. For new client additions, a sleek and efficiently designed form enables rapid data entry, directly updating a cloud-based database. Following submission, users are redirected to a dedicated client management page, showcasing a comprehensive list of all clients, including the newly added entry.

## - Technologies used, and how they work
### Technologies Used

#### Frontend
* **React**: User interface and client-side logic

#### Backend
* **AWS CLI**: Command-line tool for interacting with AWS services
* **AWS Amplify**: Development platform for building scalable mobile and web applications
* **AWS API Gateway**: RESTful API for handling client requests
* **AWS Lambda**: Serverless compute service for executing business logic

#### Database
* **Amazon DynamoDB**: NoSQL database for storing client data

#### Authentication
* **AWS Amplify Auth**: Authentication library for managing user sessions
* **AWS Cognito**: User identity and access management service

#### Other
* **AWS Amplify CLI**: For local development, testing, and deployment of the application

### How it all works

#### User Authentication

* Users sign in or sign up using AWS Amplify Auth, which utilizes AWS Cognito for secure user identity and access management.

#### Client Form Submission

* When a user submits a client form, the application uses AWS API Gateway to send a PUT request to a Lambda function.

#### Lambda Function

* The Lambda function interacts with Amazon DynamoDB, adding the new client data to the database.

#### Client Page

* When a user navigates to the client page, API Gateway automatically triggers the Lambda function's GET method.
* The Lambda function queries DynamoDB, retrieving all records associated with the logged-in user.
* The application displays the retrieved data on the client page, providing a personalized view of the user's clients.

This workflow showcases the application's ability to handle user authentication, data submission, and data retrieval, all while leveraging the scalability and reliability of AWS services.


## - Test it out

#### You can either use this link provided by AWS Amplify upon deployment to create an account and test the app out.
https://main.d3m6cl65omgl3g.amplifyapp.com/

#### Or, you can follow the instructions provided by React, below.
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
