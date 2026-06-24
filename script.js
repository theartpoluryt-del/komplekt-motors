const brands = [
  "Repsol",
  "Lopal",
  "Euronol",
  "Spectrol Premium",
  "SpecLub",
  "Nano Grease",
  "Luxe",
  "Navigator",
  "Pilots"
];

const categoryLabels = {
  all: "Все типы",
  diesel: "Моторные масла для коммерческого транспорта",
  elite: "Моторные масла для легкового транспорта",
  hidro: "Гидравлические масла",
  transmission: "Трансмиссионные масла",
  traktor: "Многофункциональные, тракторные масла",
  reduct: "Редукторные масла",
  compress: "Компрессорные масла",
  antifreeze: "Антифризы"
};

const categoryDetails = {
  diesel: {
    use: "Для дизельных двигателей коммерческого транспорта, магистральных тягачей, автобусов, строительной и карьерной техники.",
    specs: ["ACEA E4/E7/E9 по линейке продукта", "API CI-4 / CH-4 / CJ-4 по назначению", "MB, MAN, Volvo, Renault, Cummins, Mack - уточняются по паспорту продукта"],
    benefits: ["Стабильная масляная пленка при высокой нагрузке", "Защита от износа и отложений", "Подходит для тяжелых режимов эксплуатации"]
  },
  elite: {
    use: "Для бензиновых и дизельных двигателей легковых автомобилей, кроссоверов и легкого коммерческого транспорта.",
    specs: ["ACEA A3/B4, A5/B5, C2, C3 по конкретной позиции", "API SN / SN-RC по линейке продукта", "VW, Ford, Renault, PSA и другие OEM-допуски - по паспорту продукта"],
    benefits: ["Чистота двигателя", "Уверенный холодный пуск", "Снижение трения и стабильная вязкость"]
  },
  hidro: {
    use: "Для гидравлических систем промышленного оборудования, спецтехники, подъемных механизмов и станочного парка.",
    specs: ["DIN 51524 HLP / HVLP", "ISO VG 32 / 46 по вязкости продукта", "Антиокислительные и противоизносные требования гидросистем"],
    benefits: ["Защита насосов и клапанов", "Стабильность давления", "Работа при переменной температуре"]
  },
  transmission: {
    use: "Для механических и автоматических трансмиссий, мостов, редукторов, дифференциалов и узлов передачи мощности.",
    specs: ["API GL-4 / GL-5 по типу трансмиссии", "Dexron / Mercon / JASO для ATF-позиций", "OEM-допуски КПП и мостов - по паспорту продукта"],
    benefits: ["Снижение износа зубчатых пар", "Плавное переключение", "Защита от окисления и вспенивания"]
  },
  traktor: {
    use: "Для тракторов, строительной техники, гидротрансмиссий, мокрых тормозов и универсальных трансмиссионных систем.",
    specs: ["UTTO / TO-4 по назначению", "Caterpillar TO-4 для соответствующих позиций", "Allison C-4 и требования производителей спецтехники - по паспорту"],
    benefits: ["Работа в совмещенных гидро- и трансмиссионных системах", "Защита фрикционных узлов", "Стабильность под нагрузкой"]
  },
  reduct: {
    use: "Для промышленных редукторов, закрытых зубчатых передач и нагруженных механизмов.",
    specs: ["DIN 51517 CLP", "ISO VG по вязкости продукта", "EP-свойства для защиты зубчатых передач"],
    benefits: ["Защита от задиров", "Снижение шума и нагрева", "Работа в длительных интервалах обслуживания"]
  },
  compress: {
    use: "Для воздушных компрессоров и промышленного компрессорного оборудования.",
    specs: ["DIN 51506 VDL", "ISO VG 46 для MERAK VDL 46", "Антиокислительные требования компрессорных масел"],
    benefits: ["Сопротивление образованию нагара", "Стабильная работа при высокой температуре", "Защита от коррозии"]
  },
  antifreeze: {
    use: "Для систем охлаждения легкового, коммерческого и промышленного транспорта.",
    specs: ["OAT/органическая технология для Organic-линейки", "ASTM D3306 / BS 6580 как ориентиры класса", "Требования производителей техники - по паспорту продукта"],
    benefits: ["Защита от коррозии", "Стабильный теплообмен", "Защита от замерзания после правильного разбавления"]
  }
};

const brandCertificates = {
  "Repsol": [
    {
      title: "?????????? ???????????? ?????? Repsol 2026",
      type: "????????? ??????????",
      url: "assets/certificates/repsol-official-dealer-2026.pdf",
      note: "???????????? ?????? ??? ?? ?????????-??????? ??? ???????????? ?????? ????????? ?????????? Repsol ? ?????????? ? ??????????? ???????."
    }
  ],
  "Lopal": [
    {
      title: "?????????? ???????????? ???????? Lopal",
      type: "??????????? ??????????",
      url: "assets/certificates/lopal-official-dealer.pdf",
      note: "???????????? ?????? ??? ?? ???? ??? ???????????? ???????? Alleya Group ?? ????????? Lopal."
    }
  ],
  "Euronol": [
    {
      title: "?????????? ???????????? ????????????? Euronol",
      type: "???????????????? ??????????",
      url: "assets/certificates/euronol-official-distributor.pdf",
      note: "???????????? ?????????? ???????? ?? ?????????? ????????? ?????????? Euronol ?? ?????????? ?????????? ? ??????????? ???????."
    }
  ],
  "Spectrol Premium": [
    {
      title: "?????????? ???????????? ?????? Spectrol Premium",
      type: "????????? ??????????",
      url: "assets/certificates/spectrol-premium-official-dealer.jpg",
      note: "???????????? ????? ?????????? ???????????? ????????????????? ????????? Spectrol Premium."
    }
  ],
  "Nano Grease": [
    {
      title: "?????????? ???????????? ?????? Nano Grease",
      type: "????????? ??????????",
      url: "assets/certificates/nano-grease-official-dealer.pdf",
      note: "???????????? ?????? ???????????? ?????? ????????? ?????????? Nano Grease ? ?????????? ? ??????????? ???????."
    }
  ]
};

