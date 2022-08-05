import React, { useState } from "react";
import Card from "../../../../components/shared/Card/Card";
import Button from "../../../../components/shared/Button/Button";
import Input from "../../../../components/shared/Input/Input";
import styles from "../StepPE.module.css";
import { sendOtp } from "../../../../http";
import { useDispatch } from "react-redux";
import {setOtp} from "../../../../store/authSlice"
const Phone = ({ onNext }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch()
  const submit = async () => {
    const {data} = await sendOtp({phone:phoneNumber});
    console.log(data);
    dispatch(setOtp({
      phone: data.phone,
      hash: data.hash
    }))

    onNext();
  };
  return (
    <Card title="Enter your phone number" icon="phoneicon">
      <Input
        value={phoneNumber}
        placeholder="+1 281 6888456"
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <div>
        <Button onClick={submit} text="Next" icon="buttoniconarrow" />
      </div>
      <p className={styles.paragraph}>
        By entering your number, you’re agreeing to our Terms of Service and
        Privacy Policy. Thank!
      </p>
    </Card>
  );
};

export default Phone;
