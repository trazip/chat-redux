import React from 'react';

const Message = (props) => {
  const formatDate = (dateString) => {
    const options = { hour: "2-digit", minute: "2-digit" }
    return new Date(dateString).toLocaleTimeString(undefined, options)
  }

  return (
    <div className="message">
      <div id="user-image">
        <img src="https://avatars.githubusercontent.com/u/72160319" className="rounded" width="40" height="40" alt=""/>
      </div>
      <div>
        <div id="header">
          <h5>{props.message.author}<span className="time"> - {formatDate(props.message.created_at)}</span></h5>
        </div>
        <div id="content">
          {props.message.content}
        </div>
      </div>
    </div>
  );
};

export default Message;
