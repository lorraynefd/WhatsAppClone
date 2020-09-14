import React, { useState, useRef, useEffect} from 'react';
import './ChatWindow.css';
import MessageItem from './MessageItem';
import EmojiPicker from 'emoji-picker-react';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MoodIcon from '@material-ui/icons/Mood';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

export default function ChatWindow({user}) {
  let recognition = null;
  let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognition !== undefined) {
    recognition = new SpeechRecognition();
  }
  const body = useRef();
  const [emojiOpen, setEmojiOpen] = useState(false);
  const [listening, setListening] = useState(false);
  const [list, setList] = useState([
    {author:123, body:'pipipopop'},
    {author:124, body:'pipipopop'},
    {author:125, body:'pipipopop'},
    {author:123, body:'pipipopop'},
    {author:124, body:'pipipopop'},
    {author:125, body:'pipipopop'},
    {author:123, body:'pipipopop'},
    {author:124, body:'pipipopop'},
    {author:125, body:'pipipopop'}
  ]);
  useEffect(() => {
    if(body.current.scrollHeight > body.current.offsetHeight){
      body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
    }
  }, [list]);


  const [text, setText] = useState('');

  const handleEmojiClick = (e, emojiObject) => {
    setText(text + emojiObject.emoji);
  }
  const handleOpenEmoji = () => {
    setEmojiOpen(true)
  }
  const handleCloseEmoji = () => {
    setEmojiOpen(false)
  }
  const handleMicClick = () => {
    if (recognition !== null) {
      recognition.onstart = () => {
        setListening(true);
      }
      recognition.onend = () => {
        setListening(false);
      }
      recognition.onresult = (e) => {
        setText(e.results[0][0].transcript);
      }
      recognition.start();
    }
  }
  const handleSendClick = () => {

  }

  return (
    <div className="chatWindow">
      <div className="chatWindow--header">
        <div className="chatWindow--headerinfo">
          <img className="chatWindow--avatar" src="https://s1.1zoom.me/big0/856/329183-alexfas01.jpg" alt="" />
          <div className="chatWindow--name">Lorrayne linda</div>
        </div>

        <div className="chatWindow--headerbuttons">
          <div className="chatWindow--btn">
            <SearchIcon style={{ color: '#919191' }} />

          </div>
          <div className="chatWindow--btn">
            <AttachFileIcon style={{ color: '#919191' }} />

          </div>
          <div className="chatWindow--btn">
            <MoreVertIcon style={{ color: '#919191' }} />

          </div>
        </div>

      </div>
      <div ref={body} className="chatWindow--body">
        {list.map((item, key) => (
          <MessageItem
            key={key}
            data={item}
            user={user}
          />
        )

        )}
      </div>
      <div className="chatWindow--emojiarea"
        style={{ height: emojiOpen ? '200px' : '0px' }} >
        <EmojiPicker
          disableSkinTonePicker
          onEmojiClick={handleEmojiClick}
        />
      </div>

      <div className="chatWindow--footer">

        <div className="chatWindow--pre">
          <div className="chatWindow--btn"
            style={{ width: emojiOpen ? 40 : 0 }}
            onClick={handleCloseEmoji}
          >
            <CloseIcon style={{ color: '#919191' }} />
          </div>

          <div className="chatWindow--btn"
            onClick={handleOpenEmoji}
          >
            <MoodIcon style={{ color: emojiOpen ? '#009688' : '#919191' }} />

          </div>
        </div>
        <div className="chatWindow--inputarea">
          <input
            className="chatWindow--input"
            type="text"
            placeholder="Digite uma mensagem"
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </div>
        <div className="chatWindow--pos">
          {text === '' &&
            <div className="chatWindow--btn"
              onClick={handleMicClick}
            >
              <MicIcon style={{ color: listening ? '#126ECE' : '#919191' }} />
            </div>
          }
          {text !== '' &&
            <div className="chatWindow--btn"
              onClick={handleSendClick}
            >
              <SendIcon style={{ color: '#919191' }} />
            </div>
          }
        </div>

      </div>
    </div >
  )
}
