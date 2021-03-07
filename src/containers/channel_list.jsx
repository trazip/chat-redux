import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectChannel, setMessages } from '../actions/index';

class ChannelList extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedChannel !== this.props.selectedChannel) {
      this.props.setMessages(nextProps.selectedChannel);
    }
  }

  handleClick = (channel) => {
    this.props.selectChannel(channel);
  }

  renderChannelList(){
    return this.props.channelList.map((channel) => {
      const classes = `py-2 px-3 ${this.props.selectedChannel == channel ? 'active' : ''}`
      return (
        <li key={channel} className={classes} onClick={() => this.handleClick(channel)}># {channel}</li>
      );
    })
  }
  
  render(){
    return(
      <div id="channel-list" className="col-md-2">
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectChannel, setMessages }, dispatch);
}

function mapStateToProps(state) {
  return {
    channelList: state.channels,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList)
