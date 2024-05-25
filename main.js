const responsiveLinkList = document.getElementsByClassName("res-links");
const burgerIcon = document.getElementsByClassName("burger-icon");

console.log(responsiveLinkList[0]);
console.log(burgerIcon[0]);

let isListOpen = true;

burgerIcon[0].addEventListener(
  "click",
  () => {
    isListOpen = !isListOpen;
    console.log(isListOpen);
    if (isListOpen) {
      responsiveLinkList[0].style.height = "0";
      responsiveLinkList[0].style.padding = "0";
    } else {
      responsiveLinkList[0].style.height = "270px";
      responsiveLinkList[0].style.padding = " 10px 20px";
    }
  },
  false
);
