const { Menu } = require('../model/IndexMenu');

//메뉴 추가
// exports.admin_main = (req, res) => {
//   res.render()
// };

exports.addMenu = (req, res) => {
  console.log('메뉴 추가 요청 : ', req.body);
  let data = {
    menu_index: req.body.index,
    menu_id: req.body.id,
    menu_price: req.body.price,
    menu_img: req.body.img,
  };
  Menu.create(data).then((result) => {
    console.log('result : ', result);
    res.send(true);
  });
};
