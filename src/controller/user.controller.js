import { registerUser, loginUser } from "../services/user.service.js";

//user signup controller
export const signUp = async (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);
    try {
        const user = await registerUser(username, password);
        res.status(201).json({
            success: true,
            data: user,
            message: "User created successfully"
        });
    } catch (error) {
        console.error("Error signing up:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

//user login controller
export const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await loginUser(username, password);
        //set session id if user is found
        req.session.userId = user._id;
        res.status(200).json({
            success: true,
            data: user,
            message: "User logged in successfully"
        });

    }
    catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

//user logout controller
export const logout = async (req, res) => {
    try {
        req.session.destroy(err => {
            if (err) {
                console.error("Error during logout", err);
                return res.status(500).json({
                    message: "Failed to logout"
                })
            }
            res.clearCookie("connect.sid");
            res.status(200).json({
                success: true,
                message: "Logged out successfully"
            })
        })
    } catch (error) {
        console.error("Error logging out:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}