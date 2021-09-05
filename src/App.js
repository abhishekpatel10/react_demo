import './App.css';
import React , { Component } from 'react'

import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import CounterOne from './components/CounterOne';
import ComponentC from './components/ComponentC';
import {UserProvider} from './components/UserContext'
 


class App extends Component {
  render() {
    return (
      <div className="App" >
        <UserProvider value = "Abhishek">
        <ComponentC  />
        </UserProvider>
        {/* <CounterOne render={ (count , incrementCount) => <ClickCounterTwo count = {count} incrementCount = {incrementCount}></ClickCounterTwo>} />
        <CounterOne render={ (count , incrementCount) => <HoverCounterTwo count = {count} incrementCount = {incrementCount}></HoverCounterTwo>} /> */}
        {/* <ClickCounterTwo />
        <HoverCounterTwo />
         <User render = {(isLoggedIn) => isLoggedIn ? 'Abhishek' : 'Guest' }/> */}
      </div>
    ) 
  }
}

export default App;
