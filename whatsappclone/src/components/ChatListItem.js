import React from 'react';
import './ChatListItem.css';

export default () => {
  return (
    <div className="chatListItem">
      <img className="chatListItem--avatar" src="https://s1.1zoom.me/big0/856/329183-alexfas01.jpg" alt="" />
      <div className="chatListItem--lines">
        <div className="chatListItem--line">
          <div className="chatListItem--name">Lorrayne Ferreira</div>
          <div className="chatListItem--date">00:00</div>
        </div>
        <div className="chatListItem--line">
          <div className="chatListItem--lastMsg">
            <p>Falaaaaaaa</p>
          </div>
        </div>
      </div>
    </div>

  );
}
