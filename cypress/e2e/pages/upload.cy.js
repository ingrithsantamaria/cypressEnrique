import UploadDownloadPage from '../components/upload/upload-components';

describe('Upload and Download Test', () => {
  const uploadDownloadPage = new UploadDownloadPage();
  const fileName = 'nature_evening.png'; 

  it('should upload and download a file', () => {
    uploadDownloadPage.visit();
    uploadDownloadPage.uploadFile(`images/${fileName}`);
    uploadDownloadPage.getUploadedFileName().should('contain', fileName);
    uploadDownloadPage.downloadFile();
   
  });
});