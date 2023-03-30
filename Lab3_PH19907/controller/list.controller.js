exports.getUserList = (req, res, next) => {
  // hàm hiện danh sách
  let tieuDe = "UserList ";
  let array = [
    {
      id: 1,
      name: "Nguyễn Đạt",
    },
    {
      id: 2,
      name: "Trần Quý",
    },
    {
      id: 3,
      name: "Vũ Khanh",
    },
    {
      id: 4,
      name: "Phạm Dương",
    },
    {
      id: 5,
      name: "Nguyễn John",
    },
  ];

  res.render("user/list", { titleList: tieuDe, array: array });
  console.log(array);
};

exports.getFormAdd = (req, res, next) => {
  // hàm hiện form thêm
  let titleFormAdd = "Register";
  const fullname = req.body.fullname;
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const group = req.body.group;
  const status = req.body.status;
  res.render("user/form", {
    titleForm: titleFormAdd,
    username: username,
    password: password,
    fullname: fullname,
    email: email,
    group: group,
    status: status,
  });
};
