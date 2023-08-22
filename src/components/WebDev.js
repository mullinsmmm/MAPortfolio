import React from 'react';
import '../styles/CommandShift.css';

const CS= () => {
  return (
    <div className="textBox">
      <h1>What is Command Shift?</h1>
      <p>
        Command Shift is a part-time, online, evening Web Development Bootcamp that teaches essential skills in web development. The comprehensive curriculum covers diverse topics, including coding fundamentals, and web development essentials; running from January - August.
        </p>
        <p>
          Over the course of the Definitive Practice Module I have also been enrolled on the Command Shift course, to give myself a strong foundation in Web Development. Listed here are the subjects that I learnt throughout the course, with the end of each module culminating in a project; and after the final module a group project called Cocktail Companion which is linked in the Navbar.
        </p>
      <h1>Introduction to Coding</h1>
      <p>
        Began to learn how code projects are built up, through a series of statements;
        like building blocks. I also learnt about data types, (how information is
        classified eg text, number) and learned how to declare and use a variable to
        store or manipulate data.
      </p>
      <p>
        Operators (Logical & Arithmetic) & Expressions: Logical Operators allow for
        conditional logic, making a decision based off a true/false question.
        Arithmetic Operators allow for mathematical calculations of data. These can be
        built into expressions to affect data.
      </p>
      <p>
        Code Blocks, Parameters & Return Values: Code Blocks allow for the
        organisation of statements, often built from functions that I define. The
        output of which is presented as the return value; which can then be used in
        other parts of the programme.
      </p>
      <p>
        If Statements, For Loops, While Loops: Conditional statements like If
        Statements allow for branching logic (if/else) based on a set of conditions,
        For Loops allow for repeated execution of code blocks; and While Loops allow
        code to run whilst a set of conditions exist/do not exist.
      </p>
      <p>
        Arrays & Objects: Arrays act as lists of data, and are manipulated through
        the use of an index. Objects allow for structuring data in key:value pairs;
        and allow for more complex programming.
      </p>
      <p>
        These subjects form the foundations of all programming, no matter what
        language is used, and are combined with more complex structures to make larger
        programmes. This module allowed me to begin thinking programmatically;
        breaking down problems into smaller steps and beginning to translate human
        instructions into code.
      </p>
      <h1>Foundations of Web Development</h1>
      <p>
        Command Line Interface (CLI), Git, Visual Studio Code, npm Package Managers:
        I began to learn how to navigate the file system using the Command Line, and
        how to use version control with Git. I also became familiar with Visual Studio
        Code, a code editor where I wrote all my code. Within which, I also learnt
        about importing libraries to enhance functionality using npm Package Manager.
      </p>
      <p>
        HTML, CSS Basics & Box Model: I began to learn the basics of HTML (the first
        document read by the computer) that links to all other files within the
        project, and Cascading Style Sheets (CSS) which is used to style web pages.
        Within CSS I learnt about the Box Model which enabled me to understand how
        elements dimensions and spacing are calculated.
      </p>
      <p>
        Flexbox, Align & Justify-Content: Flexbox allows for setting up responsive
        layouts or arranging content. Align & Justify-Content use a contents container
        to manipulate the content, giving further control to positioning on the
        screen.
      </p>
      <p>
        Grid, Media Queries & Responsive Design: Grid offers further control of
        placement structures within the webpage. Media Queries are an essential tool
        for responsiveness, allowing content to change appearance on different screens
        and devices.
      </p>
      <p>
        Selectors, Stylesheets & DOM Manipulation: I learnt about the use of
        selectors within CSS to affect specific elements for styling, the use of a
        separate CSS stylesheet than then links to other files within the project and
        about the Document Object Model which acts as a map of the entire project,
        which allows for manipulation with JavaScript.
      </p>
      <h1>Building Blocks of Web Development</h1>
      <p>
        JavaScript Basics: During this module I was introduced to JavaScript, a
        language that allows for interactivity within a website (For example when a
        button is clicked, the resulting action is powered by JavaScript). This
        included Variables for data storage, operators for data manipulation &
        different data types.
      </p>
      <p>
        Function Declaration, Expressions & Parameters: With functions I learnt to
        declare logic and execute it in code, along with Expressions & Parameters
        that allow for dynamic input. Combining all these elements allows for building
        modular & reusable code.
      </p>
      <p>
        Test Driven Development (TDD): TDD is a way of writing code that consists of
        writing tests first, then writing code to pass that test. This ensures that
        nothing breaks other parts of the app when adding new functionality and
        encourages a modular approach to writing code.
      </p>
      <p>
        Jest Library for Testing, Debugging Techniques: Jest is a testing library
        that helps with automating testing. I also learnt how to identify and fix bugs
        within the code using tools like Chrome Dev Tools.
      </p>
      <p>
        Object Oriented Programming, Object Classes, Properties & Methods: I learnt
        how to create object classes that contain methods and properties. This modular,
        structured way of writing code greatly increases readability & reusability of
        code blocks throughout the programme.
      </p>
      <p>
        DOM Manipulation & DRY Code: DOM Manipulation allows for interacting with the
        Document Object Map, allowing for interaction between users and the code. I
        also learnt the importance of writing DRY code (Don't Repeat yourself), which
        means reusing pieces of code throughout the programme.
      </p>
      <p>
        Inheritance & Test Doubles: Inheritance alludes code being passed down the
        code base, meaning positioning of code is very important as it will change the
        functionality of the code base as a whole. Using inheritance allows for
        creating relationships between code blocks within the programme.
      </p>
      <h2>Building Blocks Projects</h2>
      <h3>Cruiseships: A Command Line Programme that docks a virtual 'ship' from different ports. Used to apply foundation coding practices</h3>
      <a href="https://github.com/mullinsmmm/cruise-ships" target="_blank" rel="noreferrer">Cruise Ships</a>
      <h3>Virtual Pet: A Command Line, turn-based game similar to a Tamagotchi where the play has to care for a virtual pet</h3>
      <a href="https://github.com/mullinsmmm/virtual-pet" target="_blank" rel="noreferrer" >Virtual Pet</a>

      <h1>Backend Development</h1>
      <p>
        Dockers, Containers & Images: Instead of slow running virtual machines,
        Containers allow for quicker isolated environments that contain applications &
        dependencies. By running containers you allow for consistency between client
        computers. You can download these containers in Docker, and can create your
        own containers by making images.
      </p>
      <p>
        Databases, SQL, Express, Local Host, Ports: Databases store data and SQL is a
        language that allows for manipulation of that data. Express, a Node.js
        framework, is used to interact with databases. Local Host allows for running
        programmes on client computers, and they run on a predefined port (normally
        Local Host: 3000).
      </p>
      <p>
        How the Internet Works, Async JS: Understanding how the internet works was a
        very important lesson for me, about how client computers interact with servers
        through HTTP requests. Using async JavaScript allows for non-blocking code, as
        only one process can run at a time its important to manage these interactions
        for smooth running of code.
      </p>
      <p>
        APIs, Middleware, Sequelize & Postman: Creating and interacting with
        Application Programming Interface’s (APIs) that hold some type of data (e.g.
        static data like a library or live data like a weather report). Middleware
        optimises request handling & Sequelize simplifies database interaction. Postman
        is a helpful tool for testing API requests.
      </p>
      <p>
        PostgreSQL, HTTP Requests & Responses, Routers & Controllers: PostgreSQL is a
        language for interacting with relational databases, where data is arranged by
        some index. HTTP requests are sent from the client computer to a server and a
        HTTP response is what is returned by the server; either the requested data or
        an error code. Routers are the directions given for the HTTP requests /
        responses to follow. Controller Functions are the content of these directions.
      </p>
      <p>
        CRUD Operations, HTTP Methods, JSON: These are the main operations that can be
        used to interact with a database. Create, Read, Update & Delete. These
        instructions are passed to the API which follow the instructions. These
        correlate with HTTP methods (GET, POST, PUT, PATCH, DELETE). A GET request is an
        example of a Read Operation because it simply returns the value of data. POST
        is an example of a Create Operation because it add data. The data that is
        returned is often returned in the form of a JavaScript Object Notation (JSON)
        which turns the database data into JavaScript to allow the programme to work
        with that data.
      </p>
      <h2>Backend Projects</h2>
      <h3>TDD Katas: Project to apply knowledge of Test Driven Development</h3>
      <a href="https://github.com/mullinsmmm/diy-kata-3" target="_blank" rel="noreferrer">Test Driven Development Katas</a>

      <h1>Frontend Development</h1>
      <p>
        React Framework: I learnt how to use a React Framework, which is a component
        based approach to building web elements. An example of this could be a search
        bar which is an individual element. By building up these elements all the
        components of a website come together, are styled by CSS, given interactivity
        by JavaScript, and are linked between with HTML, which is then mapped on the
        DOM.
      </p>
      <p>
        Virtual DOM, React Hooks: React is single loading, so each time a link for
        example is clicked the page in the DOM is not reloaded; the original use case
        of this was for Instagram (React was created by Facebook/Meta). If every time a
        used liked a photo the entire web app had to reload up update likes, it would
        quickly become very slow; therefore the app is loaded only once. Instead of
        directly adding these changes to the DOM, react uses a Virtual DOM, which in
        turn makes the website faster and more reliable. As React is component based,
        it encourages reusable components, these are managed by React Hooks and state.
      </p>
      <p>
        Props, State, Components: React is built up of components, which in turn can
        carry properties that are inherited from Parent components that are up the DOM
        tree. These props allow data to be shared throughout the programme, and can be
        instructed to act differently depending on their state; which is in turn
        controlled by a predetermined set of criteria.
      </p>
      <p>
        React Router: As React apps are not reloaded every time a page is changed, the
        routes between these pages are handled by React Routers. Routers can also allow
        for interaction with APIs, with each of these routes using a HTTP Method to
        interact with a pre-defined part of the database. An example of this is if
        interacting with a Weather API that live updates with weather forecasts and I
        want the data for Manchester to be displayed on my website; I would create a
        route that directs to the API, filtering to only the tag that displayed
        Manchester. This could also be done by the user of my website, where they type
        in a search box their own desired location, this location is then matched with
        the API, and if successful returns the user's request.
      </p>
      <h2>Frontend Projects</h2>
      <h3>React Technical Test Image Search: Web App that uses a NASA API to search & render images from the NASA Archive</h3>
      <a href="https://github.com/mullinsmmm/tech-test" target="_blank" rel="noreferrer">NASA Image Search</a>
      <h3>Weather App: Web App that uses a Weather forcast API to present a 5 day weather forcast</h3>
      <a href="https://github.com/mullinsmmm/weather_app" target="_blank" rel="noreferrer">Weather App</a>
      <h3>Surreal Estate: Web App that mocks a Property Search Website</h3>
      <a href="https://github.com/mullinsmmm/surreal-estate" target="_blank" rel="noreferrer">Surreal Estate</a>
    </div>
  );
};

export default CS;