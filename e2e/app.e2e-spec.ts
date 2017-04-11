import { Cityguide2Page } from './app.po';

describe('cityguide2 App', () => {
  let page: Cityguide2Page;

  beforeEach(() => {
    page = new Cityguide2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
