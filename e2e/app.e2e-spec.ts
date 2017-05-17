import { TraPage } from './app.po';

describe('tra App', () => {
  let page: TraPage;

  beforeEach(() => {
    page = new TraPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
