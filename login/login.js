// ------------------------------------------切换
// 去注册
$("#goto-register").on("click", function() {
  $("#login").hide();
  $("#register").show();
});
// 去登录
$("#goto-login").on("click", function() {
  $("#login").show();
  $("#register").hide();
});