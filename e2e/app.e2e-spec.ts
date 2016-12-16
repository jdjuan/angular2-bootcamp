import { Angular2BootcampPage } from './app.po';

describe('angular2-bootcamp App', function() {
  let page: Angular2BootcampPage;

  beforeEach(() => {
    page = new Angular2BootcampPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
