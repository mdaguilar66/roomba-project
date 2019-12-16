import React from 'react';
import Play from '../images/Play.jpeg';

const RoombaInputs = (props) => {
    return (
        <div>
            <div className="alignPageContent">
                <div className="inline">
                    <div className='howToPlay'>
                        <h5>Choose your dirt location and roomba start point. Navigate the roomba to the dirt patch.</h5>
                    </div>
                </div>
                <div className="inline">
                    <form onSubmit={props.onSubmit} id="roombaForm">
                        <h3>Dirt location</h3>
                        <div className='numberInput'>
                            <input type="number" name="x" min="0" max={props.grid.width - 1}
                                   placeholder="Dirt x value" onChange={props.onChange}/>
                            <input type="number" name="y" min="0" max={props.grid.length - 1}
                                   placeholder="Dirt y value" onChange={props.onChange}/>
                        </div>
                        <h3>Roomba start position</h3>
                        <div className='numberInput'>
                            <input type="number" name="x" min="0" max={props.grid.width - 1}
                                   placeholder="Roomba x value" onChange={props.onChange} required/>
                            <input type="number" name="y" min="0" max={props.grid.length - 1}
                                   placeholder="Roomba y value" onChange={props.onChange} required/>
                        </div>
                    </form>
                </div>
            </div>
            <button className='submitButton' type='submit' form="roombaForm">
                <img className='submitButtonImage' src={Play} alt="Play game"/>
            </button>
        </div>
    );

};

export default RoombaInputs;
