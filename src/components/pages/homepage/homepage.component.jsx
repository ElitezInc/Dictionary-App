import React from "react";
import "./homepage.styles.scss";
import SubmitWord from "../../submit_word/submit-word-form.jsx";

import axios from 'axios';

const api = axios.create({
    baseURL: `http://localhost:5000/translation/`
})

class HomePage extends React.Component {

    constructor() {
        super();

        this.state = {
            wordToTranslate: "",
            translations: {},
            errorMsg: ""
        }
    }

    handleChange = e => {
        this.setState({ wordToTranslate: e.target.value })
    }

    handleSubmit = e => {
        console.log('A word was submitted: ' + this.state.wordToTranslate);
        
        this.setState({ translations: {}});
        this.setState({errorMsg: ""})
        
        //call api using axios
        api.get(`${this.state.wordToTranslate}`).then(response => {
            this.setState({ translations: response.data})
        }).catch(error => {
            console.log(error.response);

            if (error.response.status === 404)
            {
               this.setState({errorMsg: "Failed to find word translation"}) 
            } else {
                this.setState({errorMsg: error.response.statusText})
            }
        })

        e.preventDefault();
    }

    render()
    {
        const translations = Object.keys(this.state.translations).map(key => {
            return <h2 key={key}>{key}: {this.state.translations[key]}</h2>
        })

        return (
            <div>
                <ul>
                  <li><a href="/">Dictionary App</a></li>
                </ul>
                <div className="container">
                    <SubmitWord handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                    <h2>Translations:</h2>
                    {translations}
                    <h2>{this.state.errorMsg}</h2>
                </div>
            </div>
        );
    }
}

export default HomePage;
