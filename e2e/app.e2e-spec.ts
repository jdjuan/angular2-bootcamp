import { FakeAPIPage } from './app.po';

describe('fake-api App', function() {
  let page: FakeAPIPage;

  beforeEach(() => {
    page = new FakeAPIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
