import React from 'react';

const Message = (props) => {
  return (
    <div className="message">
      <div id="user-image">
        <img src="https://avatars.githubusercontent.com/u/72160319" class="rounded" width="40" height="40" alt=""/>
      </div>
      <div>
        <div id="header">
          <h5>{props.message.author}</h5>
        </div>
        <div id="content">
          {props.message.content}
        </div>
      </div>
    </div>
  );
};

export default Message;
