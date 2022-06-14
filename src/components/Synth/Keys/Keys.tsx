import React, { useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import classes from './Keys.module.scss';

const Key: React.FC<{note: string, hotkey: string}> = ({ note, hotkey }) => {
  const [isPressed, setIsPressed] = useState(false);
  const isSharp = note.split('').includes('#');
  const notesAfterSharp = ['D', 'E', 'G', 'A', 'B'];
  const isAfterSharp = notesAfterSharp.includes(note.split('')[0]);
  useHotkeys(hotkey, (keyboardEvent) => {
    setIsPressed(keyboardEvent.type === 'keydown');
  }, {
    keyup: true,
    keydown: true,
  });
  return (
    <button
      type="button"
      className={`
        ${classes.key}
        ${isPressed ? classes.isPressed : ''}
        ${isSharp ? classes.sharp : ''}
        ${isAfterSharp ? classes.afterSharp : ''}
      `}
      onClick={() => console.log(note)}
    >
      <div className={classes.keyCaption}>{note}</div>
    </button>
  );
};

const Keys = () => {
  const notes: { note: string, hotkey: string }[] = [
    { note: 'C', hotkey: 'a' },
    { note: 'C#', hotkey: 'w' },
    { note: 'D', hotkey: 's' },
    { note: 'D#', hotkey: 'e' },
    { note: 'E', hotkey: 'd' },
    { note: 'F', hotkey: 'f' },
    { note: 'F#', hotkey: 't' },
    { note: 'G', hotkey: 'g' },
    { note: 'G#', hotkey: 'y' },
    { note: 'A', hotkey: 'h' },
    { note: 'A#', hotkey: 'u' },
    { note: 'B', hotkey: 'j' },
  ];
  return (
    <div className={classes.wrapper}>
      {notes.map((n) => <Key note={n.note} hotkey={n.hotkey} />)}
    </div>
  );
};

export default Keys;
