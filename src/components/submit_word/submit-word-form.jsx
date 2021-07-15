import React from "react";
import "./submit-word-form.styles.scss";

const SubmitWord = ({ handleChange, handleSubmit }) => {

    return (
            <form onSubmit={handleSubmit}>
              <label>Submit Word</label>
              <input type="text" id="word" name="word" placeholder="Word.." onChange={handleChange}/>
                
              <button className="btn" type="submit" value="Submit"> Submit </button>
            </form>
    );
};

export default SubmitWord;
