'use client';

import React, { useEffect, useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import CVDocument from './CVDocument';
import { Download } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const DownloadButton = () => {
  const [isClient, setIsClient] = useState(false);
  const { lang, t } = useLanguage();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <button className="btn-gold" disabled>
        <Download size={20} />
        {t.download.loading}
      </button>
    );
  }

  return (
    <PDFDownloadLink document={<CVDocument lang={lang} />} fileName={t.download.fileName}>
      {({ blob, url, loading, error }) => {
        if (error) {
          console.error("PDF generation error:", error);
          return (
            <button className="btn-gold" disabled>
              <Download size={20} />
              {t.download.error}
            </button>
          );
        }
        return loading ? (
          <button className="btn-gold" disabled>
            <Download size={20} />
            {t.download.preparing}
          </button>
        ) : (
          <button className="btn-gold">
            <Download size={20} />
            {t.download.ready}
          </button>
        );
      }}
    </PDFDownloadLink>
  );
};

export default DownloadButton;
