import csgo from "../images/logos/csgo_blue.svg";
import tekken from "../images/logos/tekken_blue.svg";
import fifa from "../images/logos/fifa_blue.svg";
import mario from "../images/logos/super_mario_blue.svg";
import fortnite from "../images/logos/fortnite_blue.svg";
import cod from "../images/logos/call_of_duty_blue.svg";
import sims from "../images/logos/the_sims_blue.svg";
import mortal from "../images/logos/mortal_combat_blue.svg";
import guitar from "../images/logos/guitar_hero_blue.svg";
import wow from "../images/logos/world_warcraft_blue.svg";
import skyrim from "../images/logos/skyrim_blue.svg";
import starcraft from "../images/logos/starcraft_blue.svg";
import warcraft from "../images/logos/warcraft_blue.svg";
import lol from "../images/logos/league_of_legends_blue.svg";
import dota from "../images/logos/dota_blue.svg";
import valorant from "../images/logos/valorant_blue.svg";
import left4dead from "../images/logos/left4dead_blue.svg";
import overwatch from "../images/logos/overwatch_blue.svg";
import pubg from "../images/logos/pubg_blue.svg";
import diablo from "../images/logos/diablo_blue.svg";
import minecraft from "../images/logos/minecraft.svg";

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
      imageSrc: csgo,
    },
    {
      name: "Tekken",
      type: ["Fighting"],
      imageSrc: tekken,
    },
    {
      name: "FIFA",
      type: ["Sports", "Simulation"],
      imageSrc: fifa,
    },
    {
      name: "Super Mario",
      type: ["Platform"],
      imageSrc: mario,
    },
    {
      name: "Fortnite",
      type: ["Survival", "Battle royale"],
      imageSrc: fortnite,
    },
    {
      name: "Call of Duty",
      type: ["FPS"],
      imageSrc: cod,
    },
    {
      name: "The Sims",
      type: ["Simulation"],
      imageSrc: sims,
    },
    {
      name: "Mortal Combat",
      type: ["Fighting"],
      imageSrc: mortal,
    },
    {
      name: "Guitar Hero",
      type: ["Rhythm"],
      imageSrc: guitar,
    },
    {
      name: "World of Warcraft",
      type: ["MMORPG"],
      imageSrc: wow,
    },
    {
      name: "Skyrim",
      type: ["Role-playing"],
      imageSrc: skyrim,
    },
    {
      name: "Starcraft",
      type: ["RTS"],
      imageSrc: starcraft,
    },
    {
      name: "Warcraft",
      type: ["MMORPG", "Tower defense", "RTS"],
      imageSrc: warcraft,
    },
    {
      name: "League of Legends",
      type: ["MMORPG", "Role-playing"],
      imageSrc: lol,
    },
    {
      name: "Dota",
      type: ["RTS"],
      imageSrc: dota,
    },
    {
      name: "Valorant",
      type: ["FPS"],
      imageSrc: valorant,
    },
    {
      name: "Left for dead",
      type: ["FPS", "Survival"],
      imageSrc: left4dead,
    },
    {
      name: "Overwatch",
      type: ["FPS"],
      imageSrc: overwatch,
    },
    {
      name: "PUBG",
      type: ["Battle royale"],
      imageSrc: pubg,
    },
    {
      name: "Diablo",
      type: ["Role-playing"],
      imageSrc: diablo,
    },
    {
      name: "Minecraft",
      type: ["Survival"],
      imageSrc: minecraft,
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
