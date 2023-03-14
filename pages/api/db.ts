import { locales } from "../../locale/constants";

const { EN_US, ES_ES, PT_BR } = locales;

// para os produtos
export const products = {
  [ES_ES]: [
    {
      id: 1,
      title: "Mochila con correas",
      price: 7500,
      description:
        "Tu mochila perfecta para el dìa a dìa y salidas de fin de semana. Guarda tu notebook (hasta 15 pulgadas) en la funda acolchada, y protégela de los rayones y golpes",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: 4,
    },
    {
      id: 2,
      title: "Remera manga 3/4 casual",
      price: 5000,
      description:
        "Estilo ajustado, manga tres cuartos en contraste, cuello con tres botones, peso ligero y tela suave para un uso cómodo y elegante. Mangas con costuras sólidas con cuello redondo hechas para mayor durabilidad.",
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: 5,
    },
    {
      id: 3,
      title: "Chaqueta de algodon",
      price: 9500,
      description:
        "Excelente chaqueta de abrigo para primavera/otoño/invierno, adecuada para muchas ocasiones, como trabajo, senderismo, ciclismo, viajes u otras actividades al aire libre.",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: 4,
    },
    {
      id: 4,
      title: "Remera manga larga",
      price: 4300,
      description: "Remera manga larga de algodon, ideal para primavera. Escote en 'v' ceñido al cuello.",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      rating: 2,
    },
    {
      id: 5,
      title: "Pulsera de mujer Naga",
      price: 6950,
      description:
        "De nuestra colección Legends, el Naga se inspiró en el mítico dragón de agua que protege la perla del océano. Transmite amor y abundancia, y es símbolo de protección.",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      rating: 3,
    },
    {
      id: 6,
      title: "Pulsera de plata de mujer",
      price: 10680,
      description: "Pulsera de plata con detalles a su alrededor. Tamaño único. Ideal para fiestas o eventos",
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      rating: 3,
    },
    {
      id: 7,
      title: "Anillo princesa chapado en oro blanco",
      price: 9900,
      description:
        "Anillo de princesa creado exclusivamente para ella. Ideal para consentir a tu amor en su aniversario, San Valentín o cualquier otra fecha.",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      rating: 5,
    },
    {
      id: 8,
      title: "Aros de acero inoxidable chapados en oro rosa",
      price: 7500,
      description: "Pendientes tipo túnel con doble acampanado chapados en oro rosa. Hecho de acero inoxidable 316L",
      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      rating: 1,
    },
    {
      id: 9,
      title: "Disco externo WD de 2TB",
      price: 6400,
      description:
        "Compatibilidad con USB 3.0 y USB 2.0 Transferencias de datos rápidas Mejora el rendimiento de la PC Alta capacidad; Compatibilidad NTFS formateado para Windows 10, Windows 8.1, Windows 7.",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      rating: 3,
    },
    {
      id: 10,
      title: "SSD interna SanDisk SSD PLUS 1TB",
      price: 3400,
      description:
        "El equilibrio perfecto entre rendimiento y confiabilidad Velocidades de lectura/escritura de hasta 535 MB/s/450 MB/s (basado en pruebas internas).",
      image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      rating: 2,
    },
  ],
  [EN_US]: [
    {
      id: 1,
      title: "Backpack with straps",
      price: 7500,
      description:
        "Your perfect backpack for day-to-day and weekend outings. Store your notebook (up to 15 inches) in the padded sleeve, and protect it from scratches and bumps",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: 4,
    },
    {
      id: 2,
      title: "Casual 3/4 sleeve T-shirt",
      price: 5000,
      description:
        "Slim fit style, contrast three quarter sleeve, three button collar, light weight and smooth fabric for comfortable and stylish wear. Solid ribbed sleeves with crew neckline made for durability.",
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: 5,
    },
    {
      id: 3,
      title: "Cotton jacket",
      price: 9500,
      description:
        "Excellent spring/autumn/winter warm jacket, suitable for many occasions, such as work, hiking, cycling, traveling or other outdoor activities.",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: 4,
    },
    {
      id: 4,
      title: "Long sleeve shirt",
      price: 4300,
      description: "Long-sleeved cotton shirt, ideal for spring. V-neckline fitted to the neck.",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      rating: 2,
    },
    {
      id: 5,
      title: "Naga woman bracelet",
      price: 6950,
      description:
        "From our Legends collection, the Naga was inspired by the mythical water dragon that protects the pearl of the ocean. It conveys love and abundance, and is a symbol of protection.",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      rating: 3,
    },
    {
      id: 6,
      title: "Women's silver bracelet",
      price: 10680,
      description: "Silver bracelet with details around it. One size. Ideal for parties or events",
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      rating: 3,
    },
    {
      id: 7,
      title: "White Gold Plated Princess Ring",
      price: 9900,
      description: "Princess ring created exclusively for her. Ideal to pamper your love on her anniversary, Valentine's Day or any other date.",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      rating: 5,
    },
    {
      id: 8,
      title: "Rose Gold Plated Stainless Steel Hoops",
      price: 7500,
      description: "Rose gold plated double flared tunnel earrings. Made of 316L stainless steel",
      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      rating: 1,
    },
    {
      id: 9,
      title: "WD 2TB External Drive",
      price: 6400,
      description:
        "USB 3.0 and USB 2.0 support Fast data transfers Improve PC performance High capacity; Support NTFS formatted for Windows 10, Windows 8.1, Windows 7.",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      rating: 3,
    },
    {
      id: 10,
      title: "SanDisk SSD PLUS 1TB Internal SSD",
      price: 3400,
      description: "The perfect balance between performance and reliability Read/Write speeds up to 535MB/s/450MB/s (based on internal testing).",
      image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      rating: 2,
    },
  ],
  [PT_BR]: [
    {
      id: 1,
      title: "Mochila com alças",
      price: 7500,
      description:
        "Sua mochila perfeita para passeios do dia a dia e de fim de semana. Guarde seu notebook (até 15 polegadas) na capa acolchoada e proteja-o de arranhões e pancadas",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: 4,
    },
    {
      id: 2,
      title: "T-shirt casual manga 3/4",
      price: 5000,
      description:
        "Estilo slim fit, manga de três quartos contrastante, gola de três botões, peso leve e tecido macio para uso confortável e elegante. Mangas caneladas sólidas com decote redondo feitas para durabilidade.",
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: 5,
    },
    {
      id: 3,
      title: "Jaqueta de algodão",
      price: 9500,
      description:
        "Excelente jaqueta quente de primavera/outono/inverno, adequada para muitas ocasiões, como trabalho, caminhadas, ciclismo, viagens ou outras atividades ao ar livre.",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: 4,
    },
    {
      id: 4,
      title: "Camisa manga longa",
      price: 4300,
      description: "Camisa manga comprida em algodão, ideal para a primavera. Decote em V ajustado ao pescoço.",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      rating: 2,
    },
    {
      id: 5,
      title: "Pulseira mulher Naga",
      price: 6950,
      description:
        "Da nossa coleção Legends, o Naga foi inspirado no mítico dragão d'água que protege a pérola do oceano. Ele transmite amor e abundância e é um símbolo de proteção.",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      rating: 3,
    },
    {
      id: 6,
      title: "Pulseira de prata feminina",
      price: 10680,
      description: "Pulseira de prata com detalhes em volta. Tamanho único. Ideal para festas ou eventos",
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      rating: 3,
    },
    {
      id: 7,
      title: "Anel de Princesa Banhado a Ouro Branco",
      price: 9900,
      description:
        "Anel princesa criado exclusivamente para ela. Ideal para mimar seu amor no aniversário dele, no dia dos namorados ou em qualquer outra data.",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      rating: 5,
    },
    {
      id: 8,
      title: "Aros de aço inoxidável banhados a ouro rosa",
      price: 7500,
      description: "Brincos túnel duplos folheados a ouro rosa. Feitos de aço inoxidável 316L",
      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      rating: 1,
    },
    {
      id: 9,
      title: "Unidade Externa WD 2TB",
      price: 6400,
      description:
        "Suporta USB 3.0 e USB 2.0 Transferências de dados rápidas Melhora o desempenho do PC Alta capacidade; Suporte NTFS formatado para Windows 10, Windows 8.1, Windows 7.",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      rating: 3,
    },
    {
      id: 10,
      title: "SanDisk SSD PLUS SSD interno de 1 TB",
      price: 3400,
      description:
        "O equilíbrio perfeito entre desempenho e confiabilidade Velocidades de leitura/gravação de até 535 MB/s/450 MB/s (com base em testes internos).",
      image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      rating: 2,
    },
  ],
};

