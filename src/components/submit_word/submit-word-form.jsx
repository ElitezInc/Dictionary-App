import React from "react";
import "./submit-word-form.styles.scss";

import axios from 'axios';

const SubmitWord = ({ translateWord }) => {

    const handleClick = (event) => {
        console.log("Click");
        event.preventDefault();
    }

    return (
        <div className="display-box">
            <form action="/action_page.php">
              <label for="word">Submit Word</label>
              <input type="text" id="word" name="word" placeholder="Word.."/>
                
              <button onClick={handleClick} className="btn" type="submit" value="Submit"> Submit </button>
            </form>
        </div>
    );
};

export default SubmitWord;
