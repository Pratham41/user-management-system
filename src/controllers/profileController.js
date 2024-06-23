const { PROFILE_SERVICE } = require("../services");

const getProfile = async (req, res, next) => {
  try {
    console.log(req.user);
    const profile = await PROFILE_SERVICE.getUserProfile(req.user.id);
    res.json(profile);
  } catch (err) {
    next(err);
  }
};

const updateProfile = async (req, res, next) => {
  try {
    const updatedProfile = await PROFILE_SERVICE.updateUserProfile(
      req.user.id,
      req.body
    );
    res.json(updatedProfile);
  } catch (err) {
    next(err);
  }
};

const profileController = {
    getProfile,
    updateProfile
}

module.exports = profileController
