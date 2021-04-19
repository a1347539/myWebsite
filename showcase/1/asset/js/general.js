let getClock = () => {
  let date = new Date();
  let day = date.getDay();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  let frame = 0;
  if (hour > 12) {
    hour -= 12;
    frame = "pm";
  } else {
    frame = "am";
  }
  let time = [hour, minute, second];
  for (i = 0; i < time.length; i++) {
    if (time[i] < 10) {
      time[i] = "0" + time[i];
    }
  }

  document.getElementById("clock").innerHTML =
    time[0] + ":" + time[1] + ":" + time[2] + " " + frame;

  setInterval(() => getClock(), 1000);
};

let dictLength = (dict) => {
  return Object.keys(dict).length;
};

function resizeIframe(obj) {
  obj.style.height = (screen.height * 3) / 4 + "px";
}

let checkPassword = () => {
  window.location.href = "../../index.html";
  // pass = window.prompt("Enter password (password is 20109930)");
  // if (pass === "20109930") {
  //   window.location.href = "./3/index.html";
  //   return;
  // }
  // window.alert("Wrong password!");
};
