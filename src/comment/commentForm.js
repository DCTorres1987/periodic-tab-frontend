import React, { Component } from 'react';
import { connect } from "react-redux";
import { postComments } from "../actions/postComments"

class CommentForm extends Component {
// constructor
// it is the first function called upon the initialization of a component; this makes it useful for creating an initial state for a component.
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            comment: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const elementId = (this.props.element.id);

        this.props.postComments(this.state, elementId)
    }



    handleChange = (e) => {
        const { name, value } = e.target
        this.setState ({ [name]: value });
      }


    render() {

        return (

            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>Enter your name:</p>
                    <input
                        type='text'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                <p>Enter Comment:</p>
                    <input
                        type='text'
                        name='comment'
                        value={this.state.comment}
                        onChange={this.handleChange}
                    />
                    <input type='submit' />
                    </form>
            </div>
        )
    }   
    
}


export default connect(null, { postComments }) (CommentForm);