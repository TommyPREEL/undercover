const PAIRS = [
  // ── NARUTO ─────────────────────────────────────────────────────
  ["Naruto","Minato"],["Naruto","Boruto"],["Sasuke","Itachi"],["Sakura","Tsunade"],
  ["Kakashi","Obito"],["Hinata","Neji"],["Gaara","Kankuro"],["Jiraiya","Orochimaru"],
  ["Rock Lee","Might Guy"],["Shikamaru","Asuma"],["Madara","Hashirama"],["Pain","Konan"],
  ["Shikamaru","Shikadai"],["Choji","Karui"],["Ino","Sakura"],["Temari","Gaara"],
  ["Sasori","Deidara"],["Hidan","Kakuzu"],["Kisame","Itachi"],["Nagato","Yahiko"],
  ["Boruto","Kawaki"],["Sarada","Sakura"],["Mitsuki","Orochimaru"],
  // ── DRAGON BALL ────────────────────────────────────────────────
  ["Goku","Vegeta"],["Goku","Gohan"],["Vegeta","Trunks"],["Piccolo","Kami"],
  ["Frieza","Cooler"],["Cell","Frieza"],["Android 17","Android 18"],["Beerus","Champa"],
  ["Krillin","Yamcha"],["Gohan","Goten"],["Raditz","Nappa"],["Broly","Paragus"],
  ["Goku Black","Zamasu"],["Jiren","Toppo"],["Hit","Dyspo"],["Caulifla","Kale"],
  ["Pan","Bulla"],["Whis","Vados"],["Zeno","Grand Priest"],
  // ── ONE PIECE ──────────────────────────────────────────────────
  ["Luffy","Ace"],["Luffy","Sabo"],["Zoro","Mihawk"],["Nami","Robin"],
  ["Shanks","Buggy"],["Whitebeard","Blackbeard"],["Law","Corazon"],["Kaido","Big Mom"],
  ["Usopp","Yasopp"],["Rayleigh","Roger"],["Franky","Tom"],["Doflamingo","Crocodile"],
  ["Katakuri","Luffy"],["Oden","Whitebeard"],["Yamato","Ace"],["Hancock","Robin"],
  ["Sanji","Zeff"],["Chopper","Hiluluk"],["Brook","Laboon"],["Jinbe","Fisher Tiger"],
  ["Eustass Kid","Killer"],["Trafalgar Law","Corazon"],["Marco","Whitebeard"],
  ["Smoker","Tashigi"],["Coby","Helmeppo"],["Carrot","Wanda"],
  // ── BLEACH ─────────────────────────────────────────────────────
  ["Ichigo","Isshin"],["Rukia","Byakuya"],["Aizen","Urahara"],["Toshiro","Rangiku"],
  ["Kenpachi","Yachiru"],["Yoruichi","Soi Fon"],["Grimmjow","Ulquiorra"],["Gin","Aizen"],
  ["Renji","Byakuya"],["Orihime","Tatsuki"],["Uryu","Ryuken"],["Chad","Sado"],
  ["Nnoitra","Grimmjow"],["Starrk","Lilynette"],["Barragan","Zommari"],
  ["Mayuri","Nemu"],["Unohana","Isane"],["Komamura","Sajin"],["Shunsui","Jushiro"],
  ["Kensei","Mashiro"],["Rose","Love"],["Shinji","Hiyori"],["Hollow Ichigo","Zangetsu"],
  // ── ATTACK ON TITAN ────────────────────────────────────────────
  ["Eren","Zeke"],["Mikasa","Annie"],["Levi","Erwin"],["Reiner","Bertholdt"],
  ["Historia","Ymir"],["Connie","Sasha"],["Falco","Gabi"],
  ["Jean","Marco"],["Armin","Bertholdt"],["Hange","Levi"],
  ["Porco","Marcel"],["Colt","Zeke"],["Floch","Jean"],["Pieck","Zeke"],
  ["Yelena","Zeke"],["Willy Tybur","Reiner"],
  // ── MY HERO ACADEMIA ───────────────────────────────────────────
  ["Deku","Bakugo"],["Deku","All Might"],["Todoroki","Endeavor"],["All Might","Gran Torino"],
  ["Shigaraki","All For One"],["Dabi","Endeavor"],["Mirio","Amajiki"],["Toga","Twice"],
  ["Hawks","Best Jeanist"],["Overhaul","Eri"],["Aizawa","Yamada"],
  ["Uraraka","Deku"],["Iida","Tensei"],["Tokoyami","Dark Shadow"],
  ["Mt. Lady","Kamui Woods"],["Midnight","Cementoss"],["Thirteen","All Might"],
  ["Spinner","Shigaraki"],["Compress","Dabi"],["Muscular","Moonfish"],
  ["La Brava","Gentle Criminal"],["Nighteye","All Might"],
  // ── DEMON SLAYER ───────────────────────────────────────────────
  ["Tanjiro","Zenitsu"],["Tanjiro","Nezuko"],["Rengoku","Akaza"],["Shinobu","Kanae"],
  ["Zenitsu","Kaigaku"],["Yoriichi","Michikatsu"],["Akaza","Douma"],["Muzan","Kokushibo"],
  ["Inosuke","Aoi"],["Tengen","Makio"],["Mitsuri","Obanai"],["Gyomei","Sanemi"],
  ["Doma","Akaza"],["Hantengu","Gyokko"],["Enmu","Muzan"],["Yushiro","Tamayo"],
  ["Genya","Sanemi"],["Kanao","Shinobu"],["Aoi","Kanao"],
  // ── FULLMETAL ALCHEMIST ────────────────────────────────────────
  ["Edward","Alphonse"],["Roy Mustang","Riza Hawkeye"],["Greed","Envy"],["Hohenheim","Father"],
  ["Lust","Gluttony"],["Scar","Kimblee"],["Pride","Wrath"],["Olivier","Alex Armstrong"],
  ["Winry","Paninya"],["Maes Hughes","Roy Mustang"],["Ling Yao","Lan Fan"],
  ["Izumi","Sig Curtis"],["Barry the Chopper","Martel"],["Sloth","Pride"],
  ["May Chang","Xiao-Mei"],
  // ── HUNTER X HUNTER ───────────────────────────────────────────
  ["Gon","Killua"],["Killua","Illumi"],["Hisoka","Illumi"],["Meruem","Komugi"],
  ["Netero","Zeno"],["Chrollo","Silva"],["Kurapika","Leorio"],["Feitan","Phinks"],
  ["Knov","Morel"],["Knuckle","Shoot"],["Gon","Pitou"],["Killua","Alluka"],
  ["Milluki","Killua"],["Kalluto","Illumi"],["Neferpitou","Shaiapouf"],
  ["Palm","Knov"],["Biscuit","Gon"],["Wing","Zushi"],
  // ── JUJUTSU KAISEN ────────────────────────────────────────────
  ["Itadori","Todo"],["Gojo","Geto"],["Megumi","Toji"],["Sukuna","Mahito"],
  ["Yuta","Rika"],["Nanami","Haibara"],["Choso","Kechizu"],["Kenjaku","Geto"],
  ["Nobara","Maki"],["Panda","Toge"],["Mei Mei","Ui Ui"],["Naoya","Naobito"],
  ["Jogo","Hanami"],["Dagon","Jogo"],["Hiromi","Nanami"],["Hakari","Kirara"],
  ["Kashimo","Hakari"],["Uraume","Sukuna"],["Yorozu","Tsukumo"],
  // ── JOJO'S BIZARRE ADVENTURE ──────────────────────────────────
  ["Jotaro","Dio"],["Joseph","Caesar"],["Giorno","Bruno"],["Josuke","Okuyasu"],
  ["Gyro","Johnny"],["Diavolo","Doppio"],["Pucci","Dio"],["Yoshikage","Rohan"],
  ["Jonathan","Dio"],["Lisa Lisa","Suzi Q"],["Esidisi","Kars"],["Wamuu","Esidisi"],
  ["Narancia","Fugo"],["Abbacchio","Bruno"],["Trish","Giorno"],["Mista","Giorno"],
  ["Jolyne","Hermes"],["Anasui","Weather Report"],["Enrico Pucci","Dio"],
  ["Johnny","Diego"],["Funny Valentine","Diego"],["Lucy Steel","Johnny"],
  // ── ONE PUNCH MAN ─────────────────────────────────────────────
  ["Saitama","Genos"],["Garou","Bang"],["Tatsumaki","Fubuki"],["Boros","Saitama"],
  ["Metal Bat","Atomic Samurai"],["Superalloy Darkshine","Puri-Puri Prisoner"],
  ["King","Saitama"],["Amai Mask","Pig God"],["Child Emperor","Zombieman"],
  ["Flashy Flash","Sonic"],["Orochi","Psykos"],
  // ── HAIKYUU ───────────────────────────────────────────────────
  ["Hinata","Kageyama"],["Oikawa","Kageyama"],["Bokuto","Akaashi"],["Kuroo","Kenma"],
  ["Tsukishima","Yamaguchi"],["Nishinoya","Asahi"],["Tanaka","Ennoshita"],
  ["Daichi","Suga"],["Iwaizumi","Oikawa"],["Ushijima","Tendou"],
  ["Atsumu","Osamu"],["Suna","Atsumu"],["Kita","Aran"],["Sakusa","Atsumu"],
  ["Konoha","Komi"],["Akaashi","Bokuto"],["Lev","Kenma"],
  // ── FAIRY TAIL ────────────────────────────────────────────────
  ["Natsu","Gajeel"],["Natsu","Zeref"],["Gray","Lyon"],["Erza","Mirajane"],
  ["Laxus","Makarov"],["Jellal","Erza"],["Sting","Rogue"],
  ["Wendy","Carla"],["Lucy","Aquarius"],["Elfman","Evergreen"],
  ["Cobra","Midnight"],["Minerva","Erza"],["Mard Geer","Zeref"],
  // ── DEATH NOTE ────────────────────────────────────────────────
  ["Light","L"],["L","Near"],["Near","Mello"],["Ryuk","Rem"],
  ["Light","Mikami"],["Misa","Light"],["Matsuda","Aizawa"],
  // ── RE:ZERO ───────────────────────────────────────────────────
  ["Subaru","Emilia"],["Rem","Ram"],["Emilia","Satella"],["Beatrice","Echidna"],
  ["Roswaal","Beatrice"],["Regulus","Sirius"],["Elsa","Meili"],
  ["Wilhelm","Theresia"],["Reinhard","Felix"],["Crusch","Ferris"],
  // ── SWORD ART ONLINE ──────────────────────────────────────────
  ["Kirito","Asuna"],["Alice","Eugeo"],["Sinon","Asuna"],["Klein","Kirito"],
  ["Leafa","Kirito"],["Yui","Asuna"],["Administrator","Eugeo"],
  // ── THAT TIME I GOT REINCARNATED AS A SLIME ───────────────────
  ["Rimuru","Milim"],["Rimuru","Veldora"],["Diablo","Shion"],["Benimaru","Souei"],
  ["Ranga","Gobta"],["Shuna","Shion"],["Guy Crimson","Milim"],
  // ── KONOSUBA ──────────────────────────────────────────────────
  ["Kazuma","Aqua"],["Megumin","Darkness"],["Aqua","Darkness"],["Wiz","Kazuma"],
  ["Eris","Aqua"],["Yunyun","Megumin"],
  // ── MOB PSYCHO 100 ────────────────────────────────────────────
  ["Mob","Reigen"],["Mob","Ritsu"],["Reigen","Dimple"],["Teru","Mob"],
  ["Sho","Mob"],["Ishigami","Serizawa"],
  // ── STEINS;GATE ───────────────────────────────────────────────
  ["Okabe","Kurisu"],["Mayuri","Okabe"],["Daru","Okabe"],["Suzuha","Okabe"],
  ["Moeka","Kurisu"],
  // ── CODE GEASS ────────────────────────────────────────────────
  ["Lelouch","Suzaku"],["Lelouch","CC"],["Kallen","Lelouch"],["Schneizel","Lelouch"],
  ["Nunnally","Lelouch"],["Jeremiah","Lelouch"],
  // ── EVANGELION ────────────────────────────────────────────────
  ["Shinji","Rei"],["Rei","Asuka"],["Asuka","Mari"],["Gendo","Yui"],
  ["Misato","Kaji"],["Kaworu","Shinji"],
  // ── COWBOY BEBOP ──────────────────────────────────────────────
  ["Spike","Vicious"],["Spike","Jet"],["Faye","Ed"],["Jet","Julia"],
  // ── VINLAND SAGA ──────────────────────────────────────────────
  ["Thorfinn","Askeladd"],["Thorfinn","Canute"],["Askeladd","Floki"],["Canute","Ragnar"],
  ["Bjorn","Askeladd"],["Thors","Floki"],
  // ── CHAINSAW MAN ──────────────────────────────────────────────
  ["Denji","Power"],["Makima","Denji"],["Aki","Denji"],["Kobeni","Power"],
  ["Kishibe","Quanxi"],["Reze","Denji"],["Himeno","Aki"],["Violence Devil","Shark Fiend"],
  // ── TOKYO GHOUL ───────────────────────────────────────────────
  ["Kaneki","Touka"],["Arima","Kaneki"],["Amon","Mado"],["Tsukiyama","Kaneki"],
  ["Hinami","Kaneki"],["Juuzou","Shinohara"],["Hide","Kaneki"],
  // ── OVERLORD ──────────────────────────────────────────────────
  ["Ainz","Demiurge"],["Albedo","Shalltear"],["Cocytus","Demiurge"],["Mare","Aura"],
  ["Pandora's Actor","Ainz"],
  // ── BLACK CLOVER ──────────────────────────────────────────────
  ["Asta","Yuno"],["Asta","Liebe"],["Yami","William"],["Noelle","Asta"],
  ["Luck","Magna"],["Zora","Asta"],["Megicula","Vanica"],["Dante","Lucifero"],
  ["Julius","Damnatio"],["Tabata","Yuki"],
  // ── THE SEVEN DEADLY SINS ──────────────────────────────────────
  ["Meliodas","Ban"],["Meliodas","Escanor"],["Escanor","Merlin"],["King","Harlequin"],
  ["Diane","King"],["Merlin","Vivian"],["Gowther","Pelliot"],["Zeldris","Estarossa"],
  // ── MISC / CROSS-FRANCHISE ─────────────────────────────────────
  ["Saitama","Aizen"],["Kakashi","Gojo"],["All Might","Whitebeard"],
  ["Edward Elric","Naruto"],["Aizen","Light Yagami"],["Shikamaru","L"],
  ["Sasuke","Vegeta"],["Edward Elric","Yoda"],["Aizen","Madara"],
  ["L","Lelouch"],["Light Yagami","Lelouch"],["Naruto","Luffy"],
  ["Luffy","Goku"],["Naruto","Ichigo"],["Zoro","Guts"],["Zoro","Levi"],
  ["Bakugo","Vegeta"],["Bakugo","Edward Elric"],["Itachi","Byakuya"],
  ["Corazon","Hughes"],["Usopp","Zenitsu"],["Zenitsu","Killua"],
  ["Erwin","Whitebeard"],["Netero","Erwin"],["Itadori","Naruto"],
  ["Inosuke","Kenpachi"],["Kenpachi","Goku"],["Kaneki","Eren"],
  ["Gojo","Kakashi"],["Escanor","Endeavor"],["Gendo Ikari","Isshin Kurosaki"],
  ["Ging Freecss","Gendo Ikari"],["Deku","Rock Lee"],["Rock Lee","Asta"],
  ["Asta","Deku"],["Tanjiro","Itadori"],["Denji","Naruto"],["Makima","Aizen"],
];
