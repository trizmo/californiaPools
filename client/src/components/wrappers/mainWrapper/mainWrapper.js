import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, } from 'react-router-dom';

// CSS
import './mainWrapper.css'

// COMPONENTS
import RootWrapper from '../rootWrapper/RootWrapper'
import Navbar from '../../main/navBar/NavBar';
import Footer from '../../main/footer/Footer';
// import ContactWrapper from './ContactWrapper'
// import ServicesWrapper from './ServicesWrapper';
// import AboutUsWrapper from './AboutUsWrapper';


export default class MainWrapper extends Component {
  render() {
    return (
      <div className="mainWrapper">
        <Navbar />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={RootWrapper} />
            {/* <Route exact path="/contact" component={ContactWrapper} />
            <Route exact path="/services" component={ServicesWrapper} />
            <Route exact path="/aboutus" component={AboutUsWrapper} /> */}
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    )
  }
}
