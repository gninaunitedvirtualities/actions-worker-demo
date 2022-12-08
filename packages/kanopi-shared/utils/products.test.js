const { isGridSubCategory } = require('./products');

describe('Product Utils', () => {
  it('detects grid sub-category', () => {
    let result = isGridSubCategory('GRA');
    expect(result).toBeTruthy();

    result = isGridSubCategory('CLX');
    expect(result).toBeFalsy();

    result = isGridSubCategory();
    expect(result).toBeFalsy();
  });
});
