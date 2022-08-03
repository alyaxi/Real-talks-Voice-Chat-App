import React from "react";
import { Link, useNavigate  } from "react-router-dom";
import Button from "../../components/shared/Button/Button";
import Card from "../../components/shared/Card/Card";
import styles from "./Home.module.css";
const Home = () => {

  const navigate = useNavigate()
  const handleRegister = () => {
    // console.log(navigate);
    navigate("/authenticate");
  }
  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to Real-Talks" icon="logoicon">
        <p className={styles.content}>
          Real-talks is a meetup platform as we can talk in interested topic
          with speakers and enjoy the communication with ease and comfy in
          virtual premises.{" "}
        </p>
        <div>
          <Button onClick={handleRegister} text="Get Started" icon="buttoniconarrow" />
        </div>
        <div className={styles.SinginWrapper}>
          <span className={styles.alreadyAcc}>Have your account already?</span>
        </div>
      </Card>
    </div>
  );
};

export default Home;
