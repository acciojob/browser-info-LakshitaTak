//your JS code here. If required.
console.log(navigator)
let x= document.getElementById('browser-info')
console.log(x)

let browserName = navigator.appName
let version = navigator.appVersion
let y= "You are using " + browserName + " version " + version
console.log(y)

x.innerHTML = y