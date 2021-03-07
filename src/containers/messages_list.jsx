import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Message from '../components/message';
import MessageForm from './message_form'
import { setMessages } from '../actions';

class ChannelList extends Component {
  renderMessages(){
    return this.props.messages.map((message, index) => {
      return (
        <Message key={index} message={message}/>
      );
    })
  }

  componentWillMount() {
    this.fetchMessages();
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchMessages, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  fetchMessages = () => {
    this.props.setMessages(this.props.selectedChannel);
  }

  
  render(){
    return(
      <div id="messages-list" className="col-md-9 d-flex flex-column">
        <div id="channel-title">
          <h2>#{this.props.selectedChannel}</h2>
        </div>
        <div id="messages">
          {this.renderMessages()}
        </div>
        <div>
          <MessageForm />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setMessages: setMessages }, 
    dispatch
   );
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList)
