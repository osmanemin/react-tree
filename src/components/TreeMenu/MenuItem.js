import React from "react";
import styles from "./MenuItem.module.scss";

const MenuItem = ({
  name,
  url,
  hasSubCategory,
  startAnimation,
  setStartAnimation,
}) => {
  return (
    <>
      <div
        className={styles.menuItem}
        {...(hasSubCategory.length > 0 && {
          onClick: () => {
            setStartAnimation(!startAnimation);
          },
        })}
      >
        {hasSubCategory.length > 0 && (
          <img
            alt={name}
            src="/next.png"
            className={styles.arrowRightIcon}
            style={{
              transform: `rotate(${startAnimation ? "90" : "0"}deg)`,
              transition: "all 0.3s",
            }}
          />
        )}
        <a className={styles.itemText} href={url}>
          {name}
        </a>
      </div>
    </>
  );
};

export default MenuItem;
