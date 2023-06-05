function generateQRCode(url) {
    const qrcodeElement = document.getElementById('qrcode');
    qrcodeElement.innerHTML = '';
    const qrcode = new QRCode(qrcodeElement, {
      text: url,
      width: 250,
      height: 250,
    });
  }