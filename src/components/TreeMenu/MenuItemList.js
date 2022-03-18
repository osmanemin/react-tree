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
      setTimeout(() => setIsOpen(startAnimation), 200);
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
      />
      <div
        className={styles.subCategoryList}
        style={{
          transform: `${startAnimation ? "scaleY(1)" : "scaleY(0)"}`,
        }}
      >
        {isOpen && item.subCategories && createItemList(item.subCategories)}
      </div>
    </div>
  );
};

export default MenuItemList;
