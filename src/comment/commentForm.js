import React, { Component } from 'react';
import { connect } from "react-redux";
import { postComments } from "../actions/postComments"


class CommentForm extends Component {

    constructor(props) {
      
        super(props);
        this.state = {
            name: '',
            comment: ''
        }
    }

    handleSubmit = (e) => {
        console.log('Submission Handling')
        e.preventDefault();
        const elementId = (this.props.element.id);

        this.props.postComments(this.state, elementId)
    }



    handleChange = (e) => {
        console.log('Looking for Comment Change')
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