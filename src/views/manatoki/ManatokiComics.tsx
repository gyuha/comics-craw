import React from 'react';
import eletron from 'electron';

const { remote } = eletron;

const ManatokiComics = () => {
  const close = () => {
    console.log('click');
    remote.getCurrentWindow().close();
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      asdfasdf
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <input type="button" value="close" onClick={close} />
    </div>
  );
};
export default ManatokiComics;
