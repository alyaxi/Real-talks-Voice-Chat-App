const OtpService = require('../services/otp-serverice');
const HashService = require('../services/hash-service');
const otpServerice = require('../services/otp-serverice');
const UserService = require('../services/user-service');
const TokenService = require('../services/token-service');

class AuthController {
  async sendOtp(req, res) {
    const { phone } = req.body;
    if (!phone) {
      res.status(400).json({ message: "Phone number is required" });
    }
    //Otp GeneratorFunction
    const otp = await OtpService.generate();

    //Generate hash
    const expireOtp = 1000 * 60 * 2
    const expireTime = Date.now() + expireOtp;
    const data = `${phone}.${otp}.${expireTime}`;
    const hash = HashService.hashOtp(data);
    
    //Send OTP By SMS from Twilio
   try {
    // await OtpService.sendBySms(phone, otp);
    res.json({
      hash: `${hash}.${expireTime}`,
      phone,
      otp
    });
   } catch (error) {
    res.status(500).json({ message: error.message });
   }



    // res.json({hash: hash});
  }
  async verifyOtp(req, res) {
    const {phone,otp,hash } = req.body;
    if(!phone || !otp || !hash){
      res.status(400).json({message: "Phone number, otp and hash are required"});
    }
    const [hashOTP, expireTime] = hash.split('.');

    if(Date.now() > +expireTime){
      res.status(400).json({message: "OTP has expired"});
    }
    const data = `${phone}.${otp}.${expireTime}`;

    const isValid = otpServerice.verifyOtp(hashOTP, data)
    if(!isValid){
      res.status(400).json({message: "OTP is invalid"});
    }
    var user;
    // let accessToken;
    // let refreshToken;

    try {
        user = await UserService.getUser({phone})
        if(!user){
           user = await UserService.createUser({phone})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message});
        
    }

    //token
    
    const {accessToken, refreshToken} = TokenService.generateTokens({_id: user?._id, activated: false});
    
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 30,
      
    })    
    console.log("user", user);
    
    const newUSer = {
      _id: user?._id, 
      phone: user?.phone,
      activated: user?.activated,
    }
    res.json({accessToken, newUSer});
  }
}

module.exports = new AuthController();
