var createPostWrapper = document.getElementById("createPostWrapper");
var postTweet = document.getElementById("postTweet");


function addTweet() {
  createPostWrapper.style.left = "0";
}


function hideTweet() {
  createPostWrapper.style.left = "-100%";
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