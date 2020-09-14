import React, { useState, useEffect } from 'react';
import './App.css';
import ChatListItem from './components/ChatListItem';
import ChatWindow from './components/ChatWindow';
import ChatIntro from './components/ChatIntro';
import NewChat from './components/NewChat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

export default () => {
  const [user, setUser]= useState({
    id:123,
    avatar:'https://s1.1zoom.me/big0/856/329183-alexfas01.jpg',
    name:'Lorrayne'
  });
  const [chatlist, setChatList] = useState([
    {chatId:1, title:'Lorrayne Bonita', image:'https://s1.1zoom.me/big0/856/329183-alexfas01.jpg'},
    {chatId:2, title:'Lorrayne Maravilhosa', image:'https://s1.1zoom.me/big0/856/329183-alexfas01.jpg'},
    {chatId:3, title:'Lorrayne Gata', image:'https://s1.1zoom.me/big0/856/329183-alexfas01.jpg'},
    {chatId:4, title:'Lorrayne Princesa', image:'https://s1.1zoom.me/big0/856/329183-alexfas01.jpg'}
  ]);
  const [showNewChat, setShowNewChat] = useState(false);
  const handleNewChat = () =>{
    setShowNewChat(true);
  }
  const [activeChat, setActiveChat] = useState({});
  return (
    <div className="app-window">
      <div className="sidebar">
        <NewChat
          chatlist={chatlist}
          user={user}
          show={showNewChat}
          setShow={setShowNewChat}
        />
        <header>
          <img className="header--avatar" src={user.avatar} alt="" />
          <div className="header--buttons">
            <div className="header--btn">
              <DonutLargeIcon style={{ color: '#919191' }} />
            </div>
            <div className="header--btn"
              onClick={handleNewChat}
            >
              <ChatIcon style={{ color: '#919191' }} />
            </div>
            <div className="header--btn">
              <MoreVertIcon style={{ color: '#919191' }} />
            </div>
          </div>
        </header>

        <div className="search">
          <div className="search--input">
            <SearchIcon fontSize="smail" style={{ color: '#919191' }} />
            <input type="search" placeholder="Procurar ou começar uma nova conversa" />
          </div>
        </div>
        <div className="chatlist">
          {chatlist.map((item, key) => (
            <ChatListItem
              key={key} 
              data={item}
              active={activeChat.chatId === chatlist[key].chatId}
              onClick={()=>setActiveChat(chatlist[key])}
              />
          ))}
        </div>
      </div>
      <div className="contentarea">
        {activeChat.chatId !== undefined &&
          <ChatWindow 
          user={user}
          />
        }
        {activeChat.chatId === undefined &&
          <ChatIntro />
        }
      </div>
    </div>
  );
}