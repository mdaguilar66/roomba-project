import React, { Component } from 'react';
import UserInputs from '../src/components/UserInputs';
import CompassAndGridWrapper from '../src/components/CompassAndGridWrapper';

class App extends Component {

// set the initial state of the grid, dirt coordinates and roomba coordinates.
    constructor() {
        super();
        this.state = {
            grid: {
                width: 5,
                length: 5
            },
            dirt: {
                x: '',
                y: ''
            },
            roomba: {
                x: 0,
                y: 0
            },
            submitButtonClicked: false
        };
    }

// check users y coordinate does not exceed grid lengh
    coordinatesCheckIfMaxY = (y) => {
        return y !== this.state.grid.length;
    };

// check users x coordinate does not exceed grid width
    coordinatesCheckIfMaxX = (x) => {
        return x !== this.state.grid.width;
    };

// check coordinates are greater than zero
    coordinatesCheckIfZero = (xOrY) => {
        return xOrY > 0;
    };

// move roomba 1 step north if it isn't at the max y-coordinate
// tile state is now roomba and tile is now cleaned
    north = () => {
        const roomba = this.state.roomba;

        if(this.coordinatesCheckIfMaxY(roomba.y + 1)) {
            roomba["y"] += 1;
            this.setState({roomba}, this.tileCleaned());
        }
    };

// move roomba 1 step east if it isn't at the max x-coordinate
// tile state is now roomba and tile is now cleaned
    east = () => {
        const roomba = this.state.roomba;

        if(this.coordinatesCheckIfMaxX(roomba.x + 1)) {
            roomba["x"] += 1;
            this.setState({roomba}, this.tileCleaned());
        }
    };

// move roomba 1 step south if it isn't at zero
// tile state is now roomba and tile is now cleaned
    south = () => {
        const roomba = this.state.roomba;

        if(this.coordinatesCheckIfZero(roomba.y)) {
            roomba["y"] -= 1;
            this.setState({roomba}, this.tileCleaned());
        }
    };

// move roomba 1 step west if it isn't at zero
// tile state is now roomba and tile is now cleaned
    west = () => {
        const roomba = this.state.roomba;

        if(this.coordinatesCheckIfZero(roomba.x)) {
            roomba["x"] -= 1;
            this.setState({roomba}, this.tileCleaned());
        }
    };

// push the user inputs for dirt patches and roomba locations to the app state
    handleChange = (event) => {
        const {name, value, placeholder} = event.target;
        const dirt = this.state.dirt;
        const roomba = this.state.roomba;

        if(placeholder.includes("Dirt")) {
            dirt[name] = parseInt(value, 10);

            this.setState({
                dirt
            });
        }
        if(placeholder.includes("Roomba")) {
            roomba[name] = parseInt(value, 10);

            this.setState({
                roomba
            })
        }
    };

    handleSubmit = () => {
        this.tileCleaned();
            this.setState({
                submitButtonClicked: true
            });
    };

// tile is cleaned when the coordinates of the roomba and the dirt patch are the same
    tileCleaned() {
        if(JSON.stringify(this.state.roomba) === JSON.stringify(this.state.dirt)) {
            this.setState({
                dirt: "game over"
            })
        }
    }

// when submit button is clicked render the grid and compass buttons
// include CompassAndGridWrapper
// include RoombaInputs
    render() {
        return (
            <div>
                <div className="header">
                    <span>Roomba</span>
                </div>
                {this.state.submitButtonClicked ?
                    <CompassAndGridWrapper
                        appState={this.state}
                        north={this.north}
                        east={this.east}
                        south={this.south}
                        west={this.west}
                    /> :
                    <UserInputs
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                        grid={this.state.grid}
                    />
                }
            </div>
        );
    }
}

export default App;
