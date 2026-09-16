import User from "../models/User.js";

// ===============================
// GET CURRENT USER
// ===============================
export const getCurrentUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    res.status(200).json({
      success: true,
      user
    });
  } catch (error) {
    next(error);
  }
};

// ===============================
// UPDATE CURRENT USER
// ===============================
export const updateCurrentUser = async (req, res, next) => {
  try {
    const { name, email } = req.body;

    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    if (name !== undefined) {
      user.name = name;
    }

    if (email !== undefined) {
      const existingUser = await User.findOne({
        email,
        _id: { $ne: user._id }
      });

      if (existingUser) {
        return res.status(409).json({
          success: false,
          message: "Email is already in use"
        });
      }

      user.email = email;
    }

    const updatedUser = await user.save();

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user: {
        id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email
      }
    });
  } catch (error) {
    next(error);
  }
};