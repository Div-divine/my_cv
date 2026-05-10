'use client';

import React, { useEffect, useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import CVDocument from './CVDocument';
import { Download } from 'lucide-react';

const DownloadButton = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <button className="btn-gold" disabled>
        <Download size={20} />
        Loading CV...
      </button>
    );
  }

  return (
    <PDFDownloadLink document={<CVDocument />} fileName="Divine_Osuu_CV.pdf">
      {({ blob, url, loading, error }) => {
        if (error) {
          console.error("PDF generation error:", error);
          return (
            <button className="btn-gold" disabled>
              <Download size={20} />
              Error generating PDF
            </button>
          );
        }
        return loading ? (
          <button className="btn-gold" disabled>
            <Download size={20} />
            Preparing PDF...
          </button>
        ) : (
          <button className="btn-gold">
            <Download size={20} />
            Download CV
          </button>
        );
      }}
    </PDFDownloadLink>
  );
};

export default DownloadButton;
