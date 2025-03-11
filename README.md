# Buffered Reader
A prototype for the digital platform for the biannual magazine and monthly newsletter of the department of Computer Science and Engineering at IIT (ISM), Dhanbad.

# Overview
This project integrates the Google Drive API to efficiently retrieve PDFs of the magazine and newsletter, streamlining the process of managing and displaying these documents on designated webpages. By leveraging this API, users can seamlessly upload files to Google Drive, ensuring that newly added content is instantly accessible and displayed in the appropriate sections of the website. This approach enhances workflow efficiency, eliminates manual file transfers, and provides a centralized solution for maintaining up-to-date publications.

Additionally, the integration reduces the risk of outdated content being displayed, as files are fetched directly from Google Drive in real time. This ensures that any modifications, updates, or new uploads are reflected instantly without requiring additional intervention.
## Usage

### Accessing Google Drive
1. The designated Google Drive folder for uploading magazines and newsletters can be accessed at: [Google Drive Link](https://drive.google.com/drive/folders/1qKjS2hDCQ5rG0IE6quG1NCK7PJlGKJad).
2. Users should upload magazine files to the **Buffered Reader** folder and newsletter files to the **Bytestreams** folder.
3. Each of these folders is organized into subfolders based on academic sessions (e.g., *2023-24*). Files should be uploaded to the appropriate existing session folder, or a new session subfolder can be created if necessary.

### Viewing the Website
1. Clone the repository to your local system using the following command:
   ```sh
   git clone https://github.com/Singhadarsh2612/Buffered-reader.git
   ```
2. Navigate to the project directory and start the backend server:
   ```sh
   cd src/
   node server.js
   ```
3. Launch the React application by running:
   ```sh
   npm start
   ```

This will initialize the project and enable seamless access to the uploaded files through the website.

## Technologies Used
- **Frontend Framework:** React.js
- **Backend Technologies:** Node.js and Express.js
- **API Integration:** Google Drive API for retrieving PDF files
- **HTTP Requests:** Axios for handling API requests
- **Languages:** HTML5, CSS3, and JavaScript (ES6+)

