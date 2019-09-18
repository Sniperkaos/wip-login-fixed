import $ from 'jquery';
var data = {
  "Usernames": {
      "Username":1,
      "Username2":2,
      "Username3":3,
      "Username4":4
    },
  "Passwords": {
      "Password":1,
      "Password2":2,
      "Password3":3,
      "Password4":4
  }
}
var str = JSON.stringify(data);
var string = str.replace(/[{}"]/g, '');
$("#submit").click(function() {
  var x = $("#username").val()
  var y = $("#password").val()
  var yx = data.x;
  if(yx) { console.log("yx") }
  //var a = x.split(" ").startsWith(",",1)
  //var b = y.split(" ").startsWith(",",1)
var rss = data.Usernames[x]
var rsx = data.Passwords[y]

console.log(rss)
console.log(rsx)
  if(!x || !y)
  {
    console.error("Username or password is undefined.")
  }
  else
  {
    if(rss!=rsx) {
      $("#incorrect").html("Incorrect username or password.")
      $("#username").val("")
      $("#password").val("")
    }
    else if(rss = rsx) { 
      window.location.href = "./main.html"
    }
  }

})
//console.log(string)
