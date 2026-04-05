const ANIME_QUESTIONS = [
  // ── EASY (diff: 1) ─────────────────────────────────────────────────────────
  {
    q: "What is the name of the main character in Naruto?",
    a: "Sasuke Uchiha", b: "Kakashi Hatake", c: "Naruto Uzumaki", d: "Sakura Haruno",
    ans: "c", diff: 1
  },
  {
    q: "In Dragon Ball Z, what transformation did Goku achieve first?",
    a: "Super Saiyan 2", b: "Super Saiyan Blue", c: "Ultra Instinct", d: "Super Saiyan",
    ans: "d", diff: 1
  },
  {
    q: "In One Piece, what does Monkey D. Luffy want to become?",
    a: "The World's Greatest Swordsman", b: "King of the Pirates", c: "Admiral of the Navy", d: "The Strongest Fighter",
    ans: "b", diff: 1
  },
  {
    q: "In Attack on Titan, what are the giant humanoid monsters called?",
    a: "Colossi", b: "Giants", c: "Titans", d: "Shifters",
    ans: "c", diff: 1
  },
  {
    q: "In My Hero Academia, what is the name of the most powerful Quirk passed from hero to hero?",
    a: "One For All", b: "All For One", c: "Full Cowl", d: "Plus Ultra",
    ans: "a", diff: 1
  },
  {
    q: "In Demon Slayer, what is the name of the main character?",
    a: "Inosuke Hashibira", b: "Zenitsu Agatsuma", c: "Giyu Tomioka", d: "Tanjiro Kamado",
    ans: "d", diff: 1
  },
  {
    q: "In Death Note, what does the Death Note do?",
    a: "Grants the owner supernatural powers", b: "Kills anyone whose name is written in it", c: "Shows the owner the future", d: "Traps souls in the notebook",
    ans: "b", diff: 1
  },
  {
    q: "In Fullmetal Alchemist: Brotherhood, what are the two brothers' names?",
    a: "Roy and Maes", b: "Edward and Alphonse Elric", c: "Scar and Greed", d: "Alex and Olivier Armstrong",
    ans: "b", diff: 1
  },
  {
    q: "In Bleach, what are the supernatural beings that Ichigo Kurosaki fights called?",
    a: "Demons", b: "Arrancar", c: "Hollows", d: "Shinigami",
    ans: "c", diff: 1
  },
  {
    q: "In Jujutsu Kaisen, what is Yuji Itadori's special ability?",
    a: "He can control shadows", b: "He is the host of the cursed spirit Ryomen Sukuna", c: "He can stop time", d: "He wields a cursed sword",
    ans: "b", diff: 1
  },
  {
    q: "In Hunter x Hunter, what is the name of the special power system used by hunters?",
    a: "Chakra", b: "Reiatsu", c: "Nen", d: "Ki",
    ans: "c", diff: 1
  },
  {
    q: "In Sword Art Online, what happens if a player dies in the game?",
    a: "They wake up in a hospital", b: "They are permanently trapped", c: "The NerveGear kills them in real life", d: "They respawn with a penalty",
    ans: "c", diff: 1
  },
  {
    q: "What is the name of the green-haired number-one hero in My Hero Academia?",
    a: "All Might", b: "Endeavor", c: "Hawks", d: "Izuku Midoriya",
    ans: "d", diff: 1
  },
  {
    q: "In Re:Zero, what is Subaru Natsuki's special ability?",
    a: "He can see the future", b: "He is immortal", c: "Return by Death — he revives at a checkpoint when he dies", d: "He can stop time",
    ans: "c", diff: 1
  },
  {
    q: "In Dragon Ball Z, what planet is Goku originally from?",
    a: "Namek", b: "Earth", c: "Planet Vegeta", d: "New Vegeta",
    ans: "c", diff: 1
  },
  {
    q: "In Evangelion, what are the giant mechs called that the pilots use?",
    a: "Gundams", b: "Evangelions (Evas)", c: "Titans", d: "Jaegers",
    ans: "b", diff: 1
  },
  {
    q: "In Code Geass, what is the name of Lelouch's special power?",
    a: "Alchemy", b: "The Force", c: "Geass", d: "Quirk",
    ans: "c", diff: 1
  },
  {
    q: "In Chainsaw Man, what does Denji fuse with to become Chainsaw Man?",
    a: "A devil contract", b: "The Chainsaw Devil (Pochita)", c: "A demon sword", d: "A cursed spirit",
    ans: "b", diff: 1
  },
  {
    q: "In Haikyuu!!, what sport does the series revolve around?",
    a: "Basketball", b: "Soccer", c: "Volleyball", d: "Baseball",
    ans: "c", diff: 1
  },
  {
    q: "In Your Lie in April, what instrument does Kousei Arima play?",
    a: "Violin", b: "Cello", c: "Guitar", d: "Piano",
    ans: "d", diff: 1
  },
  {
    q: "In JoJo's Bizarre Adventure, what are the supernatural manifestations of fighting spirit called?",
    a: "Personas", b: "Stands", c: "Zanpakuto", d: "Bankai",
    ans: "b", diff: 1
  },
  {
    q: "In Naruto, what is the name of the sealed beast inside Naruto?",
    a: "Eight-Tails", b: "Nine-Tails (Kurama)", c: "Six-Tails", d: "Ten-Tails",
    ans: "b", diff: 1
  },

  // ── MEDIUM (diff: 2) ────────────────────────────────────────────────────────
  {
    q: "In Demon Slayer, what breathing style does Tanjiro primarily use after mastering it in the Mugen Train arc?",
    a: "Flame Breathing", b: "Water Breathing", c: "Sun Breathing (Hinokami Kagura)", d: "Breath of the Moon",
    ans: "c", diff: 2
  },
  {
    q: "In Attack on Titan, what is the name of the founding Titan's original holder?",
    a: "Karl Fritz", b: "Ymir Fritz", c: "Eren Jaeger", d: "Frieda Reiss",
    ans: "b", diff: 2
  },
  {
    q: "In Hunter x Hunter, what type of Nen user is Gon Freecss?",
    a: "Transmuter", b: "Emitter", c: "Enhancer", d: "Manipulator",
    ans: "c", diff: 2
  },
  {
    q: "In JoJo Part 3, what is the name of DIO's Stand?",
    a: "King Crimson", b: "Gold Experience", c: "The World", d: "Star Platinum",
    ans: "c", diff: 2
  },
  {
    q: "In Fullmetal Alchemist Brotherhood, what is the one thing alchemy's law of equivalent exchange forbids above all else?",
    a: "Creating gold", b: "Transmuting the Philosopher's Stone", c: "Human transmutation", d: "Replicating living plants",
    ans: "c", diff: 2
  },
  {
    q: "In Evangelion, what is the name of the organization that pilots the Evas?",
    a: "WILLE", b: "NERV", c: "SEELE", d: "Gehirn",
    ans: "b", diff: 2
  },
  {
    q: "In Death Note, what is the name of the detective who tries to catch Kira?",
    a: "Near", b: "Mello", c: "L", d: "Watari",
    ans: "c", diff: 2
  },
  {
    q: "In One Piece, what are the three types of Haki?",
    a: "Busoshoku, Kenbunshoku, and Haoshoku", b: "Busoshoku, Soru, and Geppo", c: "Haoshoku, Rokushiki, and Seastone", d: "Kenbunshoku, Geppo, and Tekkai",
    ans: "a", diff: 2
  },
  {
    q: "In Bleach, what is Ichigo Kurosaki's Bankai called?",
    a: "Senbonzakura Kageyoshi", b: "Tensa Zangetsu", c: "Daiguren Hyorinmaru", d: "Kamishini no Yari",
    ans: "b", diff: 2
  },
  {
    q: "In Code Geass, what does Lelouch's Geass power allow him to do?",
    a: "Read minds", b: "See the future", c: "Give a single absolute order to anyone he makes eye contact with", d: "Control gravity",
    ans: "c", diff: 2
  },
  {
    q: "In Jujutsu Kaisen, what is the name of Gojo Satoru's most powerful technique?",
    a: "Black Flash", b: "Infinity", c: "Hollow Purple", d: "Divergent Fist",
    ans: "c", diff: 2
  },
  {
    q: "In Re:Zero, what is the name of the witch whose scent Subaru carries, which attracts Witch's Cult members?",
    a: "Echidna", b: "Satella", c: "Carmilla", d: "Typhon",
    ans: "b", diff: 2
  },
  {
    q: "In Chainsaw Man, who is the main antagonist in the first arc of the manga?",
    a: "The Gun Devil", b: "Quanxi", c: "Makima", d: "Reze",
    ans: "c", diff: 2
  },
  {
    q: "In Naruto, what is the name of the technique Naruto's father Minato was known for?",
    a: "Rasengan", b: "Flying Thunder God Technique", c: "Summoning Jutsu", d: "Shadow Clone Jutsu",
    ans: "b", diff: 2
  },
  {
    q: "In Haikyuu!!, what is the name of Hinata's signature quick attack formed with Kageyama?",
    a: "The Speed Set", b: "The Ultra Quick", c: "The Quick Strike", d: "The Freak Quick",
    ans: "d", diff: 2
  },
  {
    q: "In My Hero Academia, what is the true nature of the villain All For One's Quirk?",
    a: "He can copy Quirks", b: "He can steal Quirks from others and give them away", c: "He can nullify Quirks", d: "He amplifies others' Quirks",
    ans: "b", diff: 2
  },
  {
    q: "In Your Lie in April, why did Kousei stop being able to hear his own piano playing?",
    a: "A physical accident damaged his hearing", b: "Psychological trauma from his abusive mother's death", c: "He developed tinnitus from practicing too much", d: "His rival cursed him",
    ans: "b", diff: 2
  },
  {
    q: "In Dragon Ball Z, what is the name of the technique that Goku and Vegeta use to fuse?",
    a: "Potara Fusion", b: "Metamoran Fusion", c: "Spirit Fusion", d: "Dragon Fusion",
    ans: "b", diff: 2
  },
  {
    q: "In Hunter x Hunter, what are the creatures that make up the Royal Guard of the Chimera Ant King?",
    a: "Neferpitou, Shaiapouf, and Menthuthuyoupi", b: "Knov, Morel, and Shoot", c: "Meruem, Komugi, and Colt", d: "Bihorn, Rammot, and Cheetu",
    ans: "a", diff: 2
  },
  {
    q: "In Sword Art Online, what is the name of the main female protagonist and Kirito's partner?",
    a: "Sinon", b: "Alice", c: "Leafa", d: "Asuna",
    ans: "d", diff: 2
  },
  {
    q: "In Attack on Titan, what group do Reiner, Bertholdt, and Annie belong to?",
    a: "Survey Corps", b: "Military Police", c: "Marleyan Warrior Unit", d: "Garrison Regiment",
    ans: "c", diff: 2
  },

  // ── HARD (diff: 3) ──────────────────────────────────────────────────────────
  {
    q: "In JoJo Part 4, what is Yoshikage Kira's Stand ability?",
    a: "Stop time for 9 seconds", b: "Erase a person from existence", c: "Detonate anything his hand has touched", d: "Manipulate gravity",
    ans: "c", diff: 3
  },
  {
    q: "In Hunter x Hunter, what is the name of the Nen technique that Gon uses during his fight with Neferpitou that ages his body?",
    a: "Jajanken", b: "Gon's Transformation", c: "Adult Gon", d: "Limitless Gon",
    ans: "b", diff: 3
  },
  {
    q: "In Evangelion, what does 'Third Impact' cause according to SEELE's Human Instrumentality Project?",
    a: "The destruction of all Angels", b: "The merging of all human souls into a single collective consciousness", c: "The awakening of Adam", d: "The annihilation of all Evas",
    ans: "b", diff: 3
  },
  {
    q: "In Fullmetal Alchemist Brotherhood, what are the seven Homunculi named after?",
    a: "Greek gods", b: "The Seven Deadly Sins", c: "Alchemical elements", d: "Biblical demons",
    ans: "b", diff: 3
  },
  {
    q: "In Jujutsu Kaisen, what is the full name of Gojo Satoru's innate technique that repels everything away from him?",
    a: "Cursed Spirit Manipulation", b: "Ten Shadows Technique", c: "Limitless — Infinity", d: "Reversal Red",
    ans: "c", diff: 3
  },
  {
    q: "In One Piece, what is the name of the ancient weapon that can destroy entire islands and is hidden within a mermaid princess?",
    a: "Pluton", b: "Uranus", c: "Poseidon", d: "Cronus",
    ans: "c", diff: 3
  },
  {
    q: "In Naruto, what is the real name of the masked man claiming to be Madara Uchiha for most of the Fourth Shinobi War?",
    a: "Obito Uchiha", b: "Izuna Uchiha", c: "Black Zetsu", d: "Kagami Uchiha",
    ans: "a", diff: 3
  },
  {
    q: "In Death Note, what are the exact conditions under which a human who has touched a Death Note can see a Shinigami?",
    a: "After writing a name in it", b: "After holding it for 40 seconds", c: "Once they touch the Death Note", d: "Only when the Shinigami chooses to appear",
    ans: "c", diff: 3
  },
  {
    q: "In Code Geass, who is revealed to be the true identity of V.V., the person who gave Charles zi Britannia his Geass?",
    a: "A Geass researcher", b: "Charles's twin brother", c: "A Geass order leader", d: "Lelouch's uncle",
    ans: "b", diff: 3
  },
  {
    q: "In Re:Zero, what is the name of the spirit Emilia contracts with that gives her power?",
    a: "Beatrice", b: "Puck", c: "Echidna", d: "Roswaal",
    ans: "b", diff: 3
  },
  {
    q: "In JoJo Part 5, what is the exact ability of the Stand 'King Crimson'?",
    a: "It erases a chosen period of time so only Diavolo lives through it", b: "It stops time for 5 seconds", c: "It creates a separate timeline", d: "It swaps cause and effect",
    ans: "a", diff: 3
  },
  {
    q: "In Demon Slayer, what is the name of the original Demon Slayer who taught the first breathing styles?",
    a: "Yoriichi Tsugikuni", b: "Kokushibo", c: "Kagaya Ubuyashiki", d: "Muzan Kibutsuji",
    ans: "a", diff: 3
  },
  {
    q: "In Bleach, what is the name of Aizen's Zanpakuto and its ability?",
    a: "Ryujin Jakka — controls fire", b: "Kyoka Suigetsu — creates perfect hypnotic illusions for anyone who saw its release", c: "Hyorinmaru — controls ice", d: "Zangetsu — channels spiritual pressure",
    ans: "b", diff: 3
  },
  {
    q: "In Attack on Titan, what is the Rumbling?",
    a: "The sound made when titans walk", b: "An earthquake caused by the Wall Titans marching to destroy the outside world", c: "The noise of Colossal Titans appearing", d: "The tremors from the Founding Titan awakening",
    ans: "b", diff: 3
  },
  {
    q: "In Chainsaw Man, what devil does Makima actually embody, revealed near the end of Part 1?",
    a: "The Domination Devil", b: "The Control Devil", c: "The Fear Devil", d: "The Manipulation Devil",
    ans: "b", diff: 3
  },
];
