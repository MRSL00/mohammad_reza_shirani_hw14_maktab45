$(document).ready(function () {
  $(".pro").click(function (e) {
    e.preventDefault();
    let userInfo = {
      user: $("input[name=user]").val(),
      email: $("input[name=email]").val(),
      pass: $("input[name=pass]").val(),
    };
    $.ajax({
      type: "post",
      url: "/profile",
      data: userInfo,
      datatype: "json",
      success: function (response) {
        if (response === "update") {
          alert("اطلاعات بروز رسانی شد");
          $(location).attr("href", "http://localhost:3000/login");
        } else if (response === "Error") {
          alert("کاربری با اطلاعات موجود میباشد");
        } else if (response === "pass") {
          alert("رمز عبور باید حداقل 8 کارکتر و حداقل یک حرف و یک عدد باشد");
        } else if (response === "empty") {
          alert("فیلد های خالی را پر نمایید");
        }else if (response === "false") {
          $(location).attr("href", "http://localhost:3000/login");
        }
      },
    });
  });
});
