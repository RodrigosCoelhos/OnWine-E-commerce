export function getFormattedPrice(price) {
  return price.toLocaleString("pt-PT", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2, // Defina o número mínimo de dígitos decimais
  });
}
export function getFormattedPriceValue(price) {
  const numericValue = Number(price);
  const formattedValue = getFormattedPrice(numericValue);
  return formattedValue;
}
