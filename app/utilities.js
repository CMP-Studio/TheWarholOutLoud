
import React from 'react';

import {
  Text,
} from 'react-native';

function isTag(str) {
  switch (str) {
    case '<i>':
    case '<b>':
      return true;
    default:
      return false;
  }
}

function findClose(textArray) {
  let count = 0;
  const openTag = textArray[0];
  const closeTag = `</${openTag.slice(1)}`;
  for (let i = 0; i < textArray.length; i ++) {
    if (textArray[i] === openTag) {
      count++;
    } else if (textArray[i] === closeTag) {
      count--;
    }
    if (count === 0) {
      return i;
    }
  }
  return -1;
}

function addTag(tag, between, after) {
  switch (tag) {
    case '<i>':
      return (
        <Text>
          <Text style={{ fontStyle: 'italic' }}>
            {between}
          </Text>
          {after}
        </Text>
      );
    case '<b>':
      return (
        <Text>
          <Text style={{ fontWeight: 'bold' }}>
            {between}
          </Text>
          {after}
        </Text>
      );
    default:
      return (
        <Text>
          {between}
          {after}
        </Text>
      );
  }
}

export function html2jsx(textArray) {
  if (textArray.length === 1) {
    return textArray[0];
  }

  if (isTag(textArray[0])) {
    const position = findClose(textArray);

    if (position + 1 !== textArray.length) {
      return addTag(
        textArray[0],
        html2jsx(textArray.slice(1, position)),
        html2jsx(textArray.slice(position + 1))
      );
    }
    return addTag(
      textArray[0],
      html2jsx(textArray.slice(1, position))
    );
  }

  return (<Text>
    {textArray[0]}
    {html2jsx(textArray.slice(1))}
  </Text>);
}

export function parseDisplayText(text) {
  if (text === '') {
    return '';
  }

  let displayText;
  const brackets = new RegExp('(<[a-z]>|</[a-z]>)');
  displayText = text.split(brackets);
  displayText = displayText.filter((n) => { return n !== ''; });

  // TODO: validate displayText
  return html2jsx(displayText);
}

export function parseVoiceoverText(text) {
  let parsedText = text.replace(/-/g, ' to ');
  parsedText = parsedText.replace(/(<[a-z]>)/g, '');
  parsedText = parsedText.replace(/(<\/[a-z]>)/g, '');
  return parsedText;
}
