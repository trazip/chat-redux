import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ChannelList extends Component {
  renderChannelList(){
    return this.props.channelList.map((channel) => {
      const classes = `py-2 px-3 ${this.props.selectedChannel == channel ? 'active' : ''}`
      return (
        <li key={channel} className={classes}># {channel}</li>
      );
    })
  }
  
  render(){
    return(
      <div id="channelList" className="col-md-2">
        <div id="title">
          <h1>Redux Chat</h1>
        </div>
        <div id="channels">
          <ul>
            {this.renderChannelList()}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channelList: state.channels,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps)(ChannelList)
