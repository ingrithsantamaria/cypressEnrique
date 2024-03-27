describe('Prueba de carga de archivo', () => {
    it('debería cargar un archivo correctamente', () => {
      cy.visit('https://demoqa.com/upload-download');
      cy.get('input[type="file"]').selectFile('nature_evening.png');
    });
  });