
import React, { useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import './index.css';

const QRContact = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const vCard = `
BEGIN:VCARD
VERSION:3.0
N:Kirschke;Kevin;;;
FN:Kevin Kirschke
ORG:Sys-Admin & Software-Entwickler
TEL;TYPE=cell:+4915733399618
EMAIL:kevin.kirschke@mail.de
URL:https://github.com/KevinKirschke
END:VCARD
    `.trim();

    QRCode.toCanvas(canvasRef.current, vCard, {
      width: 200,
      color: { dark: '#000', light: '#fff' }
    });
  }, []);

  return (
    <div className="qr-container">
      <canvas ref={canvasRef} />
      <p>Kontakt ?</p>
      <p>Scan mich 📲</p>
    </div>
  );
};

export default QRContact;
