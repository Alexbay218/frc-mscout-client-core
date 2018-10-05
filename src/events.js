var eventsClass = {
  eventJson:{},
  eventVars:[],
  eventLog:[],
  timeStart:0,
  timeDelta:0,
  initFunct: function(eventJsonStr) {
    this.eventJson = JSON.parse(eventJsonStr);
    for(var i = 0;i < this.eventJson.variables.length;i++) {
      this.eventVars.push(this.eventJson.variables[i]);
    }
  },
  startFunct: function() {
    this.timeStart = Date.now();
  },
  updateTimeFunct: function()  {
    this.timeDelta = (Date.now() - this.timeStart)/1000;
    return this.timeDelta;
  },
  triggerEventFunct: function(eventName, variableName) {
    var delta = 0;
    for(var i = 0;i < this.eventJson.events.length;i++) {
      if(this.eventJson.events[i].eventName == eventName) {
        for(var j = 0;j < this.eventJson.events[i].variableLink.length;j++) {
          if(this.eventJson.events[i].variableLink[j].var == variableName) {
            delta = this.eventJson.events[i].variableLink[j].amt;
          }
        }
      }
    }
    for(var i = 0;i < this.eventVars.length;i++) {
      if(this.eventVars[i].variableName == variableName) {
        var count = this.eventVars[i].variableAmount + delta;
        if((count >= this.eventVars[i].variableLimit[0]) && (count <= this.eventVars[i].variableLimit[1])) {
          this.eventVars[i].variableAmount = count;
        }
      }
    }
  },
  assignEventListeners: function() {
    for(var i = 0;i < this.eventJson.layouts.length;i++) {
      var tmp = document.getElementById(this.eventJson.layouts[i].eventName);
      tmp.onmouseup = (e) => {
        for(var i = 0;i < this.eventVars.length;i++) {
          this.triggerEventFunct(e.srcElement.id, this.eventVars[i].variableName);
        }
      };
    }
  }
}