const products = [
  ["RP ANTICONGELANTE REFRIGERANTE ORGANICO PURO 208л", "antifreeze", "Антифриз-концентрат на основе этиленгликоля. Содержит органические ингибиторы защиты системы охлаждения.", "https://kmo74.ru/uploads/product/000/79/671a8cc32826d68876eac36ef1113168_2024-02-02_10-59-11.jpeg"],
  ["RP ANTICONGELANTE REFRIGERANTE PURO 208л", "antifreeze", "Антифриз-концентрат из этиленгликоля с антикоррозийными и противопенными присадками.", "https://kmo74.ru/uploads/product/000/80/671a8cc32826d68876eac36ef1113168_2024-02-02_11-01-03.jpeg"],
  ["MERAK VDL 46 20л", "compress", "Компрессорное масло MERAK VDL с тщательно подобранной рецептурой для стабильной работы оборудования.", "https://kmo74.ru/uploads/product/000/78/6d3c1a392108ea89097e8edf29d26563_2024-02-02_10-52-10.jpeg"],
  ["RP DIESEL TURBO MID SAPS VHPD 5W30 208л", "diesel", "Синтетическое моторное масло Mid SAPS для современных транспортных средств с высокими требованиями.", "https://kmo74.ru/uploads/product/000/24/726_original_2023-10-10_23-20-48.jpg"],
  ["RP DIESEL TURBO THPD 10W40 208л", "diesel", "Синтетическое масло Top High Performance Diesel для очень высокофорсированных дизелей.", "https://kmo74.ru/uploads/product/000/22/726_original_2023-10-10_23-17-35.jpg"],
  ["RP DIESEL TURBO THPD 15W40 208л", "diesel", "Масло для очень высокофорсированных дизелей THPD с высоким уровнем эксплуатационных свойств.", "https://kmo74.ru/uploads/product/000/26/726_original_2023-10-10_23-29-23.jpg"],
  ["RP DIESEL TURBO THPD MID SAPS 10W30 208л", "diesel", "Смазочное масло с синтетической технологией Mid SAPS для высоких требований дизельной техники.", "https://kmo74.ru/uploads/product/000/14/5af3ae523c463128c9c2a87a7768613d_2023-10-08_14-18-59.jpeg"],
  ["RP DIESEL TURBO UHPD 10W40 208л", "diesel", "Синтетическое масло высочайшего качества следующего поколения для дизельных двигателей.", "https://kmo74.ru/uploads/product/000/27/726_original_2023-10-10_23-31-45.jpg"],
  ["RP DIESEL TURBO UHPD MID SAPS 10W40 208л", "diesel", "Синтетическое масло UHPD сниженной зольности Mid SAPS для современной коммерческой техники.", "https://kmo74.ru/uploads/product/000/25/726_original_2023-10-10_23-23-09.jpg"],
  ["RP DIESEL TURBO VHPD 5W30 208л", "diesel", "Синтетическое моторное масло для грузовых автомобилей с очень высокой производительностью.", "https://kmo74.ru/uploads/product/000/23/726_original_2023-10-10_23-19-13.jpg"],
  ["RP DIESEL TURBO THPD 10W40 20л", "diesel", "Синтетическое масло Top High Performance Diesel для очень высокофорсированных дизелей.", "https://kmo74.ru/uploads/product/000/2/100039106200b0_2023-10-04_15-29-42.png"],
  ["RP DIESEL TURBO THPD 15W40 20л", "diesel", "Масло для очень высокофорсированных дизелей THPD с высоким уровнем эксплуатационных свойств.", "https://kmo74.ru/uploads/product/000/4/6538987510_2023-10-04_15-51-28.webp"],
  ["RP DIESEL TURBO MID SAPS VHPD 5W30 20л", "diesel", "Синтетическое моторное масло Mid SAPS для современных транспортных средств.", "https://kmo74.ru/uploads/product/000/13/a6ee2361d46e198c59166af1920c4bec_2023-10-08_14-08-06.jpeg"],
  ["RP DIESEL TURBO THPD MID SAPS 15W40 20л", "diesel", "Синтетическое моторное масло THPD, разработанное для тяжелых условий эксплуатации.", "https://kmo74.ru/uploads/product/000/16/2838c21014f7f18353025291266567e6-(1)_2023-10-08_14-32-16.webp"],
  ["RP DIESEL TURBO UHPD MID SAPS 10W40 20л", "diesel", "Синтетическое масло UHPD сниженной зольности Mid SAPS.", "https://kmo74.ru/uploads/product/000/15/2d1f33ff97ca4d660de6b3667de29797_2023-10-08_14-26-42.webp"],
  ["RP DIESEL TURBO UHPD 10W40 20л", "diesel", "Синтетическое смазочное масло высочайшего качества для дизельной техники.", "https://kmo74.ru/uploads/product/000/5/6538916734_2023-10-05_20-19-08.webp"],
  ["RP ELITE COMPETICION 5W40 20л", "elite", "Высококачественное синтетическое масло REPSOL ELITE COMPETICION 5W40.", "https://kmo74.ru/uploads/product/000/8/b7a895cd2bd9b77ffcdb119757d255fd_2023-10-13_19-56-32.jpeg"],
  ["Elite Cosmos A5/B5 5W-30 4л", "elite", "Моторное масло для технологичных бензиновых и дизельных двигателей легковых автомобилей.", "https://kmo74.ru/uploads/product/000/10/f7e119ac08ee0b5780d735f1b32fc5b2_2024-02-01_20-44-38.webp"],
  ["Elite Cosmos A3/B4 0W-40 1л", "elite", "Синтетическое моторное масло для обеспечения надежной защиты двигателя.", "https://kmo74.ru/uploads/product/000/42/2282a61e89e5a135cc2db7f8e9dcd100_2024-02-01_21-01-17.webp"],
  ["Elite Evolution C3 5W-40 1л", "elite", "Синтетическое моторное масло высочайшего класса для легкового транспорта.", "https://kmo74.ru/uploads/product/000/30/5d79e807fd2c6e8ff90832c2be25bc43_2024-02-01_20-43-10.webp"],
  ["Elite Evolution C2 5W-30 1л", "elite", "Синтетическое моторное масло высочайшего класса Repsol Elite Evolution Fuel Economy.", "https://kmo74.ru/uploads/product/000/43/7b26f6aef206309dd37ae09e7a52b911_2024-02-01_21-07-04.webp"],
  ["Elite Evolution C2 5W-30 4л", "elite", "Синтетическое моторное масло высочайшего класса Repsol Elite Evolution Fuel Economy.", "https://kmo74.ru/uploads/product/000/44/4d85b650257da57b06991c6972207e06_2024-02-01_21-10-58.webp"],
  ["Elite Long Life 50700/50400 5W-30 1л", "elite", "Синтетическое масло Repsol для требований VW 507.00/504.00.", "https://kmo74.ru/uploads/product/000/40/e83508c59e834d6b9128cbe34fb932a1_2024-02-01_20-58-06.webp"],
  ["Elite Long Life 50700/50400 5W-30 4л", "elite", "Синтетическое масло Repsol для требований VW 507.00/504.00.", "https://kmo74.ru/uploads/product/000/41/043c42bd0c2881a5d8b90eb8a4b6e4e8_2024-02-01_20-59-52.webp"],
  ["Elite Evolution C3 5W-40 4л", "elite", "Синтетическое моторное масло высочайшего класса для легкового транспорта.", "https://kmo74.ru/uploads/product/000/6/4c251cc1fa403c3cf480afb99d94bffc_2024-02-01_20-56-51.webp"],
  ["RP ELITE EVOLUTION LONG LIFE 5W30 20л", "elite", "Синтетическое моторное масло с длительным периодом использования.", "https://kmo74.ru/uploads/product/000/11/e5bdb665e4c6fad467db17686dc52088_2023-10-13_19-58-54.jpeg"],
  ["RP ELITE INJECTION 10W40 20л", "elite", "Многофункциональное моторное масло на синтетической основе для бензиновых и дизельных двигателей.", "https://kmo74.ru/uploads/product/000/9/ec074051889e8711462e3ed3bd085df0_2023-10-13_19-57-30.jpeg"],
  ["Leader Neo 5W-30 1л", "elite", "Синтетическое масло API SN-RC и ILSAC GF-5 для экономичной работы двигателя.", "https://kmo74.ru/uploads/product/000/45/87a4875f6df600e45c7a0a0dff3b6cbf_2024-02-01_21-15-39.webp"],
  ["RP ELITE LONG LIFE 50700/50400 5W30 20л", "elite", "Синтетическое моторное масло Repsol Elite Long Life 507.00/504.00.", "https://kmo74.ru/uploads/product/000/12/4a89474d91d59a88b6d4cad0fa5cd9ad_2023-10-13_19-59-37.jpeg"],
  ["Master Eco F 0W-30 1л", "elite", "Стандарт качества: ACEA C2, FORD WSS-M2C950-A.", "https://kmo74.ru/uploads/product/000/47/d2a7a7663ed0f3e78bbbdb3bf205df1c_2024-02-01_21-20-56.webp"],
  ["RP ELITE MULTIVALVULAS 10W40 20л", "elite", "Высококачественное синтетическое масло Repsol Elite Multivalvulas 10W40.", "https://kmo74.ru/uploads/product/000/7/4164b64fb8b292512f37d644e4508bb3_2023-10-13_19-54-41.jpeg"],
  ["REPSOL LEADER NEO 5W-30 4л", "elite", "Синтетическое масло API SN-RC и ILSAC GF-5 для современных двигателей.", "https://kmo74.ru/uploads/product/000/46/210882e009a1547389e95183b498a47e_2024-02-01_21-19-34.webp"],
  ["ELITE Competicion 5W-40 1л", "elite", "Высококачественное синтетическое масло Elite Competicion 5W-40.", "https://kmo74.ru/uploads/product/000/35/15a6f0a992f8f900e6c864e233691643_2024-02-01_20-37-15.webp"],
  ["RP ELITE COMPETICION 5W40 208л", "elite", "Высококачественное синтетическое масло REPSOL ELITE COMPETICION 5W40.", "https://kmo74.ru/uploads/product/000/54/671a8cc32826d68876eac36ef1113168_2024-02-01_22-09-34.jpeg"],
  ["ELITE Competicion 5W-40 4л", "elite", "Высококачественное синтетическое масло Elite Competicion 5W-40.", "https://kmo74.ru/uploads/product/000/36/693d9b82db3b372d181fc0b7e2c56f7f_2024-02-01_20-46-54.webp"],
  ["Elite Cosmos A5/B5 5W-30 1л", "elite", "Моторное масло для технологичных бензиновых и дизельных двигателей.", "https://kmo74.ru/uploads/product/000/34/f24ba1445cd06c40dad92d42dc9b1d04_2024-02-01_20-34-49.webp"],
  ["RP ELITE INJECTION 10W40 1л", "elite", "Многофункциональное моторное масло на синтетической основе.", "https://kmo74.ru/uploads/product/000/38/e8f05bd25286138fb608b1b478e82c65_2023-10-29_19-37-54.jpeg"],
  ["RP ELITE INJECTION 10W40 208л", "elite", "Многофункциональное моторное масло на синтетической основе.", "https://kmo74.ru/uploads/product/000/56/671a8cc32826d68876eac36ef1113168_2024-02-01_22-11-38.jpeg"],
  ["RP ELITE MULTIVALVULAS 10W40 208л", "elite", "Высококачественное синтетическое масло Repsol Elite Multivalvulas 10W40.", "https://kmo74.ru/uploads/product/000/55/671a8cc32826d68876eac36ef1113168_2024-02-01_22-10-42.jpeg"],
  ["Elite Multivalvulas 10W-40 1л", "elite", "Высококачественное синтетическое масло Repsol Elite Multivalvulas 10W40.", "https://kmo74.ru/uploads/product/000/31/4755173a46306dc8106a0fc1995d050e_2024-01-31_19-11-05.webp"],
  ["Elite Multivalvulas 10W-40 4л", "elite", "Высококачественное синтетическое масло Repsol Elite Multivalvulas 10W40.", "https://kmo74.ru/uploads/product/000/37/2001971868f17709a4b7dee0777b164b_2024-01-31_19-23-39.webp"],
  ["RP HIDROLEO 32 208л", "hidro", "Масло высшего качества для гидравлических систем.", "https://kmo74.ru/uploads/product/000/17/k9mrx1geusv623fb9y0dtrkejh33j3md_2023-10-09_18-00-08.jpeg"],
  ["RP TELEX HVLP 32 208л", "hidro", "Гидравлическое масло на тщательно очищенных базовых маслах.", "https://kmo74.ru/uploads/product/000/18/k9mrx1geusv623fb9y0dtrkejh33j3md_2023-10-09_18-01-38.jpeg"],
  ["RP TELEX HVLP 46 208л", "hidro", "Гидравлическое масло на тщательно очищенных базовых маслах.", "https://kmo74.ru/uploads/product/000/19/k9mrx1geusv623fb9y0dtrkejh33j3md_2023-10-09_18-02-54.jpeg"],
  ["RP TELEX HVLP 46 20л", "hidro", "Гидравлическое масло на тщательно очищенных базовых маслах.", "https://kmo74.ru/uploads/product/000/29/6aa792c63cfa4b2e3884f100ad31e6ce_2023-10-10_23-37-53.webp"],
  ["RP TELEX E HLP 32 20л", "hidro", "Масло для гидравлических систем с высокими противоизносными требованиями.", "https://kmo74.ru/uploads/product/000/20/pic_2023-10-09_18-07-31.webp"],
  ["RP TELEX E HLP 46 20л", "hidro", "Масло для гидравлических систем с высокими противоизносными требованиями.", "https://kmo74.ru/uploads/product/000/21/pic_2023-10-09_18-08-12.webp"],
  ["RP TELEX HVLP 32 20л", "hidro", "Гидравлическое масло на тщательно очищенных базовых маслах.", "https://kmo74.ru/uploads/product/000/28/6aa792c63cfa4b2e3884f100ad31e6ce_2023-10-10_23-36-07.webp"],
  ["RP SUPER TAURO 220 20л", "reduct", "Всесезонное минеральное масло Super Tauro для промышленных редукторов.", "https://kmo74.ru/uploads/product/000/77/6d3c1a392108ea89097e8edf29d26563_2024-02-02_10-47-48.jpeg"],
  ["RP ORION UTTO 208л", "traktor", "Универсальное тракторное трансмиссионное масло Repsol Orion UTTO.", "https://kmo74.ru/uploads/product/000/74/671a8cc32826d68876eac36ef1113168_2024-02-02_10-40-41.jpeg"],
  ["RP ORION UTTO 20л", "traktor", "Универсальное тракторное трансмиссионное масло Repsol Orion UTTO.", "https://kmo74.ru/uploads/product/000/73/bf1c627e3fdd83bab1dfe468699ee19c_2024-02-02_10-39-49.webp"],
  ["RP TRANSMISSION TO-4 10W 20л", "traktor", "Смазочное масло для требований спецификаций Caterpillar и Allis.", "https://kmo74.ru/uploads/product/000/75/6d3c1a392108ea89097e8edf29d26563_2024-02-02_10-50-56.jpeg"],
  ["RP TRANSMISSION TO-4 30 20л", "traktor", "Смазочное масло для требований спецификаций Caterpillar и Allis.", "https://kmo74.ru/uploads/product/000/76/6d3c1a392108ea89097e8edf29d26563_2024-02-02_10-44-47.jpeg"],
  ["REPSOL MATIC ATF 1л", "transmission", "Минеральное масло для автоматических трансмиссий ATF.", "https://kmo74.ru/uploads/product/000/49/92eb0934d360b3f0424db270a9d75dff_2024-02-01_21-28-25.webp"],
  ["REPSOL MATIC ATF 208л", "transmission", "Минеральное масло для автоматических трансмиссий ATF.", "https://kmo74.ru/uploads/product/000/71/671a8cc32826d68876eac36ef1113168_2024-02-02_10-38-05.jpeg"],
  ["REPSOL MATIC ATF 20л", "transmission", "Минеральное масло для автоматических трансмиссий ATF.", "https://kmo74.ru/uploads/product/000/72/6d3c1a392108ea89097e8edf29d26563_2024-02-02_10-50-36.jpeg"],
  ["REPSOL MATIC DCT 1л", "transmission", "Синтетическое масло для автоматических трансмиссий DCT и DSG.", "https://kmo74.ru/uploads/product/000/52/af297ae6e94edd7c40ae2d69e2452719_2024-02-01_21-34-04.webp"],
  ["REPSOL MATIC DIAFLUID ATF 1л", "transmission", "Смазочный материал по синтетической технологии для автоматических трансмиссий.", "https://kmo74.ru/uploads/product/000/50/7956aa00e8b63a06c645cb14539a8364_2024-02-01_21-29-29.webp"],
  ["REPSOL MATIC III ATF 1л", "transmission", "Синтетическое масло Repsol Matic III ATF длительного срока службы.", "https://kmo74.ru/uploads/product/000/48/a6449773882ae8d201d40dd440c9b975_2024-02-01_21-26-54.webp"],
  ["REPSOL MATIC III ATF 208л", "transmission", "Синтетическое масло Repsol Matic III ATF длительного срока службы.", "https://kmo74.ru/uploads/product/000/70/671a8cc32826d68876eac36ef1113168_2024-02-02_10-37-23.jpeg"],
  ["REPSOL MATIC III ATF 20л", "transmission", "Синтетическое масло Repsol Matic III ATF длительного срока службы.", "https://kmo74.ru/uploads/product/000/69/6d3c1a392108ea89097e8edf29d26563_2024-02-02_10-50-28.jpeg"],
  ["REPSOL MATIC VI ATF 1л", "transmission", "Трансмиссионное масло с поддержкой требований GM Dexron VI, Ford Mercon LV и JASO.", "https://kmo74.ru/uploads/product/000/53/e3399459f63facb24ac8a8d8d2047783_2024-02-01_21-35-11.webp"],
  ["RP CARTAGO CAJAS EP 75W90 208л", "transmission", "Синтетическое противозадирное всесезонное трансмиссионное масло.", "https://kmo74.ru/uploads/product/000/67/671a8cc32826d68876eac36ef1113168_2024-02-01_23-03-09.jpeg"],
  ["RP CARTAGO CAJAS EP 75W90 20л", "transmission", "Синтетическое противозадирное всесезонное трансмиссионное масло.", "https://kmo74.ru/uploads/product/000/66/6d3c1a392108ea89097e8edf29d26563_2024-02-02_10-50-11.jpeg"],
  ["RP CARTAGO CAJAS FE LD 75W80 208л", "transmission", "Синтетическое масло для ручных механических коробок передач.", "https://kmo74.ru/uploads/product/000/61/671a8cc32826d68876eac36ef1113168_2024-02-01_22-52-24.jpeg"],
  ["RP CARTAGO CAJAS FE LD 75W80 20л", "transmission", "Синтетическое масло для ручных механических коробок передач.", "https://kmo74.ru/uploads/product/000/60/6d3c1a392108ea89097e8edf29d26563_2024-02-02_10-49-41.jpeg"],
  ["RP CARTAGO FE LD 75W90 208л", "transmission", "Синтетическое трансмиссионное масло для дифференциалов и отдельных трансмиссий.", "https://kmo74.ru/uploads/product/000/63/671a8cc32826d68876eac36ef1113168_2024-02-01_22-57-38.jpeg"],
  ["RP CARTAGO FE LD 75W90 20л", "transmission", "Синтетическое трансмиссионное масло для дифференциалов и отдельных трансмиссий.", "https://kmo74.ru/uploads/product/000/62/6d3c1a392108ea89097e8edf29d26563_2024-02-02_10-49-54.jpeg"],
  ["RP CARTAGO LD 80W90 208л", "transmission", "Продукт длительного срока службы для ручных коробок передач уровня GL-5.", "https://kmo74.ru/uploads/product/000/65/671a8cc32826d68876eac36ef1113168_2024-02-01_23-00-25.jpeg"],
  ["RP CARTAGO MULTIGRADO EP 80W90 208л", "transmission", "Всесезонное трансмиссионное минеральное масло с противозадирными свойствами.", "https://kmo74.ru/uploads/product/000/59/671a8cc32826d68876eac36ef1113168_2024-02-01_22-47-12.jpeg"],
  ["RP CARTAGO MULTIGRADO EP 80W90 20л", "transmission", "Всесезонное трансмиссионное минеральное масло с противозадирными свойствами.", "https://kmo74.ru/uploads/product/000/58/6d3c1a392108ea89097e8edf29d26563_2024-02-02_10-49-25.jpeg"],
  ["RP CARTAGO MULTIGRADO EP 85W140 20л", "transmission", "Всесезонное трансмиссионное минеральное масло с противозадирными свойствами.", "https://kmo74.ru/uploads/product/000/57/6d3c1a392108ea89097e8edf29d26563_2024-02-02_10-49-16.jpeg"],
  ["RP MATIC CVT 1л", "transmission", "Синтетическое масло длительного срока службы для трансмиссий CVT.", "https://kmo74.ru/uploads/product/000/51/d3e10bc3ede75648fb9880ff4db97225_2024-02-01_21-31-26.webp"],
  ["RP MATIC DIAFLUID ATF 20л", "transmission", "Смазочный материал по синтетической технологии для автоматических трансмиссий.", "https://kmo74.ru/uploads/product/000/68/6d3c1a392108ea89097e8edf29d26563_2024-02-02_10-50-18.jpeg"]
].map(([name, category, description, image]) => ({ name, category, description, image, brand: "Repsol" }));

