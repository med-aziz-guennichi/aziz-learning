export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-TN", {
    style: "currency",
    currency: "TND",
  }).format(price);
};
