import React, { Component } from 'react';

import firebaseConf from './../../config';
//import { Input } from 'reactstrap';
//import { style } from 'variables/Variables.jsx';

class SignUp extends Component {
    constructor(props) {
        superq(props);
        this,state = {
            email:'',
            password: '',
            error: {
                message: ''
            }
        }
    }

    signUp() {
        console.log("this.state", this.state);
        const { email, password } = this.state;
        firebaseConf.auth().createUserWithEmailAndPassword(email, password)
        .catch(error => {
            console.log("error", error);
            this.setState({error})
        }) 
    }

    render() {
        return (
            <div className="form-inline" style={{margin: '5%'}}>
                <h1>Sign Up</h1>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        style={{marginRight: '5px'}}
                        placeholder="Email"
                        onChange={event => this.setState({email: event.target.value})}
                    />

                    <input
                        className="form-control"
                        type="password"
                        style={{marginRight: '5px'}}
                        placeholder="Password"
                        onChange={event => this.setState({password: event.target.value})}
                    />

                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={() => this.signUp()}
                    >
                        Sign Up
                    </button>
                </div>
                <div>{this.state.error.message}</div>
            </div>
        )
    }
}
