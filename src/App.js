import React from 'react';
import './App.css';
import Home from './pages/Home';

import {HashRouter as Router , Route, Switch } from 'react-router-dom';
import Introduction from './components/Introduction';
import CaseStudy from './components/CaseStudy';

function App() {
  return (
    <div className="App">


      <Introduction/>

      <Router>
        <Switch>
          
        
          
          {/* <Route exact path="/project/JainSaraswati">
            <CaseStudy title="Jain Saraswati" link="../public/"/>
          </Route> */}

          <Route exact path="/project/PotholeProblem">
            <div style={{border:"none"}}>
              <CaseStudy title="Pothole Problem" link={"/pothole.html"}/>
            </div>
          </Route>

          <Route exact path="/project/YeTasveerKiskiHai">
            <div>
              <CaseStudy title="Whose picture is this ?" link={"/yetasveerkiskihai.html"}/>
            </div>
          </Route>

          <Route exact path="/project/TwitterSentimentAnalysis">
            <div>
              <CaseStudy title="Twitter Sentiment Analysis" link={"/twittersentimentanalysis.html"}/>
            </div>
          </Route>

          <Route path="/" >
            <div style={{backgroundColor:"#F5F5F5"}}>
              <Home />
            </div>
            
          </Route>

          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
