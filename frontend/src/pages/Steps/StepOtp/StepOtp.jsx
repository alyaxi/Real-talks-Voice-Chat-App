import React from 'react'
import Button from '../../../components/shared/Button/Button'
import Card from '../../../components/shared/Card/Card'
import Input from '../../../components/shared/Input/Input'
import styles from "./StepOtp.module.css"
const StepOtp = ({onNext}) => {
  return (
    <div className={styles.CardWrapper}>
    <Card title="Enter your OTP" icon="otpicon">
    <Input />
  <div>
    <Button  text="Next" icon="buttoniconarrow" />
  </div>
  <p className={styles.paragraph}>By entering your number, you’re agreeing to our Terms of Service and Privacy Policy. Thank!</p>
</Card>
</div>
  )
}

export default StepOtp