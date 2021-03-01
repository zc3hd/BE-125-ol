let form = layui.form;
// **********************************************1.加载类别数据
$.ajax({
  url: "/my/article/cates",
  success: function(res) {
    if (res.status == 0) {
      let str = "";

      res.data.forEach(item => {
        str += `<option value="${item.Id}">${item.name}</option>`
      });

      $("select").html(str);

      // 表单的重新渲染：更新渲染！
      form.render('select');
    }
  }
})



// **************************************************2.单独封装JS文件
// 里面配置：http://tinymce.ax-z.cn/quick-start.php
initEditor(); // 封装好很多配置