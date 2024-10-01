export const sendToken = (user, statusCode, res, message) => {
    const token = user.getJWTToken();
    const options = {
      expires: new Date(Date.now() + parseInt(process.env.COOKIE_EXPIRE) * 24 * 60 * 60 * 1000),
      httpOnly: true, // Set httpOnly to true
      secure:true,
      sameSite:"None",
    };
  
    console.log("Cookie will expire at:", options.expires); // Optional for debugging
  
    res.status(statusCode).cookie("token", token, options).json({
      success: true,
      user,
      message,
      token,
    });
  };