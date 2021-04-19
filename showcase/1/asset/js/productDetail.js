typeNum = localStorage.getItem("typeNum");
itemNum = localStorage.getItem("itemNum");
product = products[typeNum][itemNum];
descriptionString = "";

temp1 = eval(typeNum) + 1;
temp2 = eval(itemNum) + 1;

var timeout;

const imgArray = new Array();
const prefix = "./asset/image/product/" + temp1 + "/" + temp2 + "/";
const suffix = ".jpg";

product.imgs.map((img) => {
  temp = new Image();
  temp.src = prefix + img + suffix;
  imgArray.push(temp);
});

product.description.map((description) => {
  descriptionString += "<li>" + description + "</li>";
});

next = false;
index = Math.floor(Math.random() * imgArray.length);

$(document).ready(() => {
  $("#img").attr("src", product.img);
  $("#name").text(product.name);
  $("#price").text("$ " + product.price);
  $("#description").append(descriptionString);
  fF = document.getElementById("frame1");
  sF = document.getElementById("frame2");
  fI = document.getElementById("fF");
  sI = document.getElementById("sF");
  animate();
});

let animate = () => {
  if (index >= imgArray.length - 1) {
    index = 0;
  }
  if (next) {
    getTransparent(sF, 1);
    getOpaque(fF, 0);
    fI.src = imgArray[index].src;
  } else if (!next) {
    getTransparent(fF, 1);
    getOpaque(sF, 0);
    sI.src = imgArray[index].src;
  }
  next = !next;
  index++;
  timeout = setTimeout(function () {
    animate();
  }, 3000);
};

function getTransparent(img) {
  $(img).fadeOut(500);
}

function getOpaque(img) {
  $(img).fadeIn(500);
}

let stayImg = (obj) => {
  clearTimeout(timeout);
};

let changeImg = (obj) => {
  nIndex = Math.floor(Math.random() * imgArray.length);
  temp = obj.childNodes[1];
  temp.src = imgArray[nIndex].src;
  timeout = setTimeout(() => animate(), 800);
};

let getTitle = () => {
  document.title = product.name;
};
