import React from 'react';

import ChannelList from '../containers/channel_list';
import MessagesList from '../containers/messages_list';

const App = () => {
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div id='sidebar' className="col-md-1">
          <img src="https://dwj199mwkel52.cloudfront.net/assets/lewagon-logo-square-b6124eb974be375884558e4464efce48a9b5664f18422768156364363ecdd1fc.png" width="40" height="40" alt=""/>
        </div>
        <ChannelList />
        <MessagesList />
      </div>
    </div>
  );
};

export default App;
