var qrcs = Object.assign({}, qrcodestreamerClass);
var disp = document.getElementById("display");
var hashdisp = document.getElementById("hash");
disp.width = 1000;
disp.height = 1000;
var qr = new QRCode(disp, {width: disp.width, height: disp.height});
qrcs.initFunct(qr,ADLER32);
qrcs.inputData("This is a test of the qrcode streaming using long amounts of data. 123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789");
hashdisp.innerText = qrcs.fullHash;
window.setInterval(() => {
  qrcs.nextCode();
}, 250);
