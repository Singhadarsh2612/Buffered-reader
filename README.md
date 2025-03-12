# Buffered Reader
A prototype for the digital platform for the biannual magazine and monthly newsletter of the department of Computer Science and Engineering at IIT (ISM), Dhanbad.

## Overview
This project integrates the Google Drive API to efficiently retrieve PDFs of the magazine and newsletter, streamlining the process of managing and displaying these documents on designated webpages. By leveraging this API, users can seamlessly upload files to Google Drive, ensuring that newly added content is instantly accessible and displayed in the appropriate sections of the website. This approach enhances workflow efficiency, eliminates manual file transfers, and provides a centralized solution for maintaining up-to-date publications.

Additionally, the integration reduces the risk of outdated content being displayed, as files are fetched directly from Google Drive in real time. This ensures that any modifications, updates, or new uploads are reflected instantly without requiring additional intervention.

## Usage

### Accessing Google Drive
1. The designated Google Drive folder for uploading magazines and newsletters can be accessed at:  
   📂 [Buffered Reader Drive Folder](https://drive.google.com/drive/folders/1qKjS2hDCQ5rG0IE6quG1NCK7PJlGKJad)
2. Users should upload magazine files to the **Buffered Reader** folder and newsletter files to the **Bytestreams** folder.
3. Each of these folders is organized into subfolders based on academic sessions (e.g., *2023-24*). Files should be uploaded to the appropriate existing session folder, or a new session subfolder can be created if necessary.

### Setting Up the Project Locally
```sh
# Clone the repository
git clone https://github.com/Singhadarsh2612/Buffered-reader.git

# Navigate to the project directory
cd Buffered-reader

# Install dependencies
npm install
```

### Configuring the Environment Variables
Create a `.env` file in the root directory and add the following:
```env
API_KEY=your_google_drive_api_key
PORT=3001
```
Replace `your_google_drive_api_key` with your actual API key.

### Running the Project
```sh
# Start the backend server
cd src/
node server.js

# Start the React application
npm start
```

This will initialize the project and enable seamless access to the uploaded files through the website.

## Technologies Used
- **Frontend Framework:** React.js
- **Backend Technologies:** Node.js and Express.js
- **API Integration:** Google Drive API for retrieving PDF files
- **HTTP Requests:** Axios for handling API requests
- **Languages:** HTML5, CSS3, and JavaScript (ES6+)
