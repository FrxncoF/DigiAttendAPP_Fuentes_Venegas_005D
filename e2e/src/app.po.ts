import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  async getTitleA():Promise<string> {
    return element(by.css('app-root a')).getText();
  }


  async getTitleP():Promise<string> {
    return element(by.css('app-root p')).getText();
  }

  async getTitleH1():Promise<string> {
    return element(by.css('app-root h1')).getText();
  } 

}