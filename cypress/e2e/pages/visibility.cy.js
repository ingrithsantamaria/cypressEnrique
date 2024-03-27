import VisibilityPage from '../components/visibility/visibility-components';

describe('Prueba de Visibilidad', () => {
  const visibilityPage = new VisibilityPage();

  it('Verificar la visibilidad de los elementos al hacer clic en el botón Hide', () => {
    visibilityPage.visit();

    // Ocultar elementos haciendo clic en el botón "Hide"
    visibilityPage.clickHideButton();

    // Verificar la visibilidad de los elementos
    // Asegúrate de reemplazar los selectores 'selector-for-element' con los selectores reales de los elementos
    visibilityPage.isElementNotVisible('#invisible'); // Elemento que se espera que no sea visible
    visibilityPage.isElementVisible('#visible'); // Elemento que se espera que sea visible
    visibilityPage.isElementVisible('#removed'); // Este elemento se elimina, verificar si esto es lo que quieres hacer
    visibilityPage.isElementVisible('#zero-opacity'); // Este elemento tiene opacidad 0, ajusta según sea necesario
    // Repite para otros elementos según sea necesario
  });
});