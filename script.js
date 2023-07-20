//your JS code here. If required.
console.log(navigator)
let x= document.getElementById('browser-info')
console.log(x)

let y= `You are using ${navigator.appName} version ${navigator.appVersion}`
console.log(y)

x.innerHTML = y