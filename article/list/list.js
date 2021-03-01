let laypage = layui.laypage;


// ***********************************************************列表加载

$.ajax({
  url: "/my/article/list",
  data: {
    // 分页数据参数：写死
    pagenum: 1,
    pagesize: 5,
  },
  success: function(res) {
    if (res.status == 0) {

      // ************************列表渲染
      let str = "";
      res.data.forEach(item => {
        str += `<tr>
                <td>${item.title}</td>
                <td>${item.cate_name}</td>
                <td>${item.pub_date}</td>
                <td>${item.state}</td>
                <td>
                  <button type="button" class="layui-btn layui-btn-xs btn_edit" _id="${item.Id}">编辑</button>
                  <button type="button" class="layui-btn layui-btn-danger layui-btn-xs btn_delete" _id="${item.Id}">删除</button>
                </td>
              </tr>`;
      });
      $("tbody").html(str);

      // ***********************分页器初始化
      laypage.render({
        elem: 'page',
        count: res.total // 数据总数，从服务端得到
      });


    }
  }
})