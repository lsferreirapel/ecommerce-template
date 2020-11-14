export default {
  users: [
    {
      id: 1,
      name: "Lucas",
      lastName: "Ferreira",
      gender: "male",
      dateOfBirth: Date.now(),
      CPF: "000-000-000.01",
      celphoneNumber: "(55) 53 900 000000", // (BR) DDD XXX XXXXXX
      email: "lucasemail@email.com",
      password: "verydifficultpassword:3",
      Adresses: [], // ONE TO MANY: One user, many Adresses
      isAdmin: false,
    },
  ],
  adresses: [
    {
      id: 1,
    },
  ],
  products: [
    {
      id: 1,
      categories: ["Vestido", "Feminino", "Roupas"], // MANY TO MANY: Many products to Many categories
      name: "Vestido Assimétrico",
      price: 386.0, // Float
      interest: 0, // If 0 interest-free, 2 = 2% per installment
      pictures: [], // ONE TO MANY: One product, many pictures
      sizes: ["P", "M", "G"], // Can be: PP, P, M, G, GG
      description:
        "Vestido Assimétrico em 98% Linho com 2% Elastano , confere Conforto, Estilo e Praticidade",
      freeShipping: true,
      discount: 0, // In percentage, example: 20 means 20%
      brand: "Srt. Emily",
      rating: 4.5,
      numberOfReviews: 10,
      isNew: true,
      countInStock: 6,
      // Dates!!!
    },
  ],
  pictures: [
    {
      id: 1,
      path: "./uploads/clothes/7728839vestido.jpg",
      color: "#9E0019", // In HEX
      product: "", // MANY TO ONE: Many pictures to One product
    },
  ],
  categories: [
    {
      id: 1,
      name: "Vestido",
      products: [], // MANY TO MANY: Many categories to Many products
    },
  ],
};