const ozonCatalogProducts = [
  {
    "name": "Синтетическая Гидравлическая пожаробезопасная жидкость LOPAL HYPAL M12 HFDU 46",
    "brand": "Lopal",
    "category": "hidro",
    "description": "высококачественная безводная пожаробезопасная синтетическая гидравлическая жидкость, выполненная на основе сложных биоразлагаемых эфиров растительного происхождения дополненная антиокислительными, антикоррозионными и противоизносными присадками, выполненными с использованием связанных серо- и фосфорсодержащих компонентов.",
    "image": "assets/products/lopal/lpl33607-lopal-hypal-m12-hfdu-46.png",
    "sku": "LPL33607",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal 1 Smart ESF FE SP 0W-20",
    "brand": "Lopal",
    "category": "elite",
    "description": "Премиальное полностью синтетическое моторное масло для бензиновых и дизельных двигателей легковых автомобилей. Соответствует современным требованиям: API SP/SN plus, ACEA C5, имеет допуски и соответствия Volvo, Toyota, Honda, Kia-Hyundai, Exeed, Jetour, Haval Произведено с использованием собственной технологии VIS-POWER с учетом условий как эксплуатации а...",
    "image": "assets/products/lopal/lpl36899-lopal-1-smart-esf-fe-sp-0w-20.png",
    "sku": "LPL36899",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal 1 Ultra SYN FE SP 5W-30",
    "brand": "Lopal",
    "category": "elite",
    "description": "Полностью синтетическое моторное масло для бензиновых двигателей легковых автомобилей. Соответствует современным требованиям: API SP, ILSAC GF-6A. Подходит для широкого спектра моделей американских и азиатских производителей автомобилей , в т.ч. для различных моделей JAC (Москвич), Chery, Omoda, Jetour, Exeed, Jaecoo, Kaiyi, Changan. Произведено с использ...",
    "image": "assets/products/lopal/lpl36981-lopal-1-ultra-syn-fe-sp-5w-30.png",
    "sku": "LPL36981",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal 1 Ultra ESF SP 5W-30",
    "brand": "Lopal",
    "category": "elite",
    "description": "Полностью синтетическое моторное масло для бензиновых и дизельных двигателей легковых автомобилей. Соответствует современным требованиям: API SP/SN PLUS; ACEA C3, имеет допуск MB-Approval 229.31. Подходит для широкого спектра моделей американских и азиатских производителей автомобилей , в т.ч. для различных моделей Haval, Chery, Tank, Jetour, Omoda, Exeed...",
    "image": "assets/products/lopal/lpl36929-lopal-1-ultra-esf-sp-5w-30.png",
    "sku": "LPL36929",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal 1 Ultra SYN SP 5W-40",
    "brand": "Lopal",
    "category": "elite",
    "description": "Полностью синтетическое моторное масло для бензиновых двигателей легковых автомобилей. Соответствует современным требованиям: API SP. Подходит для широкого спектра моделей американских и азиатских производителей автомобилей , в т.ч. для различных моделей Chery, Omoda, Jetour, Exeed, Jaecoo, Kaiyi, Changan. Эффективно работает в широком диапазоне температу...",
    "image": "assets/products/lopal/lpl37018-lopal-1-ultra-syn-sp-5w-40.png",
    "sku": "LPL37018",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal 1 Smart ESF FE SP 0W-20",
    "brand": "Lopal",
    "category": "elite",
    "description": "Премиальное полностью синтетическое моторное масло для бензиновых и дизельных двигателей легковых автомобилей. Соответствует современным требованиям: API SP/SN plus, ACEA C5, имеет допуски и соответствия Volvo, Toyota, Honda, Kia-Hyundai, Exeed, Jetour, Haval Произведено с использованием собственной технологии VIS-POWER с учетом условий как эксплуатации а...",
    "image": "assets/products/lopal/lpl30415-lopal-1-smart-esf-fe-sp-0w-20.jpg",
    "sku": "LPL30415",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal 1 Smart ESF FE SP 0W-20",
    "brand": "Lopal",
    "category": "elite",
    "description": "Премиальное полностью синтетическое моторное масло для бензиновых и дизельных двигателей легковых автомобилей. Соответствует современным требованиям: API SP/SN plus, ACEA C5, имеет допуски и соответствия Volvo, Toyota, Honda, Kia-Hyundai, Exeed, Jetour, Haval Произведено с использованием собственной технологии VIS-POWER с учетом условий как эксплуатации а...",
    "image": "assets/products/lopal/lpl30408-lopal-1-smart-esf-fe-sp-0w-20.jpg",
    "sku": "LPL30408",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal 1 Ultra ESF SP 5W-30",
    "brand": "Lopal",
    "category": "elite",
    "description": "Полностью синтетическое моторное масло для бензиновых и дизельных двигателей легковых автомобилей. Соответствует современным требованиям: API SP/SN PLUS; ACEA C3, имеет допуск MB-Approval 229.31. Подходит для широкого спектра моделей американских и азиатских производителей автомобилей , в т.ч. для различных моделей Haval, Chery, Tank, Jetour, Omoda, Exeed...",
    "image": "assets/products/lopal/lpl33362-lopal-1-ultra-esf-sp-5w-30.jpg",
    "sku": "LPL33362",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal 1 Ultra ESF SP 5W-30",
    "brand": "Lopal",
    "category": "elite",
    "description": "Полностью синтетическое моторное масло для бензиновых и дизельных двигателей легковых автомобилей. Соответствует современным требованиям: API SP/SN PLUS; ACEA C3, имеет допуск MB-Approval 229.31. Подходит для широкого спектра моделей американских и азиатских производителей автомобилей , в т.ч. для различных моделей Haval, Chery, Tank, Jetour, Omoda, Exeed...",
    "image": "assets/products/lopal/lpl33379-lopal-1-ultra-esf-sp-5w-30.jpg",
    "sku": "LPL33379",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal 1 Ultra SYN SP 5W-40",
    "brand": "Lopal",
    "category": "elite",
    "description": "Полностью синтетическое моторное масло для бензиновых двигателей легковых автомобилей. Соответствует современным требованиям: API SP. Подходит для широкого спектра моделей американских и азиатских производителей автомобилей , в т.ч. для различных моделей Chery, Omoda, Jetour, Exeed, Jaecoo, Kaiyi, Changan. Эффективно работает в широком диапазоне температу...",
    "image": "assets/products/lopal/lpl35977-lopal-1-ultra-syn-sp-5w-40.jpg",
    "sku": "LPL35977",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal 1 Ultra SYN SP 5W-40",
    "brand": "Lopal",
    "category": "elite",
    "description": "Полностью синтетическое моторное масло для бензиновых двигателей легковых автомобилей. Соответствует современным требованиям: API SP. Подходит для широкого спектра моделей американских и азиатских производителей автомобилей , в т.ч. для различных моделей Chery, Omoda, Jetour, Exeed, Jaecoo, Kaiyi, Changan. Эффективно работает в широком диапазоне температу...",
    "image": "assets/products/lopal/lpl35984-lopal-1-ultra-syn-sp-5w-40.jpg",
    "sku": "LPL35984",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal 1 Ultra SYN FE SP 5W-30",
    "brand": "Lopal",
    "category": "elite",
    "description": "Полностью синтетическое моторное масло для бензиновых двигателей легковых автомобилей. Соответствует современным требованиям: API SP, ILSAC GF-6A. Подходит для широкого спектра моделей американских и азиатских производителей автомобилей , в т.ч. для различных моделей JAC (Москвич), Chery, Omoda, Jetour, Exeed, Jaecoo, Kaiyi, Changan. Произведено с использ...",
    "image": "assets/products/lopal/lpl35953-lopal-1-ultra-syn-fe-sp-5w-30.jpg",
    "sku": "LPL35953",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal 1 Ultra SYN FE SP 5W-30",
    "brand": "Lopal",
    "category": "elite",
    "description": "Полностью синтетическое моторное масло для бензиновых двигателей легковых автомобилей. Соответствует современным требованиям: API SP, ILSAC GF-6A. Подходит для широкого спектра моделей американских и азиатских производителей автомобилей , в т.ч. для различных моделей JAC (Москвич), Chery, Omoda, Jetour, Exeed, Jaecoo, Kaiyi, Changan. Произведено с использ...",
    "image": "assets/products/lopal/lpl35960-lopal-1-ultra-syn-fe-sp-5w-30.jpg",
    "sku": "LPL35960",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal SONIC 9588 SP 0W-20",
    "brand": "Lopal",
    "category": "elite",
    "description": "Полностью синтетическое моторное масло для бензиновых двигателей легковых автомобилей с турбонаддувом и непосредственным впрыском. Произведено с использованием эксклюзивной запатентованной технологии HYPER ZING, повышающей износостойкость элементов двигателя, лучше очищающей двигатель в процессе работы.",
    "image": "assets/products/lopal/lpl33232-lopal-sonic-9588-sp-0w-20.jpg",
    "sku": "LPL33232",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal SONIC 9588 SP 0W-20",
    "brand": "Lopal",
    "category": "elite",
    "description": "Полностью синтетическое моторное масло для бензиновых двигателей легковых автомобилей с турбонаддувом и непосредственным впрыском. Произведено с использованием эксклюзивной запатентованной технологии HYPER ZING, повышающей износостойкость элементов двигателя, лучше очищающей двигатель в процессе работы.",
    "image": "assets/products/lopal/lpl33249-lopal-sonic-9588-sp-0w-20.jpg",
    "sku": "LPL33249",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal SONIC 9000 5W-30",
    "brand": "Lopal",
    "category": "elite",
    "description": "Полностью синтетическое моторное масло для бензиновых двигателей легковых автомобилей с турбонаддувом и непосредственным впрыском. Произведено с использованием эксклюзивной запатентованной технологии MOLECULAR TEC.",
    "image": "assets/products/lopal/lpl32693-lopal-sonic-9000-5w-30.jpg",
    "sku": "LPL32693",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal SONIC 9000 5W-30",
    "brand": "Lopal",
    "category": "elite",
    "description": "Полностью синтетическое моторное масло для бензиновых двигателей легковых автомобилей с турбонаддувом и непосредственным впрыском. Произведено с использованием эксклюзивной запатентованной технологии MOLECULAR TEC.",
    "image": "assets/products/lopal/lpl32709-lopal-sonic-9000-5w-30.jpg",
    "sku": "LPL32709",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal SONIC 9000 5W-40",
    "brand": "Lopal",
    "category": "elite",
    "description": "Полностью синтетическое моторное масло для бензиновых двигателей легковых автомобилей с турбонаддувом и непосредственным впрыском. Произведено с использованием эксклюзивной запатентованной технологии MOLECULAR TEC.",
    "image": "assets/products/lopal/lpl32716-lopal-sonic-9000-5w-40.jpg",
    "sku": "LPL32716",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal SONIC 9000 5W-40",
    "brand": "Lopal",
    "category": "elite",
    "description": "Полностью синтетическое моторное масло для бензиновых двигателей легковых автомобилей с турбонаддувом и непосредственным впрыском. Произведено с использованием эксклюзивной запатентованной технологии MOLECULAR TEC.",
    "image": "assets/products/lopal/lpl32723-lopal-sonic-9000-5w-40.jpg",
    "sku": "LPL32723",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal 1 HYBRID MOTOR OIL 0W-20",
    "brand": "Lopal",
    "category": "elite",
    "description": "Премиальное полностью синтетическое специальное моторное масло для двигателей гибридных автомобилей. Подходит для различных гибридных моделей и бензиновых автомобилей, таких как Toyota (в том числе новые модели Prius), Honda, Hyundai, Geely, BYD, Changan, Hongqi и др.",
    "image": "assets/products/lopal/lpl35915-lopal-1-hybrid-motor-oil-0w-20.jpg",
    "sku": "LPL35915",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal 1 HYBRID MOTOR OIL 0W-20",
    "brand": "Lopal",
    "category": "elite",
    "description": "Премиальное полностью синтетическое специальное моторное масло для двигателей гибридных автомобилей. Подходит для различных гибридных моделей и бензиновых автомобилей, таких как Toyota (в том числе новые модели Prius), Honda, Hyundai, Geely, BYD, Changan, Hongqi и др.",
    "image": "assets/products/lopal/lpl35922-lopal-1-hybrid-motor-oil-0w-20.jpg",
    "sku": "LPL35922",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal 1 Advanced Fully Synthetic Series SP 0W-20",
    "brand": "Lopal",
    "category": "elite",
    "description": "Премиальное полностью синтетическое моторное масло для бензиновых и дизельных двигателей легковых автомобилей. Официально рекомендованное масло для автомобилей Geely. Соответствует современным требованиям: API SP, ACEA C5, имеет допуски и соответствия Jaguar, Land Rover, Mercedes, Opel, Ford, Toyota, Honda, Kia-Hyundai, Volvo, Exeed, Jetour, Haval Произве...",
    "image": "assets/products/lopal/lpl36578-lopal-1-advanced-fully-synthetic-series-sp-0w-20.jpg",
    "sku": "LPL36578",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal 1 Advanced Fully Synthetic Series SP 0W-20",
    "brand": "Lopal",
    "category": "elite",
    "description": "Премиальное полностью синтетическое моторное масло для бензиновых и дизельных двигателей легковых автомобилей. Официально рекомендованное масло для автомобилей Geely. Соответствует современным требованиям: API SP, ACEA C5, имеет допуски и соответствия Jaguar, Land Rover, Mercedes, Opel, Ford, Toyota, Honda, Kia-Hyundai, Volvo, Exeed, Jetour, Haval Произве...",
    "image": "assets/products/lopal/lpl36585-lopal-1-advanced-fully-synthetic-series-sp-0w-20.jpg",
    "sku": "LPL36585",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal 1 Advanced Fully Synthetic Series SP 0W-20",
    "brand": "Lopal",
    "category": "elite",
    "description": "Премиальное полностью синтетическое моторное масло для бензиновых и дизельных двигателей легковых автомобилей. Официально рекомендованное масло для автомобилей Geely. Соответствует современным требованиям: API SP, ACEA C5, имеет допуски и соответствия Jaguar, Land Rover, Mercedes, Opel, Ford, Toyota, Honda, Kia-Hyundai, Volvo, Exeed, Jetour, Haval Произве...",
    "image": "assets/products/lopal/lpl36837-lopal-1-advanced-fully-synthetic-series-sp-0w-20.png",
    "sku": "LPL36837",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal 1 Advanced Fully Synthetic Series SP 0W-30",
    "brand": "Lopal",
    "category": "elite",
    "description": "Полностью синтетическое всесезонне моторое масло с высоким индексом вязкости для новейших бензиновых двигателей с катализаторами и фильтрами твердых частиц.",
    "image": "assets/products/lopal/lpl36592-lopal-1-advanced-fully-synthetic-series-sp-0w-30.jpg",
    "sku": "LPL36592",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal 1 Advanced Fully Synthetic Series SP 0W-30",
    "brand": "Lopal",
    "category": "elite",
    "description": "Полностью синтетическое всесезонне моторое масло с высоким индексом вязкости для новейших бензиновых двигателей с катализаторами и фильтрами твердых частиц.",
    "image": "assets/products/lopal/lpl36608-lopal-1-advanced-fully-synthetic-series-sp-0w-30.jpg",
    "sku": "LPL36608",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal 1 Advanced Fully Synthetic Series SP 0W-30",
    "brand": "Lopal",
    "category": "elite",
    "description": "Полностью синтетическое всесезонне моторое масло с высоким индексом вязкости для новейших бензиновых двигателей с катализаторами и фильтрами твердых частиц.",
    "image": "assets/products/lopal/lpl36868-lopal-1-advanced-fully-synthetic-series-sp-0w-30.png",
    "sku": "LPL36868",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal 1 Advanced Fully Synthetic Series SP 0W-40",
    "brand": "Lopal",
    "category": "elite",
    "description": "Полностью синтетическое всесезонне моторое масло с высоким индексом вязкости для современных бензиновых двигателей.",
    "image": "assets/products/lopal/lpl38176-lopal-1-advanced-fully-synthetic-series-sp-0w-40.jpg",
    "sku": "LPL38176",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal 1 Advanced Fully Synthetic Series SP 0W-40",
    "brand": "Lopal",
    "category": "elite",
    "description": "Полностью синтетическое всесезонне моторое масло с высоким индексом вязкости для современных бензиновых двигателей.",
    "image": "assets/products/lopal/lpl38183-lopal-1-advanced-fully-synthetic-series-sp-0w-40.jpg",
    "sku": "LPL38183",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal 1 HYBRID MOTOR OIL 0W-16",
    "brand": "Lopal",
    "category": "elite",
    "description": "Полностью синтетическое маловязкое энергосберегающее моторное масло для бензиновых двигателей гибридных автомобилей.",
    "image": "assets/products/lopal/lpl37223-lopal-1-hybrid-motor-oil-0w-16.jpg",
    "sku": "LPL37223",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal 1 HYBRID MOTOR OIL 0W-16",
    "brand": "Lopal",
    "category": "elite",
    "description": "Полностью синтетическое маловязкое энергосберегающее моторное масло для бензиновых двигателей гибридных автомобилей.",
    "image": "assets/products/lopal/lpl37674-lopal-1-hybrid-motor-oil-0w-16.jpg",
    "sku": "LPL37674",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal 1 Advance ESF FE PLUS 0W-20",
    "brand": "Lopal",
    "category": "elite",
    "description": "Премиальное полностью синтетическое моторное масло для бензиновых и дизельных двигателей легковых автомобилей с турбонаддувом и непосредственным впрыском, совместимо с фильтрами твердых частиц (GPF/DPF). Имеет допуски MB-Approval 229.72 и BMW Longlife-17 FE+. Выполняет требования: API SP; ACEA C5/C6; ILSAC GF-6A. Произведено с использованием эксклюзивной...",
    "image": "assets/products/lopal/lpl34390-lopal-1-advance-esf-fe-plus-0w-20.jpg",
    "sku": "LPL34390",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal 1 Advance ESF FE PLUS 0W-20",
    "brand": "Lopal",
    "category": "elite",
    "description": "Премиальное полностью синтетическое моторное масло для бензиновых и дизельных двигателей легковых автомобилей с турбонаддувом и непосредственным впрыском, совместимо с фильтрами твердых частиц (GPF/DPF). Имеет допуски MB-Approval 229.72 и BMW Longlife-17 FE+. Выполняет требования: API SP; ACEA C5/C6; ILSAC GF-6A. Произведено с использованием эксклюзивной...",
    "image": "assets/products/lopal/lpl34567-lopal-1-advance-esf-fe-plus-0w-20.png",
    "sku": "LPL34567",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal 1 Advance ESF FE PLUS 0W-20",
    "brand": "Lopal",
    "category": "elite",
    "description": "Премиальное полностью синтетическое моторное масло для бензиновых и дизельных двигателей легковых автомобилей с турбонаддувом и непосредственным впрыском, совместимо с фильтрами твердых частиц (GPF/DPF). Имеет допуски MB-Approval 229.72 и BMW Longlife-17 FE+. Выполняет требования: API SP; ACEA C5/C6; ILSAC GF-6A. Произведено с использованием эксклюзивной...",
    "image": "assets/products/lopal/lpl38237-lopal-1-advance-esf-fe-plus-0w-20.png",
    "sku": "LPL38237",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal H2 5W-40",
    "brand": "Lopal",
    "category": "elite",
    "description": "Синтетическое моторное масло для бензиновых двигателей легковых автомобилей с турбонаддувом и непосредственным впрыском, современных и предыдущих поколений.",
    "image": "assets/products/lopal/lpl38923-lopal-h2-5w-40.jpg",
    "sku": "LPL38923",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal H2 5W-40",
    "brand": "Lopal",
    "category": "elite",
    "description": "Синтетическое моторное масло для бензиновых двигателей легковых автомобилей с турбонаддувом и непосредственным впрыском, современных и предыдущих поколений.",
    "image": "assets/products/lopal/lpl38930-lopal-h2-5w-40.jpg",
    "sku": "LPL38930",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal H2 5W-40",
    "brand": "Lopal",
    "category": "elite",
    "description": "Синтетическое моторное масло для бензиновых двигателей легковых автомобилей с турбонаддувом и непосредственным впрыском, современных и предыдущих поколений.",
    "image": "assets/products/lopal/lpl31733-lopal-h2-5w-40.png",
    "sku": "LPL31733",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal 1 Special 589 SP 0W-20",
    "brand": "Lopal",
    "category": "elite",
    "description": "Маловязкое энергосберегающее синтетическое масло для современных двигателей VAG и Porsche.",
    "image": "assets/products/lopal/lpl33331-lopal-1-special-589-sp-0w-20.jpg",
    "sku": "LPL33331",
    "source": "lopal"
  },
  {
    "name": "Моторные масла для смешанных автопарков, грузовой автомобильной, строительной техники и автобусов",
    "brand": "Lopal",
    "category": "diesel",
    "description": "Lopal - моторные масла, автохимия и сопутствующие товары для сервисного обслуживания автомобилей. Бренд собрал в себя современные решения и лучшие разработки химической промышленности. Оптимизация производства позволила получить продукт европейского качества по доступным ценам",
    "image": "assets/products/lopal/lpl34659.jpg",
    "sku": "LPL34659",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal DuraRev P800 CK-4 5W-30",
    "brand": "Lopal",
    "category": "diesel",
    "description": "Премиальное синтетическое моторное масло для тяжелонагруженных дизельных двигателей европейских, американских, азиатских и других производителей. Совместимы с сажевыми фильтрами (DPF). Соответствует современным требованиям: API: CK-4/CJ-4, ACEA: E8/E11, имеет допуски и соответствия MB 228.51, Cummins CES 20086, MAN 3677, Volvo VDS 4.5. Произведено с испол...",
    "image": "assets/products/lopal/lpl38374-lopal-durarev-p800-ck-4-5w-30.png",
    "sku": "LPL38374",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal DuraRev P800 CK-4 5W-30",
    "brand": "Lopal",
    "category": "diesel",
    "description": "Премиальное синтетическое моторное масло для тяжелонагруженных дизельных двигателей европейских, американских, азиатских и других производителей. Совместимы с сажевыми фильтрами (DPF). Соответствует современным требованиям: API: CK-4/CJ-4, ACEA: E8/E11, имеет допуски и соответствия MB 228.51, Cummins CES 20086, MAN 3677, Volvo VDS 4.5. Произведено с испол...",
    "image": "assets/products/lopal/lpl38367-lopal-durarev-p800-ck-4-5w-30.jpg",
    "sku": "LPL38367",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal DuraRev K400 CK-4 10W-40",
    "brand": "Lopal",
    "category": "diesel",
    "description": "Премиальное синтетическое моторное масло для тяжелонагруженных дизельных двигателей европейских, американских, азиатских и других производителей. Совместимы с сажевыми фильтрами (DPF). Соответствует современным требованиям: API: CK-4, ACEA: E9, имеет допуски и соответствия Cummins: CES 20081, Detroit Diesel: DFS 93K222/DFS 93K218, Mack: EO-O Premium Plus,...",
    "image": "assets/products/lopal/lpl38398-lopal-durarev-k400-ck-4-10w-40.png",
    "sku": "LPL38398",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal DuraRev K400 CK-4 10W-40",
    "brand": "Lopal",
    "category": "diesel",
    "description": "Премиальное синтетическое моторное масло для тяжелонагруженных дизельных двигателей европейских, американских, азиатских и других производителей. Совместимы с сажевыми фильтрами (DPF). Соответствует современным требованиям: API: CK-4, ACEA: E9, имеет допуски и соответствия Cummins: CES 20081, Detroit Diesel: DFS 93K222/DFS 93K218, Mack: EO-O Premium Plus,...",
    "image": "assets/products/lopal/lpl34024-lopal-durarev-k400-ck-4-10w-40.jpg",
    "sku": "LPL34024",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal DuraRev P700 CI-4 10W-40",
    "brand": "Lopal",
    "category": "diesel",
    "description": "Всесезонное синтетическое моторное масло класса UHPD (Ultra High Performance Diesel) для тяжелонагруженных дизельных двигателей с турбонаддувом, без сажевых фильтров (DPF). Соответствует современным требованиям: API: CI-4, ACEA: E7. Произведено с использованием эксклюзивной запатентованной технологии MAGNETIC OIL FILM",
    "image": "assets/products/lopal/lpl38404-lopal-durarev-p700-ci-4-10w-40.jpg",
    "sku": "LPL38404",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal DuraRev P700 CI-4 10W-40",
    "brand": "Lopal",
    "category": "diesel",
    "description": "Всесезонное синтетическое моторное масло класса UHPD (Ultra High Performance Diesel) для тяжелонагруженных дизельных двигателей с турбонаддувом, без сажевых фильтров (DPF). Соответствует современным требованиям: API: CI-4, ACEA: E7. Произведено с использованием эксклюзивной запатентованной технологии MAGNETIC OIL FILM",
    "image": "assets/products/lopal/lpl38411-lopal-durarev-p700-ci-4-10w-40.png",
    "sku": "LPL38411",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal DuraRev P700 CI-4 15W-40",
    "brand": "Lopal",
    "category": "diesel",
    "description": "Синтетическое моторное масло класса UHPD (Ultra High Performance Diesel) для тяжелонагруженных дизельных двигателей с турбонаддувом, без сажевых фильтров (DPF). Соответствует современным требованиям: API: CI-4, ACEA: E7, имеет допуски и соответствия MB 228.51, Cummins 20077, MAN M3275, Volvo VDS-3, Deutz DQC III-10, Mack EO-N. Произведено с использованием...",
    "image": "assets/products/lopal/lpl30828-lopal-durarev-p700-ci-4-15w-40.jpg",
    "sku": "LPL30828",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal DuraRev P700 CI-4 15W-40",
    "brand": "Lopal",
    "category": "diesel",
    "description": "Синтетическое моторное масло класса UHPD (Ultra High Performance Diesel) для тяжелонагруженных дизельных двигателей с турбонаддувом, без сажевых фильтров (DPF). Соответствует современным требованиям: API: CI-4, ACEA: E7, имеет допуски и соответствия MB 228.51, Cummins 20077, MAN M3275, Volvo VDS-3, Deutz DQC III-10, Mack EO-N. Произведено с использованием...",
    "image": "assets/products/lopal/lpl38435-lopal-durarev-p700-ci-4-15w-40.png",
    "sku": "LPL38435",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal Extra K10 CK-4 10W-40",
    "brand": "Lopal",
    "category": "diesel",
    "description": "Новейшее синтетическое моторное масло для современных экологичных дизельных двигателей",
    "image": "assets/products/lopal/lpl34659-lopal-extra-k10-ck-4-10w-40.jpg",
    "sku": "LPL34659",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal Extra K10 CK-4 10W-40",
    "brand": "Lopal",
    "category": "diesel",
    "description": "Новейшее синтетическое моторное масло для современных экологичных дизельных двигателей",
    "image": "assets/products/lopal/lpl37346-lopal-extra-k10-ck-4-10w-40.png",
    "sku": "LPL37346",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal Extra K8 CK-4 10W-40",
    "brand": "Lopal",
    "category": "diesel",
    "description": "Новейшее синтетическое моторное масло для современных экологичных высоконагруженных дизельных двигателей с повышенными интервалами замены.",
    "image": "assets/products/lopal/lpl36073-lopal-extra-k8-ck-4-10w-40.jpg",
    "sku": "LPL36073",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal Extra K8 CK-4 10W-40",
    "brand": "Lopal",
    "category": "diesel",
    "description": "Новейшее синтетическое моторное масло для современных экологичных высоконагруженных дизельных двигателей с повышенными интервалами замены.",
    "image": "assets/products/lopal/lpl37353-lopal-extra-k8-ck-4-10w-40.png",
    "sku": "LPL37353",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal Extra K5 CJ-4 15W-40",
    "brand": "Lopal",
    "category": "diesel",
    "description": "Всесезонное дизельное моторное масло для фиксированных интервалов замены в двигателях с сажевыми фильтрами и мочевинной системой нейтрализации.",
    "image": "assets/products/lopal/lpl30644-lopal-extra-k5-cj-4-15w-40.jpg",
    "sku": "LPL30644",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal Extra K5 CJ-4 15W-40",
    "brand": "Lopal",
    "category": "diesel",
    "description": "Всесезонное дизельное моторное масло для фиксированных интервалов замены в двигателях с сажевыми фильтрами и мочевинной системой нейтрализации.",
    "image": "assets/products/lopal/lpl37360-lopal-extra-k5-cj-4-15w-40.png",
    "sku": "LPL37360",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal Daily V8000 CI-4 10W-30",
    "brand": "Lopal",
    "category": "diesel",
    "description": "Всесезонное энергосберегающее дизельное моторное масло для двигателей классических конструкций под стандартные интервалы замены.",
    "image": "assets/products/lopal/lpl30729-lopal-daily-v8000-ci-4-10w-30.jpg",
    "sku": "LPL30729",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal Daily V8000 CI-4 10W-30",
    "brand": "Lopal",
    "category": "diesel",
    "description": "Всесезонное энергосберегающее дизельное моторное масло для двигателей классических конструкций под стандартные интервалы замены.",
    "image": "assets/products/lopal/lpl37377-lopal-daily-v8000-ci-4-10w-30.png",
    "sku": "LPL37377",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal Daily V8000 CI-4 15W-40",
    "brand": "Lopal",
    "category": "diesel",
    "description": "Всесезонное дизельное моторное масло для двигателей классических конструкций под стандартные интервалы замены.",
    "image": "assets/products/lopal/lpl32235-lopal-daily-v8000-ci-4-15w-40.jpg",
    "sku": "LPL32235",
    "source": "lopal"
  },
  {
    "name": "Моторное масло Lopal Daily V8000 CI-4 15W-40",
    "brand": "Lopal",
    "category": "diesel",
    "description": "Всесезонное дизельное моторное масло для двигателей классических конструкций под стандартные интервалы замены.",
    "image": "assets/products/lopal/lpl37964-lopal-daily-v8000-ci-4-15w-40.png",
    "sku": "LPL37964",
    "source": "lopal"
  },
  {
    "name": "Синтетическое моторное масло Lopal Extra K4+ CI-4 10W-40",
    "brand": "Lopal",
    "category": "diesel",
    "description": "Высокощелочное синтетическое моторное масло для высоконагруженных грузовых дизелей без специальных требований по экологии.",
    "image": "assets/products/lopal/lpl32372-lopal-extra-k4-ci-4-10w-40.jpg",
    "sku": "LPL32372",
    "source": "lopal"
  },
  {
    "name": "Синтетическое моторное масло Lopal Extra K4+ CI-4 10W-40",
    "brand": "Lopal",
    "category": "diesel",
    "description": "Высокощелочное синтетическое моторное масло для высоконагруженных грузовых дизелей без специальных требований по экологии.",
    "image": "assets/products/lopal/lpl31528-lopal-extra-k4-ci-4-10w-40.png",
    "sku": "LPL31528",
    "source": "lopal"
  },
  {
    "name": "Трансмиссионные масла и ATF",
    "brand": "Lopal",
    "category": "transmission",
    "description": "Lopal - моторные масла, автохимия и сопутствующие товары для сервисного обслуживания автомобилей. Бренд собрал в себя современные решения и лучшие разработки химической промышленности. Оптимизация производства позволила получить продукт европейского качества по доступным ценам",
    "image": "assets/products/lopal/lpl36325-atf.jpg",
    "sku": "LPL36325",
    "source": "lopal"
  },
  {
    "name": "Трансмиссионное масло для вариаторов CVT Lopal CVTF 200",
    "brand": "Lopal",
    "category": "transmission",
    "description": "Синтетическое трансмиссионное масло, предназначенное для применения в бесступенчатых (вариаторных) коробках передач. Имеет допуски и соответствия VW, Audi, Toyota, Honda, Nissan, BMW Mini Cooper.",
    "image": "assets/products/lopal/lpl36349-cvt-lopal-cvtf-200.jpg",
    "sku": "LPL36349",
    "source": "lopal"
  },
  {
    "name": "Трансмиссионное масло для АКПП Lopal ATF 9600",
    "brand": "Lopal",
    "category": "transmission",
    "description": "Масло для автоматических трансмиссий, специально разработанное для 6-ступенчатых и более, диапазонных автоматических трансмиссий. Соответствует требованиям GM DEXRON®VI, Jaso, имеет допуски и соответствия Mercedes-Benz, Ford, Honda.",
    "image": "assets/products/lopal/lpl36318-lopal-atf-9600.jpg",
    "sku": "LPL36318",
    "source": "lopal"
  },
  {
    "name": "Трансмиссионное масло для АКПП Lopal ATF 6400",
    "brand": "Lopal",
    "category": "transmission",
    "description": "Премиальное масло для автоматических трансмиссий, созданное на основе высококачественного базового масла III группы и специальных присадок, соответствующее требованиям GM DEXRON®IIIH. Соответствует современным требованиям JASO, имеет допуски и соответствия Mercedes-Benz, Toyota, Honda, Nissan, BMW, VW, Hyundai.",
    "image": "assets/products/lopal/lpl36301-lopal-atf-6400.jpg",
    "sku": "LPL36301",
    "source": "lopal"
  },
  {
    "name": "Трансмиссионное масло для АКПП Lopal ATF 9800",
    "brand": "Lopal",
    "category": "transmission",
    "description": "Премиальная маловязкая жидкость для автоматических трансмиссий, обеспечивающая плавное переключение передач, исключение рывков и вибраций. Соответствует требованиям Mercedes-Benz, Toyota, Honda, Nissan, BMW, VW, Hyundai, так же автомобилей китайских и корейских брендов оснащенных 6-9 ступенчатыми трансмиссиями ZF.",
    "image": "assets/products/lopal/lpl36332-lopal-atf-9800.jpg",
    "sku": "LPL36332",
    "source": "lopal"
  },
  {
    "name": "Трансмиссионное масло для АКПП Lopal ATF 10X",
    "brand": "Lopal",
    "category": "transmission",
    "description": "Ультрамаловязкая жидкость ATF, созданная на синтетическом базовом масле и специальных присадках, обеспечивает хорошую экономию топлива и отменные низкотемпературные характеристики. Соответствует требованиям GM DEXRON®ULV (Ultra Low Viscosity) – сверх низкой вязкости. Имеет допуски и соответствия Mercedes-Benz, Ford.",
    "image": "assets/products/lopal/lpl36325-lopal-atf-10x.jpg",
    "sku": "LPL36325",
    "source": "lopal"
  },
  {
    "name": "Трансмиссионное масло Lopal DuraGear G700 GL-5 75W-90",
    "brand": "Lopal",
    "category": "transmission",
    "description": "Синтетическое трансмиссионное масло для высоконагруженных редукторов, гипоидных мостов и некоторых механических коробок передач",
    "image": "assets/products/lopal/lpl38879-lopal-duragear-g700-gl-5-75w-90.jpg",
    "sku": "LPL38879",
    "source": "lopal"
  },
  {
    "name": "Трансмиссионное масло Lopal DuraGear G700 GL-5 75W-90",
    "brand": "Lopal",
    "category": "transmission",
    "description": "Синтетическое трансмиссионное масло для высоконагруженных редукторов, гипоидных мостов и некоторых механических коробок передач",
    "image": "assets/products/lopal/lpl38886-lopal-duragear-g700-gl-5-75w-90.png",
    "sku": "LPL38886",
    "source": "lopal"
  },
  {
    "name": "Трансмиссионное масло для АКПП Lopal E21 E-ATF",
    "brand": "Lopal",
    "category": "transmission",
    "description": "Маловязкая синтетическая ATF для гибридных трансмиссий.",
    "image": "assets/products/lopal/lpl37926-lopal-e21-e-atf.jpg",
    "sku": "LPL37926",
    "source": "lopal"
  },
  {
    "name": "Трансмиссионное масло для вариаторов CVT Lopal E22 E-CVTF",
    "brand": "Lopal",
    "category": "transmission",
    "description": "Маловязкое трансмиссионное масло для гибридных e-CVT и вариаторов электромобилей",
    "image": "assets/products/lopal/lpl33577-cvt-lopal-e22-e-cvtf.jpg",
    "sku": "LPL33577",
    "source": "lopal"
  },
  {
    "name": "Трансмиссионное масло для РКПП Lopal E23 E-DCTF",
    "brand": "Lopal",
    "category": "transmission",
    "description": "Маловязкое энергосберегающее масло для преселективных роботизированных коробок передач последнего поколения.",
    "image": "assets/products/lopal/lpl33584-lopal-e23-e-dctf.jpg",
    "sku": "LPL33584",
    "source": "lopal"
  },
  {
    "name": "Трансмиссионное масло Lopal E27 Reducer Oil",
    "brand": "Lopal",
    "category": "transmission",
    "description": "Специальное маловязкое трансмиссионное масло для смазки и охлаждения различных систем электроприводов электрических автомобилей.",
    "image": "assets/products/lopal/lpl33669-lopal-e27-reducer-oil.jpg",
    "sku": "LPL33669",
    "source": "lopal"
  },
  {
    "name": "Трансмиссионное масло для вариаторов CVT Lopal CVTF 300S",
    "brand": "Lopal",
    "category": "transmission",
    "description": "Маловязое трансмиссионное масло для вариаторов последних поколений, в том числе используемых и в гибридных автомобилей.",
    "image": "assets/products/lopal/lpl36356-cvt-lopal-cvtf-300s.jpg",
    "sku": "LPL36356",
    "source": "lopal"
  },
  {
    "name": "Трансмиссионное масло для РКПП Lopal DCTF 11X",
    "brand": "Lopal",
    "category": "transmission",
    "description": "Сверхмаловязкое синтетическое масло для роботизированных трансмиссий с двумя сцеплениями.",
    "image": "assets/products/lopal/lpl31962-lopal-dctf-11x.jpg",
    "sku": "LPL31962",
    "source": "lopal"
  },
  {
    "name": "Трансмиссионное масло Lopal E274",
    "brand": "Lopal",
    "category": "transmission",
    "description": "Синтетическое редукторное масло с высокой диэлектрической проницаемостью для маслоохлаждаемых редукторов электромобилей и гибридов.",
    "image": "assets/products/lopal/lpl31955-lopal-e274.jpg",
    "sku": "LPL31955",
    "source": "lopal"
  },
  {
    "name": "Трансмиссионное масло Lopal DuraGear G500 GL-5 80W-90",
    "brand": "Lopal",
    "category": "transmission",
    "description": "Всесезонное трансмиссионное масло для гипоидных редукторов",
    "image": "assets/products/lopal/lpl31153-lopal-duragear-g500-gl-5-80w-90.jpg",
    "sku": "LPL31153",
    "source": "lopal"
  },
  {
    "name": "Трансмиссионное масло Lopal DuraGear G500 GL-5 80W-90",
    "brand": "Lopal",
    "category": "transmission",
    "description": "Всесезонное трансмиссионное масло для гипоидных редукторов",
    "image": "assets/products/lopal/lpl37971-lopal-duragear-g500-gl-5-80w-90.png",
    "sku": "LPL37971",
    "source": "lopal"
  },
  {
    "name": "Трансмиссионное масло Lopal DuraGear G500 GL-5 85W-140",
    "brand": "Lopal",
    "category": "transmission",
    "description": "Высоковязкое трансмиссионное масло для гипоидных передач, работающих под максимальной нагрузкой.",
    "image": "assets/products/lopal/lpl37988-lopal-duragear-g500-gl-5-85w-140.png",
    "sku": "LPL37988",
    "source": "lopal"
  },
  {
    "name": "Трансмиссионное масло Lopal DuraGear G500 GL-5 85W-140",
    "brand": "Lopal",
    "category": "transmission",
    "description": "Высоковязкое трансмиссионное масло для гипоидных передач, работающих под максимальной нагрузкой.",
    "image": "assets/products/lopal/lpl31573-lopal-duragear-g500-gl-5-85w-140.jpg",
    "sku": "LPL31573",
    "source": "lopal"
  },
  {
    "name": "Трансмиссионное масло для РКПП Lopal DCTF 72X",
    "brand": "Lopal",
    "category": "transmission",
    "description": "Полностью синтетическое трансмиссионное масло нового поколения, для трансмиссий с двойным «мокрым» сцеплением.",
    "image": "assets/products/lopal/lpl36363-lopal-dctf-72x.jpg",
    "sku": "LPL36363",
    "source": "lopal"
  },
  {
    "name": "Эксплуатационные жидкости",
    "brand": "Lopal",
    "category": "elite",
    "description": "Lopal - моторные масла, автохимия и сопутствующие товары для сервисного обслуживания автомобилей. Бренд собрал в себя современные решения и лучшие разработки химической промышленности. Оптимизация производства позволила получить продукт европейского качества по доступным ценам",
    "image": "assets/products/lopal/lpl38633.jpg",
    "sku": "LPL38633",
    "source": "lopal"
  },
  {
    "name": "Антифриз-концентрат C31 LEC-I",
    "brand": "Lopal",
    "category": "antifreeze",
    "description": "Концентрат охлаждающей жидкости с этиленгликолем полиэфирного класса в качестве антифриза. Присадки не содержат вредных для организма человека силикатов и боратов, аминов и фосфатов, обладают антиобледенительными, антикипящими, антикоррозийными, антикавитационными, против накипи, антикоррозийными свойствами, высокой стабильностью и другими семью характери...",
    "image": "assets/products/lopal/lpl38626-c31-lec-i.jpg",
    "sku": "LPL38626",
    "source": "lopal"
  },
  {
    "name": "Антифриз-концентрат C31 LEC-I",
    "brand": "Lopal",
    "category": "antifreeze",
    "description": "Концентрат охлаждающей жидкости с этиленгликолем полиэфирного класса в качестве антифриза. Присадки не содержат вредных для организма человека силикатов и боратов, аминов и фосфатов, обладают антиобледенительными, антикипящими, антикоррозийными, антикавитационными, против накипи, антикоррозийными свойствами, высокой стабильностью и другими семью характери...",
    "image": "assets/products/lopal/lpl38633-c31-lec-i.jpg",
    "sku": "LPL38633",
    "source": "lopal"
  },
  {
    "name": "Антифриз C31 LEC-II",
    "brand": "Lopal",
    "category": "antifreeze",
    "description": "Охлаждающая жидкость с этиленгликолем полиэфирного класса в качестве антифриза. Присадки не содержат вредных для организма человека силикатов и боратов, аминов и фосфатов, обладают антиобледенительными, антикипящими, антикоррозийными, антикавитационными, против накипи, антикоррозийными свойствами, высокой стабильностью и другими семью характеристиками, мо...",
    "image": "assets/products/lopal/lpl38664-c31-lec-ii.jpg",
    "sku": "LPL38664",
    "source": "lopal"
  },
  {
    "name": "Антифриз C31 LEC-II",
    "brand": "Lopal",
    "category": "antifreeze",
    "description": "Охлаждающая жидкость с этиленгликолем полиэфирного класса в качестве антифриза. Присадки не содержат вредных для организма человека силикатов и боратов, аминов и фосфатов, обладают антиобледенительными, антикипящими, антикоррозийными, антикавитационными, против накипи, антикоррозийными свойствами, высокой стабильностью и другими семью характеристиками, мо...",
    "image": "assets/products/lopal/lpl31245-c31-lec-ii.jpg",
    "sku": "LPL31245",
    "source": "lopal"
  },
  {
    "name": "Антифриз Lopal E31 -40℃",
    "brand": "Lopal",
    "category": "antifreeze",
    "description": "Lopal New Energy E31 - это охлаждающая жидкость на этиленгликоле максимальной степени чистоты, со специальным пакетом присадок без использования силикатов, боратов, аминов и фосфатов, вредных для экологии, с антикоррозионными, антикавитационными, антинакипиновыми компонентами для защиты системы охлаждения гибридных и полностью электрических транспортных с...",
    "image": "assets/products/lopal/lpl38695-lopal-e31-40.jpg",
    "sku": "LPL38695",
    "source": "lopal"
  },
  {
    "name": "Антифриз Lopal E31 -40℃",
    "brand": "Lopal",
    "category": "antifreeze",
    "description": "Lopal New Energy E31 - это охлаждающая жидкость на этиленгликоле максимальной степени чистоты, со специальным пакетом присадок без использования силикатов, боратов, аминов и фосфатов, вредных для экологии, с антикоррозионными, антикавитационными, антинакипиновыми компонентами для защиты системы охлаждения гибридных и полностью электрических транспортных с...",
    "image": "assets/products/lopal/lpl34772-lopal-e31-40.jpg",
    "sku": "LPL34772",
    "source": "lopal"
  },
  {
    "name": "Антифриз Lopal E8110 EVC-II-40℃",
    "brand": "Lopal",
    "category": "antifreeze",
    "description": "Lopal New Energy E8110 - это охлаждающая жидкость с низкой проводимостью для аккумуляторов электромобилей. Использует передовую технологию сверхтонкой очистки при помощи мембранной фильтрации, чтобы гарантировать безопасность и стабильность работы блока литиевых батарей.",
    "image": "assets/products/lopal/lpl36219-lopal-e8110-evc-ii-40.jpg",
    "sku": "LPL36219",
    "source": "lopal"
  },
  {
    "name": "Тормозная жидкость Lopal E61 Brake Fluid",
    "brand": "Lopal",
    "category": "elite",
    "description": "Электробезопасная маловязкая синтетическая тормозная жидкость для электромобилей и гибридов.",
    "image": "assets/products/lopal/lpl38961-lopal-e61-brake-fluid.jpg",
    "sku": "LPL38961",
    "source": "lopal"
  },
  {
    "name": "Масло гидравлическое Euronol Hydrostandart HVLP ISO VG 32, 20л",
    "brand": "Euronol",
    "category": "hidro",
    "description": "Гидравлическое масло из каталога Ozon Комплект-Моторс. Вязкость, допуски и применимость уточняются в карточке Ozon.",
    "image": "assets/products/yandex/hydrostandart-hvlp-32.png",
    "ozonUrl": "https://www.ozon.ru/product/maslo-gidravlicheskoe-euronol-hydrostandart-hvlp-iso-vg-32-20l-1498059228/",
    "source": "ozon"
  },
  {
    "name": "Масло гидравлическое Luxe HYDROS HVLP 46 20л",
    "brand": "Luxe",
    "category": "hidro",
    "description": "Гидравлическое масло из каталога Ozon Комплект-Моторс. Вязкость, допуски и применимость уточняются в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/maslo-gidravlicheskoe-luxe-hydros-hvlp-46-20l-3195403636/",
    "source": "ozon"
  },
  {
    "name": "Масло гидравлическое Repsol Telex HVLP 32 20л",
    "brand": "Repsol",
    "category": "hidro",
    "description": "Гидравлическое масло из каталога Ozon Комплект-Моторс. Вязкость, допуски и применимость уточняются в карточке Ozon.",
    "image": "assets/products/yandex/maker-telex-hvlp-32-1.png",
    "ozonUrl": "https://www.ozon.ru/product/maslo-gidravlicheskoe-repsol-telex-hvlp-32-20l-2127977750/",
    "source": "ozon"
  },
  {
    "name": "Масло гидравлическое Repsol Telex HVLP 46 20л",
    "brand": "Repsol",
    "category": "hidro",
    "description": "Гидравлическое масло из каталога Ozon Комплект-Моторс. Вязкость, допуски и применимость уточняются в карточке Ozon.",
    "image": "assets/products/yandex/maker-telex-hvlp-46-1.png",
    "ozonUrl": "https://www.ozon.ru/product/maslo-gidravlicheskoe-repsol-telex-hvlp-46-20l-2128037221/",
    "source": "ozon"
  },
  {
    "name": "Масло трансмиссионное минеральное LUXE TRANSSOL X 80W90 GL-4/5 20л.",
    "brand": "Luxe",
    "category": "transmission",
    "description": "Трансмиссионное масло из каталога Ozon Комплект-Моторс. Совместимость с узлом и допуски уточняются в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/maslo-transmissionnoe-mineralnoe-luxe-transsol-x-80w90-gl-4-5-20l-4668499940/",
    "source": "ozon"
  },
  {
    "name": "Масло трансмиссионное минеральное Repsol Navigator HQ GL-5 80W90 1 литр",
    "brand": "Repsol",
    "category": "transmission",
    "description": "Трансмиссионное масло из каталога Ozon Комплект-Моторс. Совместимость с узлом и допуски уточняются в карточке Ozon.",
    "image": "assets/products/yandex/navigator-hq-gl-5-80w90-1.png",
    "ozonUrl": "https://www.ozon.ru/product/maslo-transmissionnoe-mineralnoe-repsol-navigator-hq-gl-5-80w90-1-litr-2490062302/",
    "source": "ozon"
  },
  {
    "name": "Масло трансмиссионное минеральное Repsol Navigator HQ GL-5 85W140 1 литр",
    "brand": "Repsol",
    "category": "transmission",
    "description": "Трансмиссионное масло из каталога Ozon Комплект-Моторс. Совместимость с узлом и допуски уточняются в карточке Ozon.",
    "image": "assets/products/yandex/navigator-hq-gl-5-85w140-1.png",
    "ozonUrl": "https://www.ozon.ru/product/maslo-transmissionnoe-mineralnoe-repsol-navigator-hq-gl-5-85w140-1-litr-2490345892/",
    "source": "ozon"
  },
  {
    "name": "Масло трансмиссионное минеральное Repsol Navigator HQ GL-5 85W140 20л",
    "brand": "Repsol",
    "category": "transmission",
    "description": "Трансмиссионное масло из каталога Ozon Комплект-Моторс. Совместимость с узлом и допуски уточняются в карточке Ozon.",
    "image": "assets/products/yandex/navigator-hq-gl-5-85w140-1.png",
    "ozonUrl": "https://www.ozon.ru/product/maslo-transmissionnoe-mineralnoe-repsol-navigator-hq-gl-5-85w140-20l-2476175553/",
    "source": "ozon"
  },
  {
    "name": "Масло трансмиссионное синтетическое Repsol Automator ATF 6 1 литр",
    "brand": "Repsol",
    "category": "transmission",
    "description": "Трансмиссионное масло из каталога Ozon Комплект-Моторс. Совместимость с узлом и допуски уточняются в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/maslo-transmissionnoe-sinteticheskoe-repsol-automator-atf-6-1-litr-1846604168/",
    "source": "ozon"
  },
  {
    "name": "Масло трансмиссионное синтетическое Repsol Automator ATF 6 20л",
    "brand": "Repsol",
    "category": "transmission",
    "description": "Трансмиссионное масло из каталога Ozon Комплект-Моторс. Совместимость с узлом и допуски уточняются в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/maslo-transmissionnoe-sinteticheskoe-repsol-automator-atf-6-20l-2789903171/",
    "source": "ozon"
  },
  {
    "name": "Масло трансмиссионное синтетическое Repsol Matic 3 ATF 1 литр",
    "brand": "Repsol",
    "category": "transmission",
    "description": "Трансмиссионное масло из каталога Ozon Комплект-Моторс. Совместимость с узлом и допуски уточняются в карточке Ozon.",
    "image": "assets/products/yandex/matic-iii-atf.png",
    "ozonUrl": "https://www.ozon.ru/product/maslo-transmissionnoe-sinteticheskoe-repsol-matic-3-atf-1-litr-2476505367/",
    "source": "ozon"
  },
  {
    "name": "Масло трансмиссионное синтетическое Repsol Matic 3 ATF 20л",
    "brand": "Repsol",
    "category": "transmission",
    "description": "Трансмиссионное масло из каталога Ozon Комплект-Моторс. Совместимость с узлом и допуски уточняются в карточке Ozon.",
    "image": "assets/products/yandex/matic-iii-atf.png",
    "ozonUrl": "https://www.ozon.ru/product/maslo-transmissionnoe-sinteticheskoe-repsol-matic-3-atf-20l-2128252249/",
    "source": "ozon"
  },
  {
    "name": "Масло трансмиссионное синтетическое Repsol Navigator FE LL 75W80 1 литр",
    "brand": "Repsol",
    "category": "transmission",
    "description": "Трансмиссионное масло из каталога Ozon Комплект-Моторс. Совместимость с узлом и допуски уточняются в карточке Ozon.",
    "image": "assets/products/yandex/navigator-fe-ll-75w80-1.png",
    "ozonUrl": "https://www.ozon.ru/product/maslo-transmissionnoe-sinteticheskoe-repsol-navigator-fe-ll-75w80-1-litr-2483240116/",
    "source": "ozon"
  },
  {
    "name": "Масло трансмиссионное синтетическое Repsol Navigator HQ GL-4 75w90 1 литр",
    "brand": "Repsol",
    "category": "transmission",
    "description": "Трансмиссионное масло из каталога Ozon Комплект-Моторс. Совместимость с узлом и допуски уточняются в карточке Ozon.",
    "image": "assets/products/yandex/navigator-hq-gl-4-ep-75w90-1.png",
    "ozonUrl": "https://www.ozon.ru/product/maslo-transmissionnoe-sinteticheskoe-repsol-navigator-hq-gl-4-75w90-1-litr-2489901899/",
    "source": "ozon"
  },
  {
    "name": "Масло трансмиссионное универсальное синтетическое Repsol Cartago FE LD 75w90, 20л",
    "brand": "Repsol",
    "category": "transmission",
    "description": "Трансмиссионное масло из каталога Ozon Комплект-Моторс. Совместимость с узлом и допуски уточняются в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/maslo-transmissionnoe-universalnoe-sinteticheskoe-repsol-cartago-fe-ld-75w90-20l-1545725119/",
    "source": "ozon"
  },
  {
    "name": "Масло трансмиссионное универсальное синтетическое Repsol Navigator FE LL 75W90 20л",
    "brand": "Repsol",
    "category": "transmission",
    "description": "Трансмиссионное масло из каталога Ozon Комплект-Моторс. Совместимость с узлом и допуски уточняются в карточке Ozon.",
    "image": "assets/products/yandex/navigator-fe-ll-75w90-1.png",
    "ozonUrl": "https://www.ozon.ru/product/maslo-transmissionnoe-universalnoe-sinteticheskoe-repsol-navigator-fe-ll-75w90-20l-2476336210/",
    "source": "ozon"
  },
  {
    "name": "Масло трансмиссионное универсальное синтетическое Repsol Navigator FE LL 75w90, 1л",
    "brand": "Repsol",
    "category": "transmission",
    "description": "Трансмиссионное масло из каталога Ozon Комплект-Моторс. Совместимость с узлом и допуски уточняются в карточке Ozon.",
    "image": "assets/products/yandex/navigator-fe-ll-75w90-1.png",
    "ozonUrl": "https://www.ozon.ru/product/maslo-transmissionnoe-universalnoe-sinteticheskoe-repsol-navigator-fe-ll-75w90-1l-1498059193/",
    "source": "ozon"
  },
  {
    "name": "Масло трансмиссионное Euronol Trans X 75W-90, 1л",
    "brand": "Euronol",
    "category": "transmission",
    "description": "Трансмиссионное масло из каталога Ozon Комплект-Моторс. Совместимость с узлом и допуски уточняются в карточке Ozon.",
    "image": "assets/products/yandex/trans-x-75w90.png",
    "ozonUrl": "https://www.ozon.ru/product/maslo-transmissionnoe-euronol-trans-x-75w-90-1l-1549279701/",
    "source": "ozon"
  },
  {
    "name": "Масло трансмиссионное Euronol Trans X 75W-90, 20л",
    "brand": "Euronol",
    "category": "transmission",
    "description": "Трансмиссионное масло из каталога Ozon Комплект-Моторс. Совместимость с узлом и допуски уточняются в карточке Ozon.",
    "image": "assets/products/yandex/trans-x-75w90.png",
    "ozonUrl": "https://www.ozon.ru/product/maslo-transmissionnoe-euronol-trans-x-75w-90-20l-1549248178/",
    "source": "ozon"
  },
  {
    "name": "Масло трансмиссионное Euronol Trans X 75w90, 4л",
    "brand": "Euronol",
    "category": "transmission",
    "description": "Трансмиссионное масло из каталога Ozon Комплект-Моторс. Совместимость с узлом и допуски уточняются в карточке Ozon.",
    "image": "assets/products/yandex/trans-x-75w90.png",
    "ozonUrl": "https://www.ozon.ru/product/maslo-transmissionnoe-euronol-trans-x-75w90-4l-1549276212/",
    "source": "ozon"
  },
  {
    "name": "Масло трансмиссионное Repsol Automator CVT 1 литр",
    "brand": "Repsol",
    "category": "transmission",
    "description": "Трансмиссионное масло из каталога Ozon Комплект-Моторс. Совместимость с узлом и допуски уточняются в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/maslo-transmissionnoe-repsol-automator-cvt-1-litr-2141934120/",
    "source": "ozon"
  },
  {
    "name": "Масло трансмиссионное Repsol Matic Diafluid ATF 1 литр",
    "brand": "Repsol",
    "category": "transmission",
    "description": "Трансмиссионное масло из каталога Ozon Комплект-Моторс. Совместимость с узлом и допуски уточняются в карточке Ozon.",
    "image": "assets/products/yandex/matic-diaflud-atf-1.png",
    "ozonUrl": "https://www.ozon.ru/product/maslo-transmissionnoe-repsol-matic-diafluid-atf-1-litr-2142324764/",
    "source": "ozon"
  },
  {
    "name": "Масло трансмиссионное Repsol Matic Diafluid ATF 20 л",
    "brand": "Repsol",
    "category": "transmission",
    "description": "Трансмиссионное масло из каталога Ozon Комплект-Моторс. Совместимость с узлом и допуски уточняются в карточке Ozon.",
    "image": "assets/products/yandex/matic-diaflud-atf-1.png",
    "ozonUrl": "https://www.ozon.ru/product/maslo-transmissionnoe-repsol-matic-diafluid-atf-20-l-2142388028/",
    "source": "ozon"
  },
  {
    "name": "Охлаждающая жидкость Euronol Antifreeze Carboxylate Ready G12+ 4 кг",
    "brand": "Euronol",
    "category": "antifreeze",
    "description": "Охлаждающая жидкость из каталога Ozon Комплект-Моторс. Подбор по системе охлаждения уточняется в карточке Ozon.",
    "image": "assets/products/yandex/antifreeze-carboxylate-ready-g12-1.png",
    "ozonUrl": "https://www.ozon.ru/product/ohlazhdayushchaya-zhidkost-euronol-antifreeze-carboxylate-ready-g12-4-kg-1922608560/",
    "source": "ozon"
  },
  {
    "name": "Охлаждающая жидкость Euronol Antifreeze Hybrid Ready G11 4кг",
    "brand": "Euronol",
    "category": "antifreeze",
    "description": "Охлаждающая жидкость из каталога Ozon Комплект-Моторс. Подбор по системе охлаждения уточняется в карточке Ozon.",
    "image": "assets/products/yandex/antifreeze-hybrid-ready-g11-1.png",
    "ozonUrl": "https://www.ozon.ru/product/ohlazhdayushchaya-zhidkost-euronol-antifreeze-hybrid-ready-g11-4kg-1922637478/",
    "source": "ozon"
  },
  {
    "name": "Охлаждающая жидкость Euronol Antifreeze Premix 50/50 G12+ 21кг",
    "brand": "Euronol",
    "category": "antifreeze",
    "description": "Охлаждающая жидкость из каталога Ozon Комплект-Моторс. Подбор по системе охлаждения уточняется в карточке Ozon.",
    "image": "assets/products/yandex/50-g12.png",
    "ozonUrl": "https://www.ozon.ru/product/ohlazhdayushchaya-zhidkost-euronol-antifreeze-premix-50-50-g12-21kg-2946237634/",
    "source": "ozon"
  },
  {
    "name": "Охлаждающая жидкость Euronol Premix 50/50 G11 21кг",
    "brand": "Euronol",
    "category": "antifreeze",
    "description": "Охлаждающая жидкость из каталога Ozon Комплект-Моторс. Подбор по системе охлаждения уточняется в карточке Ozon.",
    "image": "assets/products/yandex/50-g11.png",
    "ozonUrl": "https://www.ozon.ru/product/ohlazhdayushchaya-zhidkost-euronol-premix-50-50-g11-21kg-2946283734/",
    "source": "ozon"
  },
  {
    "name": "Смазка высокотемпературная синяя SpecLub Laguna Blue 18кг",
    "brand": "SpecLub",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/smazka-vysokotemperaturnaya-sinyaya-speclub-laguna-blue-18kg-2842757297/",
    "source": "ozon"
  },
  {
    "name": "Смазка высокотемпературная синяя SpecLub Laguna Blue туба 0.4 кг 15 штук",
    "brand": "SpecLub",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/smazka-vysokotemperaturnaya-sinyaya-speclub-laguna-blue-tuba-0-4-kg-15-shtuk-4756552098/",
    "source": "ozon"
  },
  {
    "name": "Смазка высокотемпературная синяя SpecLub Unigrease Blue EP 2 18кг",
    "brand": "SpecLub",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/smazka-vysokotemperaturnaya-sinyaya-speclub-unigrease-blue-ep-2-18kg-2867619110/",
    "source": "ozon"
  },
  {
    "name": "Смазка противозадирная Nano Grease Multipurpose EP(Nano Gold) 18 кг",
    "brand": "Nano Grease",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/smazka-protivozadirnaya-nano-grease-multipurpose-ep-nano-gold-18-kg-3137764111/",
    "source": "ozon"
  },
  {
    "name": "Универсальное трансмиссионное масло Repsol Farmer U.T.T.O 20л",
    "brand": "Repsol",
    "category": "transmission",
    "description": "Трансмиссионное масло из каталога Ozon Комплект-Моторс. Совместимость с узлом и допуски уточняются в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/universalnoe-transmissionnoe-maslo-repsol-farmer-u-t-t-o-20l-2124235143/",
    "source": "ozon"
  },
  {
    "name": "EURONOL 0W-20 Масло моторное, Синтетическое, 1 л",
    "brand": "Euronol",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/euronol-0w-20-maslo-motornoe-sinteticheskoe-1-l-2201851915/",
    "source": "ozon"
  },
  {
    "name": "EURONOL 0W-20 Масло моторное, Синтетическое, 4 л",
    "brand": "Euronol",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/euronol-0w-20-maslo-motornoe-sinteticheskoe-4-l-2201827381/",
    "source": "ozon"
  },
  {
    "name": "EURONOL 10W-40 Масло моторное, 4 л",
    "brand": "Euronol",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/euronol-10w-40-maslo-motornoe-4-l-1801801660/",
    "source": "ozon"
  },
  {
    "name": "EURONOL 10W-40 Масло моторное, Полусинтетическое, 20 л",
    "brand": "Euronol",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/euronol-10w-40-maslo-motornoe-polusinteticheskoe-20-l-1921968659/",
    "source": "ozon"
  },
  {
    "name": "EURONOL 10W-40 Масло моторное, Синтетическое, 1 л",
    "brand": "Euronol",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/euronol-10w-40-maslo-motornoe-sinteticheskoe-1-l-1801818401/",
    "source": "ozon"
  },
  {
    "name": "EURONOL 10W-40 Масло моторное, Синтетическое, 4 л",
    "brand": "Euronol",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/euronol-10w-40-maslo-motornoe-sinteticheskoe-4-l-1801723243/",
    "source": "ozon"
  },
  {
    "name": "EURONOL 5W-30 Масло моторное, Синтетическое, 1 л",
    "brand": "Euronol",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/euronol-5w-30-maslo-motornoe-sinteticheskoe-1-l-1801790386/",
    "source": "ozon"
  },
  {
    "name": "EURONOL 5W-30 Масло моторное, Синтетическое, 4 л",
    "brand": "Euronol",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/euronol-5w-30-maslo-motornoe-sinteticheskoe-4-l-1801773211/",
    "source": "ozon"
  },
  {
    "name": "EURONOL 5W-40 Масло моторное, Синтетическое, 1 л",
    "brand": "Euronol",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/euronol-5w-40-maslo-motornoe-sinteticheskoe-1-l-1801739578/",
    "source": "ozon"
  },
  {
    "name": "EURONOL 5W-40 Масло моторное, Синтетическое, 4 л",
    "brand": "Euronol",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/euronol-5w-40-maslo-motornoe-sinteticheskoe-4-l-1801717482/",
    "source": "ozon"
  },
  {
    "name": "EURONOL euronol drive formula 5W-30 Масло моторное, Полусинтетическое, 20 л",
    "brand": "Euronol",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/products/yandex/euronol-drive-formula-5w30.png",
    "ozonUrl": "https://www.ozon.ru/product/euronol-euronol-drive-formula-5w-30-maslo-motornoe-polusinteticheskoe-20-l-1498059460/",
    "source": "ozon"
  },
  {
    "name": "luxe Luxe 10W-40 Масло моторное, Полусинтетическое, 20 л",
    "brand": "Luxe",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/luxe-luxe-10w-40-maslo-motornoe-polusinteticheskoe-20-l-3195275982/",
    "source": "ozon"
  },
  {
    "name": "Repsol 0W-20 Масло моторное, Синтетическое, 1 л",
    "brand": "Repsol",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/repsol-0w-20-maslo-motornoe-sinteticheskoe-1-l-1830645127/",
    "source": "ozon"
  },
  {
    "name": "Repsol 10W-40 Масло моторное, Полусинтетическое, 1 л",
    "brand": "Repsol",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/repsol-10w-40-maslo-motornoe-polusinteticheskoe-1-l-1833065224/",
    "source": "ozon"
  },
  {
    "name": "Repsol 10W-40 Масло моторное, Полусинтетическое, 4 л",
    "brand": "Repsol",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/repsol-10w-40-maslo-motornoe-polusinteticheskoe-4-l-1833042295/",
    "source": "ozon"
  },
  {
    "name": "Repsol 10W-40 Масло моторное, Синтетическое, 1 л",
    "brand": "Repsol",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/repsol-10w-40-maslo-motornoe-sinteticheskoe-1-l-4138139071/",
    "source": "ozon"
  },
  {
    "name": "Repsol 10W-40 Масло моторное, Синтетическое, 4 л",
    "brand": "Repsol",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/repsol-10w-40-maslo-motornoe-sinteticheskoe-4-l-1736486614/",
    "source": "ozon"
  },
  {
    "name": "Repsol 5W-30 Масло моторное, Синтетическое, 1 л",
    "brand": "Repsol",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/repsol-5w-30-maslo-motornoe-sinteticheskoe-1-l-1631225286/",
    "source": "ozon"
  },
  {
    "name": "Repsol 5W-30 Масло моторное, Синтетическое, 20 л",
    "brand": "Repsol",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/repsol-5w-30-maslo-motornoe-sinteticheskoe-20-l-2202103395/",
    "source": "ozon"
  },
  {
    "name": "Repsol 5W-30 Масло моторное, Синтетическое, 4 л",
    "brand": "Repsol",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/repsol-5w-30-maslo-motornoe-sinteticheskoe-4-l-1630453629/",
    "source": "ozon"
  },
  {
    "name": "Repsol моторное дизельное 10W-30 Масло моторное, Синтетическое, 20 л",
    "brand": "Repsol",
    "category": "diesel",
    "description": "Товар из каталога Ozon Комплект-Моторс для коммерческого транспорта и дизельной техники. Подробные характеристики уточняются в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/repsol-motornoe-dizelnoe-10w-30-maslo-motornoe-sinteticheskoe-20-l-1849074368/",
    "source": "ozon"
  },
  {
    "name": "Repsol моторное дизельное 10W-40 Масло моторное, НС-синтетическое, 20 л",
    "brand": "Repsol",
    "category": "diesel",
    "description": "Товар из каталога Ozon Комплект-Моторс для коммерческого транспорта и дизельной техники. Подробные характеристики уточняются в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/repsol-motornoe-dizelnoe-10w-40-maslo-motornoe-ns-sinteticheskoe-20-l-1498059441/",
    "source": "ozon"
  },
  {
    "name": "Repsol моторное дизельное 10W-40 Масло моторное, Синтетическое, 20 л",
    "brand": "Repsol",
    "category": "diesel",
    "description": "Товар из каталога Ozon Комплект-Моторс для коммерческого транспорта и дизельной техники. Подробные характеристики уточняются в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/repsol-motornoe-dizelnoe-10w-40-maslo-motornoe-sinteticheskoe-20-l-2014180183/",
    "source": "ozon"
  },
  {
    "name": "Repsol моторное дизельное 15W-40 Масло моторное, Минеральное, 20 л",
    "brand": "Repsol",
    "category": "diesel",
    "description": "Товар из каталога Ozon Комплект-Моторс для коммерческого транспорта и дизельной техники. Подробные характеристики уточняются в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/repsol-motornoe-dizelnoe-15w-40-maslo-motornoe-mineralnoe-20-l-1498059434/",
    "source": "ozon"
  },
  {
    "name": "Repsol моторное дизельное 5W-30 Масло моторное, Синтетическое, 20 л",
    "brand": "Repsol",
    "category": "diesel",
    "description": "Товар из каталога Ozon Комплект-Моторс для коммерческого транспорта и дизельной техники. Подробные характеристики уточняются в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/repsol-motornoe-dizelnoe-5w-30-maslo-motornoe-sinteticheskoe-20-l-1498059200/",
    "source": "ozon"
  },
  {
    "name": "Repsol репсол легковое 5W-30 Масло моторное, Синтетическое, 1 л",
    "brand": "Repsol",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/repsol-repsol-legkovoe-5w-30-maslo-motornoe-sinteticheskoe-1-l-4191904101/",
    "source": "ozon"
  },
  {
    "name": "Repsol репсол легковое 5W-30 Масло моторное, Синтетическое, 20 л",
    "brand": "Repsol",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/repsol-repsol-legkovoe-5w-30-maslo-motornoe-sinteticheskoe-20-l-3501682119/",
    "source": "ozon"
  },
  {
    "name": "Repsol репсол легковое 5W-30 Масло моторное, Синтетическое, 4 л",
    "brand": "Repsol",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/repsol-repsol-legkovoe-5w-30-maslo-motornoe-sinteticheskoe-4-l-2621534631/",
    "source": "ozon"
  },
  {
    "name": "Repsol репсол легковое 5W-40 Масло моторное, Синтетическое, 1 л",
    "brand": "Repsol",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/repsol-repsol-legkovoe-5w-40-maslo-motornoe-sinteticheskoe-1-l-4191916385/",
    "source": "ozon"
  },
  {
    "name": "Repsol репсол легковое 5W-40 Масло моторное, Синтетическое, 4 л",
    "brand": "Repsol",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/repsol-repsol-legkovoe-5w-40-maslo-motornoe-sinteticheskoe-4-l-1554410208/",
    "source": "ozon"
  },
  {
    "name": "Repsol leader neo 5W-20 Масло моторное, Синтетическое, 1 л",
    "brand": "Repsol",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/products/yandex/leader-neo-5w-20-1.png",
    "ozonUrl": "https://www.ozon.ru/product/repsol-leader-neo-5w-20-maslo-motornoe-sinteticheskoe-1-l-1550238321/",
    "source": "ozon"
  },
  {
    "name": "Repsol leader neo 5W-20 Масло моторное, Синтетическое, 4 л",
    "brand": "Repsol",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/products/yandex/leader-neo-5w-20-1.png",
    "ozonUrl": "https://www.ozon.ru/product/repsol-leader-neo-5w-20-maslo-motornoe-sinteticheskoe-4-l-1498059419/",
    "source": "ozon"
  },
  {
    "name": "Repsol repsol elite 0W-30 Масло моторное, Синтетическое, 1 л",
    "brand": "Repsol",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/products/yandex/elite-evolution-v-0w-30.png",
    "ozonUrl": "https://www.ozon.ru/product/repsol-repsol-elite-0w-30-maslo-motornoe-sinteticheskoe-1-l-1598000646/",
    "source": "ozon"
  },
  {
    "name": "Repsol repsol elite 10W-40 Масло моторное, Синтетическое, 20 л",
    "brand": "Repsol",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/products/yandex/elite-injection-10w40.png",
    "ozonUrl": "https://www.ozon.ru/product/repsol-repsol-elite-10w-40-maslo-motornoe-sinteticheskoe-20-l-1546226190/",
    "source": "ozon"
  },
  {
    "name": "Repsol repsol elite 5W-30 Масло моторное, Синтетическое, 1 л",
    "brand": "Repsol",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/products/yandex/elite-evolution-c2-5w-30-1.png",
    "ozonUrl": "https://www.ozon.ru/product/repsol-repsol-elite-5w-30-maslo-motornoe-sinteticheskoe-1-l-1547888114/",
    "source": "ozon"
  },
  {
    "name": "Repsol repsol elite 5W-30 Масло моторное, Синтетическое, 20 л",
    "brand": "Repsol",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/products/yandex/elite-evolution-c2-5w-30-1.png",
    "ozonUrl": "https://www.ozon.ru/product/repsol-repsol-elite-5w-30-maslo-motornoe-sinteticheskoe-20-l-1547897137/",
    "source": "ozon"
  },
  {
    "name": "Repsol repsol elite 5W-30 Масло моторное, Синтетическое, 4 л",
    "brand": "Repsol",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/products/yandex/elite-evolution-c2-5w-30-1.png",
    "ozonUrl": "https://www.ozon.ru/product/repsol-repsol-elite-5w-30-maslo-motornoe-sinteticheskoe-4-l-1498059237/",
    "source": "ozon"
  },
  {
    "name": "Repsol repsol elite 5W-40 Масло моторное, НС-синтетическое, 1 л",
    "brand": "Repsol",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/products/yandex/elite-competicion-5w-40-1.png",
    "ozonUrl": "https://www.ozon.ru/product/repsol-repsol-elite-5w-40-maslo-motornoe-ns-sinteticheskoe-1-l-1498059486/",
    "source": "ozon"
  },
  {
    "name": "Repsol repsol elite 5W-40 Масло моторное, Синтетическое, 1 л",
    "brand": "Repsol",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/products/yandex/elite-competicion-5w-40-1.png",
    "ozonUrl": "https://www.ozon.ru/product/repsol-repsol-elite-5w-40-maslo-motornoe-sinteticheskoe-1-l-1554419581/",
    "source": "ozon"
  },
  {
    "name": "Repsol repsol elite 5W-40 Масло моторное, Синтетическое, 4 л",
    "brand": "Repsol",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/products/yandex/elite-competicion-5w-40-1.png",
    "ozonUrl": "https://www.ozon.ru/product/repsol-repsol-elite-5w-40-maslo-motornoe-sinteticheskoe-4-l-1498059343/",
    "source": "ozon"
  },
  {
    "name": "Spectrol PREMIUM 0W-20 Масло моторное, Синтетическое, 4 л",
    "brand": "Spectrol Premium",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/spectrol-premium-0w-20-maslo-motornoe-sinteticheskoe-4-l-3563640991/",
    "source": "ozon"
  },
  {
    "name": "Spectrol PREMIUM 0W-30 Масло моторное, Синтетическое, 1 л",
    "brand": "Spectrol Premium",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/spectrol-premium-0w-30-maslo-motornoe-sinteticheskoe-1-l-4191986269/",
    "source": "ozon"
  },
  {
    "name": "Spectrol PREMIUM 0W-30 Масло моторное, Синтетическое, 4 л",
    "brand": "Spectrol Premium",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/spectrol-premium-0w-30-maslo-motornoe-sinteticheskoe-4-l-4191803654/",
    "source": "ozon"
  },
  {
    "name": "Spectrol PREMIUM 10W-40 Масло моторное, Синтетическое, 20.00 л",
    "brand": "Spectrol Premium",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/spectrol-premium-10w-40-maslo-motornoe-sinteticheskoe-20-00-l-3584227099/",
    "source": "ozon"
  },
  {
    "name": "Spectrol PREMIUM спектрол грузовое 10W-40 Масло моторное, Полусинтетическое, 20 л",
    "brand": "Spectrol Premium",
    "category": "diesel",
    "description": "Товар из каталога Ozon Комплект-Моторс для коммерческого транспорта и дизельной техники. Подробные характеристики уточняются в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/spectrol-premium-spektrol-gruzovoe-10w-40-maslo-motornoe-polusinteticheskoe-20-l-3589406780/",
    "source": "ozon"
  },
  {
    "name": "Spectrol PREMIUM спектрол грузовое 15W-40 Масло моторное, Полусинтетическое, 20 л",
    "brand": "Spectrol Premium",
    "category": "diesel",
    "description": "Товар из каталога Ozon Комплект-Моторс для коммерческого транспорта и дизельной техники. Подробные характеристики уточняются в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/spectrol-premium-spektrol-gruzovoe-15w-40-maslo-motornoe-polusinteticheskoe-20-l-3589508738/",
    "source": "ozon"
  },
  {
    "name": "Spectrol PREMIUM спектрол грузовое 5W-30 Масло моторное, Синтетическое, 20 л",
    "brand": "Spectrol Premium",
    "category": "diesel",
    "description": "Товар из каталога Ozon Комплект-Моторс для коммерческого транспорта и дизельной техники. Подробные характеристики уточняются в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/spectrol-premium-spektrol-gruzovoe-5w-30-maslo-motornoe-sinteticheskoe-20-l-3584225683/",
    "source": "ozon"
  },
  {
    "name": "Spectrol PREMIUM спектрол грузовое 5W-40 Масло моторное, Полусинтетическое, 20 л",
    "brand": "Spectrol Premium",
    "category": "diesel",
    "description": "Товар из каталога Ozon Комплект-Моторс для коммерческого транспорта и дизельной техники. Подробные характеристики уточняются в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/spectrol-premium-spektrol-gruzovoe-5w-40-maslo-motornoe-polusinteticheskoe-20-l-3589267213/",
    "source": "ozon"
  },
  {
    "name": "Spectrol PREMIUM Спектрол легковое 0W-20 Масло моторное, Синтетическое, 1 л",
    "brand": "Spectrol Premium",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/spectrol-premium-spektrol-legkovoe-0w-20-maslo-motornoe-sinteticheskoe-1-l-3578804677/",
    "source": "ozon"
  },
  {
    "name": "Spectrol PREMIUM Спектрол легковое 0W-20 Масло моторное, Синтетическое, 4 л",
    "brand": "Spectrol Premium",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/spectrol-premium-spektrol-legkovoe-0w-20-maslo-motornoe-sinteticheskoe-4-l-3594448480/",
    "source": "ozon"
  },
  {
    "name": "Spectrol PREMIUM Спектрол легковое 10W-40 Масло моторное, 4 л",
    "brand": "Spectrol Premium",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/spectrol-premium-spektrol-legkovoe-10w-40-maslo-motornoe-4-l-3700008675/",
    "source": "ozon"
  },
  {
    "name": "Spectrol PREMIUM Спектрол легковое 10W-40 Масло моторное, Синтетическое, 1 л",
    "brand": "Spectrol Premium",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/spectrol-premium-spektrol-legkovoe-10w-40-maslo-motornoe-sinteticheskoe-1-l-3700060037/",
    "source": "ozon"
  },
  {
    "name": "Spectrol PREMIUM Спектрол легковое 5W-30 Масло моторное, Синтетическое, 1 л",
    "brand": "Spectrol Premium",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/spectrol-premium-spektrol-legkovoe-5w-30-maslo-motornoe-sinteticheskoe-1-l-3626088593/",
    "source": "ozon"
  },
  {
    "name": "Spectrol PREMIUM Спектрол легковое 5W-30 Масло моторное, Синтетическое, 4 л",
    "brand": "Spectrol Premium",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/spectrol-premium-spektrol-legkovoe-5w-30-maslo-motornoe-sinteticheskoe-4-l-3626196261/",
    "source": "ozon"
  },
  {
    "name": "Spectrol PREMIUM Спектрол легковое 5W-40 Масло моторное, Синтетическое, 1 л",
    "brand": "Spectrol Premium",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/spectrol-premium-spektrol-legkovoe-5w-40-maslo-motornoe-sinteticheskoe-1-l-3618222085/",
    "source": "ozon"
  },
  {
    "name": "Spectrol PREMIUM Спектрол легковое 5W-40 Масло моторное, Синтетическое, 4 л",
    "brand": "Spectrol Premium",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/spectrol-premium-spektrol-legkovoe-5w-40-maslo-motornoe-sinteticheskoe-4-l-3618315194/",
    "source": "ozon"
  },
  {
    "name": "Spectrol PREMIUM Спектрол легковое 5W-50 Масло моторное, Синтетическое, 1 л",
    "brand": "Spectrol Premium",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/spectrol-premium-spektrol-legkovoe-5w-50-maslo-motornoe-sinteticheskoe-1-l-3579153753/",
    "source": "ozon"
  },
  {
    "name": "Spectrol PREMIUM Спектрол легковое 5W-50 Масло моторное, Синтетическое, 4 л",
    "brand": "Spectrol Premium",
    "category": "elite",
    "description": "Товар из каталога Ozon Комплект-Моторс для легкового транспорта. Подробные характеристики и применимость указаны в карточке Ozon.",
    "image": "assets/product-placeholder.svg",
    "ozonUrl": "https://www.ozon.ru/product/spectrol-premium-spektrol-legkovoe-5w-50-maslo-motornoe-sinteticheskoe-4-l-3579010773/",
    "source": "ozon"
  }
];

