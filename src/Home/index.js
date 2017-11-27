"use strict";

import React from 'react';

import showdown from 'showdown';
import readmeRaw from 'README.md';

const mdConverter = new showdown.Converter();
const mdHtml = { __html: mdConverter.makeHtml(readmeRaw) };

const Home = () => {
  return <p dangerouslySetInnerHTML={mdHtml}></p>;
};

export default Home;
