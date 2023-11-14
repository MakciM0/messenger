import React, { FC, useState } from "react";

import { useAppSelector, useAppDispatch } from "../../store/AppHooks";
import { SendMessage } from "../../store/MessegerSlice";

import styles from "./CurrentPage.module.scss";

interface CurrentPageProps {}

const CurrentPage: FC<CurrentPageProps> = () => {
  const dispatch = useAppDispatch();
  const CurrentSub = useAppSelector((state) => state.messages.CurrentSub);

  const [message, setMessage] = useState<string>("");

  const handleSend = (message: string) => {
    if (message) {
      const today = new Date();
      const time = String(today.getHours()) + ":" + String(today.getMinutes());
      dispatch(
        SendMessage({
          value: message,
          destination: false,
          time: time,
          read: true,
        })
      ); //read: true для разработки(нужен сервер)
    }
  };

  return (
    <div className={styles.currentPage}>
      {CurrentSub.name ? (
        <>
          <div className={styles.title}>
            <h3>{CurrentSub.name}</h3>
          </div>
          <div className={styles.messages}>
            {CurrentSub.messages.map((el, index) => (
              <p
                className={`${
                  el.destination ? styles.received_message : styles.message
                }`}
                key={index}
              >
                {el.value} <span>{el.time}</span>
              </p>
            ))}
          </div>
          <div className={styles.send}>
            <textarea onChange={(e) => setMessage(e.target.value)} />
            <button onClick={() => handleSend(message)}>Отправить</button>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CurrentPage;