function normalizeProductName(value) {
  return String(value)
    .toLowerCase()
    .replace(/ё/g, "е")
    .replace(/[^\p{L}0-9]+/gu, " ")
    .replace(/\b(repsol)\b/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function productMatchScore(base, candidate) {
  const a = new Set(normalizeProductName(base.name).split(" ").filter((token) => token.length > 2));
  const b = new Set(normalizeProductName(candidate.name).split(" ").filter((token) => token.length > 2));
  if (!a.size || !b.size) return 0;
  let common = 0;
  a.forEach((token) => { if (b.has(token)) common += 1; });
  const volumeA = inferPackage(base.name).toLowerCase();
  const volumeB = inferPackage(candidate.name).toLowerCase();
  const volumeBonus = volumeA !== "фасовка по запросу" && volumeA === volumeB ? 1.5 : 0;
  return common / Math.max(a.size, b.size) + volumeBonus;
}

function mergeOzonCatalog() {
  ozonCatalogProducts.forEach((ozonProduct) => {
    let bestProduct = null;
    let bestScore = 0;
    products.forEach((product) => {
      if (product.brand !== ozonProduct.brand) return;
      const score = productMatchScore(product, ozonProduct);
      if (score > bestScore) {
        bestScore = score;
        bestProduct = product;
      }
    });

    if (bestProduct && bestScore >= 1.02) {
      bestProduct.ozonUrl = bestProduct.ozonUrl || ozonProduct.ozonUrl;
      bestProduct.ozonName = ozonProduct.name;
      return;
    }

    products.push({ ...ozonProduct });
  });
}

mergeOzonCatalog();

let activeBrand = brands[0];
let activeType = "all";

const tabRoot = document.querySelector("#brandTabs");
const typeRoot = document.querySelector("#typeTabs");
const productGrid = document.querySelector("#productGrid");
const productCount = document.querySelector("#productCount");
const searchInput = document.querySelector("#searchInput");
const certGrid = document.querySelector("#certGrid");

function renderCertificates() {
  certGrid.innerHTML = brands.map((brand, index) => `
    <article class="cert-card reveal-item" role="button" tabindex="0" data-cert-brand="${brand}" data-reveal-index="${index}" aria-label="Открыть сертификаты ${brand}">
      <span class="cert-brand">${brand}</span>
      <h3>${brand}</h3>
      <p>Открыть сертификаты, паспорта качества, декларации и подтверждающие материалы бренда.</p>
      <button class="cert-button" type="button" data-cert-brand="${brand}">Смотреть документы</button>
    </article>
  `).join("");
  applyReveal(certGrid);
}

function renderTabs() {
  tabRoot.innerHTML = brands.map((brand, index) => `
    <button class="tab" role="tab" aria-selected="${brand === activeBrand}" data-brand="${brand}" data-reveal-index="${index}">
      ${brand}
    </button>
  `).join("");
}

function renderTypeTabs() {
  typeRoot.innerHTML = Object.entries(categoryLabels).map(([type, label], index) => `
    <button class="tab type-tab" role="tab" aria-selected="${type === activeType}" data-type="${type}" data-reveal-index="${index}">
      ${label}
    </button>
  `).join("");
}

function renderProducts() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = products.filter((product) => {
    const inBrand = product.brand === activeBrand;
    const inType = activeType === "all" || product.category === activeType;
    const inSearch = !query || `${product.name} ${product.description} ${product.ozonName || ""} ${categoryLabels[product.category]}`.toLowerCase().includes(query);
    return inBrand && inType && inSearch;
  });

  searchInput.disabled = false;
  searchInput.placeholder = `Поиск по товарам ${activeBrand}`;
  productCount.textContent = `${filtered.length} позиций · ${categoryLabels[activeType]}`;

  if (filtered.length === 0) {
    productGrid.innerHTML = `
      <div class="empty-state reveal-item">
        <h3>${activeBrand}</h3>
        <p>В выбранном типе пока нет товаров. Попробуйте другой тип смазочного материала или очистите поиск.</p>
      </div>
    `;
    applyReveal(productGrid);
    return;
  }

  productGrid.innerHTML = filtered.map((product, index) => `
    <article class="product-card reveal-item" tabindex="0" role="button" data-product-id="${products.indexOf(product)}" data-reveal-index="${index}" aria-label="Подробнее: ${product.name}">
      <figure>
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </figure>
      <div class="product-info">
        <span class="tag">${categoryLabels[product.category] || "Смазочные материалы"}</span>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="product-actions">
          <button class="product-more" type="button" data-product-id="${products.indexOf(product)}">Подробнее</button>
          ${product.ozonUrl ? `<a class="ozon-button" href="${product.ozonUrl}" target="_blank" rel="noreferrer">Ozon</a>` : ""}
        </div>
      </div>
    </article>
  `).join("");
  applyReveal(productGrid);
}

function inferViscosity(name) {
  const match = name.match(/\b\d{1,2}W-?\d{2}\b|\bISO\s?VG\s?\d+\b|\b(HVLP|HLP|VDL)\s?\d+\b|\bTO-4\s?\d+W?\b|\b\d{2,3}W\d{2,3}\b/i);
  return match ? match[0].replace("W", "W-").replace("W--", "W-").toUpperCase() : "Уточняется по паспорту продукта";
}

function inferPackage(name) {
  const match = name.match(/\b\d+(?:[.,]\d+)?\s?(?:л|литр|литра|литров)\b/i);
  return match ? match[0].replace(/\s+/g, " ") : "Фасовка по запросу";
}

function productSpecificSpecs(product) {
  const name = product.name.toUpperCase();
  if (name.includes("50700") || name.includes("50400")) return ["VW 504.00 / 507.00", "ACEA C3", "Для современных двигателей с увеличенными интервалами обслуживания"];
  if (name.includes("MASTER ECO F")) return ["ACEA C2", "FORD WSS-M2C950-A", "Подходит для двигателей Ford, требующих данную спецификацию"];
  if (name.includes("LEADER NEO")) return ["API SN-RC", "ILSAC GF-5", "Энергосберегающая линейка для бензиновых двигателей"];
  if (name.includes("A5/B5")) return ["ACEA A5/B5", "Для двигателей, где требуется сниженная HTHS-вязкость", "Совместимость проверяется по руководству автомобиля"];
  if (name.includes("A3/B4")) return ["ACEA A3/B4", "API SN/CF по линейке", "Для бензиновых и дизельных двигателей без DPF"];
  if (name.includes("C3")) return ["ACEA C3", "Mid SAPS", "Для систем нейтрализации выхлопа при наличии допуска производителя"];
  if (name.includes("C2")) return ["ACEA C2", "Fuel Economy", "Для двигателей с требованиями к малозольным маслам"];
  if (name.includes("MATIC VI")) return ["GM Dexron VI", "Ford Mercon LV", "JASO 1A"];
  if (name.includes("MATIC DCT")) return ["DCT / DSG", "Для роботизированных трансмиссий с двойным сцеплением", "Допуски уточняются по модели КПП"];
  if (name.includes("MATIC CVT")) return ["CVT", "Для вариаторных трансмиссий", "Совместимость уточняется по модели трансмиссии"];
  if (name.includes("CARTAGO")) return ["API GL-4 / GL-5 по конкретной позиции", "EP-присадки", "Для коробок передач, мостов и дифференциалов"];
  if (name.includes("TELEX") || name.includes("HIDROLEO")) return ["DIN 51524 HLP / HVLP", "ISO VG по вязкости продукта", "Противоизносная гидравлическая линейка"];
  if (name.includes("MERAK")) return ["DIN 51506 VDL", "ISO VG 46", "Компрессорное масло для воздушных компрессоров"];
  if (name.includes("ANTICONGELANTE")) return ["Концентрат на основе этиленгликоля", "OAT/органическая технология для Organic-позиции", "Разбавление водой по требуемой температуре замерзания"];
  return [];
}
function getProductDetails(product) {
  const details = categoryDetails[product.category] || categoryDetails.elite;
  const specific = productSpecificSpecs(product);
  return {
    use: details.use,
    benefits: details.benefits,
    specs: specific.length ? specific : details.specs,
    viscosity: inferViscosity(product.name),
    packageSize: inferPackage(product.name)
  };
}

function openProduct(productId) {
  const product = products[Number(productId)];
  if (!product) return;

  const category = categoryLabels[product.category] || "Смазочные материалы";
  const details = getProductDetails(product);
  const listItems = (items) => items.map((item) => `<li>${item}</li>`).join("");

  document.querySelector("#productDialogImage").src = product.image;
  document.querySelector("#productDialogImage").alt = product.name;
  document.querySelector("#productDialogBrand").textContent = product.brand;
  document.querySelector("#productDialogTitle").textContent = product.name;
  document.querySelector("#productDialogCategory").textContent = category;
  document.querySelector("#productDialogDescription").textContent = product.description;
  document.querySelector("#productDialogViscosity").textContent = details.viscosity;
  document.querySelector("#productDialogPackage").textContent = `${details.packageSize}. Возможна продажа на разлив по запросу.`;
  document.querySelector("#productDialogUse").textContent = details.use;
  document.querySelector("#productDialogSpecs").innerHTML = listItems(details.specs);
  document.querySelector("#productDialogBenefits").innerHTML = listItems(details.benefits);

  const ozonLink = document.querySelector("#productDialogOzon");
  if (product.ozonUrl) {
    ozonLink.href = product.ozonUrl;
    ozonLink.classList.add("is-visible");
  } else {
    ozonLink.removeAttribute("href");
    ozonLink.classList.remove("is-visible");
  }

  lockPageScroll();
  productDialog.showModal();
}
function openCertificates(brand) {
  const docs = brandCertificates[brand] || [];
  const certWindow = window.open("", "_blank");
  if (!certWindow) return;

  const safe = (value) => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

  certWindow.document.write(`
    <!doctype html>
    <html lang="ru">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Сертификаты ${safe(brand)} | Комплект-Моторс</title>
      <style>
        :root { --ink:#111; --muted:#666; --line:#e2e2e2; --red:#e1251b; --gold:#c79222; --radius:18px; }
        * { box-sizing:border-box; }
        body { margin:0; color:var(--ink); background:#f7f7f7; font-family:Arial,"Helvetica Neue",sans-serif; }
        header { display:flex; align-items:center; justify-content:space-between; gap:20px; padding:18px clamp(18px,4vw,56px); color:var(--ink); background:#fff; border-bottom:1px solid var(--line); box-shadow:0 10px 30px rgba(0,0,0,.05); }
        .brand { font-size:13px; font-weight:900; letter-spacing:.1em; text-transform:uppercase; }
        main { max-width:1120px; margin:42px auto; padding:0 clamp(18px,4vw,34px); }
        .hero { padding:34px; color:var(--ink); border:1px solid var(--line); border-radius:var(--radius); background:#fff; box-shadow:0 16px 38px rgba(0,0,0,.06); }
        .eyebrow { margin:0 0 12px; color:var(--gold); font-size:11px; font-weight:900; letter-spacing:.14em; text-transform:uppercase; }
        h1 { margin:0; font-size:clamp(30px,5vw,54px); letter-spacing:.06em; text-transform:uppercase; }
        .grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:18px; margin-top:24px; }
        article { display:grid; align-content:start; min-height:220px; padding:24px; border:1px solid var(--line); border-radius:var(--radius); background:#fff; box-shadow:0 14px 34px rgba(0,0,0,.06); }
        .type { margin-bottom:14px; color:var(--red); font-size:11px; font-weight:900; letter-spacing:.1em; text-transform:uppercase; }
        h2 { margin:0 0 12px; font-size:18px; line-height:1.35; }
        p { margin:0 0 20px; color:var(--muted); line-height:1.65; }
        a, button { min-height:44px; display:inline-flex; align-items:center; justify-content:center; padding:12px 18px; border-radius:12px; font-weight:900; text-decoration:none; }
        a { margin-top:auto; color:#fff; background:var(--red); }
        .disabled { margin-top:auto; color:#777; border:1px solid var(--line); background:#f5f5f5; }
        button { color:var(--ink); border:1px solid var(--line); background:#fff; cursor:pointer; }
        @media (max-width:820px) { .grid { grid-template-columns:1fr; } main { margin:0 auto; padding:18px; } }
      </style>
    </head>
    <body>
      <header>
        <div class="brand">Комплект-Моторс</div>
        <button onclick="window.close()">Закрыть вкладку</button>
      </header>
      <main>
        <section class="hero">
          <p class="eyebrow">Сертификаты и документы</p>
          <h1>${safe(brand)}</h1>
        </section>
        <section class="grid">
          ${docs.map((doc) => `
            <article>
              <span class="type">${safe(doc.type)}</span>
              <h2>${safe(doc.title)}</h2>
              <p>${safe(doc.note)}</p>
              ${doc.url ? `<a href="${safe(doc.url)}" target="_blank" rel="noreferrer">Открыть документ</a>` : `<span class="disabled">Документ по запросу</span>`}
            </article>
          `).join("")}
        </section>
      </main>
    </body>
    </html>
  `);
  certWindow.document.close();
}

productGrid.addEventListener("click", (event) => {
  if (event.target.closest("a")) return;
  const target = event.target.closest("[data-product-id]");
  if (!target) return;
  openProduct(target.dataset.productId);
});

certGrid.addEventListener("click", (event) => {
  const target = event.target.closest("[data-cert-brand]");
  if (!target) return;
  openCertificates(target.dataset.certBrand);
});

certGrid.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest(".cert-card[data-cert-brand]");
  if (!card) return;
  event.preventDefault();
  openCertificates(card.dataset.certBrand);
});

