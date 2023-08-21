import React from 'react';
import '../styles/Cocktail.css';

const Cocktail = () => {
    return (
    <div className="textBox">
        <h1>Cocktail Companion</h1>
        <a href="https://www.cocktailcompanion.bar/">www.cocktailcompanion.bar</a>
        <br></br>
        <h2>Group Project - Cocktail Companion</h2>
        <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/9MXMxw37I-k" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen></iframe>
      <p>
        At the end of the Web Development Bootcamp, we engaged in a group project to build a web app
        from scratch. Our group was given the task of creating a home cocktail making
        app, which we decided to call ‘Cocktail Companion’. We worked collaboratively
        on the app, taking group decisions on every step of the project from initial
        planning and market research, through prototyping and design, to production and
        deployment online.
      </p>
      <h3>Planning & Market Research:</h3>
      <p>
        We planned out and assigned tasks at different stages of the project using a
        collaborative task manager app. Using sticky notes on Miro.com, we generated
        ideas for how we wanted to approach making the app, along with research of
        existing similar products. Additionally, we laid out what components we would
        need, and how each of these would fit together. We also found an API that
        consisted of Cocktail Making data which we were able to use in our project.
      </p>
      <h3>Design:</h3>
      <p>
        We wireframed a rough design including page/component layouts, and colour
        schemes we wanted to use for our App using Figma. We took into consideration
        User Interface concerns and the flow with which we wanted users to navigate
        around our app, and made designs for both mobile and desktop screens.
      </p>
      <h3>Development:</h3>
      <p>
        Using React, we created a modular component-based project which made several
        API calls to retrieve the data, which we then displayed in a searchable &
        filterable grid. Each data entry (a cocktail) is also rendered in a pop-up card
        that displays specific information for that cocktail. Additionally, we worked on
        an article to increase user engagement and made the website responsive to media
        queries.
      </p>
        <a href="https://github.com/josenymad/cocktail-companion/tree/main">Cocktail Companion Codebase</a>
    </div>
    )
}

export default Cocktail;