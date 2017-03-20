import { A2dashboardPage } from './app.po';

describe('a2dashboard App', function() {
  let page: A2dashboardPage;

  beforeEach(() => {
    page = new A2dashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
