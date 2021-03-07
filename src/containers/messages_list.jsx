import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

import Message from '../components/message';

class ChannelList extends Component {
  renderMessages(){
    return this.props.messages.map((message) => {
      return (
        <Message key={message.created_at} message={message} />
      );
    })
  }
  
  render(){
    return(
      <div id="messages-list" className="col-md-9">
        <div id="channel-title">
          <h2>#{this.props.selectedChannel}</h2>
        </div>
        <div id="messages">
          {this.renderMessages()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps)(ChannelList)
