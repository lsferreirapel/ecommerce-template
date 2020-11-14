export default {
  products: [
    {
      id: 1,
      categories: ["Vestido", "Feminino", "Roupas"],
      name: "Vestido Assimétrico",
      price: 386.0,
      interest: 0, // If 0 interest-free, 2 = 2% per installment
      pictures: [
        {
          id: 1,
          path: "",
          color: "",
        },
      ],
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
    },
  ],
  categories: [
    "Novidades",
    "Roupas",
    "Feminino",
    "Masculino",
    "Camisetas",
    "Vestido",
    "Ofertas",
  ],
  sizes: ["P", "M", "G"],
  genders: ["Todos", "Feminino", "Masculino"],
  colors: [],
};
