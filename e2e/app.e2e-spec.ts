import { HeimdallrFrontendPage } from './app.po';

describe('heimdallr-frontend App', function() {
  let page: HeimdallrFrontendPage;

  beforeEach(() => {
    page = new HeimdallrFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
