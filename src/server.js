require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const API_KEY = process.env.API_KEY; // Replace with your actual API key

app.get("/download", async (req, res) => {
  const fileId = req.query.fileId;
  if (!fileId) {
    return res.status(400).send("File ID is required.");
  }

  try {
    const response = await axios.get(
      `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${API_KEY}`,
      { responseType: "stream" }
    );
    response.data.pipe(res);
  } catch (err) {
    console.error("Error fetching file:", err.response?.data || err.message);
    res.status(500).send("Failed to fetch the file.");
  }
});

app.get("/subfolders", async (req, res) => {
  try {
    const folderId = req.query.folderId;
    if (!folderId) return res.status(400).send("Missing folderId");

    const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+mimeType='application/vnd.google-apps.folder'&key=${process.env.API_KEY}&fields=files(id, name)`;
    
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching subfolders:", error);
    res.status(500).send("Failed to fetch subfolders.");
  }
});

app.get("/pdfs", async (req, res) => {
  try {
    const folderId = req.query.folderId;
    if (!folderId) return res.status(400).send("Missing folderId");

    const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+mimeType='application/pdf'&key=${process.env.API_KEY}&fields=files(id, name, webViewLink)`;

    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching PDFs:", error);
    res.status(500).send("Failed to fetch PDFs.");
  }
});


app.get("/thumbnail", async (req, res) => {
  const fileId = req.query.fileId;
  if (!fileId) return res.status(400).send("Missing fileId");

  try {
    const url = `https://drive.google.com/thumbnail?id=${fileId}&sz=w150`;
    const response = await axios.get(url, { responseType: "arraybuffer" });

    // Set response headers to serve the image correctly
    res.setHeader("Content-Type", "image/jpeg");
    res.send(response.data);
  } catch (error) {
    console.error("Error fetching thumbnail:", error);
    res.status(500).send("Error fetching thumbnail");
  }
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Proxy server running on http://localhost:3001");
});