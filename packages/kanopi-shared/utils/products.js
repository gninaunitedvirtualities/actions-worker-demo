const { GridSubCategories } = require('../constants');

const isGridSubCategory = (subCategory) =>
  subCategory && GridSubCategories.includes(subCategory);

module.exports = {
  isGridSubCategory,
};
