let form = layui.form;
// *****************************************************获取基本信息
// 设计：
//     1.用户名：disabled！不让大家去修改！不是昵称！
//     2.页面加载，获取曾经注册信息；
$.ajax({
  url: "/my/userinfo",
  success: function(res) {
    if (res.status == 0) {
      // 3.数据回填：表单赋值！
      form.val("info", res.data);


    }
  }
})