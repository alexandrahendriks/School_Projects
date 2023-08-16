// JS object destructuring
const product = {
    name: 'Organic Oat milk',
    origin: 'United States',
    brand: 'Oatyloa',
    price: 1.85,
    quantity: "1L",
    features: {
      isVegan: true,
      isOrganic: true,
      hasGluten: true,
    }
  }

  const {quantity} = product;
  const {name} = product;

  const {features} = product;


  const productDescription = (`${product.brand} ${product.name} of ${product.quantity}`);

  const VAT = 1.09
  const productPrice = ({price}, VAT) => (price * VAT).toFixed(2);
  console.log(productPrice(product, VAT));

console.log("Hello world")

const add = (a, b) => {
  return a + b
} 

console.log(add(1, 5));

console.log("It works");