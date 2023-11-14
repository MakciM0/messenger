import React, { FC, useState } from "react";

import { useAppSelector, useAppDispatch } from "../../store/AppHooks";
import { SetCurrentSub, NewSub, DeleteSub } from "../../store/MessegerSlice";

import styles from "./Header.module.scss";

import TrashCan from "../../imgs/trash_can.png";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const dispatch = useAppDispatch();
  const Subscribers = useAppSelector((state) => state.messages.Subscribers);

  const [newSubName, setNewSubName] = useState<string>("");

  const handleNewSub = () => {
    if (newSubName) {
      dispatch(NewSub(newSubName));
    }
  };

  return (
    <div className={styles.header_wrapper}>
      <menu>
        <input type="checkbox" name="" id="" />
        <div className={styles.hamburger_lines}>
          <span className={styles.line1}></span>
          <span className={styles.line2}></span>
          <span className={styles.line3}></span>
        </div>
        <div className={styles.menu_items}>
          {Subscribers.map((el) => (
            <div className={styles.menu_item}>
              <p onClick={() => dispatch(SetCurrentSub(el))}>{el.name} </p>
              <div className={styles.item_buttons}>
                <img
                  onClick={() => dispatch(DeleteSub(el))}
                  src={TrashCan}
                  alt="удалить"
                />
              </div>
            </div>
          ))}
          <div className={styles.newSubForm}>
            <span>Введите имя: </span>
            <input
              onChange={(e) => setNewSubName(e.target.value)}
              type="text"
            ></input>
          </div>
          <button onClick={() => handleNewSub()}>Добавить контакт</button>
        </div>
      </menu>
      <div className={styles.logo}>
        <h1>Messenger</h1>
      </div>
    </div>
  );
};

export default Header;
