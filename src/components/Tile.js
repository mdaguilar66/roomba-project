import React, { Component } from 'react';
import Square from '../images/Square.jpg';
import Dirt from '../images/Dirt.jpg';
import Roomba from '../images/Roomba.jpg';

// create Tile class and set the initial state of tile
class Tile extends Component {
    constructor() {
        super();
        this.state = {
            roomba: false,
            dirt: false,
            id: {
                x: null,
                y: null
            }
        }
    }

    componentDidMount() {
        this.setId();
        this.checkIfDirty();
        this.checkIfRoombaIsHere();
    }

// change state of tile to have the current x and y coordinates of new location
    setId() {
        const id = this.state.id;
        id["x"] = this.props.x;
        id["y"] = this.props.y;

        this.setState({id})
    }

// use JSON stringify to compare 2 javascript objects (so they have the same key value)
// check if the dirts id is equal to the current tiles id
// if it is then change the state of that tile to have dirt: true
    checkIfDirty() {
        if(this.stringify(this.props.dirt) === this.stringify(this.state.id)) {
            this.setState({dirt: true})
        }
    }

// use JSON stringify to compare 2 javascript objects (so they have the same key value)
// check if the roombas id is equal to the current tiles id
// if it is then change the state of that tile to have roomba: true and dirt: false (as it will be hoovered)
    checkIfRoombaIsHere() {
        if (this.stringify(this.state.id) === this.stringify(this.props.roomba)) {
            this.setState({dirt: false, roomba: true})
        }
    }

// convert javascript object to a JSON string so that they can be compared
    stringify(object) {
        return JSON.stringify(object)
    }

// define what images are displayed on the grid
// if state of the tile has dirt: true and roomba: false then display dirt
// if state of the tile has roomba: true then display roomba
// else display normal grid square
    render() {

        const roomba = this.state.roomba;

        if (this.state.dirt && !roomba) {
            return (
                <div className="parentOfCleanTileWithImageInside">
                    <div>
                        <img src={Dirt} width="100px" alt="dirty looking flooring tile" className="imageOnTile"/>
                    </div>
                </div>
            );
        }

        if (roomba) {
            return (
                <div>
                    <div className="parentOfCleanTileWithImageInside">
                        <img src={Roomba} width="100px" alt="Roomba" className="imageOnTile"/>
                    </div>
                </div>
            )
        }

        else {
            return (
                <div>
                    <img src={Square} width="100px" alt="clean looking flooring tile"/>
                </div>
            )

        }

    }
}

export default Tile;
