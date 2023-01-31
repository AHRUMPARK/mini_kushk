import Card from '../UI/Card';
import MenuItem from './MenuItem/MenuItem';
import classes from './AvailableMenu.module.css';

//데이터베이스에서 데이터 가져오기
const AvailableMenu = ({ menuList }) => {
  console.log(menuList);

  // id = 품목
  // name = 상품명
  // price = 가격
  // description = 설명
  return (
    <section className={classes.menuu}>
      <Card>
        <ul>
          {menuList.map((menu, index) => (
            <MenuItem
              key={menu.index}
              id={menu.menu_index}
              name={menu.menu_id}
              price={menu.menu_price}
              description={menu.menu_text}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMenu;
