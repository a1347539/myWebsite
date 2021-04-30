const languageSkill = [
  {
    name: "Coding",
    des:
      "Coded data structures and trained deep learning model. Stock too! The below is DIS.",
    img: "./image/porfolio/python_stock.png",
    //video: "./image/porfolio/result.mp4",
  },
  {
    name: "Unity Game Engine",
    des: "Created a tower defense game with the Unity game engine.",
    img: "./image/porfolio/tdg.png",
  },
  {
    name: "Android Studio",
    des: "Built android applications.",
    img: "./image/porfolio/myFlashCard.png",
  },
  { name: "Building Website", des: "This one?" },
  {
    name: "Guitar",
    des: "I sometimes play the guitar.",
    img: "./image/porfolio/guitar.png",
  },
];

let buildLandguageSkill = () => {
  let str = "";

  for (i = 0; i < languageSkill.length; i++) {
    item = languageSkill[i];
    str +=
      '<p class="item"><b>' +
      item.name +
      '</b><ul style="padding-left: 2rem; padding-top:0.7rem">';

    str += "<li>" + item.des + "</li>";
    str += "<img src=" + item.img + " alt=''>";

    if (item.video != null) {
      console.log(item.video);

      newStr =
        '<div><video width="320" height="240" controls><source src=' +
        item.video +
        "></video></div>";
    } else {
      newStr = "";
    }

    str += newStr;
    str += "</ul>";
  }

  return str;
};
