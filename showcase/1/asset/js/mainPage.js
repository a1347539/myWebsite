let changeArrow = (state, obj) => {
  temp = obj.childNodes[0].childNodes[3].childNodes[0];
  if (state) {
    temp.innerHTML = "&#10137;";
  } else {
    temp.innerHTML = "&#10138;";
  }
};
