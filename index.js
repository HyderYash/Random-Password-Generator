console.log("Connected");
localStorage.clear();

function randomGeneratedNum(count) {
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZacdefhiklmnoqrstuvwxyz0123456789".split(
    ""
  );
  var result = "";
  for (var i = 0; i < count; i++) {
    var x = Math.floor(Math.random() * chars.length);
    result += chars[x];
  }
  return result;
}
document.getElementById("showGeneratedNum").innerText = randomGeneratedNum(10);
