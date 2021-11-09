export const reference = {
  types: [
    "FPS",
    "MMORPG",
    "Sports",
    "Racing",
    "Tower defense",
    "RTS",
    "Simulation",
    "Role-playing",
    "Adventure",
    "Survival",
    "Fighting",
    "Battle royale",
    "Rhythm",
    "Platform",
  ],
  games: [
    {
      name: "CS:GO",
      type: ["FPS"],
    },
    {
      name: "Tekken",
      type: ["Fighting"],
    },
    {
      name: "FIFA",
      type: ["Sports", "Simulation"],
    },
    {
      name: "Super Mario",
      type: ["Platform"],
    },
    {
      name: "Fortnite",
      type: ["Survival", "Battle royale"],
    },
    {
      name: "Call of Duty",
      type: ["FPS"],
    },
    {
      name: "The Sims",
      type: ["Simulation"],
    },
    {
      name: "Mortal Combat",
      type: ["Fighting"],
    },
    {
      name: "Guitar Hero",
      type: ["Rhythm"],
    },
    {
      name: "World of Warcraft",
      type: ["MMORPG"],
    },
    {
      name: "Skyrim",
      type: ["Role-playing"],
    },
    {
      name: "Starcraft",
      type: ["RTS"],
    },
    {
      name: "Warcraft",
      type: ["MMORPG", "Tower defense", "RTS"],
    },
    {
      name: "League of Legends",
      type: ["MMORPG", "Role-playing"],
    },
    {
      name: "Dota",
      type: ["RTS"],
    },
    {
      name: "Valorant",
      type: ["FPS"],
    },
    {
      name: "Left for dead",
      type: ["FPS", "Survival"],
    },
    {
      name: "Overwatch",
      type: ["FPS"],
    },
    {
      name: "PUBG",
      type: ["Battle royale"],
    },
    {
      name: "Diablo",
      type: ["Role-playing"],
    },
    {
      name: "Minecraft",
      type: ["Survival"],
    },
  ],
  areas: {
    common: ["Vision"],
    sleep: ["Sleep"],
    body: ["Hand/eye coordination", "Reaction time", "Injuries"],
    mind: ["Mindset", "Stress"],
    hearing: ["Hearing"],
    strategy: ["Tactical", "Strategy", "Leadership"],
    nutrition: ["Nutrition"],
    multitasking: ["Multi-tasking"],
    communication: ["Communication"],
    setup: ["Technology", "Physiology"],
  },
};

const userProfile = {
  game_types: [],
  games: [],
  areas: [],
  email: "",
  password: "",
};

function calculateGames(typesArray) {
  const gamesArray = [];
  typesArray.forEach((type) => {
    console.log(type);
    const result = reference.games.filter((game) => game.type.includes(type));
    console.log(result);
    result.forEach((element) => {
      gamesArray.push(element);
    });
  });
  console.log(gamesArray);
  return gamesArray;
}

// calculateGames(userProfile.game_types);

export function updateUserProfileAreas(areasChosen) {
  areasChosen.forEach((areaChosen) => {
    reference.areas[areaChosen].forEach((item) => {
      userProfile.areas.push(item);
    });
  });
  console.log(userProfile);
}

export function getUserProfile() {
  return userProfile;
}
