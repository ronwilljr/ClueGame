import React from 'react'
import { useState } from 'react'
import { url } from '../URL'
import { url2 } from '../URL'
import YouAre from './youAre'
import App from "../App";

const THREECARDS_STYLES = {
    position: 'fixed',
    top: '55%',
    left: '77%',
    transform: 'translate(-50%, -50%)',
    padding: '10px',
    zIndex: 1000,
}
const WINNER_STYLES = {
    position: 'fixed',
    top: '25%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(0,255,0,.3',
    padding: '10px',
    border: 'solid white 10px',
    zIndex: 1000,
}
const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.7',
    zIndex: 1000,
}
const OUTOFGAME_STYLES = {
    position: 'fixed',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(255,0,0,.3',
    padding: '10px',
    color: 'white',
    fontSize: '54px',
    zIndex: 1000,
}

const EXITGAME_STYLES = {
    position: 'fixed',
    top: '75%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '10px',
    zIndex: 1000,
}

export default function ThreeCards({show, children, outthegame, whowon}) {

    const cardPictures = {'Miss Scarlet': '/miss_scarlet.png',
    'Prof. Plum': '/prof_plum.png',
    'Mrs. Peacock': '/mrs_peacock.png',
    'Mr. Green': '/mr_green.png',
    'Mrs. White': '/mrs_white.png',
    'Col. Mustard': '/col_mustard.png',
    'Knife': '/knife.png',
    'Rope': '/rope.png',
    'Candle Stick': '/candlestick.png',
    'Revolver': '/revolver.png',
    'Lead Pipe': '/leadpipe.png',
    'Wrench': '/wrench.png',
    'Study': '/studyroom.png',
    'Hall': '/hallroom.png',
    'Lounge': '/loungeroom.png',
    'Library': '/libraryroom.png',
    'Billiard Room': '/billiardroom.png',
    'Dining Room': '/diningroom.png',
    'Conservatory': '/conservatoryroom.png',
    'Ballroom': '/ballroom.png',
    'Kitchen': '/kitchenroom.png',}


    const resetGame = () => {
        if (App.isAdmin === true) {
        fetch(url + '/reset')
            .then((response) => response.json())
            .then((data) => {
            });
        }
    }

 

    if (show === false && outthegame === false) {

        return (
            <div>
                <div style={THREECARDS_STYLES}>
                    <div className='threeCards'>
                    <img  src={'./backofcard.png'} alt="user's character"/>
                    </div>
                    <div className='threeCards'>
                    <img  src={'./backofcard.png'} alt="user's character"/>
                    </div>
                    <div className='threeCards'>
                    <img  src={'./backofcard.png'} alt="user's character"/>
                    </div>
                </div>
            </div>
        )
    }

    else if (show === false && outthegame === true) {

        return (
            <div>
                <div style = {OUTOFGAME_STYLES}>
                    Sorry, You Are Out Of The Game
                </div>

                <div style={THREECARDS_STYLES}>
                    <div className='threeCards'>
                    <img  src={'./backofcard.png'} alt="user's character"/>
                    </div>
                    <div className='threeCards'>
                    <img  src={'./backofcard.png'} alt="user's character"/>
                    </div>
                    <div className='threeCards'>
                    <img  src={'./backofcard.png'} alt="user's character"/>
                    </div>
                </div>
            </div>
        )
    }
    else {

        return (
            <div style={OVERLAY_STYLES}>
                <div style={WINNER_STYLES}>
                    <div className='winnerOverlay'>
                        'The Winner Is {whowon}!'
                    </div>
                </div>

                <div style={THREECARDS_STYLES}>
                    <div className='show3Cards'>{children[0].cards[0].name}
                    <br></br>
                    <img  src={cardPictures[children[0].cards[0].name]} alt="user's character"/>
                    </div>
                    <div className='show3Cards'>{children[0].cards[1].name}
                    <br></br>
                    <img  src={cardPictures[children[0].cards[1].name]} alt="user's character"/>
                    </div>
                    <div className='show3Cards'>{children[0].cards[2].name}
                    <br></br>
                    <img  src={cardPictures[children[0].cards[2].name]} alt="user's character"/>
                    </div>
                </div>

                <div style={EXITGAME_STYLES}>
                    <a href= {url2}>
                    <button className='exitButton' onClick={resetGame}>
                    Exit Game
                    </button>
                    </a>
                </div>
            </div>
        ) 
    }
}