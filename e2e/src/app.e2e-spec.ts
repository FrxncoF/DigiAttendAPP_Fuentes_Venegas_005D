import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Prueba 1', () => {
    page.navigateTo();
    expect(page.getTitleA()).toContain('¿No tienes una cuenta?');
  });
  it('Prueba 2', () => {
    page.navigateTo();
    expect(page.getTitleP()).toContain('Login');
  });    
  it('Prueba 3', () => {
    page.navigateTo();
    expect(page.getTitleH1()).toContain(' Inicio de Sesion' );
  }); 

});