# React Chat-box
Forked from https://github.com/kingofthestack/react-chat-window. Same API.

`react-live-chat` provides an intercom-like chat window that can be included easily in any project for free. It provides no messaging facilities, only the view component.

<a href="https://www.npmjs.com/package/react-chat-window" target="\_parent">
  <img alt="" src="https://img.shields.io/npm/dm/react-chat-window.svg" />
</a>
<a href="https://github.com/kingofthestack/react-chat-window" target="\_parent">
  <img alt="" src="https://img.shields.io/github/stars/kingofthestack/react-chat-window.svg?style=social&label=Star" />
</a>

![Alt Text](https://puu.sh/xei2F/fd4a121185.gif)

## Features

- Customizeable
- Backend agnostic
- Free

## [Demo](https://dharness.github.io/react-chat-window/)

## Table of Contents
- [Installation](#installation)
- [Example](#example)
- [Components](#api)

## Installation

```
$ npm install react-chat-window
```

## Example

``` javascript
import React, {Component} from 'react'
import {render} from 'react-dom'
import {Launcher} from '../../src'

class Demo extends Component {

  constructor() {
    super();
    this.state = {
      messageList: messageHistory
    };
  }

  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message]
    })
  }

  _sendMessage(text) {
    if (text.length > 0) {
      this.setState({
        messageList: [...this.state.messageList, {
          author: 'them',
          type: 'text',
          data: { text }
        }]
      })
    }
  }

  render() {
    return (<div>
      <Launcher
        agentProfile={{
          teamName: 'react-live-chat',
          imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
        }}
        onMessageWasSent={this._onMessageWasSent.bind(this)}
        messageList={this.state.messageList}
        showEmoji
      />
    </div>)
  }
}
```

For more detailed examples see the demo folder.

## Components

# Launcher

`Launcher` is the only component needed to use react-live-chat. It will react dynamically to changes in messages. All new messages must be added via a change in props as shown in the example.

Launcher props:

|prop | type   | description |
|-----|--------|---------------|
| *agentProfile | object | Represents your product or service's customer service agent. Fields: teamName, imageUrl|
| onMessageWasSent | function(message) | Called when a message a message is sent with a message object as an argument. |
| messageList | [message] | An array of message objects to be rendered as a conversation. |
| showEmoji | bool | A bool indicating whether or not to show the emoji button


### Message Objects

Message objects are rendered differently depending on their type. Currently, only text and emoji types are supported. Each message object has an `author` field which can have the value 'me' or 'them'.

``` javascript
{
  author: 'them',
  type: 'text',
  data: {
    text: 'some text'
  }
}

{
  author: 'me',
  type: 'emoji',
  data: {
    code: 'someCode'
  }
}

```

## Issues
[waffle.io](https://waffle.io/dharness/react-live-chat)


# Development
````
git clone https://github.com/DimitriMikadze/create-react-library.git
````

Install dependencies

`npm install` or `yarn install`

Start development server

`npm start` or `yarn start`

Runs the demo app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Library files

All library files are located inside `src/lib`  

## Demo app

Is located inside `src/demo` directory, here you can test your library while developing

## Testing

`npm run test` or `yarn run test`

## Build library

`npm run build` or `yarn run build`

Produces production version of library under the `build` folder.

## Publish library

`npm publish`

## Example library built with this starter kit

https://github.com/DimitriMikadze/react-under-construction
