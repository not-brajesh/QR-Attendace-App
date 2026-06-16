export const protectedController = async (req, res) => {

  try {

    res.status(200).json({
      success: true,
      message: "Protected Route Working",
      user: req.user,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};