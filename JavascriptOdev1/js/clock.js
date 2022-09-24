function showTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let d = today.getDate();
  let mo = today.getMonth();
  let y = today.getFullYear();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('myClock').innerHTML =  h + ":" + m + ":" + s +" " + d + "-" +mo+"-"+y;
  setTimeout(showTime, 1000);
  
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

function addName(){
  let userName=prompt("Lütfen isminizi giriniz:")
  let innerName=document.getElementById("myName");
  myName.innerHTML+=userName
}

showTime()
addName()

// let namee = prompt('İsminiz nedir?')
// let myName = document.querySelector("#myName")
// myName+=namee
