/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("bike_components").del();
  await knex("bike_components").insert([
    {
      id: 1,
      crankset: "Stout 1x, forged alloy",
      fork: "RockShox Judy, Solo Air, Turnkey damper, 46mm offset, QR, 80/90/100mm travel (size-specific), steel steerer",
      chain:
        "KMC X12EPT, 12-speed, anti-corrosion coating w/ reusable Missing Link",
      shifter: "Shimano Deore M6100, 12-speed",
      handlebar: "Specialized, alloy, 9-degree backsweep, 15mm rise, 31.8mm",
      derailleur: "Shimano Deore, M6100, 12spd, Shadow Plus",
      pedals: "Specialized, platform",
      brakes: "Shimano BR-MT200, hydraulic disc, 180mm",
      tires: "Ground Control, 650B/29x2.35, T5",
      frame: "Specialized A1 premium butted alloy",
      wheel: "Specialized Alloy, hookless, Tubeless ready, 25mm inner width",
      saddle: "Bridge Sport, Steel rails, 155/143mm",
      cassette: "Sunrace, 11-51t, 12spd",
      stem: "Stout 3D-forged alloy, 31.8mm, 6-degree rise",
    },
    {
      id: 2,
      crankset: "Shimano 105 R7100, 50/34",
      fork: "Madone Gen 8 full carbon",
      chain: "Shimano SLX M7100, 12 speed",
      shifter: "Shimano 105 R7170 Di2, 12 speed",
      handlebar: "Bontrager Comp alloy",
      derailleur: "Shimano 105 R7150 Di2",
      pedals: "Not included",
      brakes: "Shimano 105 hydraulic disc",
      tires: "Bontrager R3 Hard-Case Lite, 700x28mm",
      frame: "500 Series OCLV Carbon",
      wheel: "Bontrager Aeolus Elite 35 OCLV Carbon",
      saddle: "Bontrager Aeolus Comp",
      cassette: "Shimano 105 7101, 11-34, 12 speed",
      stem: "Trek RCS Pro",
    },
    {
      id: 3,
      crankset: "32T, 165mm, narrow-wide chainring",
      fork: "XCM30 aluminum suspension fork, 100mm travel",
      chain: "Wal-Mart Chain",
      shifter: "Shimano 8-Speed",
      handlebar: "31.8mm alloy, 30mm rise, 740mm width",
      derailleur: "Shimano Altus",
      pedals: "Cheapo Pedals",
      brakes: "Mechanical disc, 160mm front and rear rotors",
      tires: "Kenda 27.5 x 2.35",
      frame: "Aluminum alloy, tapered head tube",
      wheel: "27.5in double-wall alloy rims, quick-release hubs",
      saddle: "Not specified",
      cassette: "Shimano CS-HG200, 12T-32T",
      stem: "60mm",
    },
  ]);
};