productGrid.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest(".product-card[data-product-id]");
  if (!card) return;
  event.preventDefault();
  openProduct(card.dataset.productId);
});

tabRoot.addEventListener("click", (event) => {
  const button = event.target.closest("[data-brand]");
  if (!button) return;
  activeBrand = button.dataset.brand;
  activeType = "all";
  if (activeBrand !== "Repsol") searchInput.value = "";
  renderTabs();
  renderTypeTabs();
  renderProducts();
});

typeRoot.addEventListener("click", (event) => {
  const button = event.target.closest("[data-type]");
  if (!button) return;
  activeType = button.dataset.type;
  renderTypeTabs();
  renderProducts();
});

searchInput.addEventListener("input", renderProducts);

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    const headerOffset = document.querySelector(".site-header")?.offsetHeight || 0;
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset - 18;
    window.scrollTo({ top, behavior: "smooth" });
    history.replaceState(null, "", link.getAttribute("href"));
  });
});

const dialog = document.querySelector("#feedbackDialog");
const form = document.querySelector("#feedbackForm");
const note = document.querySelector("#formNote");
const productDialog = document.querySelector("#productDialog");
let revealObserver = null;
const revealEnabled = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (revealEnabled) document.body.classList.add("reveal-ready");

function lockPageScroll() {
  document.body.classList.add("modal-locked");
}

