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
initEditor(); // 因为代码太多，所有单独封装一个函数在文件中；



// ***************************************************图片裁剪
// 1.插件初始化 ：需要找插件文档
$('#image').cropper({
  // 宽高比例
  aspectRatio: 1 / 1, // 产品：400 / 280
  // 预览区容器的类名
  preview: '.img-preview'
});

// 2.JS更换 样式不好按钮
$(".btnimg").click(function() {
  $("#file").click();
});

// 3.input:flie 标签注册change事件
$("#file").change(function() {

  // 图片对象
  let imgObj = this.files[0];

  // 把图片信息对象转化为临时地址字符串(了解)
  let src = URL.createObjectURL(imgObj);

  // 通过cropper插件把临时地址替换上!
  $('#image').cropper("replace", src);
});