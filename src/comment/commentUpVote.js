import React, { Component } from 'react';


class CommentUpVote extends Component {


    state = {
        count: 0
    }

    handleClick = () => {
        this.setState ({
            count: this.state.count + 1
        }) 
    }

    render() {

        return(

            <div>
                <button className= 'inc' onClick={this.handleClick}>Vote</button>
                Count: {this.state.count}
            </div>
        )
    }



}

export default CommentUpVote;