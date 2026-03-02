# CS465-Full-Stack-Development1

# Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
In this project, I worked with both server-rendered pages using Express and a single-page application built with Angular. The Express frontend reloaded a full page every time the user navigated to a new route, which made it simple but less dynamic. The Angular SPA felt much smoother because it updated content instantly without refreshing the entire page. It also used reusable components and services, which made the code more organized and easier to maintain.

# Why did the backend use a NoSQL MongoDB database?
MongoDB was used because it works naturally with JavaScript and fits well within the MEAN stack. It stores data in flexible document formats instead of strict tables, which makes it easier to manage changing data like trips and traveler details. It also scales well and integrates smoothly with Node.js and Express.

# How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
JSON is a data format used to store and transfer information while JavaScript is a programming language used to create logic and functionality. JSON cannot run code. It only represents structured data. In this project, the frontend sent requests to the backend and received JSON responses. That JSON acted as the bridge between the Angular client and the Express server.

# Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.
During development, I refactored code by moving repeated API logic into Angular services instead of keeping it inside components. I also broke larger sections of the interface into smaller reusable components. This made the application cleaner and easier to scale. Reusable components improve consistency and make updates much simpler over time.


# Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
API methods like GET and PUT define what action is being performed on data. Endpoints are the specific URLs where those actions happen. Testing ensured that each endpoint returned the correct data and handled errors properly. When authentication was added, requests needed valid credentials before accessing protected routes. This extra layer of security ensures users only access what they are allowed to see or modify.


# How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
This course gave me real experience building a full stack application from start to finish. I strengthened my frontend skills with Angular and improved my backend development with Node.js and Express. I also gained hands-on experience working with MongoDB and API design. Overall, I now have a stronger understanding of how all layers of an application connect, which makes me a more confident and marketable developer.
