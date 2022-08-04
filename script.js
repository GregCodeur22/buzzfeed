const questionDisplay = document.getElementById("questions");
const answerDisplay = document.getElementById("answer");

const questions = [
  {
    id: 0,
    text: "choisir une destination de vacances",
    answer: [
      {
        text: "New York",
        image:
          "https://images.pexels.com/photos/2190283/pexels-photo-2190283.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "photo, of the empire state building",
        credit: "Oliver Niberth",
      },
      {
        text: "Austin",
        image:
          "https://tse1.mm.bing.net/th?id=OIP.JnzlJOZPu3ywLXbc6cpt_AHaE7&pid=Api&P=0",
        alt: "Austin city",
        credit: "Carlos Alfonso",
      },
      {
        text: "Portland",
        image:
          "https://tse3.mm.bing.net/th?id=OIP.YpPMmbSSLwMriSe6BT8JpQHaES&pid=Api&P=0",
        alt: "Portalnd city",
        credit: "Elena Kuchko",
      },
      {
        text: "New Orleans",
        image:
          "https://tse1.mm.bing.net/th?id=OIP.Xtwq6AcNVZsUAKgJgIvC0wHaE7&pid=Api&P=0",
        alt: "New Orleans",
        credit: "Jao Francisco",
      },
    ],
  },
  {
    id: 1,
    text: "quels plat préféré vous ?",
    answer: [
      {
        text: "pizza",
        image:
          "https://tse2.mm.bing.net/th?id=OIP.Im4DTgKGvNVF550ElPWzxwHaE7&pid=Api&P=0",
        alt: "pepperoni pizza",
        credit: "Alan Hardam",
      },
      {
        text: "sandwich",
        image:
          "https://tse3.mm.bing.net/th?id=OIP.KDdJfgZSPyt1NhgqkuKGxgHaE8&pid=Api&P=0",
        alt: "sandwich",
        credit: "Eaters Collective",
      },
      {
        text: "pasta",
        image:
          "https://tse1.mm.bing.net/th?id=OIP.qcEcmBN0_hYxC6uNmFRVEgHaJQ&pid=Api&P=0",
        alt: "pasta and tomato",
        credit: "Mgg Vitcho",
      },
    ],
  },
  {
    id: 2,
    text: "chocit une maison ",
    answer: [
      {
        text: "traditional",
        image:
          "https://tse3.mm.bing.net/th?id=OIP.ySItKR4jTlyOAOfo56du5gHaES&pid=Api&P=0",
        alt: "maison créole",
        credit: "riviere",
      },
      {
        text: "traditional",
        image:
          "https://tse3.mm.bing.net/th?id=OIP.ySItKR4jTlyOAOfo56du5gHaES&pid=Api&P=0",
        alt: "maison créole",
        credit: "riviere",
      },
      {
        text: "moderne",
        image:
          "https://r.search.yahoo.com/_ylt=AwrigwS2yuti.w4BdHNlAQx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2U5MjQyZDY4MjQ4YmFlMGQxOWE0MjgyOGYxOTJiYWQ5BGdwb3MDOARpdANiaW5n/RV=2/RE=1659648823/RO=11/RU=https%3a%2f%2fwww.ion-architecture.com%2fmaison-moderne-92%2f/RK=2/RS=zyCq3Nt8BeuqIdzp.2C5fC20prs-",
        alt: "maison moderne",
        credit: "chirac",
      },
    ],
  },
];

const populateQuestion = () => {
  questions.forEach((question) => {
    const titleBlock = document.createElement("div");
    titleBlock.id = question.id;
    titleBlock.classList.add("title-block");

    const titleHeading = document.createElement("h2");
    titleHeading.textContent = questions.text;

    questionDisplay.append(titleBlock);
  });
};
populateQuestion();
