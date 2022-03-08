import React from "react";
import styles from "./MenuItem.module.scss";

const MenuItem = ({
  name,
  url,
  hasSubCategory,
  isOpen,
  setIsOpen,
  children,
}) => {
  return (
    <>
      <div
        className={styles.menuItem}
        {...(hasSubCategory.length > 0 && {
          onClick: () => {
            setIsOpen(!isOpen);
          },
        })}
      >
        {hasSubCategory.length > 0 && (
          <img
            alt={name}
            src="/next.png"
            className={styles.arrowRightIcon}
            style={{
              transform: `rotate(${isOpen ? "90" : "0"}deg)`,
              transition: "all 0.3s",
            }}
          />
        )}
        <a className={styles.itemText} href={url}>
          {name}
        </a>
      </div>
      {children}
    </>
  );
};

export default MenuItem;
