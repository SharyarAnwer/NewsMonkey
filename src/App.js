import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const pageSize = 5;
  /* const apiKey = process.env.REACT_APP_NEWS_API */
  const apiKey = "5ba9b87db59e4067a88148a43119fef2"
  const [progress, setProgress] = useState(0)
 
    return (
      <div>
        <Router>
        <NavBar/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />

       {/*  <Switch>
          <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="gb" category="general"/></Route> 
          <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="gb" category="business"/></Route> 
          <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="gb" category="entertainment"/></Route> 
          <Route exact path="/general"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="gb" category="general"/></Route> 
          <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="gb" category="health"/></Route> 
          <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="gb" category="science"/></Route> 
          <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="gb" category="sports"/></Route> 
          <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="gb" category="technology"/></Route> 
        </Switch> */}

        <Switch>
          <Route exact path="/"><News setProgress={setProgress} apiKey="5ba9b87db59e4067a88148a43119fef2" key="general" pageSize={pageSize} country="gb" category="general"/></Route>

          <Route exact path="/business"><News setProgress={setProgress} apiKey="5ba9b87db59e4067a88148a43119fef2" key="business" pageSize={pageSize} country="gb" category="business"/></Route> 

          <Route exact path="/entertainment"><News setProgress={setProgress} apiKey="5ba9b87db59e4067a88148a43119fef2" key="entertainment" pageSize={pageSize} country="gb" category="entertainment"/></Route> 

          <Route exact path="/general"><News setProgress={setProgress} apiKey="5ba9b87db59e4067a88148a43119fef2" key="general" pageSize={pageSize} country="gb" category="general"/></Route> 

          <Route exact path="/health"><News setProgress={setProgress} apiKey="5ba9b87db59e4067a88148a43119fef2" key="health" pageSize={pageSize} country="gb" category="health"/></Route> 

          <Route exact path="/science"><News setProgress={setProgress} apiKey="5ba9b87db59e4067a88148a43119fef2" key="science" pageSize={pageSize} country="gb" category="science"/></Route> 

          <Route exact path="/sports"><News setProgress={setProgress} apiKey="5ba9b87db59e4067a88148a43119fef2" key="sports" pageSize={pageSize} country="gb" category="sports"/></Route> 

          <Route exact path="/technology"><News setProgress={setProgress} apiKey="5ba9b87db59e4067a88148a43119fef2" key="technology" pageSize={pageSize} country="gb" category="technology"/></Route> 
        </Switch>
        </Router>
      </div>
    )
 
}

export default App;