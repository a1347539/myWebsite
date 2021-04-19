var script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.4.1.min.js";
script.type = "text/javascript";
document.getElementsByTagName("head")[0].appendChild(script);

let loadList = () => {
  container = $("#container");
  container.css("text-align", "center");
  works.map((element) => {
    url = "./showcase/" + element.url;
    img = "./image/showcase/" + element.img;
    container.append(
      '<div class="workList"> ' +
        '<p id="name">' +
        element.name +
        "</p>" +
        "<img src=" +
        img +
        " />" +
        '<div id="url"><a href=' +
        url +
        ' target="_blank">Click Me!</a></div>' +
        "</div></div>"
    );
  });
};

let getDetail = (itemNum, typeNum) => {
  itemNum--;
  window.open("reminder.html", "reminder", "width=350,height=150");
  window.open("productDetail.html");

  localStorage.setItem("typeNum", typeNum);
  localStorage.setItem("itemNum", itemNum);
};

let changeTitle = () => {
  document.title = "My Work (" + works.length + ")";
};
