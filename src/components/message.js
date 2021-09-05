import React , { Component} from 'react'

class Message extends Component {

    constructor(){
        super()
        this.state = {
            message:'Hello Visitors'
        }

    }

    changeMessage(){
        this.setState({
            message:'Thanks buddy'
        })

        
    }

    render(){
        return(
            <div>
            <h1>{this.state.message}</h1>
            <button onClick ={() => this.changeMessage()}>Subscribe it!</button>
            </div>
        )
    }
} 

export default Message