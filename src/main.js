
var lyt = Object.assign({}, layoutClass);
var evt = Object.assign({}, eventsClass);
var dispElement = document.getElementById("display");
evt.initFunct(JSON.stringify(eventConfig));
lyt.initFunct(evt);

window.setInterval(() => {
    dispElement.style.width = window.innerWidth;
    dispElement.style.height = window.innerHeight;
	lyt.updateFunct();
},10)

/*
var qrcsObj = Object.assign({}, qrcodestreamerClass);
var disp = document.getElementById("display");
//var hashdisp = document.getElementById("hash");
disp.width = 200;
disp.height = 200;
var qr = new QRCode("display", {width: disp.width, height: disp.height, correctLevel: QRCode.CorrectLevel.L});
var t = 500;
qrcsObj.initFunct(qr,ADLER32);
qrcsObj.inputData("This is a test of the qrcode streaming using long amounts of data. 123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789\nThis is a test of the qrcode streaming using long amounts of data. 123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789");
//hashdisp.innerText = qrcs.fullHash + " " + t;
var funct = () => {
  qrcsObj.nextCode();
  //t = document.getElementById("timing").value;
  //hashdisp.innerText = qrcsObj.fullHash + " " + t;
  window.setTimeout(funct, t);
}
funct();
*/