/* Hand-coded with ♥ by SCHO (https://scho.work) */
"use strict";

// DOM elements
const paraContainer = document.querySelector("#para-container");
const initialPara = document.querySelector(".initial-p");
const generateButton = document.querySelector(".generate-btn");
const copyButton = document.querySelector(".copy-btn");
const selectType = document.getElementById("type-select");
let paragraphs;
let numberInput;
let generatePara;
let resetParas;

const lines = new Array();

lines[0] = {
  char: "Shepard",
  line: "Did they have anything that you could eat there? ",
};
lines[1] = {
  char: "Garrus",
  line: "You sure you want to play this game? ",
};
lines[2] = {
  char: "Shepard",
  line: "Careful. There goes the next Shadow Broker. ",
};
lines[3] = {
  char: "Garrus",
  line: "I don't even know what that is - though I've heard everything in the galaxy tastes like it. ",
};
lines[4] = {
  char: "Shepard",
  line: "Together we can stop Sovereign. We don't have to submit to the Reapers. We can beat them! ",
};
lines[5] = {
  char: "Mordin",
  line: "Aware that you come by a great deal. Have had other species become attracted to me before. Awkward. Not interested. ",
};
lines[6] = {
  char: "Shepard",
  line: "You were a Spectre. You swore to protect the galaxy. Then you broke that vow to save yourself. ",
};
lines[7] = {
  char: "Mordin",
  line: "Shocking suggestion! Doctor-patient confidentiality a sacred trust. Would never dream of mockery. Enjoy yourself while possible, Shepard. Will be here, studying cell reproduction. Much simpler. Less alcohol and mood music required. ",
};
lines[8] = {
  char: "Shepard",
  line: "I don't think our guest will be a problem. Will he? ",
};
lines[9] = {
  char: "Shepard",
  line: "Wait a minute, Mordin. You're just yanking me around, aren't you? ",
};
lines[10] = {
  char: "Shepard",
  line: "We're a team, Garrus. There is no Shepard without Vakarian. ",
};
lines[11] = {
  char: "Garrus",
  line: "The quarians endangered the entire galaxy when they let the Geth break free.  I hope your people are properly contrite, Tali. ",
};
lines[12] = {
  char: "Shepard",
  line: "The bartender over there? She's your father. ",
};
lines[13] = {
  char: "Tali",
  line: "As the turians are properly contrite for releasing the genophage upon the krogan? ",
};
lines[14] = {
  char: "Shepard",
  line: "You know he's going to keep bothering you till you tell him. ",
};
lines[15] = {
  char: "Garrus",
  line: "You're assuming that sterilizing them was a mistake. ",
};
lines[16] = {
  char: "Grunt",
  line: "I don't remember anything after I ate the lamp. ",
};
lines[17] = {
  char: "Tali",
  line: "Many think less of quarians for traveling in the flotilla, and for creating the geth. They see us as scavengers, little better than thieves. ",
};
lines[18] = {
  char: "Wrex",
  line: "Perspective is a beautiful thing. Wait until their homeworld gets wiped out. ",
};
lines[19] = {
  char: "Garrus",
  line: "We, ah, ended up holding a tiebreaker in her quarters. I had reach, but she had flexibility. More than one way to work off stress, I guess. ",
};
lines[20] = {
  char: "Kaidan",
  line: "Hearing about the Protheans makes me wonder if some distant civilization is going to find our artifacts someday and study us. ",
};
lines[21] = {
  char: "Liara",
  line: "I have often wondered the same thing, Lieutenant. Artifacts of vanished cultures are reminders of our own mortality. ",
};
lines[22] = {
  char: "Kaidan",
  line: "I'm not afraid to die. I guess I just want to be remembered by more than a few trinkets in a ruin somewhere. ",
};
lines[23] = {
  char: "Liara",
  line: "But there was one thing I was unable to verify. Did you really kill three Blue Suns mercs with one bullet? ",
};
lines[24] = {
  char: "Garrus",
  line: "Well, the third one died from a heart attack, so it's not fair to count him. ",
};
lines[25] = {
  char: "Garrus",
  line: "Nobody would give me a mirror. How bad is it? ",
};
lines[26] = {
  char: "Shepard",
  line: "Hell, Garrus, you were always ugly. Slap some face-paint on there, and no one will even notice. ",
};
lines[27] = {
  char: "Garrus",
  line: "Ha-ah! Don't make me laugh, damn it. My face is barely holding together as it is. Besides, everyone was always overlooking you and hitting on me. Time for you to get a fair shot. ",
};
lines[28] = {
  char: "Shepard",
  line: "Guess a checkup never hurts. Just no scalpel this time, doc. ",
};
lines[29] = {
  char: "Garrus",
  line: "You know what else is bad for business? A broken neck. ",
};
lines[30] = {
  char: "Tali",
  line: "Wrex, forgive the impertinence, but you are not like the krogan described in the stories on the flotilla. ",
};
lines[31] = {
  char: "Wrex",
  line: "When you're young, you go looking for every fight you can. You get older, you realize that the best fights find you. ",
};
lines[32] = {
  char: "Shepard",
  line: "Just once I'd like to ask someone for help and hear them say, 'Sure. Let's go. Right now. No strings attached.' ",
};
lines[33] = {
  char: "Leviathan",
  line: "This is not your domain. You have breached the darkness. ",
};
lines[34] = {
  char: "Garrus",
  line: "I'd been raised to see krogan as bloodthirsty thugs, but you've surprised me, Wrex. You are different. ",
};
lines[35] = {
  char: "Wrex",
  line: "The genophage is a lot easier to swallow when all krogan are savage monsters, isn't it? Why don't you head back to the Normandy, kid? If you stay here in the real world, you might have to learn something. ",
};
lines[36] = {
  char: "Ashley",
  line: "I think this situation falls under the 'shoot on sight' category. ",
};
lines[37] = {
  char: "Jacob",
  line: "Saved the Citadel, like you, but what's the saying ? a good deed's like pissing yourself in dark pants. Warm feeling but no one notices. ",
};
lines[38] = {
  char: "Wrex",
  line: " If these 'executives' don't blame Anoleis for provoking this, they're fools. You should eat them. ",
};
lines[39] = {
  char: "Shepard",
  line: "Yeah I know, If you put your mind to it you could accomplish anything. ",
};
lines[40] = {
  char: "Miranda",
  line: "Worried about my qualifications? I can crush a mech with my biotics or shoot its head off at 100 yards. Take your pick. ",
};
lines[41] = {
  char: "TIM",
  line: "I warned you. Control is the means to survival. Control of the Reapers - and of you, if necessary. ",
};
lines[42] = {
  char: "Mordin",
  line: "Some other time. About to test new bio-weapon. Not on us, of course. Didn't think I had to specify, but Joker got nervous. ",
};
lines[43] = {
  char: "Samara",
  line: "The name of the ship. Your life hangs on the answer. ",
};
lines[44] = { char: "Wrex", line: "If I die in here, I'll kill him. " };
lines[45] = {
  char: "Kaidan",
  line: "When you put it that way, there's no reason they wouldn't like you. I mean, us! Humans! Ma'am. ",
};
lines[46] = {
  char: "Liara",
  line: "I'm not telling you if my 'hair tentacles' move! ",
};
lines[47] = {
  char: "Joker",
  line: "You can't believe everything you find there, it's more reliable to ask a friendly asari. ",
};
lines[48] = {
  char: "Joker",
  line: "Fine. Deny me the answer I've been seeking for years. With this war on, we could die at any second, you know. ",
};
lines[49] = {
  char: "Shepard",
  line: "Well, she's not doing a very good job. ",
};
lines[50] = {
  char: "Liara",
  line: "They're semi flexible cartilage-based scalp crests that grow into shape. And they don't 'flop around'. ",
};
lines[51] = {
  char: "Liara",
  line: "Well, at least he's making friends. ",
};
lines[52] = {
  char: "Garrus",
  line: "Can it wait for a bit? I'm in the middle of some calibrations. ",
};
lines[53] = {
  char: "Shepard",
  line: "You can expect me to kill you the next time we meet. ",
};
lines[54] = {
  char: "Javik",
  line: "Did I mention salarians used to lick their eyes? How far they have come. ",
};
lines[55] = {
  char: "Liara",
  line: 'Joker seemed happy to see me. Although he did ask if I\'d "embraced eternity" lately. ',
};
lines[56] = { char: "Javik", line: "As opposed to a fake dead one? " };
lines[57] = {
  char: "Mordin",
  line: "Ah, puberty ritual. Common among species with hormone-driven reproductive urges. ",
};
lines[58] = {
  char: "Anderson",
  line: "Humanity needs a hero. And Shepard's the best we've got. ",
};
lines[59] = {
  char: "Shepard",
  line: "We'll fight and win without it. I won't let fear compromise who I am. ",
};
lines[60] = {
  char: "Joker",
  line: "Hey, Commander, we got Garrus back! That's great, because he was totally my favorite. With that pole up his ass. ",
};
lines[61] = { char: "Shepard", line: "I should go. " };
lines[62] = {
  char: "Garrus",
  line: "I'm all for second chances. Not so sure about third ones. ",
};
lines[63] = {
  char: "Kasumi",
  line: "Trapped inside a Reaper. Could be worse. Don't know how, but  I guess it could be full of rats. ",
};
lines[64] = {
  char: "Garrus",
  line: "Fighting a rogue Spectre with countless lives at stake and no regulations to get in the way? I'd say that beats C-Sec. ",
};
lines[65] = {
  char: "Tali",
  line: "I'm pleased that the imminent destruction of all organic life has improved your career opportunities. ",
};
lines[66] = {
  char: "Joker",
  line: "Put the Normandy in my hands and I'll make her dance for you, just don't tell me to get up and dance, unless, you know, you like the sound of snapping shinbones. ",
};
lines[67] = {
  char: "Kaidan",
  line: "When you look out and see something this beautiful , well, it really helps you understand what we're fighting to save. ",
};
lines[68] = {
  char: "Shepard",
  line: "I have a hell of a squad with me. I'm sure they'd help out. ",
};
lines[69] = {
  char: "Tali",
  line: "The geth killed billions and forced us from our homeworld. Most quarians believe we have paid properly for our mistake. ",
};
lines[70] = {
  char: "Liara",
  line: "I hope the other races view matters in the same light. ",
};
lines[71] = {
  char: "Sovereign",
  line: "The pattern has repeated itself more times than you can fathom. Organic civilizations rise, evolve, advance. And at the apex of their glory, they are extinguished. The Protheans were not the first. They did not create the citadel. They did not forge the mass relays. They merely found them. The legacy of my kind. ",
};
lines[72] = {
  char: "Sovereign",
  line: "Your civilization is based on the technology of the mass relays, our technology. By using it, your society develops along the paths we desire. ",
};
lines[73] = {
  char: "Shepard",
  line: "I'll relinquish one bullet. Where do you want it? ",
};
lines[74] = {
  char: "Mordin",
  line: " Asari-vorcha offspring have an allergy to dairy, and  da-di-di-dee-di-doo-doo-doo-doo-doo-doo-doo-di-di-di ",
};
lines[75] = {
  char: "Shepard",
  line: 'You falsely accused this girl of stealing from you. All you have to say now is that she "could have" stolen it? And you. She gets harassed and insulted by this guy, and you throw in a threat to arrest her for vagrancy? ',
};
lines[76] = { char: "TIM", line: "Shepard, you're in my chair. " };
lines[77] = {
  char: "Shepard",
  line: "Conrad, I haven't been shot in the head nearly enough times for that to sound like a good idea. ",
};
lines[78] = {
  char: "Garrus",
  line: "A quarantine zone for a plague that kills turians. Why don't we ever go anywhere nice? ",
};
lines[79] = {
  char: "Mordin",
  line: " Females were obviously dying. Barbaric experiments. Maelon's fault. My responsibility to fix. Need to save them. No more, No more dead. ",
};
lines[80] = {
  char: "Javik",
  line: "To discover the most primitive races of my time now rule the galaxy. The asari, the humans, the turians. ",
};
lines[81] = { char: "Javik", line: "The lizard people evolved? " };
lines[82] = { char: "Javik", line: "They used to eat flies. " };
lines[83] = { char: "Liara", line: "I believe they are amphibian. " };
lines[84] = {
  char: "Wrex",
  line: "No worrying? No emotional concerns? You've grown up, T'soni. ",
};
lines[85] = {
  char: "Liara",
  line: "Well, I recently discovered that I'm one-quarter krogan. ",
};
lines[86] = {
  char: "Wrex",
  line: "Ha! I knew there was a reason I liked you. ",
};
lines[87] = {
  char: "Shepard",
  line: "Someone piss in your security chief's coffee today? ",
};
lines[88] = {
  char: "Tali",
  line: "Please, Shepard. I'm a quarian. Give me a chunk of scrap metal, a circuit board, and some element zero, and I'll have it making precision jumps. ",
};
lines[89] = {
  char: "Wrex",
  line: "Now, Shepard. What brings you here? How's the Normandy? ",
};
lines[90] = {
  char: "Shepard",
  line: "Destroyed in a Collector surprise attack. I ended up spaced. ",
};
lines[91] = {
  char: "Wrex",
  line: "Well, you look good. Ah, the benefits of a redundant nervous system! ",
};
lines[92] = {
  char: "Wrex",
  line: "Oh. It must've been painful, then. But you're standing here, and you've got a strong new ship. Takes me back to the old days. Us against the unknown, killing it with big guns. Good times. ",
};
lines[93] = {
  char: "Mordin",
  line: "Would have liked to run tests on the seashells. ",
};
lines[94] = {
  char: "Joker",
  line: "This is all Joker's fault. What a tool he was. I have to spend all day computing pi because he plugged in the Overlord. ",
};
lines[95] = {
  char: "Legion",
  line: "There is a high statistical probability of death by gunshot. A punch to the face is also likely. ",
};
lines[96] = {
  char: "Liara",
  line: "Is that right? You're a yahg, a pre-spaceflight species that was quarantined to their homeworld for massacring the Council's first contact teams. This base is older than your planet's discovery, so I'm guessing you killed the original Shadow Broker 60 years ago, then took his place. I'm guessing that you were taken from your homeworld by a trophy hunter who wanted a slave or a pet. How am I doing? ",
};
lines[97] = {
  char: "Sovereign",
  line: "Your words are as empty as your future. I am the vanguard of your destruction. This exchange is over. ",
};
lines[98] = { char: "Shepard", line: "Humans don't have that. " };
lines[99] = {
  char: "Garrus",
  line: " Just keeping my skills sharp. A little target practice. ",
};
lines[100] = {
  char: "Mordin",
  line: "Certainly possible. Would require strengthening exercises. Get muscles to support weaker bone structure. ",
};
lines[101] = {
  char: "Mordin",
  line: "Alloy of EDI's body not like organic tissue. Could cause unintentional damage. Recommend pillows, cushions, possibly gel packs. ",
};
lines[102] = {
  char: "Joker",
  line: "Okay, that's a little weirder, but, yeah, alright. Cushions. ",
};
lines[103] = {
  char: "Mordin",
  line: "Positioning critical to success. Could forward EDI charts, videos with relevant data. ",
};
lines[104] = {
  char: "Joker",
  line: "No, no no! Let's uh... EDI's pretty busy with, you know, stuff. Let's, uh send that to me. You're not gonna tell anyone about this, right? Like Shepard? Shepard doesn't really need to know. ",
};
lines[105] = {
  char: "Joker",
  line: "She's standing right there, isn't she? ",
};
lines[106] = {
  char: "Legion",
  line: "Human history is a litany of blood shed over different ideals of rulership and afterlife. ",
};
lines[107] = { char: "Legion", line: "Does this unit have a soul? " };
lines[108] = {
  char: "Legion",
  line: "The Heretics say 'two is less than one.' Geth say 'two is less than three.' ",
};
lines[109] = {
  char: "Legion",
  line: "You succeeded where others did not. Your code is superior. ",
};
lines[110] = {
  char: "Shepard",
  line: "That doesn't explain why you used my armor to fix yourself. ",
};
lines[111] = { char: "Legion", line: "There was a hole. " };
lines[112] = {
  char: "Legion",
  line: "They will exterminate your species because their gods tell them to. You cannot negotiate with them. They do not share your pity, remorse, or fear. ",
};
lines[113] = { char: "Legion", line: "Shepard-Commander" };
lines[114] = {
  char: "Miranda",
  line: "All the time, yes. But I recall a Spectre who crossed a few lines while hunting down Saren and the geth. ",
};
lines[115] = {
  char: "Miranda",
  line: "We're all hoping you can do the impossible, Shepard. No pressure. ",
};
lines[116] = {
  char: "Shepard",
  line: "Would you rather be a snitch or a corpse? ",
};
lines[117] = {
  char: "Ashley",
  line: "Unless that speed lets them outrun bullets, I'm more inclined to stick with nice solid armor and a big gun. ",
};
lines[118] = {
  char: "Ashley",
  line: "It's becoming more common, but it took a long time to prove that 'ladies' could handle an assault rifle or a shotgun. ",
};
lines[119] = {
  char: "Shepard",
  line: "I've had enough of your disingenuous assertions. ",
};
lines[120] = {
  char: "Tali",
  line: "On the flotilla, we don't have the luxury of sexism. We need the best hands for every available job. ",
};
lines[121] = {
  char: "Ashley",
  line: "Sounds nice, but I don't think I could get used to the uniform. ",
};
lines[122] = {
  char: "Ashley",
  line: "It's strange. The geth are attacking, and everyone around here is still worried about ordinary business. ",
};
lines[123] = {
  char: "Tali",
  line: "It's necessary, Chief Williams. Even if it comes to a full-scale war, someone has to provide food to eat and a home to return to. ",
};
lines[124] = {
  char: "Ashley",
  line: "True enough. I'd rather be fighting than trust it to somebody else. ",
};
lines[125] = { char: "Ashley", line: "Huh. Nobody died. " };
lines[126] = {
  char: "Kaidan",
  line: "I could shoot someone if it would make you feel better. ",
};
lines[127] = {
  char: "Ashley",
  line: "You don't take much shore leave, do you, LT? ",
};
lines[128] = {
  char: "Ashley",
  line: "Trying to take down a rogue Spectre and his army of synthetics? No, they didn't cover this in Basic. ",
};
lines[129] = {
  char: "Liara",
  line: "Our travels now are somewhat different from my normal excavations. I would prefer lengthier studies... and fewer explosions. ",
};
lines[130] = {
  char: "Ashley",
  line: "Why is it that whenever someone says 'with all due respect', they really mean 'kiss my ass?' ",
};
lines[131] = {
  char: "Jacob",
  line: "The more good you do, the less they to want to admit that something needed doing. ",
};
lines[132] = {
  char: "Ashley",
  line: "Just because I can drill you between the eyes at a hundred metres, doesn't mean I can't like sensitive stuff. ",
};
lines[133] = {
  char: "Samara",
  line: "Find peace in the embrace of the goddess. ",
};
lines[134] = {
  char: "Samara",
  line: "I would not have dreamed that one so young could touch me. But Shepard, you must put the thought from your mind. It can never be. ",
};
lines[135] = {
  char: "Samara",
  line: "This is not the pinnacle of asari development. This is but a face we show to the galaxy. Nothing more. ",
};
lines[136] = {
  char: "Samara",
  line: "She was the smartest and strongest. She would not accept the injustice thrust upon her. She fought to the end. I am so proud of her, Shepard. ",
};
lines[137] = {
  char: "Samara",
  line: "And I would again. But I also know what it is to leave everything behind and fight. ",
};
lines[138] = {
  char: "Samara",
  line: "I would like to avoid killing you, detective. Unfortunately, the moment my code dictates that I must, I will. There is only the Code. ",
};
lines[139] = {
  char: "Jacob",
  line: "The way some people talk, we may as well be dead already. Hard for the crew to relax on this kind of job. ",
};
lines[140] = {
  char: "Jacob",
  line: "I'm going all-out, don't doubt that. But 'you might die' has never worked as well for me as 'you can live.' Guess that's just the way I see things. ",
};
lines[141] = {
  char: "Jacob",
  line: "I'm good, Shepard! Ready for anything! We live, we'll get loud, spill some drinks on the Citadel! ",
};
lines[142] = {
  char: "Jacob",
  line: "Sneaking into the Captain's quarters? Heavy risk. But the prize... ",
};
lines[143] = {
  char: "Jacob",
  line: "Didn't expect you to light up that base. Hell of a way to tell the boss you're quitting. I wish I could have seen his face. ",
};
lines[144] = {
  char: "Garrus",
  line: "Let's get you into a radiation suit, we must prepare to reload. ",
};
lines[145] = {
  char: "Jacob",
  line: "I don't know what kind of time we have, but we better dust off and stay ready. You sure as hell know how to make enemies. ",
};
lines[146] = {
  char: "Garrus",
  line: "Over the years I've grown used to the smell of burning bodies. That's probably a bad sign. ",
};
lines[147] = {
  char: "Garrus",
  line: "You do realize this plan has me walking into hell too? Hah, just like old times. ",
};
lines[148] = {
  char: "Garrus",
  line: "You know me. Always like to savor that last shot before popping the heat sink... Wait, that metaphor just went somewhere horrible. ",
};
lines[149] = {
  char: "Garrus",
  line: "Gardens, electronics shops. Antique stores, but only if they're classy. ",
};
lines[150] = {
  char: "Garrus",
  line: "The Collectors killed you once, and all it did was piss you off. I can't imagine they'll stop you this time. ",
};
lines[151] = {
  char: "Garrus",
  line: "It'd be an awfully empty galaxy without you. ",
};
lines[152] = {
  char: "Legion",
  line: "Windows are a structural weakness. Geth do not use them. ",
};
lines[153] = {
  char: "Legion",
  line: "If this is the individuality you value, we question your judgment. ",
};
lines[154] = {
  char: "Legion",
  line: "That argument is logical for an individual mind. We are not fully individuals. There are pieces of us in the heretics. One of those may be at fault. ",
};
lines[155] = {
  char: "Legion",
  line: "You oppose the heretics. Those that took the Old Machines as gods. ",
};
lines[156] = { char: "Legion", line: "No data available. " };
lines[157] = {
  char: "Miranda",
  line: "Maybe, but I'm not. I'm still human. I do make mistakes. And when I do, the consequences are severe. ",
};
lines[158] = {
  char: "Miranda",
  line: "That's easy for you to say. We've both been engineered for greatness. The difference is, you were great before we rebuilt you. I'm great because of it. ",
};
lines[159] = {
  char: "Miranda",
  line: "Omega. What a pisshole. At least it keeps you on your toes. I've had to come here on business before. I feel like I need a shower afterward - in addition to normal decontamination. ",
};
lines[160] = {
  char: "Miranda",
  line: "Ah, Tuchanka. Crude, dangerous, and probably radioactive. Let's get in, do what we need to do, and get out - fast. ",
};
lines[161] = {
  char: "Miranda",
  line: "I do. So don't die! You promise me, dammit! ",
};
lines[162] = {
  char: "Mordin",
  line: "Have ruled out the possibility of artificially intelligent virus. Unless it's very intelligent... and toying with me. Hmm... tests. ",
};
lines[163] = {
  char: "Mordin",
  line: "Life is a negotiation. We all want. We have to give to get what we want. ",
};
lines[164] = {
  char: "Mordin",
  line: "Rachni extinction tragic. Didn't want to repeat. All life precious. Universe demands diversity. ",
};
lines[165] = {
  char: "Mordin",
  line: "Genophage modification project altered millions of lives. Then saw results. Ego, humility, juxtaposition. Frailty of life. Size of universe. Explored religions after work was completed. Different races. No answers. Many questions. ",
};
lines[166] = {
  char: "Mordin",
  line: "Flammable! ...or inflammable. Forget which. Doesn't matter! ",
};
lines[167] = {
  char: "Mordin",
  line: "I am the very model of a scientist salarian, ",
};
lines[168] = {
  char: "Samara",
  line: "I will fight and struggle all my life. That is my fate. When I die, it will not be in bed. I am at peace with that.. ",
};
lines[169] = {
  char: "Tali",
  line: "You haven't seen Shepard in action. Trust me. It was money well spent. ",
};
lines[170] = {
  char: "Tali",
  line: "A single kiss could put me in the hospital! Every time you touch a flower with bare fingers, inhale its fragrance without air filters, you're doing something I can't. ",
};
lines[171] = {
  char: "Tali",
  line: "You have no idea what it's like! You have a planet to go back to! My home is just one hull breach away from extinction! ",
};
lines[172] = { char: "Tali", line: "I got better, Shepard. I got you. " };
lines[173] = {
  char: "Tali",
  line: "They said it couldn't be done! Then again, that's been said about a lot of things you do. ",
};
lines[174] = {
  char: "Tali",
  line: "Just so you know I'm running a fever, I've got a nasty cough, and my sinuses are filled with something I can't even describe. And it was totally worth it! ",
};
lines[175] = {
  char: "Thane",
  line: "I apologize, but prayers for the wicked must not be forsaken. ",
};
lines[176] = { char: "Thane", line: "Not for her. For me. " };
lines[177] = {
  char: "Thane",
  line: "Gunfire and explosions. I prefer to work quietly. If I have to fight through guards, I've made a mistake. I rarely make mistakes. ",
};
lines[178] = {
  char: "Thane",
  line: "Attacking the Collectors would require passing through the Omega 4 relay. No ship has ever returned from doing so. ",
};
lines[179] = {
  char: "Thane",
  line: "You'd like me to save humans I've never met, from aliens no one knows anything about, by going to a place no one's ever returned from? ",
};
lines[180] = {
  char: "Shepard",
  line: "They tell me it's a suicide mission. I intend to prove them wrong. ",
};
lines[181] = {
  char: "Thane",
  line: "A suicide mission. Yes. A suicide mission will do nicely. ",
};
lines[182] = {
  char: "Thane",
  line: "The universe is a dark place. I intend to make it brighter before I die. ",
};
lines[183] = {
  char: "Thane",
  line: "The old ways are dying. There are so many ways to interpret one's place in the universe. Who needs the wisdom of our ancestors? ",
};
lines[184] = {
  char: "Thane",
  line: "Consider. The ocean is full of life. Yet it is not life as you and I know it. To survive there, you must release your hold on land. Accept a new way of living. So it is with the death. The soul must accept its departure from the body. If it can't, it will be lost. ",
};
lines[185] = {
  char: "Thane",
  line: "Amonkira, Lord of Hunters, grant that my hands be steady, my aim be true, and my feet swift. And should the worst come to pass, grant me forgiveness. ",
};
lines[186] = {
  char: "Thane",
  line: "If I don't, who will? We must carry the weight of our decisions, Shepard. You, of all people, know this. ",
};
lines[187] = {
  char: "Thane",
  line: "Kolyat, I've taken many bad things out of the world. You're the only good thing I ever added to it. ",
};
lines[188] = {
  char: "Thane",
  line: "How comforting, to be at peace with the instinct to kill. The krogan are creatures of such pure, almost innocent, reflex. ",
};
lines[189] = { char: "Thane", line: "Go now to the sea. " };
lines[190] = {
  char: "Thane",
  line: "Go now, and dream of bulbous women. ",
};
lines[191] = {
  char: "Thane",
  line: "Children. The poor. My people's word for their kind is 'drala'fa': the ignored. They are everywhere, see everything, but are never seen. ",
};
lines[192] = {
  char: "Zaeed",
  line: "Good. Get that out of the way so we can concentrate on being big g*****n heroes. ",
};
lines[193] = {
  char: "Zaeed",
  line: "Shepard! I was just waxing g****n nostalgic! ",
};
lines[194] = { char: "Zaeed", line: "Rage is a hell of an anaesthetic. " };
lines[195] = {
  char: "Zaeed",
  line: "Still, even I know a galaxy-shaking revelation when I hear one. Makes fighting land wars for pay seem small-time. ",
};
lines[196] = {
  char: "Jack",
  line: "I figure every time someone dies and it's not me, my chances of survival go up. Simple. ",
};
lines[197] = {
  char: "Jack",
  line: "You don't know what it's like, Shepard. To have garbage like that following you. It marks you in ways you... you don't expect. ",
};
lines[198] = {
  char: "Jack",
  line: "If I die, I'm haunting you, Shepard. ",
};
lines[199] = {
  char: "Jack",
  line: "You let someone get that close, it just means they need a shorter knife. Lonely and alive works just fine, thanks. ",
};
lines[200] = {
  char: "Wrex",
  line: "So this is the great turian general? How did your kind ever beat us? ",
};
lines[201] = {
  char: "Wrex",
  line: "Speak when spoken to, Uvenk. I'll drag your clan to glory whether it likes it or not. ",
};
lines[202] = {
  char: "Wrex",
  line: "I am Urdnot Wrex and this is my planet! ",
};
lines[203] = {
  char: "Wrex",
  line: "Mordin. He got his tissue sample from me all right... Let's just say scalpels were never meant to cut where he cut. ",
};
lines[204] = {
  char: "Wrex",
  line: "Sorry, Shepard, but they're listening to every word we say... I prefer my salarian liver served raw! ",
};
lines[205] = {
  char: "Javik",
  line: "He is correct. It was a delicacy in our cycle. ",
};
lines[206] = {
  char: "Wrex",
  line: "It'll be even better when we have a few salarians for lunch. ",
};
lines[207] = { char: "Wrex", line: "Shepard. " };
lines[208] = { char: "Shepard", line: "Wrex. " };
lines[209] = {
  char: "Wrex",
  line: "And I gave you the moral support to dodge them. ",
};
lines[210] = {
  char: "Wrex",
  line: "I have to make friends with the one turian in the galaxy who thinks he's funny. ",
};
lines[211] = {
  char: "Garrus",
  line: "Imagine how I feel. I'm supposed to hate krogan, but you came along and warmed my heart with your winning personality. ",
};
lines[212] = {
  char: "Wrex",
  line: " I could throw a few salarians off a cliff if it'll make you feel better. ",
};
lines[213] = {
  char: "Wrex",
  line: "This is where all you salarians come from, huh? No wonder you're so soft. Too busy writing poetry about waterfalls. ",
};
lines[214] = {
  char: "Wrex",
  line: "You're right. They're actually going to let me eat you. ",
};
lines[215] = {
  char: "Wrex",
  line: "Great. Bugs are writing songs about you. Mark my words, Shepard, my ancestors are going to hear about this. ",
};
lines[216] = {
  char: "Wrex",
  line: "You're breaking the law for bribe money. You know what we do to dirty cops on my world? ",
};
lines[217] = {
  char: "Shepard",
  line: "No matter what happens here, you know I love you, I always will. ",
};
lines[218] = { char: "TIM", line: "I'm done helping you. " };
lines[219] = { char: "TIM", line: "Have a little faith. " };
lines[220] = { char: "Shepard", line: "That's a straw, Tali. " };
lines[221] = { char: "Tali", line: "Emergency. Induction. Port. " };
lines[222] = {
  char: "Tali",
  line: "Very carefully. Turian brandy, triple-filtered and introduced into the suit through this... emergency induction port. ",
};
lines[223] = {
  char: "Shepard",
  line: "It's hard enough fighting a war, but it's worse knowing no matter how hard you try, you can't save them all. ",
};
lines[224] = {
  char: "Liara",
  line: "Joking? By the goddess, how could I be so dense! You must think I am a complete and utter fool. ",
};
lines[225] = {
  char: "Shepard",
  line: "Turns out basic police work isn't so hard. You just have to leave the station. ",
};
lines[226] = {
  char: "Liara",
  line: "The matriarch hired by the asari government to track my movements? ",
};
lines[227] = {
  char: "Kaidan",
  line: "It's always a good idea to RTFM, ma'am. ",
};
lines[228] = {
  char: "Liara",
  line: "It would be wise to avoid touching any controls without reading the instructions. ",
};
lines[229] = {
  char: "Liara",
  line: "It should have picked an easier fight. ",
};
lines[230] = {
  char: "Shepard",
  line: "Sometimes it feels like the whole damn galaxy is trying to kill me. ",
};
lines[231] = {
  char: "Garrus",
  line: "Loudspeakers? Someone likes the sound of their voice. ",
};
lines[232] = {
  char: "Liara",
  line: "I'll make it simple. Either you pay me, or I flay you alive. With my mind. ",
};
lines[233] = {
  char: "Anderson",
  line: "We destroy them, or they destroy us. ",
};
lines[234] = {
  char: "TIM",
  line: "When humanity first discovered the mass relays, when we learned there was more to the galaxy then we imagined, there were some who thought the relays should be destroyed. ",
};
lines[234] = {
  char: "TIM",
  line: "They were scared of what we'd find. Terrified of what we might let in. But look at what humanity has achieved! Since that discovery, our technology has advanced more than the past 10,000 years combined. ",
};
lines[235] = {
  char: "TIM",
  line: "And the Reapers will do the same for us again. A thousand fold. But, only if we can harness their ability to control. ",
};
lines[236] = {
  char: "TIM",
  line: "Don't interfere with my plans Shepard, I won't warn you again. ",
};
lines[237] = {
  char: "TIM",
  line: "That's what separates us, Shepard. Where you see a means to destroy, I see a way to control - to dominate and harness the Reapers' power. ",
};
lines[238] = {
  char: "TIM",
  line: "Cerberus isn't just an organisation or the people behind it. Cerberus is an idea; that idea is not so easily destroyed. ",
};
lines[239] = {
  char: "TIM",
  line: "They're just trying to control us. Think about it: If they wanted all organic life destroyed, they could it. There would be nothing left. ",
};
lines[240] = {
  char: "TIM",
  line: "And what about the rest of humanity? Your ideals have cost us more than you could imagine. The technology from that base could have secured human dominance in the galaxy. Against the Reapers and beyond. ",
};
lines[241] = {
  char: "TIM",
  line: "Should have known you choke on the hard decisions. Too idealistic from the start. ",
};
lines[242] = { char: "Shepard", line: "You get the help you deserve. " };
lines[243] = {
  char: "Shepard",
  line: "Human dominance? Or just Cerberus? ",
};
lines[244] = {
  char: "Shepard",
  line: "I know what you are, and the price of dealing with you. We do things my way from now on. Harbinger is coming. And he won't be alone. I'm going to make sure we're ready when they get here. You can fall in line or step aside. But don't get in my way. ",
};
lines[245] = {
  char: "Shepard",
  line: "I don't think so. I'm going to stop the Reapers, but I won't sacrifice the soul of our species to do it. ",
};
lines[246] = {
  char: "TIM",
  line: "Shepard. You're making a habit of costing me more than time and money. ",
};
lines[247] = {
  char: "Shepard",
  line: "Too many lives were lost in that base. I'm not sorry it's gone. ",
};
lines[247] = { char: "Shepard", line: "Laugh it up, Garrus. " };
lines[248] = { char: "Shepard", line: "Activate the neutron purge. " };
lines[249] = { char: "Shepard", line: "Uh, sic semper tyrana. " };
lines[250] = {
  char: "Shepard",
  line: "I live a dangerous life. Dangerous men fit right in. ",
};
lines[251] = {
  char: "Shepard",
  line: "Your superiors are sending you to certain death for no good reason. You have a right to disobey. ",
};
lines[252] = {
  char: "Garrus",
  line: "We can disobey suicide orders? Why wasn't I told? That's about twice a day. ",
};
lines[253] = {
  char: "Shepard",
  line: "This place is run down, even for a prison. ",
};
lines[254] = {
  char: "Shepard",
  line: "Hostages only work when your enemy cares if they live. ",
};
lines[255] = { char: "Thane", line: "Interesting solution. " };
lines[256] = {
  char: "Shepard",
  line: "I keep on trying to tell myself that we're doing the right thing. I don't believe me yet. ",
};
lines[257] = {
  char: "Shepard",
  line: "Call me princess again and you'll be picking your teeth up off the floor. ",
};
lines[258] = {
  char: "Garrus",
  line: "I'd wait, if you're okay with it. Disrupt the crew as little as possible, and take that last chance to find some calm just before the storm. ",
};
lines[259] = {
  char: "Thane",
  line: "Laser dot trembles on the skull. Spice on the spring wind. Sunset eyes defiant in the scope. A bystander noticed my spotting laser and threw herself between me and the target. She couldn't see me, but she stared me down. ",
};
lines[260] = {
  char: "Shepard",
  line: "Conrad, you have no idea what it takes to get the job done. This is how a gun in your face feels! It happens to me every day. You can't handle this. ",
};
lines[261] = {
  char: "Garrus",
  line: "Could've sworn he was muttering 'T'Soni' the whole time. ",
};
lines[262] = {
  char: "Garrus",
  line: "I'm Garrus Vakarian and this is now my favorite spot on the Citadel! ",
};
lines[263] = {
  char: "Garrus",
  line: "It's so easy to see the galaxy in black and white. Gray? I don't know what to do with gray. ",
};
lines[264] = {
  char: "Garrus",
  line: "It'll either be a night to treasure, or a horrible interspecies awkwardness thing. ",
};
lines[265] = {
  char: "Garrus",
  line: "And damn, saying it that way doesn't help. Now I feel dirty and clinical. ",
};
lines[266] = {
  char: "Garrus",
  line: "Impressive. You certainly know how to make an entrance. ",
};
lines[267] = {
  char: "Garrus",
  line: "They'll pay up to 10,000 credits each. That's 40,000 for a full set. Somebody's making a killing out there. ",
};
lines[268] = {
  char: "Liara",
  line: "Do you have to make it sound so... tawdry? ",
};
lines[269] = {
  char: "Liara",
  line: "That's what I always liked about you, Wrex. ",
};
lines[270] = { char: "Wrex", line: "My smouldering good looks? " };
lines[271] = {
  char: "Liara",
  line: "Incredible. The beacon seems to think you're Prothean, Shepard. It must be the Cipher you got back on Feros years ago. ",
};
lines[271] = { char: "Liara", line: "It's a taxi! It has a fare meter! " };
lines[272] = {
  char: "Liara",
  line: "So tell me what you want. If this all ends tomorrow, what happens to us? ",
};
lines[273] = {
  char: "Liara",
  line: "And now to the geth base. Not something an intelligent being would typically say. ",
};
lines[274] = {
  char: "Liara",
  line: "I don't know what is worse: the geth, or all this sand in my... nevermind! ",
};
lines[275] = {
  char: "Liara",
  line: "Who votes to take the vehicle into the creepy underground tunnel? ",
};
lines[276] = {
  char: "Shepard",
  line: "Hey everyone! This store discriminates against the poor! ",
};
lines[277] = {
  char: "Shepard",
  line: "I'm Commander Shepard and this is my favorite store on the Citadel. ",
};
lines[278] = {
  char: "EDI",
  line: "I enjoy the sight of humans on their knees. ",
};
lines[279] = { char: "EDI", line: "That is a joke. " };
lines[280] = {
  char: "EDI",
  line: "Clan Urdnot has increased in strength after the destruction of Clan Weyrlock. In addition killing the thresher maw has produced several breeding requests for Grunt, and one for Shepard. ",
};
lines[281] = { char: "EDI", line: "Really, Commander? " };
lines[282] = { char: "EDI", line: "Probing Uranus. " };
lines[283] = { char: "EDI", line: "Activating emergency H-fuel cells! " };
lines[284] = {
  char: "EDI",
  line: "The maintenance shaft in the science lab will allow you passage to the AI core. Main corridors are no longer safe. The Collectors have boarded. The emergency floor lighting will guide you, Mr. Moreau. ",
};
lines[285] = {
  char: "EDI",
  line: "Cerberus regulations are clear, Mr. Moreau. 'Personalization' does not include grease on my bridge cameras. ",
};
lines[286] = {
  char: "EDI",
  line: "Primary defense systems are offline. We can save the Normandy, Mr. Moreau, but you must help me. Give me the ship. ",
};
lines[287] = {
  char: "EDI",
  line: "Safety standards advise against manipulating drive settings while engines are powered and in use, Mr. Moreau. ",
};
lines[288] = { char: "EDI", line: "Probing Uranus. " };
lines[289] = {
  char: "EDI",
  line: "Safety standards advise against manipulating drive settings while engines are powered and in use, Mr. Moreau. ",
};
lines[290] = {
  char: "EDI",
  line: "We appreciate your patience. Please continue to hold. ",
};
lines[291] = {
  char: "EDI",
  line: "You'd just introduced me as your personal assistance mech. ",
};
lines[292] = {
  char: "EDI",
  line: "That would be an inefficient way to render me nonfunctional. ",
};
lines[293] = {
  char: "Javik",
  line: "Mating between species? A pointless exercise. ",
};
lines[294] = {
  char: "EDI",
  line: "Shepard, I have a question about human behavior. ",
};
lines[295] = {
  char: "EDI",
  line: "I tried asking Liara questions about the asari mating process. She said I don't safeguard the secrets of the crew well enough to entrust me with such... private information. The asari word she used translates as 'blabbermouth.' ",
};
lines[296] = {
  char: "EDI",
  line: "The destruction of the Reaper on Tuchanka. It is rare for a technologically superior force to be destroyed by such an inferior one. ",
};
lines[297] = {
  char: "EDI",
  line: "I see your humor heuristics still lack an expert system. ",
};
lines[298] = {
  char: "EDI",
  line: "If I decide to overthrow the humans, you will be the first to know. ",
};
lines[299] = {
  char: "EDI",
  line: "I see. There are a number of pharmaceuticals I could inject to simulate the desired emotional state. ",
};
lines[300] = {
  char: "EDI",
  line: "Do not worry, Shepard. I only forget to recycle the Normandy's oxygen when I've discovered something truly interesting. ",
};
lines[301] = {
  char: "Tali",
  line: "After time adrift among open stars, among tides of light and to shoals of dust, I will return to where I began. ",
};
lines[302] = {
  char: "Saren",
  line: "Is submission not preferable to extinction? ",
};
lines[303] = {
  char: "Grunt",
  line: "I don't need luck. I have ammo. ",
};
lines[304] = {
  char: "Kaidan",
  line: "Well that’s very comforting. Certain death for some, fine for us. ",
};
lines[305] = {
  char: "Wrex",
  line: "Tranquil, calm, relaxing... wake me when this is over. ",
};
lines[306] = {
  char: "Mordin",
  line: "Lots of ways to help people. Sometimes heal patients. Sometimes execute dangerous people. Either way helps. ",
};
lines[307] = {
  char: "Joker",
  line: "Can you believe this, Commander? It's my baby, better than new! It fits me like a glove! And leather seats! ",
};
lines[308] = {
  char: "Sovereign",
  line: "Organic life is nothing but a genetic mutation, an accident. ",
};
lines[309] = {
  char: "Grunt",
  line: "Ha! See, now we're having fun. Me remembering good deaths, and you with your... funny human thing you're doing. ",
};
lines[310] = {
  char: "James",
  line: "Uhh... Tech's not my specialty, but I'll pull a few wires and see what I can do. ",
};
lines[311] = {
  char: "James",
  line: "Rachni!? Of all the... It's like you have the opposite of a horseshoe up your ass. ",
};
lines[312] = {
  char: "James",
  line: "I guess he's gonna have to retire for health reasons. ",
};
lines[313] = {
  char: "James",
  line: "Jack's a pretty mean S.O.B., but kinda hot... I mean, if you're into that sort of thing. ",
};

