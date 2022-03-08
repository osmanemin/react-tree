import React, { useState } from "react";
import MenuItem from "./MenuItem";
import styles from "./MenuItemList.module.scss";

const MenuItemList = ({ item, createItemList }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.itemContainer}>
      <MenuItem
        name={item.name}
        url={item.url}
        hasSubCategory={item.subCategories}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      >
        <div
          className={styles.subCategoryList}
          style={{
            height: `${isOpen ? "270px" : "0"}`,
          }}
        >
          {item.subCategories && createItemList(item.subCategories)}
        </div>
      </MenuItem>
    </div>
  );
};

export default MenuItemList;
