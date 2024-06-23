const { SEARCH_SERVICE } = require("../services");

const searchByName = async (req, res, next) => {
  try {
    const results = await SEARCH_SERVICE.searchByName(
      req.query.name,
      req.user.id
    );
    res.json(results);
  } catch (err) {
    next(err);
  }
};

const searchByPhoneNumber = async (req, res, next) => {
  try {
    const result = await SEARCH_SERVICE.searchByPhoneNumber(
      req.query.phoneNumber,
      req.user.id
    );
    res.json(result);
  } catch (err) {
    next(err);
  }
};

const searchController = {
  searchByName,
  searchByPhoneNumber,
};

module.exports = searchController;
