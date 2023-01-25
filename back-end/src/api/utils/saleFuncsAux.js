const totalPriceCalculator = (products, cart) => Number((products.reduce((accumulator, product) => {
  const { quantity } = cart.find(({ productId }) => product.id === productId);
    return quantity * product.price + accumulator;
  }, 0)).toFixed(2));

module.exports = {
  totalPriceCalculator,
};
