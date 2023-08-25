function setCookie(cookieName, cookieValue, numdaystilexpireasinteger) {
  var d = new Date();
  d.setTime(d.getTime() + numdaystilexpireasinteger * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

function getCookie(cookieName) {
  var name = cookieName + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function showLaw() {
  var x = getCookie("cookieName");
  if (x != "") {
    $("#lawmsg").remove();
  } else {
    setCookie("cookieName", "cookieValue", 2);
  }
}

const mytimeout = setTimeout(timeout, 3000);

function timeout() {
  document.getElementById("lawmsg").style.display = "none";
}
