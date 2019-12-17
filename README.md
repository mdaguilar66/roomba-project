# Building a Roomba game

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The Roomba game allows the user to place a dirt patch and choose the start point
of the roomba on the 5x5 grid. They can then use the compass to guide the roomba
to the dirt patch.

To download and install this programme:
- Run 'git clone https://github.com/mdaguilar66/roomba-project' in your terminal.
- Run 'npm install'
- Run 'npm start'
- Visit http://localhost:3000/ in your browser.

## I first broke the problem down into user inputs:
- Location of patches of dirt
- Hoover location
- Driving instructions

## And outputs:
- Final hoover position (X,Y)
- Number of patches of dirt left

## I decided to use React JS to build this project:
React JS is a Javascript library used to build HTML elements and is particularly
useful for building dynamic user interfaces and breaking a project into separate
components (which I considered this project to have). In order to use React, I
needed to have Node JS installed on my computer.

## I broke the project down into separate components:
- App - When the user interacts with an app events are fired. The app handles
the necessary events and executes the code.
- Grid - Build the 5x5 grid. I did this by creating an array of tile and pushing
tiles into rows and then those rows into the array of tiles.
- Tile - I set the state of an individula tile which states it has roombam, dirt,
and id (x,y) properties. When a roomba lands on a tile, 3 actions happen:
1. Check if roomba is on tile
2. New id is set
3. Check is tile is dirty
To check each of these, javascript objects must be converted to JSON strings
so that they are comparable.
- User inputs - I created a form where user can enter location of dirt patch and
starting point of roomba. I used a single onChange handler to handle both of
these inputs. These inputs are then passed to a handleChange funtion in app.js.
- Compass - I created the 'North', 'East', 'South', 'West' buttons for the user
to move the roomba around the grid.
- Compass and grid wrapper -

## Index.js




