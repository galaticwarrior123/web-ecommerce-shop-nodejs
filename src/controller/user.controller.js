import userService from "../services/user.service.js";



const postSignupUser = async (req, res) => {
    try {
        await userService.signupService(req.body);
        return res.status(200).send("Create user successfully");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

const postSigninUser = async (req, res) => {


    try {
        const { user, token } = await userService.signinService(req.body);
        return res.status(200).send({ user, token });
    } catch (error) {
        return res.status(400).send(error.message);
    }
};
const postSendOTP = async (req, res) => {
    try {
        await userService.sendOTPService(req.body);
        return res.status(200).send("Send OTP successfully");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

const verifiedService = async (req, res) => {
    try {
        await userService.verifiedService(req.body);
        return res.status(200).send("Verified successfully");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};


const forgotPassword_sendOTP = async (req, res) => {
    try {
        const response = await userService.forgotPassword_sendOTPService(req.body);
        return res.status(200).json(response); // Gửi phản hồi bao gồm cả token
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const verifyOTPForgotPassword = async (req, res) => {
    try {
        const { otp, token } = req.body;
        if (!otp || !token) {
            return res.status(400).json({ error: "OTP and token are required" });
        }

        const response = await userService.verifyOTPForgotPasswordService(otp, token);
        res.status(200).json(response); // Gửi phản hồi xác thực thành công
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
    // try {
    //     await userService.verifyOTPForgotPasswordService(req.body);
    //     return res.status(200).json({message: "OTP is verified successfully!"});
    // } catch (error) {
    //     return res.status(400).json({error: error.message});
    // }
}

const changePassword = async (req, res) => {
    try {
        // Lấy token từ headers

        const { oldPassword, newPassword, confirmPassword, token } = req.body;
        // Kiểm tra xem token có được cung cấp không
        if (!token) {
            return res.status(400).json({ error: "Token is missing from the request" });
        }

        // Gọi service để thay đổi mật khẩu
        const response = await userService.changePasswordService({ oldPassword, newPassword, confirmPassword, token });
        return res.status(200).json(response); // Gửi phản hồi thay đổi mật khẩu thành công
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
    // try {
    //     await userService.changePasswordService(req.body);
    //     return res.status(200).json({message: "Password is changed successfully!"});
    // } catch (error) {
    //     return res.status(400).json({error: error.message});
    // }
}

const resetPassword = async (req, res) => {
    const { newPassword, confirmPassword, token } = req.body;

    try {
        const response = await userService.resetPasswordService({
            newPassword,
            confirmPassword,
            token,
        });
        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};


const getAllUser = async (req, res) => {
    try {
        const users = await userService.getAllUsersService();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userService.updateUserService(id, req.body, req, res);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const getShoppingHistory = async (req, res) => {
    try {
        const { id } = req.params;
        const shoppingHistory = await userService.getShoppingHistoryService(id);
        return res.status(200).json(shoppingHistory);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}




export default {
    postSignupUser,
    postSendOTP,
    verifiedService,
    postSigninUser,
    forgotPassword_sendOTP,
    verifyOTPForgotPassword,
    changePassword,
    resetPassword,
    getAllUser,
    updateUser,
    getShoppingHistory
};

