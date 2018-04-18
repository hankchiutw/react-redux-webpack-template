/* global jest*/
import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index';
import rootReducer from '_redux/rootReducer';
import { preloadedState } from '_redux/store';

jest.mock('react-dom');

describe('Home', () => {
  it('first page render ok', () => {
    const spy = jest.spyOn(ReactDOM, 'render');
    expect(spy).toHaveBeenCalled();
  });

  it('should get preloadedState ok', () => {
    expect(rootReducer(undefined, {})).toEqual(preloadedState);
  });
});

