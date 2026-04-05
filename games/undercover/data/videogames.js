const VIDEOGAME_PAIRS = [
  // ── MARIO UNIVERSE ─────────────────────────────────────────────
  ["Mario","Luigi"],["Mario","Wario"],["Luigi","Waluigi"],["Wario","Waluigi"],
  ["Bowser","King Boo"],["Peach","Daisy"],["Daisy","Rosalina"],
  ["Toad","Toadette"],["Yoshi","Birdo"],["Donkey Kong","Diddy Kong"],
  ["Diddy Kong","Funky Kong"],["Koopa","Goomba"],["Boo","King Boo"],
  ["Bowser","Bowser Jr."],["Chain Chomp","Piranha Plant"],
  ["Kamek","Bowser Jr."],["Waluigi","Wario"],["Peach","Rosalina"],
  // ── ZELDA UNIVERSE ────────────────────────────────────────────
  ["Link","Zelda"],["Link","Ganon"],["Zelda","Impa"],["Ganon","Demise"],
  ["Midna","Fi"],["Fi","Navi"],["Navi","Tatl"],["Sheik","Impa"],
  ["Ganon","Vaati"],["Link","Dark Link"],["Zelda","Sonia"],["Urbosa","Mipha"],
  // ── KIRBY UNIVERSE ────────────────────────────────────────────
  ["Kirby","Meta Knight"],["Kirby","King Dedede"],["Meta Knight","King Dedede"],
  ["Kirby","Bandana Dee"],["Kirby","Marx"],["Meta Knight","Galacta Knight"],
  ["King Dedede","Escargoon"],["Kirby","Magolor"],
  // ── METROID UNIVERSE ──────────────────────────────────────────
  ["Samus","Ridley"],["Samus","Mother Brain"],["Ridley","Dark Samus"],
  ["Samus","Dark Samus"],["SA-X","Samus"],["Kraid","Ridley"],
  // ── FIRE EMBLEM ───────────────────────────────────────────────
  ["Marth","Roy"],["Roy","Lucina"],["Lucina","Chrom"],["Ike","Marth"],
  ["Robin","Corrin"],["Byleth","Robin"],["Edelgard","Dimitri"],
  ["Dimitri","Claude"],["Claude","Edelgard"],["Ike","Hector"],
  ["Marth","Sigurd"],["Micaiah","Ike"],["Lysithea","Edelgard"],
  // ── SONIC UNIVERSE ────────────────────────────────────────────
  ["Sonic","Shadow"],["Sonic","Knuckles"],["Sonic","Tails"],
  ["Shadow","Silver"],["Knuckles","Rouge"],["Amy","Cream"],
  ["Eggman","Metal Sonic"],["Silver","Blaze"],["Tails","Cream"],
  ["Shadow","Mephiles"],["Knuckles","Tikal"],["Sonic","Blaze"],
  // ── FINAL FANTASY VII ─────────────────────────────────────────
  ["Cloud","Sephiroth"],["Cloud","Zack"],["Sephiroth","Genesis"],
  ["Tifa","Aerith"],["Barrett","Cid"],["Red XIII","Vincent"],
  ["Yuffie","Aerith"],["Rufus","Sephiroth"],
  // ── FINAL FANTASY X ───────────────────────────────────────────
  ["Tidus","Wakka"],["Yuna","Rikku"],["Auron","Jecht"],["Seymour","Auron"],
  // ── FINAL FANTASY XV ──────────────────────────────────────────
  ["Noctis","Ignis"],["Noctis","Gladio"],["Ignis","Prompto"],["Ardyn","Noctis"],
  // ── FINAL FANTASY XIV ─────────────────────────────────────────
  ["Y'shtola","Alisaie"],["Alphinaud","Alisaie"],["Zenos","Gaius"],
  // ── FINAL FANTASY VI ──────────────────────────────────────────
  ["Terra","Celes"],["Locke","Edgar"],["Kefka","Gestahl"],["Shadow","Cyan"],
  // ── FINAL FANTASY IX ──────────────────────────────────────────
  ["Zidane","Kuja"],["Garnet","Eiko"],["Steiner","Beatrix"],
  // ── FINAL FANTASY XIII ────────────────────────────────────────
  ["Lightning","Fang"],["Hope","Snow"],["Lightning","Serah"],
  // ── CROSS-FF (same archetype, different game) ─────────────────
  ["Cloud","Noctis"],["Sephiroth","Kefka"],["Terra","Lightning"],
  ["Aerith","Yuna"],["Tidus","Zidane"],["Auron","Cyan"],
  // ── KINGDOM HEARTS ────────────────────────────────────────────
  ["Sora","Roxas"],["Sora","Riku"],["Riku","Repliku"],["Aqua","Terra"],
  ["Terra","Ventus"],["Xehanort","Ansem"],["Roxas","Xion"],["Axel","Roxas"],
  ["Sora","Ventus"],["Mickey","Riku"],["Kairi","Namine"],
  // ── ELDEN RING ────────────────────────────────────────────────
  ["Malenia","Radagon"],["Radahn","Malenia"],["Maliketh","Morgott"],
  ["Ranni","Blaidd"],["Godrick","Rennala"],["Godfrey","Margit"],
  // ── DARK SOULS ────────────────────────────────────────────────
  ["Artorias","Ornstein"],["Gwyn","Seath"],["Yhorm","Siegward"],["Gundyr","Abyss Watchers"],
  // ── BLOODBORNE ────────────────────────────────────────────────
  ["Lady Maria","Gehrman"],["Eileen","Maria"],["Micolash","Rom"],
  // ── SEKIRO ────────────────────────────────────────────────────
  ["Wolf","Genichiro"],["Isshin","Genichiro"],["Owl","Wolf"],["Emma","Isshin"],
  // ── CROSS-FROMSOFT (different games, same vibe) ───────────────
  ["Dark Souls","Elden Ring"],["Elden Ring","Sekiro"],["Sekiro","Bloodborne"],
  ["Bloodborne","Dark Souls"],
  // ── GOD OF WAR ────────────────────────────────────────────────
  ["Kratos","Baldur"],["Kratos","Freya"],["Atreus","Angrboda"],
  ["Thor","Baldur"],["Odin","Freya"],["Mimir","Brok"],
  ["Kratos","Heimdall"],["Thor","Odin"],
  // ── HALO ──────────────────────────────────────────────────────
  ["Master Chief","Arbiter"],["Master Chief","Cortana"],
  ["Master Chief","Noble Six"],["Atriox","Cortana"],["The Arbiter","Tartarus"],
  // ── CALL OF DUTY ──────────────────────────────────────────────
  ["Price","Soap"],["Ghost","Roach"],["Nikolai","Price"],
  ["Ghost","Alejandro"],["Makarov","Price"],["Koenig","Ghost"],
  ["Graves","Shepherd"],["Laswell","Price"],
  // ── GENSHIN IMPACT ────────────────────────────────────────────
  ["Raiden Shogun","Yae Miko"],["Zhongli","Xiao"],["Venti","Kazuha"],
  ["Hu Tao","Yelan"],["Ayaka","Ganyu"],["Neuvillette","Zhongli"],
  ["Furina","Kokomi"],["Wriothesley","Neuvillette"],["Arlecchino","Hu Tao"],
  ["Lumine","Aether"],["Nahida","Kokomi"],["Cyno","Tighnari"],
  ["Lyney","Lynette"],["Navia","Charlotte"],["Clorinde","Navia"],
  ["Xianyun","Shenhe"],["Baizhu","Qiqi"],["Eula","Rosaria"],
  ["Diluc","Kaeya"],["Fischl","Beidou"],["Keqing","Ganyu"],
  // ── HONKAI STAR RAIL ──────────────────────────────────────────
  ["Acheron","Blade"],["Jingliu","Acheron"],["Boothill","Firefly"],
  ["Firefly","March 7th"],["Robin","Sunday"],["Aventurine","Dr. Ratio"],
  ["Ruan Mei","Sparkle"],["Black Swan","Kafka"],
  ["Luocha","Huohuo"],["Fu Xuan","Bronya"],["Seele","Bronya"],
  // ── OVERWATCH ─────────────────────────────────────────────────
  ["Tracer","Genji"],["Hanzo","Genji"],["Reaper","Soldier 76"],
  ["Mercy","Ana"],["Reinhardt","Orisa"],["Dva","Zarya"],
  ["Widowmaker","Hanzo"],["Symmetra","Zenyatta"],["Lucio","Moira"],
  ["Sojourn","Cassidy"],["Kiriko","Lucio"],["Lifeweaver","Mercy"],
  ["Junker Queen","Ramattra"],["Mauga","Roadhog"],
  // ── VALORANT ──────────────────────────────────────────────────
  ["Jett","Phoenix"],["Omen","Astra"],["Reyna","Jett"],["Cypher","Killjoy"],
  ["Sage","Skye"],["Sova","Breach"],["Chamber","Jett"],["Neon","Jett"],
  ["Clove","Skye"],["Gekko","Neon"],["Iso","Reyna"],["Vyse","Killjoy"],
  ["Deadlock","Sage"],["Harbor","Viper"],["Fade","Skye"],
  // ── APEX LEGENDS ──────────────────────────────────────────────
  ["Wraith","Octane"],["Bloodhound","Seer"],["Lifeline","Newcastle"],
  ["Bangalore","Ash"],["Horizon","Wattson"],["Loba","Seer"],
  ["Pathfinder","Revenant"],["Valkyrie","Horizon"],["Catalyst","Caustic"],
  ["Ballistic","Fuse"],["Conduit","Lifeline"],
  // ── STREET FIGHTER ────────────────────────────────────────────
  ["Ryu","Ken"],["Ryu","Akuma"],["Akuma","Gouken"],["Ken","Guile"],
  ["Chun-Li","Cammy"],["M. Bison","Vega"],["Sagat","Ryu"],["Zangief","Balrog"],
  ["Blanka","Dhalsim"],["Rose","Menat"],["Luke","Ken"],
  // ── MORTAL KOMBAT ─────────────────────────────────────────────
  ["Sub-Zero","Scorpion"],["Scorpion","Noob Saibot"],["Raiden","Sub-Zero"],
  ["Liu Kang","Kung Lao"],["Cassie Cage","Jacqui Briggs"],["Shao Kahn","Sindel"],
  ["Kitana","Mileena"],["Geras","Kronika"],["Smoke","Sub-Zero"],
  // ── TEKKEN ────────────────────────────────────────────────────
  ["Kazuya","Jin"],["Heihachi","Kazuya"],["Devil Jin","Kazuya"],
  ["Nina","Anna"],["Paul","Marshall Law"],["King","Armor King"],
  ["Lars","Alisa"],["Reina","Jin"],["Victor","Dragunov"],
  // ── RESIDENT EVIL ─────────────────────────────────────────────
  ["Leon","Claire"],["Leon","Chris"],["Chris","Jill"],["Jill","Leon"],
  ["Albert Wesker","Chris Redfield"],["Ada","Sherry"],["Nemesis","Mr. X"],
  ["Jack Baker","Eveline"],["Ethan","Chris"],["Lady Dimitrescu","Heisenberg"],
  // ── PERSONA ───────────────────────────────────────────────────
  ["Joker","Ryuji"],["Joker","Morgana"],["Makoto","Ann"],["Futaba","Yusuke"],
  ["Yu Narukami","Yosuke"],["Yu Narukami","Chie"],["Minato","Ryoji"],
  ["Joker","Yu Narukami"],["Yu Narukami","Minato"],["Akechi","Joker"],
  ["Rise","Yukiko"],["Naoto","Kanji"],["Aigis","Mitsuru"],
  // ── CROSS-FRANCHISE ───────────────────────────────────────────
  ["Mario","Sonic"],["Link","Samus"],["Kirby","Pikachu"],
  ["Master Chief","Doomguy"],["Samus","Master Chief"],
  ["Crash Bandicoot","Spyro"],["Dante","Bayonetta"],
  ["Kratos","Dante"],["Dante","Vergil"],["Vergil","Dante"],
  ["Bayonetta","Jeanne"],["2B","Bayonetta"],["2B","A2"],["9S","2B"],
  ["Joel","Arthur Morgan"],["Ellie","Abby"],["Abby","Joel"],
  ["Alan Wake","Max Payne"],
  // ── SANDBOX / INDIE ───────────────────────────────────────────
  ["Minecraft","Terraria"],["Stardew Valley","Animal Crossing"],
  ["Minecraft","Roblox"],["Terraria","Starbound"],
  ["Celeste","Hollow Knight"],["Hollow Knight","Ori and the Blind Forest"],
  ["Cuphead","Hollow Knight"],["Hades","Dead Cells"],
  // ── OPEN WORLD ────────────────────────────────────────────────
  ["The Witcher 3","Elden Ring"],["Cyberpunk 2077","GTA V"],
  ["GTA V","Red Dead Redemption 2"],["Skyrim","The Witcher 3"],
  // ── BATTLE ROYALE ─────────────────────────────────────────────
  ["Fortnite","Warzone"],["Fortnite","Apex Legends"],
  // ── PARTY / SOCIAL ────────────────────────────────────────────
  ["Fall Guys","Gang Beasts"],["Among Us","Town of Salem"],
];
