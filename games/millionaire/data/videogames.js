const VIDEOGAME_QUESTIONS = [
  // ── EASY (diff: 1) ─────────────────────────────────────────────────────────
  {
    q: "What is the name of Mario's brother?",
    a: "Luigi", b: "Wario", c: "Waluigi", d: "Toad",
    ans: "a", diff: 1
  },
  {
    q: "In Minecraft, what material makes the strongest tools and armor?",
    a: "Gold", b: "Iron", c: "Diamond", d: "Wood",
    ans: "c", diff: 1
  },
  {
    q: "What is the name of Sonic the Hedgehog's best friend?",
    a: "Knuckles", b: "Shadow", c: "Amy", d: "Tails",
    ans: "d", diff: 1
  },
  {
    q: "In The Legend of Zelda, what is the name of the main hero?",
    a: "Zelda", b: "Link", c: "Ganondorf", d: "Navi",
    ans: "b", diff: 1
  },
  {
    q: "Which company created the Pokémon franchise?",
    a: "Sega", b: "Nintendo", c: "Game Freak", d: "Capcom",
    ans: "c", diff: 1
  },
  {
    q: "What is the name of the vault hunter protagonist in Borderlands 2 known as 'The Siren'?",
    a: "Lilith", b: "Maya", c: "Moxxi", d: "Gaige",
    ans: "b", diff: 1
  },
  {
    q: "In Fortnite, what is the name of the storm that shrinks the playable area?",
    a: "The Void", b: "The Eye", c: "The Storm", d: "The Circle",
    ans: "c", diff: 1
  },
  {
    q: "What color is the default 'Among Us' crewmate when first loading the game?",
    a: "Blue", b: "Red", c: "Green", d: "White",
    ans: "b", diff: 1
  },
  {
    q: "In League of Legends, what resource do most champions use to cast abilities?",
    a: "Energy", b: "Rage", c: "Mana", d: "Heat",
    ans: "c", diff: 1
  },
  {
    q: "Which game features a character named Master Chief?",
    a: "Gears of War", b: "Halo", c: "Call of Duty", d: "Titanfall",
    ans: "b", diff: 1
  },
  {
    q: "In God of War (2018), what weapon does Kratos use as his primary tool?",
    a: "Blades of Chaos", b: "Mjolnir", c: "Leviathan Axe", d: "Draupnir Spear",
    ans: "c", diff: 1
  },
  {
    q: "What does 'GTA' stand for in the Rockstar Games series?",
    a: "Grand Theft Auto", b: "Greater Town Adventures", c: "Game Time Action", d: "Grand Tactical Arena",
    ans: "a", diff: 1
  },
  {
    q: "In Pokémon, what type is Charizard?",
    a: "Fire/Dragon", b: "Fire/Ground", c: "Fire/Flying", d: "Fire only",
    ans: "c", diff: 1
  },
  {
    q: "Which game studio made the Dark Souls series?",
    a: "Capcom", b: "FromSoftware", c: "Bandai Namco", d: "Square Enix",
    ans: "b", diff: 1
  },
  {
    q: "In Final Fantasy VII, what is the name of Cloud's iconic weapon?",
    a: "Excalibur", b: "Brotherhood", c: "Organics", d: "Buster Sword",
    ans: "d", diff: 1
  },
  {
    q: "In Hollow Knight, what is the main character?",
    a: "A ghost knight", b: "A beetle warrior", c: "A small insect knight", d: "A moth soldier",
    ans: "c", diff: 1
  },
  {
    q: "What is the name of the princess Mario is always trying to save?",
    a: "Princess Daisy", b: "Princess Rosalina", c: "Princess Peach", d: "Princess Zelda",
    ans: "c", diff: 1
  },
  {
    q: "In Apex Legends, how many players are in a standard squad?",
    a: "2", b: "3", c: "4", d: "5",
    ans: "b", diff: 1
  },
  {
    q: "In Genshin Impact, what is the name of the world the game takes place in?",
    a: "Mondstadt", b: "Teyvat", c: "Liyue", d: "Inazuma",
    ans: "b", diff: 1
  },
  {
    q: "Which Pokémon is known as the 'Genetic Pokémon' and was the first artificially created Pokémon?",
    a: "Mew", b: "Deoxys", c: "Genesect", d: "Mewtwo",
    ans: "d", diff: 1
  },
  {
    q: "In Valorant, what is the name of the in-game currency used to buy weapons?",
    a: "Credits", b: "Points", c: "Creds", d: "Coins",
    ans: "c", diff: 1
  },
  {
    q: "What is the name of the ghost companion in the original Destiny?",
    a: "Dinklebot", b: "Ghost", c: "Navi", d: "Cortana",
    ans: "b", diff: 1
  },
  {
    q: "In Celeste, what is the main character trying to climb?",
    a: "A volcano", b: "Celeste Mountain", c: "A frozen tundra", d: "A crystal tower",
    ans: "b", diff: 1
  },
  {
    q: "In The Last of Us, what caused the apocalypse?",
    a: "A nuclear war", b: "A vampire plague", c: "A mutated fungal infection", d: "An alien invasion",
    ans: "c", diff: 1
  },

  // ── MEDIUM (diff: 2) ────────────────────────────────────────────────────────
  {
    q: "In Dark Souls, what does the Estus Flask do?",
    a: "Boosts stamina temporarily", b: "Removes curses", c: "Restores health", d: "Increases attack power",
    ans: "c", diff: 2
  },
  {
    q: "What is the name of Kratos's son in God of War (2018)?",
    a: "Baldur", b: "Mimir", c: "Thor", d: "Atreus",
    ans: "d", diff: 2
  },
  {
    q: "In Persona 5, what is the codename of the main protagonist?",
    a: "Fox", b: "Joker", c: "Panther", d: "Skull",
    ans: "b", diff: 2
  },
  {
    q: "Which Halo game introduced the Flood for the first time?",
    a: "Halo 2", b: "Halo 3", c: "Halo: Combat Evolved", d: "Halo: Reach",
    ans: "c", diff: 2
  },
  {
    q: "In Elden Ring, who is the final boss of the main story?",
    a: "Malenia", b: "Maliketh", c: "Morgott", d: "Elden Beast",
    ans: "d", diff: 2
  },
  {
    q: "In Final Fantasy X, what sport do the characters play throughout the game?",
    a: "Sphere Break", b: "Chocobo Racing", c: "Blitzball", d: "Triple Triad",
    ans: "c", diff: 2
  },
  {
    q: "In Sekiro: Shadows Die Twice, who is the main antagonist that Sekiro must defeat?",
    a: "Lady Butterfly", b: "Isshin Ashina", c: "Genichiro Ashina", d: "Guardian Ape",
    ans: "b", diff: 2
  },
  {
    q: "What is the max level cap in the original Dark Souls?",
    a: "710", b: "802", c: "999", d: "713",
    ans: "c", diff: 2
  },
  {
    q: "In Hollow Knight, what is the final area of the game called?",
    a: "The Abyss", b: "The Void", c: "Temple of the Black Egg", d: "The Hive",
    ans: "c", diff: 2
  },
  {
    q: "In Hades, who is the main character trying to escape from?",
    a: "Mount Olympus", b: "The Underworld", c: "Tartarus", d: "Elysium",
    ans: "b", diff: 2
  },
  {
    q: "In League of Legends, what is the name of the map where standard matches are played?",
    a: "The Crystal Scar", b: "Summoner's Rift", c: "Twisted Treeline", d: "Howling Abyss",
    ans: "b", diff: 2
  },
  {
    q: "What is the name of the main villain in The Legend of Zelda: Ocarina of Time?",
    a: "Demise", b: "Vaati", c: "Skull Kid", d: "Ganondorf",
    ans: "d", diff: 2
  },
  {
    q: "In GTA V, how many playable protagonists are there?",
    a: "1", b: "2", c: "3", d: "4",
    ans: "c", diff: 2
  },
  {
    q: "In Minecraft, what dimension is accessed through a Nether Portal?",
    a: "The End", b: "The Deep Dark", c: "The Nether", d: "The Aether",
    ans: "c", diff: 2
  },
  {
    q: "In Bloodborne, what city does the game primarily take place in?",
    a: "Lothric", b: "Yharnam", c: "Hemwick", d: "Cainhurst",
    ans: "b", diff: 2
  },
  {
    q: "Which starter Pokémon in the original Red/Blue games evolves into Blastoise?",
    a: "Charmander", b: "Bulbasaur", c: "Eevee", d: "Squirtle",
    ans: "d", diff: 2
  },
  {
    q: "In Valorant, what is the name of the attacking team's goal?",
    a: "Defuse the spike", b: "Plant the spike", c: "Activate the beacon", d: "Secure the orb",
    ans: "b", diff: 2
  },
  {
    q: "In Celeste, what mental health theme does the game most prominently explore?",
    a: "Addiction", b: "Depression", c: "Anxiety and self-doubt", d: "Grief",
    ans: "c", diff: 2
  },
  {
    q: "What is the name of the currency used in Dark Souls?",
    a: "Runes", b: "Gold", c: "Echoes", d: "Souls",
    ans: "d", diff: 2
  },
  {
    q: "In Genshin Impact, what is the element associated with the Anemo Archon Venti?",
    a: "Geo", b: "Electro", c: "Anemo", d: "Hydro",
    ans: "c", diff: 2
  },
  {
    q: "In The Last of Us Part II, who is the second playable protagonist?",
    a: "Tess", b: "Dina", c: "Abby", d: "Riley",
    ans: "c", diff: 2
  },
  {
    q: "In Persona 4, what is the name of the TV world the characters enter?",
    a: "The Metaverse", b: "The Shadow Realm", c: "The Midnight Channel", d: "The Dark Hour",
    ans: "c", diff: 2
  },

  // ── HARD (diff: 3) ──────────────────────────────────────────────────────────
  {
    q: "In Bloodborne, what Great One is found in the Nightmare of Mensis?",
    a: "Ebrietas", b: "Amygdala", c: "Rom, the Vacuous Spider", d: "Mergo's Wet Nurse",
    ans: "d", diff: 3
  },
  {
    q: "Which Pokémon was originally planned to be the franchise mascot before Pikachu?",
    a: "Jigglypuff", b: "Raichu", c: "Eevee", d: "Clefairy",
    ans: "d", diff: 3
  },
  {
    q: "In Dark Souls, what is the name of the primordial serpent who tries to trick the player into linking the First Flame?",
    a: "Frampt", b: "Gwyndolin", c: "Aldia", d: "Darkstalker Kaathe",
    ans: "a", diff: 3
  },
  {
    q: "In Final Fantasy VI, which character is the actual main protagonist as intended by the developers?",
    a: "Locke", b: "Celes", c: "Terra", d: "Shadow",
    ans: "c", diff: 3
  },
  {
    q: "In Hollow Knight, how many endings does the base game have (excluding Godmaster DLC)?",
    a: "2", b: "3", c: "4", d: "5",
    ans: "b", diff: 3
  },
  {
    q: "In Elden Ring, what is the name of Malenia's unique status effect she inflicts?",
    a: "Rot Breath", b: "Bleed", c: "Scarlet Rot", d: "Madness",
    ans: "c", diff: 3
  },
  {
    q: "In Sekiro, what is the name of the technique required to defeat Genichiro in the tutorial prologue (even if the player loses intentionally)?",
    a: "Mikiri Counter", b: "Lightning Reversal", c: "Whirlwind Slash", d: "Dragon Flash",
    ans: "b", diff: 3
  },
  {
    q: "In League of Legends lore, what is the true name of the champion known as Twisted Fate?",
    a: "Tobias Felix", b: "Graves", c: "Lucian", d: "Malcolm Graves",
    ans: "a", diff: 3
  },
  {
    q: "In Genshin Impact, what was the original name of Mondstadt's Anemo Archon before becoming 'Barbatos'?",
    a: "He had no name prior", b: "Venti", c: "Decarabian", d: "Rostam",
    ans: "a", diff: 3
  },
  {
    q: "What is the internal development codename that FromSoftware used for Dark Souls during production?",
    a: "Project Dark", b: "Demon's Project", c: "King's Field V", d: "Shadow Dark",
    ans: "a", diff: 3
  },
  {
    q: "In Halo: Combat Evolved, what is the actual purpose of the Halo rings?",
    a: "A paradise for humans", b: "Weapons to starve the Flood by eliminating their food source", c: "Forerunner power generators", d: "Ancient teleportation networks",
    ans: "b", diff: 3
  },
  {
    q: "In Pokémon Red/Blue, what is the only move that Ditto cannot copy?",
    a: "Sketch", b: "Transform", c: "Metronome", d: "Struggle",
    ans: "b", diff: 3
  },
  {
    q: "In Persona 5, what is the name of Igor's true form that the protagonist fights?",
    a: "Yaldabaoth", b: "Izanagi-no-Okami", c: "Satanael", d: "Lucifer",
    ans: "a", diff: 3
  },
  {
    q: "In the original Celeste, how many strawberries are there to collect in the base game?",
    a: "175", b: "202", c: "180", d: "216",
    ans: "b", diff: 3
  },
  {
    q: "In GTA San Andreas, what is the name of the city that serves as the game's Los Angeles analogue?",
    a: "Vice City", b: "San Fierro", c: "Las Venturas", d: "Los Santos",
    ans: "d", diff: 3
  },
  {
    q: "In Bloodborne, what is the name of the secret area accessible by using one third of the Umbilical Cord before fighting Mergo's Wet Nurse?",
    a: "Cainhurst Castle", b: "Fishing Hamlet", c: "Hunter's Nightmare", d: "The true ending requires consuming all three cords before the final boss",
    ans: "d", diff: 3
  },
  {
    q: "Which game was released first: Demon's Souls or Dark Souls?",
    a: "They released the same year", b: "Dark Souls", c: "Demon's Souls", d: "Bloodborne",
    ans: "c", diff: 3
  },
];
