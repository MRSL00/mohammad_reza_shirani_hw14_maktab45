$(document).ready(function () {
  $(".all").click(function (e) {
    e.preventDefault();
    let userInfo = {
      user: $("input[name=user]").val(),
      pass: $("input[name=pass]").val(),
    };
    $.ajax({
      type: "post",
      url: "/login",
      data: userInfo,
      datatype: "json",
      success: function (response) {
        if (response === "empty") {
          alert("فیلد های خالی را پر نمایید");
        } else if (response === "Error") {
          alert("کاربری با این اطلاعات وجود ندارد");
        } else {
          $(location).attr("href", "http://localhost:3000/profile");
        }
      },
    });
  });
});
