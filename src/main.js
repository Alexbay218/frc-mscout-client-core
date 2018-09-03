var qrcs = Object.assign({}, qrcodestreamerClass);
var disp = document.getElementById("display");
var hashdisp = document.getElementById("hash");
disp.width = 200;
disp.height = 200;
var qr = new QRCode(disp, {width: disp.width, height: disp.height, correctLevel: QRCode.CorrectLevel.L});
var t = 500;
qrcs.initFunct(qr,ADLER32);
qrcs.inputData("This is a test of the qrcode streaming using long amounts of data. 123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789\nThis is a test of the qrcode streaming using long amounts of data. 123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789");
hashdisp.innerText = qrcs.fullHash + " " + t;
var funct = () => {
  qrcs.nextCode();
  t = document.getElementById("timing").value;
  hashdisp.innerText = qrcs.fullHash + " " + t;
  window.setTimeout(funct, t);
}
funct();
