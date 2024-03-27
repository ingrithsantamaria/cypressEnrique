class UploadDownloadPage {
  visit() {
    cy.visit('https://demoqa.com/upload-download');
  }

  uploadFile(filePath) {
    cy.get('input[type="file"]').selectFile('nature_evening.png');
  }

  downloadFile() {
    cy.get('#downloadButton').click();
  }

  getUploadedFileName() {
    return cy.get('#uploadedFilePath');
  }
}

export default UploadDownloadPage;