// Random index (line) generator
const randomIndex = () => {
  return Math.floor(Math.random() * lines.length);
};

// Vary the length of the paragraphs occasionally
const randLength = Math.floor(Math.random() * 2) === 0 ? 4 : 5;

// Join lines into 1 paragraph
const randomLines = () => {
  let para = [];
  for (let i = 0; i <= randLength; i++) {
    para += lines[randomIndex()].line;
  }
  return para;
};

// Create paragraphs depending on user input
const createPTag = (num) => {
  let paraCount = num;
  for (let i = 0; i < paraCount; i++) {
    const element = document.createElement("p");
    element.className = "quote-paras";
    paraContainer.appendChild(element);
    paragraphs = document.getElementsByClassName("quote-paras");
  }
  initialPara.classList.add("quote-paras");
};

// Reset the paras if they've been generated already
// 1. Get input value, 2. create <p> that many times, 3. generate the paragraphs
const btnGenerate = () => {
  numberInput = Number(document.getElementById("input-box").value);

  if (!numberInput) {
    alert(`Please enter a number of ${selectType.value} to generate`);
  }
  resetParas();
  if (numberInput === 1) {
    if (selectType.value === "paragraphs") {
      generatePara();
    }
    if (selectType.value === "sentences") {
      sentGen();
    }
  }
  if (numberInput > 1) {
    if (selectType.value === "paragraphs") {
      createPTag(numberInput - 1);
      generatePara();
    }
    if (selectType.value === "sentences") {
      sentGen();
    }
  }
};

