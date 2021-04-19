var script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.4.1.min.js";
script.type = "text/javascript";
document.getElementsByTagName("head")[0].appendChild(script);

let slide = (element, open) => {
  popout = element.childNodes[1].childNodes[0];
  if (open) {
    $(popout).slideUp(500);
  } else if (!open) {
    $(popout).hide().slideDown(500);
  }
};

let loadList = (type, typeNum) => {
  container = $("#container");
  container.css("text-align", "center");

  type.map((element) => {
    container.append(
      '<div class="productList" onmouseenter="slide(this, false)" onmouseleave="slide(this, true)"> ' +
        '<a href="#" onclick=' +
        "getDetail(this.childNodes[4].innerHTML,this.childNodes[5].innerHTML)" +
        ">" +
        '<div id="popout">Detail</div>' +
        "<div><img src=" +
        element.img +
        ' height=180rem style="margin-top:1rem;"/></div>' +
        '<p id="name">' +
        element.name +
        "</p>" +
        '<p id="price">' +
        "$ " +
        element.price +
        "</p>" +
        '<div style="display:none">' +
        element.id +
        '</div><div style="display:none">' +
        typeNum +
        "</div></a></div>"
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
