const crypto = require('crypto');
const hashService = require('./hash-service');
const SMS_SID = process.env.SMS_SID;
const SMS_AUTH = process.env.SMS_AUTH;
const twilio = require('twilio')(SMS_SID, SMS_AUTH,{
    lazyLoading: true
});
class OtpService {
   async generate(){
        const otp = await crypto.randomInt(1000, 9999)
        return otp;
    }

    async sendBySms(phone,otp){
        return await twilio.messages.create({
            to: phone,
            from: process.env.SMS_NUM,
            body: `Your OTP is ${otp} for Realtalks`
        })
    }

    verifyOtp(hashOTP, data){
        const hashData = hashService.hashOtp(data)
        return hashData === hashOTP;
    }
    
    sendByEmail(){}

}

module.exports = new OtpService();