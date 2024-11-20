import React from 'react';
import axios from 'axios';

const XmlGenerator = () => {
  const downloadXML = async () => {
    try {
      // Make a GET request to the backend to fetch the XML file
      const response = await axios.get('http://localhost:3000/create-xml', {
        responseType: 'blob', // We want the response as a blob (binary data)
      });

      // Create a link element to trigger the download
      const link = document.createElement('a');
      link.href = URL.createObjectURL(response.data); // Create a URL for the blob
      link.download = 'output.xml'; // The name of the downloaded file
      link.click(); // Simulate a click to trigger the download

    } catch (error) {
      console.error('Error generating XML:', error);
    }
  };

  return (
    <div>
      <h1>XML Generator</h1>
      <button onClick={downloadXML}>Download XML</button>
    </div>
  );
};

export default XmlGenerator;
