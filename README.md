Mongo Secure Bridge
===================

Mongo Secure Bridge is an Express.js API code sample using TypeScript, MongoDB, and Auth0 for Role-Based Access Control (RBAC). This project demonstrates the integration of Auth0, a powerful authentication and authorization solution, with an Express.js server. It's an excellent starting point for developers looking to implement secure and scalable API services.

Features
--------

-   Express.js with TypeScript: Leverages TypeScript for better code reliability and developer experience.
-   Auth0 Integration: Implements Auth0 for robust authentication and authorization.
-   MongoDB Ready: Structured to integrate smoothly with MongoDB.
-   Role-Based Access Control: Demonstrates how to enforce RBAC in your API services.

Why Auth0?
----------

Auth0 provides a flexible, drop-in solution to add authentication and authorization services to applications. It helps avoid the complexities and risks of building a custom solution. Auth0 offers extensive guidance and SDKs for easy integration. Learn more about integrating Auth0 into your stack [here](https://auth0.com/developers/hub/code-samples/full-stack).

Getting Started
---------------

### Prerequisites

-   [Node.js](https://nodejs.org/en/)
-   [MongoDB](https://www.mongodb.com/)
-   [Auth0 account](https://auth0.com/)

### Installation

1.  Clone the repository:
    `git clone https://github.com/pakeku/mongo-secure-bridge.git`

2.  Navigate to the project directory:
    `cd mongo-secure-bridge`

3.  Install dependencies:
    `npm install`

### Environment Setup

Create a `.env` file in the root of your project and include the necessary environment variables:

-   Auth0 Domain
-   Auth0 Audience
-   MongoDB URI

Running the Application
-----------------------

To run the application in development mode:
`npm run dev`

For production build:
`npm run build`

Folder Structure
----------------

Your project should be structured as follows:

```md
mongo-secure-bridge/
│
├── server/               # All backend code
│   ├── config/           # Configuration files and environment variables
│   ├── models/           # MongoDB models (Mongoose schemas)
│   ├── routes/           # Express routes
│   ├── middleware/       # Middlewares for Express (e.g., for Auth0)
│   ├── utils/            # Utility functions and helpers
│   └── index.ts          # Main server file (entry point for the Express app)
├── client/               # All frontend code
│   ├── public/           # Public assets like HTML file, images, etc.
│   ├── src/              # React source files
│   │   ├── components/   # React components
│   │   ├── pages/        # Page components
│   │   ├── app.js        # Main React application file
│   │   └── index.js      # Entry point for React application
│   └── build/            # Compiled frontend files (served by Express)
│
├── .env                  # Environment variables (not to be committed)
├── .gitignore            # Files and folders to be ignored by Git
├── package.json          # NPM dependencies and scripts
├── README.md             # Project documentation
└── docker-compose.yml    # Docker configuration file (optional)
```

License
-------

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

Contact
-------

For support or queries, reach out to Erick Pacheco at <elina13@wgu.edu>.