// 초기 상태 설정
const initState = {
  menuData: [
    {
      menu_index: '커피',
      menu_id: '아메리카노',
      menu_price: '3500',
      menu_img: '/img/1.png',
    },
    {
      menu_index: '커피',
      menu_id: '카페라떼',
      menu_price: '3500',
      menu_img: '/img/2.png',
    },
  ],
};

// 액션 타입 설정
const MENU_ADD = 'menu_controller/MENU_ADD';
const MENU_UPDATE = 'menu_controller/MENU_UPDATE';
const MENU_DELETE = 'menu_controller/MENU_DELETE';

//액션 생성 함수
export const menuAdd = (menu_add) => ({
  type: MENU_ADD,
  menu_add: {
    menu_index: menu_add.menu_index,
    menu_id: menu_add.menu_id,
    menu_price: menu_add.menu_price,
    menu_img: menu_add.menu_img,
  },
});

export const menuUpdate = (menu_update) => ({
  type: MENU_UPDATE,
  menu_update: {
    menu_index: menu_update.menu_index,
    menu_id: menu_update.menu_id,
    menu_price: menu_update.menu_price,
    menu_img: menu_update.menu_img,
  },
});

export const menuDelete = (menu_delete) => ({
  type: MENU_DELETE,
  menu_delete: {
    menu_id: menu_delete.menu_id,
  },
});

// 리듀서
export default function menu_controller(state = initState, action) {
  switch (action.type) {
    case MENU_ADD:
      return {
        ...state,
      };
    case MENU_UPDATE:
      return {
        ...state,
      };
    case MENU_DELETE:
      return {
        ...state,
      };
    default:
      return state;
  }
}
