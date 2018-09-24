import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

import axios from 'axios'
import WeatherComp from './components/Weather'

import logo from './logo.svg';
import './App.css';
import sampleVideo from './sky.mp4';
import Card from '@material-ui/core/Card';

class App extends Component {
    constructor() {
        super();

        this.state = {
            message: '',
            messageEncrypted: ''
        };

        this.handleClick = this.handleClick.bind(this);
        this.updateInput = this.updateInput.bind(this);
    }

    handleClick() {
        this.encryptMessage(this.state.message);
    }

    updateInput(event) {
        this.setState({message: event.target.value})
    }

    updateParagraph(messagePara) {
        this.setState({messageEncrypted: messagePara})
    }

    render() {
        return (
            <div className="App">

                <div>
                    <video className='videoTag' autoPlay loop muted>
                        <source src={sampleVideo} type='video/mp4'/>
                    </video>

                    <div className="videoOverlay"/>

                </div>

                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">React Assigment</h1>
                </header>

                <div className="App-page">
                    <div className="App-feature-div">
                        <h1 className="App-feature-title">Today Weather</h1>

                        <div className="row">
                            <div className="column">
                                <WeatherComp cityName="Manama"/>
                            </div>

                            <div className="column">
                                <WeatherComp cityName="Dubai"/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="column">
                                <WeatherComp cityName="Doha"/>
                            </div>

                            <div className="column">
                                <WeatherComp cityName="Mecca"/>
                            </div>
                        </div>
                    </div>

                    <div className="App-feature-div">
                        <h1 className="App-feature-title">Message encryption</h1>

                        <div>
                            <textarea id="textArea" name="message_value" onChange={this.updateInput} rows="15"/>
                        </div>

                        <Button id="encryptButton" variant="contained" onClick={this.handleClick} color="primary">
                            Encrypt
                        </Button><br/>

                        <div id="encryptText">{this.state.messageEncrypted}</div>

                    </div>
                </div>
            </div>
        );
    }

    encryptMessage(messageClear) {
        axios.post('https://nodejs-assignment-manara.herokuapp.com/encrypt', {
            message: messageClear
        })
            .then(response => {
                this.updateParagraph(response.data);
            });
    }
}

export default App;
