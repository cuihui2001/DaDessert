import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Pages/Layout';
import { HomePage } from './components/Pages/Home/HomePage';
import { ContactPage } from './components/Pages/Contact/ContactPage';
import { MenuPage } from './components/Pages/Menu/MenuPage';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={HomePage} />
        <Route path='/menu' component={MenuPage} />
        <Route path='/contact' component={ContactPage} />
      </Layout>
    );
  }
}
