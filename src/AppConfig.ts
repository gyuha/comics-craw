import Singleton from './libs/Singleton';

// const { dialog } = remote;

class AppConfig extends Singleton {
  // constructor() {
  //   super();
  //   config.set('init', 'test');

  //   const init = config.get('init');
  //   console.log('AppConfig -> constructor -> init', init);
  // }

  a = 0;

  async add() {
    this.a++;
    // console.log(dialog.showOpenDialog({ properties: ['openFile', 'multiSelections'] }));
    // console.log(app.getPath('home'), this.a);
    // fs.readFile(path.resolve(__dirname, './tsconfig.json'), 'utf-8', (err, data) => {
    //   if (err) {
    //     throw err;
    //   }
    //   console.log(data);
    // });
  }
}

export default AppConfig;
