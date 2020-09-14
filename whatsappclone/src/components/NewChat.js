import React, { useState } from 'react'
import './NewChat.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default function NewChat({user, chatlist, show, setShow}) {
  const handleClose=()=>{
    setShow(false);
  }
  const [list, setList] = useState([
    {
      id: 321,
      avatar: 'https://s1.1zoom.me/big0/856/329183-alexfas01.jpg',
      name: 'Ana'
    },
    {
      id: 322,
      avatar: 'https://s1.1zoom.me/big0/856/329183-alexfas01.jpg',
      name: 'Ana Luiza'
    },
    {
      id: 323,
      avatar: 'https://s1.1zoom.me/big0/856/329183-alexfas01.jpg',
      name: 'Ana'
    },
  ]);
  return (
    <div className="newChat" style={{left: show? 0: -415}}>
      <div className="newChat--head">
        <div onClick={handleClose}
        className="newChat--backbutton">
          <ArrowBackIcon style={{ color: '#FFFFFF' }} />
        </div>
        <div className="newChat--headtitlle">Nova Conversa</div>
      </div>
      <div className="newChat--list">
        {list.map((item, key)=>(
          <div className="newChat--item" key={key}>
            <img className="newChat--itemavatar" src={item.avatar} alt="" />
        <div className="newChat--itemname">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
