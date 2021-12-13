class CountingModule {
  constructor() {

  }

  small() {
    for (var i = 0; i < 10; i++) {
      console.log(i);
    }
  }

  med() {
    for (var i = 0; i < 100; i++) {
      console.log(i);
    }
  }

  lrge() {
    for (var i = 0; i < 1000; i++) {
      console.log(i);
    }
  }

  xlrge() {
    for (var i = 0; i < 10000; i++) {
      console.log(i);
    }
  }

  xxlrge() {
    for (var i = 0; i < 100000; i++) {
      console.log(i);
    }
  }

  mlrge() {
    for (var i = 0; i < 1000000; i++) {
      console.log(i);
    }
  }

  omega() {
    for (var i = 0; i < 10000000; i++) {
      console.log(i);
    }
  }

  custom(start, end, steps) {
    var s = start;
    var e = end;
    var st = steps;

    const CountTheNumbers = (starting, ending, step) => {
      for (var i = starting; i < ending; i += steps) {
        console.log(i);
      }
    }
  }

}
class SpeedModule {
  constructor() {
    this.count = new CountingModule();
  }
}

class NetWorkModule {
  constructor() {

  }

  isInternetProvided() {
    return navigator.onLine;
  }
}
class SurfModule {
  constructor() {

  }

  openURL(url) {
    open(url);
  }
}

class ConsoleClass {
  constructor() {

  }

  writeln(text) {
    console.log(text);
  }

  clearAll() {
    console.clear();
  }
}

class RandomModule {
  constructor() {

  }

  randrange(start, end) {

    var s = start;
    var e = end;
    var result;

    function randomNumberResultant(st, en) {
      result = Math.floor(Math.random() * (st - en) + en);
    }

    randomNumberResultant(s, e);

    return result;
  }

  small() {
    return Math.random();
  }

  med() {
    return Math.floor(Math.random() * 10);
  }

  lrge() {
    return Math.floor(Math.random() * 100);
  }

  xlrge() {
    return Math.floor(Math.random() * 1000);
  }

  xxlrge() {
    return Math.floor(Math.random() * 10000);
  }

  mlrge() {
    return Math.floor(Math.random() * 100000);
  }

  omega() {
    return Math.floor(Math.random() * 10000000);
  }

  special() {
    return Math.floor(Math.random() * 100000000000);
  }
}

class ApplicationClass {
  constructor() {
    this.console = new ConsoleClass();
    this.random = new RandomModule();
  }
}

class WebModule {
  constructor() {

  }

  say(txt) {
    var msg = alert(txt);

    return msg;
  }

  ask(txt, defaults) {
    var msg = prompt(txt, defaults);

    return msg;
  }

  sure(txt) {
    var msg = confirm(txt);

    return msg;
  }

  output(txt) {
    return txt;
  }
}

class BrowserModule {
  constructor() {
    this.surf = new SurfModule();
    this.network = new NetWorkModule();
  }
}

class JSONModule {
  constructor() {

  }

  parseCode(code) {
    return JSON.parse(code);
  }
}

class ArrayListModule {
  constructor() {

  }

  have(txt, list) {
    for (var i = 0; i < list.length++; i++) {
      if (list[i] == txt) {
        return true;
        break;
      } else {
        if (i == list.length) {
          return false;
          break;
        }
      }
    }
  }

  add(stuff, list) {
    list.push(stuff);
  }
}

class CSS {
  constructor() {

  }

  style(id, type, config) {
    document.getElementById(id).style[type] = config;
  }
}



class ScriptModule {
  constructor() {
    this.JSON = new JSONModule();
    this.ArrayList = new ArrayListModule();
    this.css = new CSS();
  }

  addEvent(id, event, func) {
    document.getElementById(id).addEventListener(event, func);
  }

  setText(id, text) {
    document["getElementById"](id)["innerHTML"] = text;
  }

  createButton(ids, texts) {
    const button = (id, text) => {
      document.getElementById("body").innerHTML += `<button id="` + id + `"` + `>` + text + `</button>`;
    }

    button(ids, texts);
  }
}

function setText(id, text) {
  document.getElementById(id).innerHTML = text;
}

function getText(id, text, isInput) {
  var result;
  if (isInput == true) {
    result = document.getElementById(id).value;
  } else {
    result = document.getElementById(id).innerHTML;
  }

  return result;
}

var application = new ApplicationClass();
var web = new WebModule();
var Browser = new BrowserModule();
var speed = new SpeedModule();
var script = new ScriptModule();