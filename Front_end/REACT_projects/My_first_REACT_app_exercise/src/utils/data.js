const coffee = {
  id: self.crypto.randomUUID(),
  name: "Coffee",
  imgUrl: "https://media.wincacademy.nl/coffee.jpeg",
  alt: "coffee img",
};
const thee = {
  id: self.crypto.randomUUID(),
  name: "Thee",
  imgUrl: "https://media.wincacademy.nl/tea.jpeg",
  alt: "thee img",
};

const cola = {
  id: self.crypto.randomUUID(),
  name: "Cola",
  imgUrl:
    "https://media.istockphoto.com/id/1068867440/nl/vector/coca-cola.webp?s=2048x2048&w=is&k=20&c=8_dnTSwIV8_MaDneG6SRB-eOd5Lp7Z1vF9uYInbFhU0=",
  alt: "cola img",
};
const chocomel = {
  id: self.crypto.randomUUID(),
  name: "Chocomel",
  imgUrl:
    "https://www.chocomel.com/sites/default/files/styles/scale_576px/public/2021-10/Chocomel%20met%20slagroom_PNG.Png?itok=UJZC3Nuh",
  alt: "chocomel img",
};
const water = {
  id: self.crypto.randomUUID(),
  name: "Water",
  imgUrl:
    "https://media.gettyimages.com/id/175797345/nl/foto/cold-drink-water-being-poured-into-glass.webp?s=1024x1024&w=gi&k=20&c=K8bwiTjX31uMHkaYipVGhuVOpO2E4rxSfGJD1IvDIJ4=",
  alt: "water img",
};
const milk = {
  id: self.crypto.randomUUID(),
  name: "Milk",
  imgUrl:
    "https://www.pngall.com/wp-content/uploads/2016/06/Milk-PNG-Clipart.png",
  alt: "milk img",
};

export const availableDrinks = [coffee, thee, cola, chocomel, water, milk];
