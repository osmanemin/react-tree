import React from "react";
import data from "../../mock/data.json";
import MenuItemList from "./MenuItemList";

const TreeMenu = () => {
  return createItemList(data);
};

const createItemList = (itemlist) => {
  return itemlist.map((item) => {
    return (
      <MenuItemList createItemList={createItemList} item={item} key={item.id} />
    );
  });
};
export default TreeMenu;
