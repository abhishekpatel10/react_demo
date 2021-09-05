import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false

        }
    }

    render() {

        return this.state.isLoggedIn && <div>Welcome Abhi</div>

        // return this.state.isLoggedIn ? (
        //     <div>Welcome Abhi</div>
        // ) : (
        //     <div>Welcome Guest</div>
        // )

        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Abhi</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }


        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>Welcome Abhi</div>
        //     )
        // } else {
        //     return (
        //         <div>Welcome Guest</div>
        //     )
        // }
        // return (
        //     <div>
        //         <div>Welcome Abhi</div> 
        //         <div>Welcome Guest</div> 
        //     </div>
        // )
    }
}

export default UserGreeting