function unlockPageScroll() {
  document.body.classList.remove("modal-locked");
}

function applyReveal(root = document) {
  const items = [...root.querySelectorAll(".reveal, .reveal-item:not(.is-visible)")];
  if (!items.length) return;

  if (!revealEnabled) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  items.forEach((item, index) => {
    const cardIndex = Number(item.dataset.revealIndex);
    const isProductCard = Boolean(item.closest(".product-grid"));
    const isCertCard = Boolean(item.closest(".cert-grid"));
    const delayIndex = Number.isFinite(cardIndex)
      ? (isProductCard ? cardIndex % 4 : (isCertCard ? cardIndex % 5 : Math.min(cardIndex, 12)))
      : Math.min(index, 5);
    item.style.setProperty("--reveal-delay", `${delayIndex * 65}ms`);
  });

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.05, rootMargin: "0px 0px -6% 0px" });
  }

  items.forEach((item) => revealObserver.observe(item));
  window.requestAnimationFrame(() => {
    items.forEach((item) => {
      const rect = item.getBoundingClientRect();
      if (rect.top > window.innerHeight * 0.94) return;
      item.classList.add("is-visible");
      revealObserver.unobserve(item);
    });
  });
}

document.querySelectorAll("[data-open-feedback]").forEach((button) => {
  button.addEventListener("click", () => {
    if (productDialog?.open) productDialog.close();
    note.textContent = "";
    dialog.showModal();
  });
});

