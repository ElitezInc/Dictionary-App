import React from "react";
import "./homepage.styles.scss";
import SubmitWord from "../../submit_word/submit-word-form.jsx";

import axios from 'axios';

class HomePage extends React.Component {

    constructor() {
        super();

        this.state = {
            translatedWord: "",
            wordToTranslate: ""
        }
    }

    translateWord(event) {

        axios.get('').then(res => {
            const word = res.data;
            this.setState({ word })
        })
    }

    
    render() {
        return (
            <div>
                <h1>Hello</h1>
                <SubmitWord props={this.translateWord}/>
            </div>
        );
    }
}
export default HomePage;
