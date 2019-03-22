import React, { Component } from 'react';
import Login from './components/Login';
import LeftNav from './components/LeftNav';
import Dashboard from './components/Dashboard';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import AddMerchant from './components/AddMerchant';
import EditMerchant from './components/EditMerchant';
import Search from './components/Search';
import './css/Dashboard.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import uniqid from 'uniqid';

class App extends Component {
  constructor(props) {
      super(props)
      this.state = {
        user: null,
        merchants: [
          { 
            id: 1, 
            name: 'Merchant 1', 
            metroBox: '1m',
            metroOversized: '1m',
            metroBigPouch: '1m',
            metroSmallPouch: '1m',
            provincialBox: '1p',
            provincialOversized: '1p',
            provincialBigPouch: '1p',
            provincialSmallPouch: '1p',
            intraBox: '1i',
            intraOversized: '1i',
            intraBigPouch: '1i',
            intraSmallPouch: '1i'
          },
          { 
            id: 2, 
            name: 'Merchant 2', 
            metroBox: '2m',
            metroOversized: '2m',
            metroBigPouch: '2m',
            metroSmallPouch: '2m',
            provincialBox: '2p',
            provincialOversized: '2p',
            provincialBigPouch: '2p',
            provincialSmallPouch: '2p',
            intraBox: '2i',
            intraOversized: '2i',
            intraBigPouch: '2i',
            intraSmallPouch: '2i'
          }
        ],
        searchString: ''
      }
  }

   signIn = (username, password) => {
    this.setState({
      user: {
        username,
        password,
      }
    })
  }
  
  signOut = e => {
    e.preventDefault();
    this.setState({user: null})
  }

  addMerchant = merchant => {
      merchant.id = uniqid();
      let merchants = [...this.state.merchants, merchant];
      this.setState({
          merchants: merchants
      });
  }

  deleteMerchant = id => {
    const merchants = this.state.merchants.filter(merchant => {
        return merchant.id !== id
    });
    this.setState({
        merchants: merchants
    });
  }

  handleSearch = e => {
    this.setState({ 
        searchString:e.target.value 
    });
  }

  render() {
    console.log(this.state.merchants)
    return (
      <div className="App">
        { 
          (this.state.user) ? 
            <BrowserRouter>
              <div className="dashboard">
                <LeftNav />
                <div className="content-container">
                  <div className="top-bar">
                      <Search searchString={this.state.searchString} handleSearch={this.handleSearch.bind(this)}/>
                      <div className="tb-right">
                        <span>Hi <strong>{this.state.user.username}</strong>!</span>
                        <a href="/" onClick={this.signOut.bind(this)}><i className="material-icons">power_settings_new</i></a>
                      </div>
                  </div>
                  <Switch>
                    <Route exact path='/' render={(props) => <Dashboard merchants={this.state.merchants} searchString={this.state.searchString} deleteMerchant={this.deleteMerchant}/> } />
                    <Route path='/page2' component={Page2} />
                    <Route path='/page3' component={Page3} />
                    <Route path='/addMerchant' render={(props) => <AddMerchant merchants={this.state.merchants} addMerchant={this.addMerchant}/> } />
                    <Route path='/editMerchant' render={(props) => <EditMerchant param={props}/> } />
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