document.querySelector("#productDialogClose").addEventListener("click", () => {
  productDialog.close();
});

document.querySelector("#productDialogBack").addEventListener("click", () => {
  productDialog.close();
});

productDialog.addEventListener("click", (event) => {
  if (event.target !== productDialog) return;
  productDialog.close();
});

productDialog.addEventListener("close", unlockPageScroll);

form.addEventListener("submit", (event) => {
  const submitter = event.submitter;
  if (submitter && submitter.value === "cancel") return;
  event.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent("Заявка с сайта Комплект-Моторс");
  const body = encodeURIComponent(`Имя: ${data.get("name")}\nКонтакт: ${data.get("contact")}\nЗаявка: ${data.get("message") || "Не указано"}`);
  note.textContent = "Откроется почтовый клиент для отправки заявки.";
  window.location.href = `mailto:komplekt-motors@mail.ru?subject=${subject}&body=${body}`;
});

renderCertificates();
renderTabs();
renderTypeTabs();
renderProducts();
applyReveal();

if (window.location.hash) {
  window.setTimeout(() => {
    const target = document.querySelector(window.location.hash);
    if (!target) return;
    const headerOffset = document.querySelector(".site-header")?.offsetHeight || 0;
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset - 18;
    window.scrollTo({ top, behavior: "auto" });
  }, 120);
}
