/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("bike_components").del();

  const componentSeed = [
    {
      id: 1,
      crankset: "Stout 1x, forged alloy",
      fork: "RockShox Judy, Solo Air",
      chain: "KMC X12EPT, 12-speed",
      shifter: "Shimano Deore M6100, 12-speed",
      handlebar: "Specialized alloy handlebar",
      derailleur: "Shimano Deore M6100",
      pedals: "Specialized platform",
      brakes: "Shimano BR-MT200 hydraulic disc",
      tires: "Ground Control 29x2.35",
      frame: "Specialized A1 premium alloy",
      wheel: "Specialized Alloy Tubeless Ready",
      saddle: "Bridge Sport",
      cassette: "Sunrace 11-51t, 12spd",
      stem: "Stout 3D-forged alloy",
    },
    {
      id: 2,
      crankset: "Shimano 105 R7100, 50/34",
      fork: "Madone Gen 8 full carbon",
      chain: "Shimano SLX M7100, 12 speed",
      shifter: "Shimano 105 R7170 Di2",
      handlebar: "Bontrager Comp alloy",
      derailleur: "Shimano 105 R7150 Di2",
      pedals: "Not included",
      brakes: "Shimano 105 hydraulic disc",
      tires: "Bontrager R3 Hard-Case Lite",
      frame: "500 Series OCLV Carbon",
      wheel: "Bontrager Aeolus Elite 35",
      saddle: "Bontrager Aeolus Comp",
      cassette: "Shimano 105 7101, 11-34",
      stem: "Trek RCS Pro",
    },
    {
      id: 3,
      crankset: "32T narrow-wide chainring",
      fork: "XCM30 aluminum suspension fork",
      chain: "Wal-Mart Chain",
      shifter: "Shimano 8-Speed",
      handlebar: "31.8mm alloy handlebar",
      derailleur: "Shimano Altus",
      pedals: "Cheapo Pedals",
      brakes: "Mechanical disc",
      tires: "Kenda 27.5 x 2.35",
      frame: "Aluminum alloy frame",
      wheel: "27.5in double-wall alloy rims",
      saddle: "Wal-Mart Saddle",
      cassette: "Shimano CS-HG200",
      stem: "60mm",
    },
  ];

  const componentData = [...componentSeed];

  const cranksets = [
    "Shimano Deore 32T",
    "SRAM NX Eagle",
    "Race Face Ride",
    "MicroSHIFT Sword",
    "Generic Alloy Crankset",
  ];

  const forks = [
    "RockShox Judy",
    "Fox 34 Rhythm",
    "SR Suntour XCM",
    "Rigid Carbon Fork",
    "Aluminum Gravel Fork",
  ];

  const chains = [
    "Shimano HG601",
    "SRAM PC-1110",
    "KMC X11",
    "KMC X12",
    "Generic 9-Speed Chain",
  ];

  const shifters = [
    "Shimano Deore",
    "SRAM GX Eagle",
    "MicroSHIFT Advent",
    "Shimano Tiagra",
    "SRAM Apex",
  ];

  const handlebars = [
    "Race Face Chester",
    "Bontrager Comp",
    "Specialized Alloy",
    "Easton EA50",
    "Generic Flat Bar",
  ];

  const derailleurs = [
    "Shimano Deore",
    "Shimano XT",
    "SRAM NX Eagle",
    "SRAM GX Eagle",
    "MicroSHIFT Advent X",
  ];

  const pedals = [
    "Race Face Chester",
    "Shimano SPD",
    "Crankbrothers Stamp",
    "Plastic Platform Pedals",
    "No Pedals Included",
  ];

  const brakes = [
    "Shimano MT200 Hydraulic",
    "SRAM Level",
    "Tektro Mechanical Disc",
    "Shimano Deore Hydraulic",
    "Generic Mechanical Disc",
  ];

  const tires = [
    "Maxxis Minion DHF",
    "Maxxis Rekon",
    "Continental Grand Prix 5000",
    "Schwalbe G-One",
    "Kenda Small Block Eight",
  ];

  const frames = [
    "Aluminum Alloy",
    "Carbon Fiber",
    "Chromoly Steel",
    "Titanium",
    "High-Tensile Steel",
  ];

  const wheels = [
    "DT Swiss M1900",
    "Bontrager Line Comp",
    "Mavic Aksium",
    "WTB ST i30",
    "Generic Double-Wall Alloy",
  ];

  const saddles = [
    "WTB Volt",
    "Bontrager Verse",
    "Specialized Bridge",
    "Selle Italia Model X",
    "Generic Comfort Saddle",
  ];

  const cassettes = [
    "Shimano 11-51T",
    "SRAM 10-50T",
    "Shimano 11-34T",
    "MicroSHIFT 11-48T",
    "Sunrace 11-46T",
  ];

  const stems = [
    "Race Face Ride 60mm",
    "Bontrager Elite 90mm",
    "Specialized Alloy 70mm",
    "Easton EA50 80mm",
    "Generic Alloy 60mm",
  ];

  let growThis = 4;

  for (let i = 0; i < 1000; i++) {
    componentData.push({
      id: growThis,

      crankset: cranksets[Math.floor(Math.random() * cranksets.length)],

      fork: forks[Math.floor(Math.random() * forks.length)],

      chain: chains[Math.floor(Math.random() * chains.length)],

      shifter: shifters[Math.floor(Math.random() * shifters.length)],

      handlebar: handlebars[Math.floor(Math.random() * handlebars.length)],

      derailleur: derailleurs[Math.floor(Math.random() * derailleurs.length)],

      pedals: pedals[Math.floor(Math.random() * pedals.length)],

      brakes: brakes[Math.floor(Math.random() * brakes.length)],

      tires: tires[Math.floor(Math.random() * tires.length)],

      frame: frames[Math.floor(Math.random() * frames.length)],

      wheel: wheels[Math.floor(Math.random() * wheels.length)],

      saddle: saddles[Math.floor(Math.random() * saddles.length)],

      cassette: cassettes[Math.floor(Math.random() * cassettes.length)],

      stem: stems[Math.floor(Math.random() * stems.length)],
    });

    growThis++;
  }

  await knex("bike_components").insert(componentData);
};
