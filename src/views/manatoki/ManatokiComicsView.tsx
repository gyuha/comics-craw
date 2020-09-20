// eslint-disable-next-line
import React from 'react';
import eletron from 'electron';

const { remote } = eletron;

const ManatokiComicsView = () => {
  const close = () => {
    console.log('click');
    // remote.getCurrentWindow().close();
    remote.getCurrentWindow().minimize();
  };

  return (
    <div>
      <input type="button" value="close" onClick={close} />
    </div>
  );
};
export default ManatokiComicsView;
