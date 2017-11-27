"use strict";

import React from 'react';

import showdown from 'showdown';
import mdRaw from './NewComponentFlow.md';

const mdConverter = new showdown.Converter();
const mdHtml = {
  __html: mdConverter.makeHtml(mdRaw)
};

const NewComponentTemplate = () => {
  return <p dangerouslySetInnerHTML={mdHtml}></p>;
};

export default NewComponentTemplate;
