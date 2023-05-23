var createPostWrapper = document.getElementById("createPostWrapper");
var msg = document.getElementById("msg");
var angleUp = document.getElementById("angleUp");
var angleDown = document.getElementById("angleDown");
var postTweet = document.getElementById("postTweet");

function addTweet() {
  createPostWrapper.style.left = "0";
  postTweet.style.transform = "150deg"
}


function hideTweet() {
  createPostWrapper.style.left = "-100%";
}


function msgUp() {
  msg.style.bottom = "-0.8rem";
  angleUp.style.display = "none";
  angleDown.style.display = "flex";
}


function msgDown() {
  msg.style.bottom = "-28rem";
  angleUp.style.display = "flex";
  angleDown.style.display = "none";
}


/*
function truncateString(str, num) {
    if (str.length > num) {
     let truncate = str.slice(0, num) + "...";
      return truncate;
    }else {
    return str
    }
  }
  */