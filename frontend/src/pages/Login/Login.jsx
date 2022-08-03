import React, { useState } from "react";
import Card from "../../components/shared/Card/Card";
import StepOtp from "../Steps/StepOtp/StepOtp";
import StepPhoneEmail from "../Steps/StepPhoneEmail/StepPhoneEmail";

const steps = {
  1: StepPhoneEmail,
  2: StepOtp,
};

const Login = () => {
  const [step, setStep] = useState(1);
  const Step = steps[step];

  const onNext = () => {
    setStep(step + 1);
  };

  return (
    <div >
    <Card title="Enter your number" icon="phoneicon">
    <Step onNext={onNext} />
    </Card>
</div>
  );
};

export default Login;
