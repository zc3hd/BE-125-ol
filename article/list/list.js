// ***********************************************************列表加载

$.ajax({
  url: "/my/article/list",
  data: {
    // 分页数据参数：写死
    pagenum: 1,
    pagesize: 2,
  },
  success: function(res) {
    if (res.status == 0) {
      console.log(res.data);
    }
  }
})