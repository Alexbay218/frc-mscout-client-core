var fileClass = {
  fileContents:"",
  hasLoaded:false,
  initFunct: function() {

  },
  loadFileFunct: function readJSON(path) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', path, false);
    xhr.send();
    return xhr.responseText;
  },

}
