var layoutClass = {
  dispElement:{},
  eventObj:{},
  initFunct: function(events) {
    this.dispElement = document.getElementById("display");
    this.eventObj = events;
    this.layoutFunct();
    this.dispElement.style.width = window.innerWidth;
    this.dispElement.style.height = window.innerHeight;
  },
  layoutFunct: function() {
    var groupSum =  this.eventObj.eventJson.variableHeightWeight;
    this.dispElement.insertAdjacentHTML("beforeend", "<div class=\"group\" id=\"variables\"></div>");
    for(var i = 0;i < this.eventObj.eventJson.layouts.length;i++) {
      var hasCurr = false;
      for(var j = 0;j < i;j++) {
        if(this.eventObj.eventJson.layouts[i].groupName == this.eventObj.eventJson.layouts[j].groupName) {
          hasCurr = true;
        }
      }
      if(!hasCurr) {
        this.dispElement.insertAdjacentHTML("beforeend", "<div class=\"group\" id=\"" + this.eventObj.eventJson.layouts[i].groupName + "\"></div>");
        groupSum += this.eventObj.eventJson.layouts[i].heightWeight;
      }
    }
    var tmp = document.getElementById("variables");
    tmp.style.width = "100%";
    tmp.style.height = ((this.eventObj.eventJson.variableHeightWeight/groupSum)*100).toString() + "%";
    for(var i = 0;i < this.eventObj.eventJson.layouts.length;i++) {
      tmp = document.getElementById(this.eventObj.eventJson.layouts[i].groupName);
      tmp.style.width = "100%";
      tmp.style.height = ((this.eventObj.eventJson.layouts[i].heightWeight/groupSum)*100).toString() + "%";
      tmp.insertAdjacentHTML("beforeend", "<div class=\"input\" id=\"" + this.eventObj.eventJson.layouts[i].eventName + "\"></div>");
    }
    for(var i = 0;i < this.eventObj.eventJson.layouts.length;i++) {
      groupSum = 0;
      for(var j = 0;j < this.eventObj.eventJson.layouts.length;j++) {
        if(this.eventObj.eventJson.layouts[i].groupName == this.eventObj.eventJson.layouts[j].groupName) {
          groupSum += this.eventObj.eventJson.layouts[j].widthWeight;
        }
      }
      tmp = document.getElementById(this.eventObj.eventJson.layouts[i].eventName);
      tmp.style.height = "100%";
      tmp.style.width = ((this.eventObj.eventJson.layouts[i].widthWeight/groupSum)*100).toString() + "%";
    }
  }
}
