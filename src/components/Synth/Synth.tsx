import React from 'react';
import classes from 'components/Synth/Synth.module.scss';
import Keys from 'components/Synth/Keys/Keys';

const Synth = () => (
  <div className={classes.wrapper}>
    <div className={classes.settingsArea}>Settings</div>
    <div className={classes.keyboardArea}>
      <Keys />
    </div>
  </div>
);

export default Synth;
