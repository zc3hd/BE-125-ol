let layer = layui.layer;


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




// -------------------------------------------注册
// html：form表单！按钮/表单元素 name属性和参数名一致！
// JS ：收集数据！$.ajax()

$("#register form").on("submit", function(e) {
  e.preventDefault();

  // 1.收集数据  JQ  layui.form模块
  let data = $(this).serialize();


  // 2.提交数据
  $.ajax({
    url: "http://ajax.frontend.itheima.net/api/reguser",
    type: "POST",
    data: data,
    success: function(res) {
      layer.msg(res.message);

      if (res.status == 0) {
        // 去登录！
        $("#goto-login").click();

        // 注册表单重置！
        $("#register form")[0].reset();
      }


    }
  })



})