var algoForYou = document.getElementById("algoForYou");
var algoFollowing = document.getElementById("algoFollowing");


function algoForYou() {
    algoForYou.width = "100%"
}

function truncateString(str, num) {
    if (str.length > num) {
     let truncate = str.slice(0, num) + "...";
      return truncate;
    }else {
    return str
    }
  }