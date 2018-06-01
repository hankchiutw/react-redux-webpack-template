import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'Home';
import Page1 from 'Page1';
import NewComponentFlow from 'NewComponentFlow';

const Content = ({ isNavOn, label }) => {
  /**
   * Listen to props and change style
   * TODO: use component style
   */
  const _domRef = (dom) => {
    if (!dom) return;

    if (isNavOn) {
      dom.classList.add('nav-on');
    } else {
      dom.classList.remove('nav-on');
    }
  };

  return (
    <div className="content-wrapper" ref={_domRef}>
      <h2>{label}</h2>
      <div className="content-ui-view">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/page1" component={Page1} />
          <Route path="/new-component-flow" component={NewComponentFlow} />
        </Switch>
      </div>
    </div>
  );
};

export default Content;
