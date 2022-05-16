const organizations = [
  {
    type: "fundation",
    description:
      "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.",
    objects: [
      {
        id: 11,
        name: 'Fundacja "Dbam o zdrowie"',
        description: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej",
        collectedItems: [
          "ubrania",
          "jedzenie",
          "sprzęt AGD",
          "meble",
          "zabawki",
        ],
      },
      {
        id: 22,
        name: 'Fundacja "Dla Dzieci"',
        description: "Pomoc dzieciom z ubogich rodzin",
        collectedItems: ["ubrania", "meble", "zabawki"],
      },
      {
        id: 33,
        name: 'Fundacja "Bez domu"',
        description: "Pomoc dla osób nie podsiadających miejsca zamieszkania",
        collectedItems: ["ubrania", "meble", "jedzenie", "koce"],
      },
      {
        id: 44,
        name: 'Fundacja "Ocalenie"',
        description:
          "Pomoc osobom znajdującym się w trudnej sytuacji życiowej, usługi socjalne, pomoc społeczna",
        collectedItems: [
          "ubrania",
          "jedzenie",
          "sprzęt AGD",
          "meble",
          "zabawki",
        ],
      },
      {
        id: 55,
        name: "Caritas Polska",
        description:
          "Pomoc dzieciom z ubogich rodzin, usługi socjalne, pomoc społeczna ",
        collectedItems: ["ubrania", "meble", "zabawki"],
      },
      {
        id: 66,
        name: 'Fundacja "JiM"',
        description:
          "Usługi socjalne, pomoc społeczna, pomoc dla osób nie posiadających miejsca zamieszkania",
        collectedItems: ["ubrania", "meble", "jedzenie", "koce"],
      },
      {
        id: 77,
        name: 'Fundacja "Dbam o zdrowie"',
        description: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej",
        collectedItems: [
          "ubrania",
          "jedzenie",
          "sprzęt AGD",
          "meble",
          "zabawki",
        ],
      },
      {
        id: 88,
        name: 'Fundacja "Przyszłość Dla Dzieci"',
        description:
          "Pomoc dzieciom z ubogich rodzin, usługi socjalne, pomoc społeczna",
        collectedItems: ["ubrania", "meble", "zabawki"],
      },
      {
        id: 99,
        name: 'Fundacja "Beneficjum"',
        description:
          "Usługi socjalne, pomoc społeczna, pomoc dla osób nie posiadającyh miejsca zamieszkania",
        collectedItems: ["ubrania", "meble", "jedzenie", "koce"],
      },
    ],
  },

  {
    type: "non-govermental organization",
    description:
      "Pomagamy również wszelkim organizacjom pozarządowym i charytatywnym, które nie są Fundacjami. Są to nasi Partnerzy, który zrobią dobry pożytek z rzeczy, które do nich trafią.",
    objects: [
      {
        id: 101,
        name: "Organizacja 1",
        description: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej",
        collectedItems: [
          "ubrania",
          "jedzenie",
          "sprzęt AGD",
          "meble",
          "zabawki",
        ],
      },
      {
        id: 102,
        name: "Organizacja 2",
        description: "Pomoc dzieciom z ubogich rodzin",
        collectedItems: ["ubrania", "meble", "zabawki"],
      },
      {
        id: 103,
        name: "Organizacja 3",
        description: "Pomoc dla osób nie podsiadających miejsca zamieszkania",
        collectedItems: ["ubrania", "meble", "jedzenie", "koce"],
      },
      {
        id: 104,
        name: "Organizacja 4",
        description:
          "Pomoc osobom znajdującym się w trudnej sytuacji życiowej, usługi socjalne, pomoc społeczna",
        collectedItems: [
          "ubrania",
          "jedzenie",
          "sprzęt AGD",
          "meble",
          "zabawki",
        ],
      },
      {
        id: 105,
        name: "Organizacja 5",
        description:
          "Pomoc dzieciom z ubogich rodzin, usługi socjalne, pomoc społeczna ",
        collectedItems: ["ubrania", "meble", "zabawki"],
      },
      {
        id: 106,
        name: "Organizacja 6",
        description:
          " Usługi socjalne, pomoc społeczna, pomoc dla osób nie posiadających miejsca zamieszkania",
        collectedItems: ["ubrania", "meble", "jedzenie", "koce"],
      },
    ],
  },

  {
    type: "localCollection",
    description:
      "Wspieramy lokalne zbiórki organizowane przez indywidualne osoby, którym zależy na dobru społeczności, w której żyją. Sam też możesz zorganizować taką zbiórkę i pomóc tym, którzy są najbliżej.",
    objects: [
      {
        id: 201,
        name: "Zbiórka lokalna 1",
        description: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej",
        collectedItems: [
          "ubrania",
          "jedzenie",
          "sprzęt AGD",
          "meble",
          "zabawki",
        ],
      },
      {
        id: 202,
        name: "Zbiórka lokalna 2",
        description: "Pomoc dzieciom z ubogich rodzin",
        collectedItems: ["ubrania", "meble", "zabawki"],
      },
      {
        id: 203,
        name: "Zbiórka lokalna 3",
        description: "Pomoc dla osób nie podsiadających miejsca zamieszkania",
        collectedItems: ["ubrania", "meble", "jedzenie", "koce"],
      },
    ],
  },
];

export default organizations;
