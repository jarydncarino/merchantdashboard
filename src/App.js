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
          { id: 1, name: 'Merchant 1', metroBox: '1m',metroOversized: '1m',metroBigPouch: '1m',metroSmallPouch: '1m',provincialBox: '1p',provincialOversized: '1p',provincialBigPouch: '1p',provincialSmallPouch: '1p',intraBox: '1i',intraOversized: '1i',intraBigPouch: '1i',intraSmallPouch: '1i' },
          { id: 2, name: 'Merchant 2', metroBox: '2m',metroOversized: '2m',metroBigPouch: '2m',metroSmallPouch: '2m',provincialBox: '2p',provincialOversized: '2p',provincialBigPouch: '2p',provincialSmallPouch: '2p',intraBox: '2i',intraOversized: '2i',intraBigPouch: '2i',intraSmallPouch: '2i' },
          { id: 3, name: 'Merchant 3', metroBox: '3m',metroOversized: '3m',metroBigPouch: '3m',metroSmallPouch: '3m',provincialBox: '3p',provincialOversized: '3p',provincialBigPouch: '3p',provincialSmallPouch: '3p',intraBox: '3i',intraOversized: '3i',intraBigPouch: '3i',intraSmallPouch: '3i' },
          { id: 4, name: 'Merchant 4', metroBox: '4m',metroOversized: '4m',metroBigPouch: '4m',metroSmallPouch: '4m',provincialBox: '4p',provincialOversized: '4p',provincialBigPouch: '4p',provincialSmallPouch: '4p',intraBox: '4i',intraOversized: '4i',intraBigPouch: '4i',intraSmallPouch: '4i' },
          { id: 5, name: 'Merchant 5', metroBox: '5m',metroOversized: '5m',metroBigPouch: '5m',metroSmallPouch: '5m',provincialBox: '5p',provincialOversized: '5p',provincialBigPouch: '5p',provincialSmallPouch: '5p',intraBox: '5i',intraOversized: '5i',intraBigPouch: '5i',intraSmallPouch: '5i' },
          { id: 6, name: 'Merchant 6', metroBox: '6m',metroOversized: '6m',metroBigPouch: '6m',metroSmallPouch: '6m',provincialBox: '6p',provincialOversized: '6p',provincialBigPouch: '6p',provincialSmallPouch: '6p',intraBox: '6i',intraOversized: '6i',intraBigPouch: '6i',intraSmallPouch: '6i' },
          { id: 7, name: 'Merchant 7', metroBox: '7m',metroOversized: '7m',metroBigPouch: '7m',metroSmallPouch: '7m',provincialBox: '7p',provincialOversized: '7p',provincialBigPouch: '7p',provincialSmallPouch: '7p',intraBox: '7i',intraOversized: '7i',intraBigPouch: '7i',intraSmallPouch: '7i' },
          { id: 8, name: 'Merchant 8', metroBox: '8m',metroOversized: '8m',metroBigPouch: '8m',metroSmallPouch: '8m',provincialBox: '8p',provincialOversized: '8p',provincialBigPouch: '8p',provincialSmallPouch: '8p',intraBox: '8i',intraOversized: '8i',intraBigPouch: '8i',intraSmallPouch: '8i' },
          { id: 9, name: 'Merchant 9', metroBox: '9m',metroOversized: '9m',metroBigPouch: '9m',metroSmallPouch: '9m',provincialBox: '9p',provincialOversized: '9p',provincialBigPouch: '9p',provincialSmallPouch: '9p',intraBox: '9i',intraOversized: '9i',intraBigPouch: '9i',intraSmallPouch: '9i' },
          { id: 10, name: 'Merchant 10', metroBox: '10m',metroOversized: '10m',metroBigPouch: '10m',metroSmallPouch: '10m',provincialBox: '10p',provincialOversized: '10p',provincialBigPouch: '10p',provincialSmallPouch: '10p',intraBox: '10i',intraOversized: '10i',intraBigPouch: '10i',intraSmallPouch: '10i' }
        ],
        searchString: '',
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
                    <div className="tb-left">
                      <a href="/" className="menu-bar"><i class="material-icons">menu</i></a>
                      <Search searchString={this.state.searchString} handleSearch={this.handleSearch.bind(this)}/>
                    </div>
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
