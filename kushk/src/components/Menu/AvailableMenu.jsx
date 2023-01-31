import Card from "../UI/Card";
import MenuItem from "./MenuItem/MenuItem";
import classes from "./AvailableMenu.module.css";

const EX_MENU = [
  {
    id: "m1",
    name: "아메리카노",
    description: "에스프레소와 물의 컴비네이션",
    price: 2000,
  },
  {
    id: "m2",
    name: "카페라떼",
    description: "에스프레소와 스팀밀크",
    price: 2500,
  },
  {
    id: "m3",
    name: "카페모카",
    description: "에스프레소와 스페셜 더치 쵸코렛 파우더, 스팀밀크",
    price: 3000,
  },
  {
    id: "m4",
    name: "바닐라라떼",
    description: "에스프레소와 프렌치 바닐라 파우더, 저지방 우유",
    price: 3500,
  },
];
//데이터베이스에서 데이터 가져오기

const AvailableMenu = () => {
  const menuList = EX_MENU.map((menu) => (
    <MenuItem
      key={menu.id}
      id={menu.id}
      name={menu.name}
      description={menu.description}
      price={menu.price}
    />
  ));

  return (
    <section className={classes.menuu}>
      <Card>
        <ul>{menuList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMenu;
