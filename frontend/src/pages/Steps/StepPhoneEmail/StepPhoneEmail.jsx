import React, { useState } from "react";
import Card from "../../../components/shared/Card/Card";
import Email from "./Email/Email";
import Phone from "./Phone/Phone";
import styles from "./StepPE.module.css";
const phoneEmailMap = {
  phone: Phone,
  email: Email,
};
const StepPhoneEmail = ({ onNext }) => {
  const [type, setType] = useState("phone");
  const Component = phoneEmailMap[type];

  // const onNext = () => {
  //   setStep(step + 1);
  // };

  return (
    <>
      <div className={styles.CardWrapper}>
        <div>
          <div className={styles.ButtonWrapper}>
            <button
              className={`${styles.tabButton} ${type === "phone" ? styles.active : ""}`}
              onClick={() => {
                setType("phone");
              }}
            >
              <img src="/assests/phoneicontab.png" alt="phone" />
            </button>
            <button
              className={`${styles.tabButton} ${type === "email" ? styles.active : ""}`}
              onClick={() => setType("email")}
            >
              <img src="/assests/emailicon.png" alt="emailicon" />
            </button>
          </div>
          <Component onNext={onNext} />
        </div>
      </div>
    </>
  );
};

export default StepPhoneEmail;
