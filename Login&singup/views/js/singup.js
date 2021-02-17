$(document).ready(function () {
  $(".all").click(function (e) {
    e.preventDefault();
    let userInfo = {
      user: $("input[name=user]").val(),
      email: $("input[name=email]").val(),
      pass: $("input[name=pass]").val(),
      cpass: $("input[name=cpass]").val(),
      gander: $("select[name=gander]").val(),
    };
    $.ajax({
      type: "post",
      url: "/singup",
      data: userInfo,
      datatype: "json",
      success: function (response) {
        if (response === "Error") {
          alert("کاربری با اطلاعات موجود میباشد");
        } else if (response === "empty") {
          alert("فیلد های خالی را پر نمایید");
        } else if (response === "INcode") {
          alert("رمزهای وارد شده یکسان نمیباشند");
        } else if (response === "pass") {
          alert("رمز عبور باید حداقل 8 کارکتر و حداقل یک حرف و یک عدد باشد");
        } else if (response === "added") {
          $(location).attr("href", "http://localhost:3000/login");
        }
      },
    });
  });
});
