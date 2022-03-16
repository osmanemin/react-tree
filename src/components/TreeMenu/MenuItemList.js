import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import styles from "./MenuItemList.module.scss";

const MenuItemList = ({ item, createItemList }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (startAnimation) {
      setIsOpen(startAnimation);
    } else {
      setTimeout(() => setIsOpen(startAnimation), 500);
    }
  }, [startAnimation]);

  return (
    <div className={styles.itemContainer}>
      <MenuItem
        name={item.name}
        url={item.url}
        hasSubCategory={item.subCategories}
        setStartAnimation={setStartAnimation}
        startAnimation={startAnimation}
      >
        <div
          className={styles.subCategoryList}
          style={{
            height: `${startAnimation ? "270px" : "0px"}`,
          }}
        >
          {isOpen && item.subCategories && createItemList(item.subCategories)}
        </div>
      </MenuItem>
    </div>
  );
};

export default MenuItemList;
