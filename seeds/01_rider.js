/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("rider").del();

  const riderSeed = [
    {
      id: 1,
      name: "Cliff",
      nationality: "USA",
      birthday: 19871203,
      height: 188,
      weight: 160,
    },
    {
      id: 2,
      name: "Phillip",
      nationality: "USA",
      birthday: 20210217,
      height: 121,
      weight: 160,
    },
    {
      id: 3,
      name: "Arlene",
      nationality: "USA",
      birthday: 19871203,
      height: 153,
      weight: 160,
    },
  ];

  const riderData = [...riderSeed];

  const riderNames = [
    "Jeff",
    "Matt",
    "Davy",
    "Jose",
    "James",
    "Daren",
    "Chester",
    "Kentiaus",
    "Caleb",
    "Jacob",
  ];
  const riderNations = ["USA", "NOR", "KOR", "JPN", "MEX"];
  const riderBirthdays = [19900512, 19861201, 19900214, 19650312];
  const riderHeights = [182, 200, 160, 175, 181];
  const riderWeights = [200, 180, 170, 160];

  let growThis = 4;

  for (let i = 0; i < 1000; i++) {
    riderSeed.forEach((rider) => {
      const randomName =
        riderNames[Math.floor(Math.random() * riderNames.length)];
      const randomNation =
        riderNations[Math.floor(Math.random() * riderNations.length)];
      const randomBirthday =
        riderBirthdays[Math.floor(Math.random() * riderBirthdays.length)];
      const randomHeight =
        riderHeights[Math.floor(Math.random() * riderHeights.length)];
      const randomWeight =
        riderWeights[Math.floor(Math.random() * riderWeights.length)];

      riderData.push({
        ...rider,
        id: growThis,
        name: randomName,
        nationality: randomNation,
        birthday: randomBirthday,
        height: randomHeight,
        weight: randomWeight,
      });

      growThis++;
    });
  }

  await knex("rider").insert(riderData);
};
