import React, { useState } from "react";
import Button from "../../../components/shared/Button/Button";
import Card from "../../../components/shared/Card/Card";
import Input from "../../../components/shared/Input/Input";
import styles from "./StepOtp.module.css";
import { verifyOtp } from "../../../http";
import { useSelector } from "react-redux";
import { setAuth } from "../../../store/authSlice";
import { useDispatch } from "react-redux";
const StepOtp = () => {
  const [otp, setOtp] = useState("");
  const { phone, hash } = useSelector((state) => state.authSlice.otp);
  const dispatch = useDispatch();
  const submit = async () => {
    try {
      const { data : { newUSer} } = await verifyOtp({ otp: otp, phone: phone, hash: hash });
      dispatch(setAuth({  newUSer }));
    } catch (error) {
      console.log(error);
    }
    // onNext()
  };
  return (
    <div className={styles.CardWrapper}>
      <Card title="Enter your OTP" icon="otpicon">
        <Input value={otp} onChange={(e) => setOtp(e.target.value)} />
        <div>
          <Button onClick={submit} text="Next" icon="buttoniconarrow" />
        </div>
        <p className={styles.paragraph}>
          By entering your number, you’re agreeing to our Terms of Service and
          Privacy Policy. Thank!
        </p>
      </Card>
    </div>
  );
};

export default StepOtp;
