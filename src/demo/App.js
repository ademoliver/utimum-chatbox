import React from "react";
import ChatBox from "../lib";

import Navbar from './Navbar';
import Hero from './Hero';
import Exemplar from './Exemplar';
import Features from './Features';
import About from './About';
import LatestNews from './LatestNews';
import SocialBrand from './SocialBrand';
import Footer from './Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageList: []
    };
  }
  onMessageWasSent = message => {
    this.setState({
      messageList: [...this.state.messageList, message]
    });
  };
  sendMessage = text => {
    if (text.length > 0) {
      this.setState({
        messageList: [
          ...this.state.messageList,
          {
            author: "them",
            type: "text",
            data: { text }
          }
        ]
      });
    }
  };
  render() {
    return (
      <div id="app">
        <ChatBox
          agentProfile={{
            teamName: "react-live-chat",
            imageUrl:
              "https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png"
          }}
          onMessageWasSent={this.onMessageWasSent}
          messageList={this.state.messageList}
          showEmoji
        />
       
            <Navbar />
      <Hero />
      <Exemplar />
      <Features />
      <About />
      <LatestNews />
      <SocialBrand />
      <Footer />
      
    </div>
    );
  }
}

export default App;