// Para os termos e condições
export const tycs = {
  [ES_ES]: {
    version: "Versión: 3 de julio, 2022",
    tycs: [
      {
        id: 1,
        title: "General",
        description: `Tienda Libre es una compañía que ofrece servicios vinculados principalmente al comercio electrónico. 
                    Los servicios están diseñados para formar un ecosistema que permita a las personas vender, 
                    comprar, pagar, enviar productos y realizar otras actividades comerciales con tecnología aplicada.`,
      },
      {
        id: 2,
        title: "Edad Mínima",
        description: `Podrán usar nuestros servicios las personas mayores de edad que tengan capacidad legal para contratar. 
                    Los menores de edad, a partir de los 13 años, sólo podrán utilizar su cuenta con autorización del 
                    representante legal, quien responderá por todas las acciones y obligaciones que se deriven de la 
                    utilización de esa cuenta y quien deberá velar por el uso responsable y adecuado de ella en atención a 
                    la madurez del menor de edad que autorice.`,
      },
      {
        id: 3,
        title: "Cuenta",
        description: `Para usar nuestros servicios, deberás completar el formulario de registro. Al completarlo, 
                    obtendràs una cuenta de caràcter personal, única e intransferible, es decir que bajo ningún concepto 
                    se podrá vender o ceder a otra persona. Se accede a ella con la clave personal de seguridad que haya elegido
                    y que deberá mantener bajo estricta confidencialidad.`,
      },
    ],
  },
  [EN_US]: {
    version: "Version: July 3, 2022",
    tycs: [
      {
        id: 1,
        title: "General",
        description: `Free Store is a company that offers services linked mainly to electronic commerce.
                    The services are designed to form an ecosystem that allows people to sell,
                    buy, pay, ship products and carry out other commercial activities with applied technology.`,
      },
      {
        id: 2,
        title: "Minimum Age",
        description: `People of legal age who have the legal capacity to contract may use our services.
                    Minors, from the age of 13, may only use their account with the authorization of the
                    legal representative, who will be responsible for all actions and obligations arising from the
                    use of that account and who must ensure the responsible and adequate use of it in attention to
                    the maturity of the minor that authorizes.`,
      },
      {
        id: 3,
        title: "Account",
        description: `To use our services, you must complete the registration form. Upon completion,
                    you will obtain a personal, unique and non-transferable account, that is to say that under no circumstances
                    may be sold or transferred to another person. It is accessed with the personal security key that you have chosen
                    and which must be kept under strict confidentiality.`,
      },
    ],
  },
  [PT_BR]: {
    version: "Versão: 3 de julho de 2022",
    tycs: [
      {
        id: 1,
        title: "Em geral",
        description: `A Loja Livre é uma empresa que oferece serviços ligados principalmente ao comércio electrônico.
                    Os serviços são projetados para formar um ecossistema que permite que as pessoas vendam,
                    comprar, pagar, enviar produtos e realizar outras atividades comerciais com tecnologia aplicada.`,
      },
      {
        id: 2,
        title: "Idade mínima",
        description: `Pessoas maiores de idade que tenham capacidade legal para contratar podem usar nossos serviços.
                    Os menores, a partir dos 13 anos, só podem utilizar a sua conta com autorização do
                    representante legal, que será responsável por todos os atos e obrigações decorrentes da
                    uso dessa conta e quem deve garantir o uso responsável e adequado da mesma em atenção aos
                    a maturidade do menor que autoriza.`,
      },
      {
        id: 3,
        title: "Conta",
        description: `Para usar nossos serviços, você deve preencher o formulário de registro. Após o término,
                    você obterá uma conta pessoal, única e intransferível, ou seja, em nenhuma circunstância
                    podem ser vendidos ou transferidos para outra pessoa. É acessado com a chave de segurança pessoal que você escolheu
                    e que devem ser mantidos sob estrita confidencialidade.`,
      },
    ],
  },
};
