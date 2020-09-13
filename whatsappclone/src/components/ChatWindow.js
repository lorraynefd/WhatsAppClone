import React from 'react';
import './ChatWindow.css';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function ChatWindow() {
  return (
    <div className="chatWindow">
      <div className="chatWindow--header">
        <div className="chatWindow--headerinfo">
          <img className="chatWindow--avatar" src="https://s1.1zoom.me/big0/856/329183-alexfas01.jpg" alt="" />
          <div className="chatWindow--name">Lorrayne linda</div>
        </div>

        <div className="chatWindow--headerbuttons">
          <div className="chatWindow--btn">
              <SearchIcon style={{color: '#909090'}}/>
              
          </div>
          <div className="chatWindow--btn">
              <AttachFileIcon style={{color: '#909090'}}/>
              
          </div>
          <div className="chatWindow--btn">
              <MoreVertIcon style={{color: '#909090'}}/>
              
          </div>
        </div>

      </div>
      <div className="chatWindow--body">

      </div>
      <div className="chatWindow--footer">

      </div>
    </div>
  )
}