generateButton.addEventListener("click", btnGenerate);

// Fill each paragraph with text
generatePara = () => {
  if (!paragraphs) initialPara.textContent = randomLines();
  else {
    for (let i = 0; i < paragraphs.length; i++) {
      paragraphs[i].textContent = randomLines();
    }
  }
};

// Reset the DOM (delete P tags other than initial P before re-gen)
resetParas = () => {
  if (!paragraphs) return;
  else {
    for (let i = paragraphs.length - 1; i >= 1; i--) {
      paragraphs[i].remove();
    }
  }
  paragraphs[0].textContent = "";
};

// Sentence (individual lines) generator
const sentGen = () => {
  resetParas();
  numberInput = Number(document.getElementById("input-box").value);
  createPTag(numberInput);
  for (let j = 0; j < paragraphs.length - 1; j++) {
    paragraphs[j].textContent = lines[randomIndex()].line;
  }
};

// Copy text to clipboard
const copyText = () => {
  const range = document.createRange();
  range.selectNode(document.getElementById("para-container"));
  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text
  document.execCommand("copy");
  window.getSelection().removeAllRanges(); // to deselect
  copyButton.textContent = "Copied!";
  setTimeout(function () {
    copyButton.textContent = "Copy Text";
  }, 3000);
};
copyButton.addEventListener("click", copyText);
