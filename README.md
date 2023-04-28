# The Job Board (Frontend)

This project is a job board website that allows users to browse, create, update, and delete job offers. It was built using React, and it uses various libraries such as create-react-app, moments, axios, react-toastify, and react-router-dom.

## Usage

The website has several pages, including:

- A homepage
- A single page where you can update or delete the offer
- A page for browsing job offers
- An admin page who redirect to a form for creating a new job offer

There is also a search bar that allows users to search for job offers using three different query parameters: job title or company name, job location, and the type of contract.

To create a new job offer, click on the admin button on the homepage, then on the button 'Create an offer', and fill out the form with the necessary details. To update or delete an existing job offer, click on the right button on the single page of the job offer you wish to update.

## Demo Video

https://www.loom.com/share/79709fc57f35423598d54698d0f394d0


## Known Issues and Future Development

There are currently no known issues with the website, but some future plans for development include:

- Adding user authentication
- Improving the search functionality
- Making the website responsive for different screen sizes

## Installation

To set up the project locally, follow these steps:

1. Clone the repository.
2. Run `npm install` to install all the dependencies.
3. Run `npm start` to start the development server. (Running on port 3000)

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
