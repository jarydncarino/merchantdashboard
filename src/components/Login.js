import React, { Component } from 'react';
import logo from '../logo.png';
import '../css/Login.css';
import FloatingLabel from 'floating-label-react';

class Login extends Component {
    state = {
        username: 'jarydcarino',
        password: 'password',
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        let username = this.state.username;
        let password = this.state.password;
        this.props.onSignIn(username, password);
    }

    render() {
        return (
            <div className="login">
                <div className="white-wrapper">
                    <div className="logo-wrap">
                        <img src={logo} className="App-logo" alt="logo" />  
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <FloatingLabel
                                id='username'
                                name='username'
                                placeholder='Username'
                                type='text'
                                value={this.state.username}
                                onChange={this.handleChange}
                                />
                        </div>
                        <div className="form-group">
                            <FloatingLabel
                                id='password'
                                name='password'
                                placeholder='Password'
                                type='password'
                                value={this.state.password}
                                onChange={this.handleChange}
                                />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block" disabled={!this.validateForm()}>Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;
