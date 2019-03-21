import React, { Component } from 'react';
import Login from './components/Login';
import LeftNav from './components/LeftNav';
import Dashboard from './components/Dashboard';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import AddMerchant from './components/AddMerchant';
import './css/Dashboard.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
      super(props)
      this.state = {
        user: null,
        merchants: [
          {id: 1, name: 'Merchant 1'},
          {id: 2, name: 'Merchant 2'},
          {id: 3, name: 'Merchant 3'},
          {id: 4, name: 'Merchant 4'},
          {id: 5, name: 'Merchant 5'},
          {id: 6, name: 'Merchant 6'},
          {id: 7, name: 'Merchant 7'},
          {id: 8, name: 'Merchant 8'},
          {id: 9, name: 'Merchant 9'},
          {id: 10, name: 'Merchant 10'},
        ]
      }
  }

   signIn(username, password) {
    this.setState({
      user: {
        username,
        password,
      }
    })
  }
  
  signOut(e) {
    e.preventDefault();
    this.setState({user: null})
  }

  addMerchant = (merchant) => {
      merchant.id = this.state.merchants.length + 1;
      let merchants = [...this.state.merchants, merchant];
      this.setState({
          merchants: merchants
      });
  }

  render() {
    return (
      <div className="App">
        { 
          (this.state.user) ? 
            <BrowserRouter>
              <div className="dashboard">
                <LeftNav />
                <div className="content-container">
                  <div className="top-bar">
                      
                      <span>Hi <strong>{this.state.user.username}</strong>!</span>
                      <a href="/" onClick={this.signOut.bind(this)}><i className="material-icons">power_settings_new</i></a>
                  </div>
                  <Switch>
                    <Route exact path='/' render={(props) => <Dashboard merchants={this.state.merchants}/>} />
                    <Route path='/page2' component={Page2} />
                    <Route path='/page3' component={Page3} />
                    <Route path='/addMerchant' render={(props) => <AddMerchant merchants={this.state.merchants} addMerchant={this.addMerchant}/>} />
                  </Switch>
                </div>
              </div>
            </BrowserRouter>
          :
            <Login 
            onSignIn={this.signIn.bind(this)} 
            />
        }
      </div>
    );
  }
}

export default App;
