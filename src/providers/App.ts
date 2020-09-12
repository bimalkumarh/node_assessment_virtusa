import Express from '@providers/Express';

class App {
  public loadServer(): void {
    Express.init();
  }
}

export default new App();