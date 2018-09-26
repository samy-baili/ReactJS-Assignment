import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

import axios from 'axios'
import WeatherComp from './components/Weather'

import logo from './logo.svg';
import './App.css';
import sampleVideo from './sky.mp4';
import imageNoSQL from './NoSQL_Jun2.gif';
import Modal from 'react-modal';
import Highlight from 'react-highlight'

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        width                 : '70%',
        height                : '95%',
        textAlign             : 'justify'
    }
};

Modal.setAppElement('#root');

class App extends Component {
    constructor() {
        super();

        this.state = {
            message: '',
            messageEncrypted: '',
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

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

    openModal() {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        // this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render() {
        return (
            <div className="App">

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal">

                    <div className="frame">
                        <div>
                            <h1 ref={subtitle => this.subtitle = subtitle}>I - Assignment description</h1>

                            <div>
                                During my job Interview, I had to create two IT projects in order to test my technical skills. The first was about creating a server using Node.js and the other one was about creating a web application using React.js.<br/><br/>

                                During the past four years, I've been specialized on mobile development, so I had to learn all the concepts of this two technologies, despite I was already familiar with JavaScript. During all my career I've been using JetBrains IDE (Android Studio, CLion, …), so I decided to use WebStorm for developing this two applications.
                            </div>

                            <h4 ref={subtitle => this.subtitle = subtitle}>1) NodeJS Assignment</h4>
                            The server implement severals queries, all of them should be accessible in public:  <br/><br/>

                            <div className="Modal_List_planning">
                                • ‘<font color="red">/name</font>’: This route receives a request with a JSON body containing a list of elements (names) and then return this list ordered ascendingly.  <br/>
                                • ‘<font color="red">/count</font>’: This route receives a request without any JSON and then return the number of total calls of the API.<br/>
                                • ‘<font color="red">/weather/:city</font>’: This route receives a request without any JSON, as parameter this route takes the name of a city. You can use any weather API like "AccuWeather API" for example. All the data have to be returned as a JSON Object.<br/>
                                • ‘<font color="red">/encrypt</font>’: This route receives a request with a JSON body containing a string named "message". You have to return this string encrypted with the protocol of your choice.<br/>
                                • ‘<font color="red">/decrypt</font>’: This route receives a request with a JSON body containing a string named "message". You have to return this string decrypted with the same protocol you used for the route ‘encrypt’.<br/>
                            </div>
                            <br/>Here the server URL: <font color="red">https://nodejs-assignment-manara.herokuapp.com</font>

                            <h4 ref={subtitle => this.subtitle = subtitle}>2) React Assignment</h4>
                            The purpose of this project was to integrate several features:<br/><br/>

                            <div className="Modal_List_planning">
                                • Display the weather infos of four different city, by using the query ‘<font color="red">/weather/:city</font>’.<br/>
                                • Encrypt a message, by using the query ‘<font color="red">/encrypt</font>’.<br/>
                                • Display a video in background.
                            </div>
                            <br/>Here the web app URL: <font color="red">https://react-assignment-manara.herokuapp.com</font>

                            <br/><br/><h1 ref={subtitle => this.subtitle = subtitle}>II - Choosing the right database</h1>
                            <div>
                                In order to choose the right database for our project, we should asking ourself this few questions:<br/>  <br/>
                                <div className="Modal_List_planning">
                                    • Do we need a hard fixed data structure?<br/>
                                    • Do we want flexibility in the structure of the data persisted to ours database?<br/>
                                    • Will we be handling large or small quantities of data?<br/>
                                    • How strict are we with invalid data being sent to your database?<br/><br/>
                                </div>

                                Now we need to choose between Relational database management system(RDBMS) or NoSQL. The differences between them is quite important. RDBMS is completely structured way of storing data, while the NoSQL is unstructured way of storing it. RDBMS database are more difficult to maintain, relational database needs powerful servers that are expensive and difficult to handle.<br/><br/>
                                Actually NoSQL databases have better benefits than relational databases:<br/><br/>
                                <div className="Modal_List_planning">
                                    • Highly and easily scalable.<br/>
                                    • Maintaining NoSQL Servers is Less Expensive .<br/>
                                    • Lesser Server Cost and open-Source .<br/>
                                    • No Schema or Fixed Data model .<br/>
                                    • Support Integrated Caching.<br/><br/>
                                </div>

                                Because of this reasons I will recommend to use a NoSQL database, but which one?<br/><br/>

                                <img src={imageNoSQL} className="imageNoSql" alt="graph"/><br/><br/>

                                Like you can see the MongoDB is the most popular NoSQL database, and that’s for many reasons:  <br/><br/>
                                <div className="Modal_List_planning">
                                    • <strong>High Speed</strong>: The speed of MongoDB is 100 times faster than the relational database.<br/>
                                    • <strong>Flexible Database</strong>: We can store any type of data in a separate document. <br/>
                                    • <strong>Sharding</strong>: One giant database partitioned into many small databases.<br/>
                                    • <strong>High Availability</strong>: MongoDB has features like replication and gridFS. These features help to increase data availability in MongoDB.<br/>
                                    • <strong>Scalability</strong>: Horizontally scalable database.<br/>
                                    • <strong>Easy Environment Setup</strong>: It is easier to setup MongoDB then RDBMS.<br/><br/>
                                </div>

                                Despite some cons, MongoDB have a lot of good benefits. This database allow us to create a strong, quick and easy implementable solution. That's why I recommend you to use MongoDB in our project.</div>
                        </div>
                    </div>

                </Modal>

                <div>
                    <video className='videoTag' autoPlay loop muted>
                        <source src={sampleVideo} type='video/mp4'/>
                    </video>

                    <div className="videoOverlay"/>

                </div>

                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">React Assigment</h1>
                    <div onClick={this.openModal}><strong><u>Assignment III</u></strong></div>
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
