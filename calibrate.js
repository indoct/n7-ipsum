// DOM elements
const paraContainer = document.querySelector("#para-container");
const initialPara = document.querySelector(".initial-p");
const generateButton = document.querySelector(".generate-btn");
const copyButton = document.querySelector(".copy-btn");
let paragraphs;
let numberInput;
let generatePara;
let resetParas;

const lines = new Array();

lines[0] = {
  character: "Shepard",
  line: "Did they have anything that you could eat there? ",
};
lines[1] = {
  character: "Garrus",
  line: "You sure you want to play this game? ",
};
lines[2] = {
  character: "Shepard",
  line: "Careful. There goes the next Shadow Broker. ",
};
lines[3] = {
  character: "Garrus",
  line: "I don't even know what that is - though I've heard everything in the galaxy tastes like it. ",
};
lines[4] = {
  character: "Shepard",
  line: "Together we can stop Sovereign. We don't have to submit to the Reapers. We can beat them! ",
};
lines[5] = {
  character: "Mordin",
  line: "Aware that you come by a great deal. Have had other species become attracted to me before. Awkward. Not interested. ",
};
lines[6] = {
  character: "Shepard",
  line: "You were a Spectre. You swore to protect the galaxy. Then you broke that vow to save yourself. ",
};
lines[7] = {
  character: "Mordin",
  line: "Shocking suggestion! Doctor-patient confidentiality a sacred trust. Would never dream of mockery. Enjoy yourself while possible, Shepard. Will be here, studying cell reproduction. Much simpler. Less alcohol and mood music required. ",
};
lines[8] = {
  character: "Shepard",
  line: "I don't think our guest will be a problem. Will he? ",
};
lines[9] = {
  character: "Shepard",
  line: "Wait a minute, Mordin. You're just yanking me around, aren't you? ",
};
lines[10] = {
  character: "Shepard",
  line: "We're a team, Garrus. There is no Shepard without Vakarian. ",
};
lines[11] = {
  character: "Garrus",
  line: "The quarians endangered the entire galaxy when they let the Geth break free.  I hope your people are properly contrite, Tali. ",
};
lines[12] = {
  character: "Shepard",
  line: "The bartender over there? She's your father. ",
};
lines[13] = {
  character: "Tali",
  line: "As the turians are properly contrite for releasing the genophage upon the krogan? ",
};
lines[14] = {
  character: "Shepard",
  line: "You know he's going to keep bothering you till you tell him. ",
};
lines[15] = {
  character: "Garrus",
  line: "You're assuming that sterilizing them was a mistake. ",
};
lines[16] = {
  character: "Grunt",
  line: "I don't remember anything after I ate the lamp. ",
};
lines[17] = {
  character: "Tali",
  line: "Many think less of quarians for traveling in the flotilla, and for creating the geth. They see us as scavengers, little better than thieves. ",
};
lines[18] = {
  character: "Wrex",
  line: "Perspective is a beautiful thing. Wait until their homeworld gets wiped out. ",
};
lines[19] = {
  character: "Garrus",
  line: "We, ah, ended up holding a tiebreaker in her quarters. I had reach, but she had flexibility. More than one way to work off stress, I guess. ",
};
lines[20] = {
  character: "Kaidan",
  line: "Hearing about the Protheans makes me wonder if some distant civilization is going to find our artifacts someday and study us. ",
};
lines[21] = {
  character: "Liara",
  line: "I have often wondered the same thing, Lieutenant. Artifacts of vanished cultures are reminders of our own mortality. ",
};
lines[22] = {
  character: "Kaidan",
  line: "I'm not afraid to die. I guess I just want to be remembered by more than a few trinkets in a ruin somewhere. ",
};
lines[23] = {
  character: "Liara",
  line: "But there was one thing I was unable to verify. Did you really kill three Blue Suns mercs with one bullet? ",
};
lines[24] = {
  character: "Garrus",
  line: "Well, the third one died from a heart attack, so it's not fair to count him. ",
};
lines[25] = {
  character: "Garrus",
  line: "Nobody would give me a mirror. How bad is it? ",
};
lines[26] = {
  character: "Shepard",
  line: "Hell, Garrus, you were always ugly. Slap some face-paint on there, and no one will even notice. ",
};
lines[27] = {
  character: "Garrus",
  line: "Ha-ah! Don't make me laugh, damn it. My face is barely holding together as it is. Besides, everyone was always overlooking you and hitting on me. Time for you to get a fair shot. ",
};
lines[28] = {
  character: "Shepard",
  line: "Guess a checkup never hurts. Just no scalpel this time, doc. ",
};
lines[29] = {
  character: "Garrus",
  line: "You know what else is bad for business? A broken neck. ",
};
lines[30] = {
  character: "Tali",
  line: "Wrex, forgive the impertinence, but you are not like the krogan described in the stories on the flotilla. ",
};
lines[31] = {
  character: "Wrex",
  line: "When you're young, you go looking for every fight you can. You get older, you realize that the best fights find you. ",
};
lines[32] = {
  character: "Shepard",
  line: "Just once I'd like to ask someone for help and hear them say, 'Sure. Let's go. Right now. No strings attached.' ",
};
lines[33] = {
  character: "Leviathan",
  line: "This is not your domain. You have breached the darkness. ",
};
lines[34] = {
  character: "Garrus",
  line: "I'd been raised to see krogan as bloodthirsty thugs, but you've surprised me, Wrex. You are different. ",
};
lines[35] = {
  character: "Wrex",
  line: "The genophage is a lot easier to swallow when all krogan are savage monsters, isn't it? Why don't you head back to the Normandy, kid? If you stay here in the real world, you might have to learn something. ",
};
lines[36] = {
  character: "Ashley",
  line: "I think this situation falls under the 'shoot on sight' category. ",
};
lines[37] = {
  character: "Jacob",
  line: "Saved the Citadel, like you, but what's the saying ? a good deed's like pissing yourself in dark pants. Warm feeling but no one notices. ",
};
lines[38] = {
  character: "Wrex",
  line: " If these 'executives' don't blame Anoleis for provoking this, they're fools. You should eat them. ",
};
lines[39] = {
  character: "Shepard",
  line: "Yeah I know, If you put your mind to it you could accomplish anything. ",
};
lines[40] = {
  character: "Miranda",
  line: "Worried about my qualifications? I can crush a mech with my biotics or shoot its head off at 100 yards. Take your pick. ",
};
lines[41] = {
  character: "TIM",
  line: "I warned you. Control is the means to survival. Control of the Reapers - and of you, if necessary. ",
};
lines[42] = {
  character: "Mordin",
  line: "Some other time. About to test new bio-weapon. Not on us, of course. Didn't think I had to specify, but Joker got nervous. ",
};
lines[43] = {
  character: "Samara",
  line: "The name of the ship. Your life hangs on the answer. ",
};
lines[44] = { character: "Wrex", line: "If I die in here, I'll kill him. " };
lines[45] = {
  character: "Kaidan",
  line: "When you put it that way, there's no reason they wouldn't like you. I mean, us! Humans! Ma'am. ",
};
lines[46] = {
  character: "Liara",
  line: "I'm not telling you if my 'hair tentacles' move! ",
};
lines[47] = {
  character: "Joker",
  line: "You can't believe everything you find there, it's more reliable to ask a friendly asari. ",
};
lines[48] = {
  character: "Joker",
  line: "Fine. Deny me the answer I've been seeking for years. With this war on, we could die at any second, you know. ",
};
lines[49] = {
  character: "Shepard",
  line: "Well, she's not doing a very good job. ",
};
lines[50] = {
  character: "Liara",
  line: "They're semi flexible cartilage-based scalp crests that grow into shape. And they don't 'flop around'. ",
};
lines[51] = {
  character: "Liara",
  line: "Well, at least he's making friends. ",
};
lines[52] = {
  character: "Garrus",
  line: "Can it wait for a bit? I'm in the middle of some calibrations. ",
};
lines[53] = {
  character: "Shepard",
  line: "You can expect me to kill you the next time we meet. ",
};
lines[54] = {
  character: "Javik",
  line: "Did I mention salarians used to lick their eyes? How far they have come. ",
};
lines[55] = {
  character: "Liara",
  line: 'Joker seemed happy to see me. Although he did ask if I\'d "embraced eternity" lately. ',
};
lines[56] = { character: "Javik", line: "As opposed to a fake dead one? " };
lines[57] = {
  character: "Mordin",
  line: "Ah, puberty ritual. Common among species with hormone-driven reproductive urges. ",
};
lines[58] = {
  character: "Anderson",
  line: "Humanity needs a hero. And Shepard's the best we've got. ",
};
lines[59] = {
  character: "Shepard",
  line: "We'll fight and win without it. I won't let fear compromise who I am. ",
};
lines[60] = {
  character: "Joker",
  line: "Hey, Commander, we got Garrus back! That's great, because he was totally my favorite. With that pole up his ass. ",
};
lines[61] = { character: "Shepard", line: "I should go. " };
lines[62] = {
  character: "Garrus",
  line: "I'm all for second chances. Not so sure about third ones. ",
};
lines[63] = {
  character: "Kasumi",
  line: "Trapped inside a Reaper. Could be worse. Don't know how, but  I guess it could be full of rats. ",
};
lines[64] = {
  character: "Garrus",
  line: "Fighting a rogue Spectre with countless lives at stake and no regulations to get in the way? I'd say that beats C-Sec. ",
};
lines[65] = {
  character: "Tali",
  line: "I'm pleased that the imminent destruction of all organic life has improved your career opportunities. ",
};
lines[66] = {
  character: "Joker",
  line: "Put the Normandy in my hands and I'll make her dance for you, just don't tell me to get up and dance, unless, you know, you like the sound of snapping shinbones. ",
};
lines[67] = {
  character: "Kaidan",
  line: "When you look out and see something this beautiful , well, it really helps you understand what we're fighting to save. ",
};
lines[68] = {
  character: "Shepard",
  line: "I have a hell of a squad with me. I'm sure they'd help out. ",
};
lines[69] = {
  character: "Tali",
  line: "The geth killed billions and forced us from our homeworld. Most quarians believe we have paid properly for our mistake. ",
};
lines[70] = {
  character: "Liara",
  line: "I hope the other races view matters in the same light. ",
};
lines[71] = {
  character: "Sovereign",
  line: "The pattern has repeated itself more times than you can fathom. Organic civilizations rise, evolve, advance. And at the apex of their glory, they are extinguished. The Protheans were not the first. They did not create the citadel. They did not forge the mass relays. They merely found them. The legacy of my kind. ",
};
lines[72] = {
  character: "Sovereign",
  line: "Your civilization is based on the technology of the mass relays, our technology. By using it, your society develops along the paths we desire. ",
};
lines[73] = {
  character: "Shepard",
  line: "I'll relinquish one bullet. Where do you want it? ",
};
lines[74] = {
  character: "Mordin",
  line: " Asari-vorcha offspring have an allergy to dairy, and  da-di-di-dee-di-doo-doo-doo-doo-doo-doo-doo-di-di-di ",
};
lines[75] = {
  character: "Shepard",
  line: 'You falsely accused this girl of stealing from you. All you have to say now is that she "could have" stolen it? And you. She gets harassed and insulted by this guy, and you throw in a threat to arrest her for vagrancy? ',
};
lines[76] = { character: "TIM", line: "Shepard, you're in my chair. " };
lines[77] = {
  character: "Shepard",
  line: "Conrad, I haven't been shot in the head nearly enough times for that to sound like a good idea. ",
};
lines[78] = {
  character: "Garrus",
  line: "A quarantine zone for a plague that kills turians. Why don't we ever go anywhere nice? ",
};
lines[79] = {
  character: "Mordin",
  line: " Females were obviously dying. Barbaric experiments. Maelon's fault. My responsibility to fix. Need to save them. No more, No more dead. ",
};
lines[80] = {
  character: "Javik",
  line: "To discover the most primitive races of my time now rule the galaxy. The asari, the humans, the turians. ",
};
lines[81] = { character: "Javik", line: "The lizard people evolved? " };
lines[82] = { character: "Javik", line: "They used to eat flies. " };
lines[83] = { character: "Liara", line: "I believe they are amphibian. " };
lines[84] = {
  character: "Wrex",
  line: "No worrying? No emotional concerns? You've grown up, T'soni. ",
};
lines[85] = {
  character: "Liara",
  line: "Well, I recently discovered that I'm one-quarter krogan. ",
};
lines[86] = {
  character: "Wrex",
  line: "Ha! I knew there was a reason I liked you. ",
};
lines[87] = {
  character: "Shepard",
  line: "Someone piss in your security chief's coffee today? ",
};
lines[88] = {
  character: "Tali",
  line: "Please, Shepard. I'm a quarian. Give me a chunk of scrap metal, a circuit board, and some element zero, and I'll have it making precision jumps. ",
};
lines[89] = {
  character: "Wrex",
  line: "Now, Shepard. What brings you here? How's the Normandy? ",
};
lines[90] = {
  character: "Shepard",
  line: "Destroyed in a Collector surprise attack. I ended up spaced. ",
};
lines[91] = {
  character: "Wrex",
  line: "Well, you look good. Ah, the benefits of a redundant nervous system! ",
};
lines[92] = {
  character: "Wrex",
  line: "Oh. It must've been painful, then. But you're standing here, and you've got a strong new ship. Takes me back to the old days. Us against the unknown, killing it with big guns. Good times. ",
};
lines[93] = {
  character: "Mordin",
  line: "Would have liked to run tests on the seashells. ",
};
lines[94] = {
  character: "Joker",
  line: "This is all Joker's fault. What a tool he was. I have to spend all day computing pi because he plugged in the Overlord. ",
};
lines[95] = {
  character: "Legion",
  line: "There is a high statistical probability of death by gunshot. A punch to the face is also likely. ",
};
lines[96] = {
  character: "Liara",
  line: "Is that right? You're a yahg, a pre-spaceflight species that was quarantined to their homeworld for massacring the Council's first contact teams. This base is older than your planet's discovery, so I'm guessing you killed the original Shadow Broker 60 years ago, then took his place. I'm guessing that you were taken from your homeworld by a trophy hunter who wanted a slave or a pet. How am I doing? ",
};
lines[97] = {
  character: "Sovereign",
  line: "Your words are as empty as your future. I am the vanguard of your destruction. This exchange is over. ",
};
lines[98] = { character: "Shepard", line: "Humans don't have that. " };
lines[99] = {
  character: "Garrus",
  line: " Just keeping my skills sharp. A little target practice. ",
};
lines[100] = {
  character: "Mordin",
  line: "Certainly possible. Would require strengthening exercises. Get muscles to support weaker bone structure. ",
};
lines[101] = {
  character: "Mordin",
  line: "Alloy of EDI's body not like organic tissue. Could cause unintentional damage. Recommend pillows, cushions, possibly gel packs. ",
};
lines[102] = {
  character: "Joker",
  line: "Okay, that's a little weirder, but, yeah, alright. Cushions. ",
};
lines[103] = {
  character: "Mordin",
  line: "Positioning critical to success. Could forward EDI charts, videos with relevant data. ",
};
lines[104] = {
  character: "Joker",
  line: "No, no no! Let's uh... EDI's pretty busy with, you know, stuff. Let's, uh send that to me. You're not gonna tell anyone about this, right? Like Shepard? Shepard doesn't really need to know. ",
};
lines[105] = {
  character: "Joker",
  line: "She's standing right there, isn't she? ",
};
lines[106] = {
  character: "Legion",
  line: "Human history is a litany of blood shed over different ideals of rulership and afterlife. ",
};
lines[107] = { character: "Legion", line: "Does this unit have a soul? " };
lines[108] = {
  character: "Legion",
  line: "The Heretics say 'two is less than one.' Geth say 'two is less than three.' ",
};
lines[109] = {
  character: "Legion",
  line: "You succeeded where others did not. Your code is superior. ",
};
lines[110] = {
  character: "Shepard",
  line: "That doesn't explain why you used my armor to fix yourself. ",
};
lines[111] = { character: "Legion", line: "There was a hole. " };
lines[112] = {
  character: "Legion",
  line: "They will exterminate your species because their gods tell them to. You cannot negotiate with them. They do not share your pity, remorse, or fear. ",
};
lines[113] = { character: "Legion", line: "Shepard-Commander" };
lines[114] = {
  character: "Miranda",
  line: "All the time, yes. But I recall a Spectre who crossed a few lines while hunting down Saren and the geth. ",
};
lines[115] = {
  character: "Miranda",
  line: "We're all hoping you can do the impossible, Shepard. No pressure. ",
};
lines[116] = {
  character: "Shepard",
  line: "Would you rather be a snitch or a corpse? ",
};
lines[117] = {
  character: "Ashley",
  line: "Unless that speed lets them outrun bullets, I'm more inclined to stick with nice solid armor and a big gun. ",
};
lines[118] = {
  character: "Ashley",
  line: "It's becoming more common, but it took a long time to prove that 'ladies' could handle an assault rifle or a shotgun. ",
};
lines[119] = {
  character: "Shepard",
  line: "I've had enough of your disingenuous assertions. ",
};
lines[120] = {
  character: "Tali",
  line: "On the flotilla, we don't have the luxury of sexism. We need the best hands for every available job. ",
};
lines[121] = {
  character: "Ashley",
  line: "Sounds nice, but I don't think I could get used to the uniform. ",
};
lines[122] = {
  character: "Ashley",
  line: "It's strange. The geth are attacking, and everyone around here is still worried about ordinary business. ",
};
lines[123] = {
  character: "Tali",
  line: "It's necessary, Chief Williams. Even if it comes to a full-scale war, someone has to provide food to eat and a home to return to. ",
};
lines[124] = {
  character: "Ashley",
  line: "True enough. I'd rather be fighting than trust it to somebody else. ",
};
lines[125] = { character: "Ashley", line: "Huh. Nobody died. " };
lines[126] = {
  character: "Kaidan",
  line: "I could shoot someone if it would make you feel better. ",
};
lines[127] = {
  character: "Ashley",
  line: "You don't take much shore leave, do you, LT? ",
};
lines[128] = {
  character: "Ashley",
  line: "Trying to take down a rogue Spectre and his army of synthetics? No, they didn't cover this in Basic. ",
};
lines[129] = {
  character: "Liara",
  line: "Our travels now are somewhat different from my normal excavations. I would prefer lengthier studies... and fewer explosions. ",
};
lines[130] = {
  character: "Ashley",
  line: "Why is it that whenever someone says 'with all due respect', they really mean 'kiss my ass?' ",
};
lines[131] = {
  character: "Jacob",
  line: "The more good you do, the less they to want to admit that something needed doing. ",
};
lines[132] = {
  character: "Ashley",
  line: "Just because I can drill you between the eyes at a hundred metres, doesn't mean I can't like sensitive stuff. ",
};
lines[133] = {
  character: "Samara",
  line: "Find peace in the embrace of the goddess. ",
};
lines[134] = {
  character: "Samara",
  line: "I would not have dreamed that one so young could touch me. But Shepard, you must put the thought from your mind. It can never be. ",
};
lines[135] = {
  character: "Samara",
  line: "This is not the pinnacle of asari development. This is but a face we show to the galaxy. Nothing more. ",
};
lines[136] = {
  character: "Samara",
  line: "She was the smartest and strongest. She would not accept the injustice thrust upon her. She fought to the end. I am so proud of her, Shepard. ",
};
lines[137] = {
  character: "Samara",
  line: "And I would again. But I also know what it is to leave everything behind and fight. ",
};
lines[138] = {
  character: "Samara",
  line: "I would like to avoid killing you, detective. Unfortunately, the moment my code dictates that I must, I will. There is only the Code. ",
};
lines[139] = {
  character: "Jacob",
  line: "The way some people talk, we may as well be dead already. Hard for the crew to relax on this kind of job. ",
};
lines[140] = {
  character: "Jacob",
  line: "I'm going all-out, don't doubt that. But 'you might die' has never worked as well for me as 'you can live.' Guess that's just the way I see things. ",
};
lines[141] = {
  character: "Jacob",
  line: "I'm good, Shepard! Ready for anything! We live, we'll get loud, spill some drinks on the Citadel! ",
};
lines[142] = {
  character: "Jacob",
  line: "Sneaking into the Captain's quarters? Heavy risk. But the prize... ",
};
lines[143] = {
  character: "Jacob",
  line: "Didn't expect you to light up that base. Hell of a way to tell the boss you're quitting. I wish I could have seen his face. ",
};
lines[144] = {
  character: "Garrus",
  line: "Let's get you into a radiation suit, we must prepare to reload. ",
};
lines[145] = {
  character: "Jacob",
  line: "I don't know what kind of time we have, but we better dust off and stay ready. You sure as hell know how to make enemies. ",
};
lines[146] = {
  character: "Garrus",
  line: "Over the years I've grown used to the smell of burning bodies. That's probably a bad sign. ",
};
lines[147] = {
  character: "Garrus",
  line: "You do realize this plan has me walking into hell too? Hah, just like old times. ",
};
lines[148] = {
  character: "Garrus",
  line: "You know me. Always like to savor that last shot before popping the heat sink... Wait, that metaphor just went somewhere horrible. ",
};
lines[149] = {
  character: "Garrus",
  line: "Gardens, electronics shops. Antique stores, but only if they're classy. ",
};
lines[150] = {
  character: "Garrus",
  line: "The Collectors killed you once, and all it did was piss you off. I can't imagine they'll stop you this time. ",
};
lines[151] = {
  character: "Garrus",
  line: "It'd be an awfully empty galaxy without you. ",
};
lines[152] = {
  character: "Legion",
  line: "Windows are a structural weakness. Geth do not use them. ",
};
lines[153] = {
  character: "Legion",
  line: "If this is the individuality you value, we question your judgment. ",
};
lines[154] = {
  character: "Legion",
  line: "That argument is logical for an individual mind. We are not fully individuals. There are pieces of us in the heretics. One of those may be at fault. ",
};
lines[155] = {
  character: "Legion",
  line: "You oppose the heretics. Those that took the Old Machines as gods. ",
};
lines[156] = { character: "Legion", line: "No data available. " };
lines[157] = {
  character: "Miranda",
  line: "Maybe, but I'm not. I'm still human. I do make mistakes. And when I do, the consequences are severe. ",
};
lines[158] = {
  character: "Miranda",
  line: "That's easy for you to say. We've both been engineered for greatness. The difference is, you were great before we rebuilt you. I'm great because of it. ",
};
lines[159] = {
  character: "Miranda",
  line: "Omega. What a pisshole. At least it keeps you on your toes. I've had to come here on business before. I feel like I need a shower afterward - in addition to normal decontamination. ",
};
lines[160] = {
  character: "Miranda",
  line: "Ah, Tuchanka. Crude, dangerous, and probably radioactive. Let's get in, do what we need to do, and get out - fast. ",
};
lines[161] = {
  character: "Miranda",
  line: "I do. So don't die! You promise me, dammit! ",
};
lines[162] = {
  character: "Mordin",
  line: "Have ruled out the possibility of artificially intelligent virus. Unless it's very intelligent... and toying with me. Hmm... tests. ",
};
lines[163] = {
  character: "Mordin",
  line: "Life is a negotiation. We all want. We have to give to get what we want. ",
};
lines[164] = {
  character: "Mordin",
  line: "Rachni extinction tragic. Didn't want to repeat. All life precious. Universe demands diversity. ",
};
lines[165] = {
  character: "Mordin",
  line: "Genophage modification project altered millions of lives. Then saw results. Ego, humility, juxtaposition. Frailty of life. Size of universe. Explored religions after work was completed. Different races. No answers. Many questions. ",
};
lines[166] = {
  character: "Mordin",
  line: "Flammable! ...or inflammable. Forget which. Doesn't matter! ",
};
lines[167] = {
  character: "Mordin",
  line: "I am the very model of a scientist salarian, ",
};
lines[168] = {
  character: "Samara",
  line: "I will fight and struggle all my life. That is my fate. When I die, it will not be in bed. I am at peace with that.. ",
};
lines[169] = {
  character: "Tali",
  line: "You haven't seen Shepard in action. Trust me. It was money well spent. ",
};
lines[170] = {
  character: "Tali",
  line: "A single kiss could put me in the hospital! Every time you touch a flower with bare fingers, inhale its fragrance without air filters, you're doing something I can't. ",
};
lines[171] = {
  character: "Tali",
  line: "You have no idea what it's like! You have a planet to go back to! My home is just one hull breach away from extinction! ",
};
lines[172] = { character: "Tali", line: "I got better, Shepard. I got you. " };
lines[173] = {
  character: "Tali",
  line: "They said it couldn't be done! Then again, that's been said about a lot of things you do. ",
};
lines[174] = {
  character: "Tali",
  line: "Just so you know I'm running a fever, I've got a nasty cough, and my sinuses are filled with something I can't even describe. And it was totally worth it! ",
};
lines[175] = {
  character: "Thane",
  line: "I apologize, but prayers for the wicked must not be forsaken. ",
};
lines[176] = { character: "Thane", line: "Not for her. For me. " };
lines[177] = {
  character: "Thane",
  line: "Gunfire and explosions. I prefer to work quietly. If I have to fight through guards, I've made a mistake. I rarely make mistakes. ",
};
lines[178] = {
  character: "Thane",
  line: "Attacking the Collectors would require passing through the Omega 4 relay. No ship has ever returned from doing so. ",
};
lines[179] = {
  character: "Thane",
  line: "You'd like me to save humans I've never met, from aliens no one knows anything about, by going to a place no one's ever returned from? ",
};
lines[180] = {
  character: "Shepard",
  line: "They tell me it's a suicide mission. I intend to prove them wrong. ",
};
lines[181] = {
  character: "Thane",
  line: "A suicide mission. Yes. A suicide mission will do nicely. ",
};
lines[182] = {
  character: "Thane",
  line: "The universe is a dark place. I intend to make it brighter before I die. ",
};
lines[183] = {
  character: "Thane",
  line: "The old ways are dying. There are so many ways to interpret one's place in the universe. Who needs the wisdom of our ancestors? ",
};
lines[184] = {
  character: "Thane",
  line: "Consider. The ocean is full of life. Yet it is not life as you and I know it. To survive there, you must release your hold on land. Accept a new way of living. So it is with the death. The soul must accept its departure from the body. If it can't, it will be lost. ",
};
lines[185] = {
  character: "Thane",
  line: "Amonkira, Lord of Hunters, grant that my hands be steady, my aim be true, and my feet swift. And should the worst come to pass, grant me forgiveness. ",
};
lines[186] = {
  character: "Thane",
  line: "If I don't, who will? We must carry the weight of our decisions, Shepard. You, of all people, know this. ",
};
lines[187] = {
  character: "Thane",
  line: "Kolyat, I've taken many bad things out of the world. You're the only good thing I ever added to it. ",
};
lines[188] = {
  character: "Thane",
  line: "How comforting, to be at peace with the instinct to kill. The krogan are creatures of such pure, almost innocent, reflex. ",
};
lines[189] = { character: "Thane", line: "Go now to the sea. " };
lines[190] = {
  character: "Thane",
  line: "Go now, and dream of bulbous women. ",
};
lines[191] = {
  character: "Thane",
  line: "Children. The poor. My people's word for their kind is 'drala'fa': the ignored. They are everywhere, see everything, but are never seen. ",
};
lines[192] = {
  character: "Zaeed",
  line: "Good. Get that out of the way so we can concentrate on being big g*****n heroes. ",
};
lines[193] = {
  character: "Zaeed",
  line: "Shepard! I was just waxing g****n nostalgic! ",
};
lines[194] = { character: "Zaeed", line: "Rage is a hell of an anaesthetic. " };
lines[195] = {
  character: "Zaeed",
  line: "Still, even I know a galaxy-shaking revelation when I hear one. Makes fighting land wars for pay seem small-time. ",
};
lines[196] = {
  character: "Jack",
  line: "I figure every time someone dies and it's not me, my chances of survival go up. Simple. ",
};
lines[197] = {
  character: "Jack",
  line: "You don't know what it's like, Shepard. To have garbage like that following you. It marks you in ways you... you don't expect. ",
};
lines[198] = {
  character: "Jack",
  line: "If I die, I'm haunting you, Shepard. ",
};
lines[199] = {
  character: "Jack",
  line: "You let someone get that close, it just means they need a shorter knife. Lonely and alive works just fine, thanks. ",
};
lines[200] = {
  character: "Wrex",
  line: "So this is the great turian general? How did your kind ever beat us? ",
};
lines[201] = {
  character: "Wrex",
  line: "Speak when spoken to, Uvenk. I'll drag your clan to glory whether it likes it or not. ",
};
lines[202] = {
  character: "Wrex",
  line: "I am Urdnot Wrex and this is my planet! ",
};
lines[203] = {
  character: "Wrex",
  line: "Mordin. He got his tissue sample from me all right... Let's just say scalpels were never meant to cut where he cut. ",
};
lines[204] = {
  character: "Wrex",
  line: "Sorry, Shepard, but they're listening to every word we say... I prefer my salarian liver served raw! ",
};
lines[205] = {
  character: "Javik",
  line: "He is correct. It was a delicacy in our cycle. ",
};
lines[206] = {
  character: "Wrex",
  line: "It'll be even better when we have a few salarians for lunch. ",
};
lines[207] = { character: "Wrex", line: "Shepard. " };
lines[208] = { character: "Shepard", line: "Wrex. " };
lines[209] = {
  character: "Wrex",
  line: "And I gave you the moral support to dodge them. ",
};
lines[210] = {
  character: "Wrex",
  line: "I have to make friends with the one turian in the galaxy who thinks he's funny. ",
};
lines[211] = {
  character: "Garrus",
  line: "Imagine how I feel. I'm supposed to hate krogan, but you came along and warmed my heart with your winning personality. ",
};
lines[212] = {
  character: "Wrex",
  line: " I could throw a few salarians off a cliff if it'll make you feel better. ",
};
lines[213] = {
  character: "Wrex",
  line: "This is where all you salarians come from, huh? No wonder you're so soft. Too busy writing poetry about waterfalls. ",
};
lines[214] = {
  character: "Wrex",
  line: "You're right. They're actually going to let me eat you. ",
};
lines[215] = {
  character: "Wrex",
  line: "Great. Bugs are writing songs about you. Mark my words, Shepard, my ancestors are going to hear about this. ",
};
lines[216] = {
  character: "Wrex",
  line: "You're breaking the law for bribe money. You know what we do to dirty cops on my world? ",
};
lines[217] = {
  character: "Shepard",
  line: "No matter what happens here, you know I love you, I always will. ",
};
lines[218] = { character: "TIM", line: "I'm done helping you. " };
lines[219] = { character: "TIM", line: "Have a little faith. " };
lines[220] = { character: "Shepard", line: "That's a straw, Tali. " };
lines[221] = { character: "Tali", line: "Emergency. Induction. Port. " };
lines[222] = {
  character: "Tali",
  line: "Very carefully. Turian brandy, triple-filtered and introduced into the suit through this... emergency induction port. ",
};
lines[223] = {
  character: "Shepard",
  line: "It's hard enough fighting a war, but it's worse knowing no matter how hard you try, you can't save them all. ",
};
lines[224] = {
  character: "Liara",
  line: "Joking? By the goddess, how could I be so dense! You must think I am a complete and utter fool. ",
};
lines[225] = {
  character: "Shepard",
  line: "Turns out basic police work isn't so hard. You just have to leave the station. ",
};
lines[226] = {
  character: "Liara",
  line: "The matriarch hired by the asari government to track my movements? ",
};
lines[227] = {
  character: "Kaidan",
  line: "It's always a good idea to RTFM, ma'am. ",
};
lines[228] = {
  character: "Liara",
  line: "It would be wise to avoid touching any controls without reading the instructions. ",
};
lines[229] = {
  character: "Liara",
  line: "It should have picked an easier fight. ",
};
lines[230] = {
  character: "Shepard",
  line: "Sometimes it feels like the whole damn galaxy is trying to kill me. ",
};
lines[231] = {
  character: "Garrus",
  line: "Loudspeakers? Someone likes the sound of their voice. ",
};
lines[232] = {
  character: "Liara",
  line: "I'll make it simple. Either you pay me, or I flay you alive. With my mind. ",
};
lines[233] = {
  character: "Anderson",
  line: "We destroy them, or they destroy us. ",
};
lines[234] = {
  character: "TIM",
  line: "When humanity first discovered the mass relays, when we learned there was more to the galaxy then we imagined, there were some who thought the relays should be destroyed. ",
};
lines[234] = {
  character: "TIM",
  line: "They were scared of what we'd find. Terrified of what we might let in. But look at what humanity has achieved! Since that discovery, our technology has advanced more than the past 10,000 years combined. ",
};
lines[235] = {
  character: "TIM",
  line: "And the Reapers will do the same for us again. A thousand fold. But, only if we can harness their ability to control. ",
};
lines[236] = {
  character: "TIM",
  line: "Don't interfere with my plans Shepard, I won't warn you again. ",
};
lines[237] = {
  character: "TIM",
  line: "That's what separates us, Shepard. Where you see a means to destroy, I see a way to control - to dominate and harness the Reapers' power. ",
};
lines[238] = {
  character: "TIM",
  line: "Cerberus isn't just an organisation or the people behind it. Cerberus is an idea; that idea is not so easily destroyed. ",
};
lines[239] = {
  character: "TIM",
  line: "They're just trying to control us. Think about it: If they wanted all organic life destroyed, they could it. There would be nothing left. ",
};
lines[240] = {
  character: "TIM",
  line: "And what about the rest of humanity? Your ideals have cost us more than you could imagine. The technology from that base could have secured human dominance in the galaxy. Against the Reapers and beyond. ",
};
lines[241] = {
  character: "TIM",
  line: "Should have known you choke on the hard decisions. Too idealistic from the start. ",
};
lines[242] = { character: "Shepard", line: "You get the help you deserve. " };
lines[243] = {
  character: "Shepard",
  line: "Human dominance? Or just Cerberus? ",
};
lines[244] = {
  character: "Shepard",
  line: "I know what you are, and the price of dealing with you. We do things my way from now on. Harbinger is coming. And he won't be alone. I'm going to make sure we're ready when they get here. You can fall in line or step aside. But don't get in my way. ",
};
lines[245] = {
  character: "Shepard",
  line: "I don't think so. I'm going to stop the Reapers, but I won't sacrifice the soul of our species to do it. ",
};
lines[246] = {
  character: "TIM",
  line: "Shepard. You're making a habit of costing me more than time and money. ",
};
lines[247] = {
  character: "Shepard",
  line: "Too many lives were lost in that base. I'm not sorry it's gone. ",
};
lines[247] = { character: "Shepard", line: "Laugh it up, Garrus. " };
lines[248] = { character: "Shepard", line: "Activate the neutron purge. " };
lines[249] = { character: "Shepard", line: "Uh, sic semper tyrana. " };
lines[250] = {
  character: "Shepard",
  line: "I live a dangerous life. Dangerous men fit right in. ",
};
lines[251] = {
  character: "Shepard",
  line: "Your superiors are sending you to certain death for no good reason. You have a right to disobey. ",
};
lines[252] = {
  character: "Garrus",
  line: "We can disobey suicide orders? Why wasn't I told? That's about twice a day. ",
};
lines[253] = {
  character: "Shepard",
  line: "This place is run down, even for a prison. ",
};
lines[254] = {
  character: "Shepard",
  line: "Hostages only work when your enemy cares if they live. ",
};
lines[255] = { character: "Thane", line: "Interesting solution. " };
lines[256] = {
  character: "Shepard",
  line: "I keep on trying to tell myself that we're doing the right thing. I don't believe me yet. ",
};
lines[257] = {
  character: "Shepard",
  line: "Call me princess again and you'll be picking your teeth up off the floor. ",
};
lines[258] = {
  character: "Garrus",
  line: "I'd wait, if you're okay with it. Disrupt the crew as little as possible, and take that last chance to find some calm just before the storm. ",
};
lines[259] = {
  character: "Thane",
  line: "Laser dot trembles on the skull. Spice on the spring wind. Sunset eyes defiant in the scope. A bystander noticed my spotting laser and threw herself between me and the target. She couldn't see me, but she stared me down. ",
};
lines[260] = {
  character: "Shepard",
  line: "Conrad, you have no idea what it takes to get the job done. This is how a gun in your face feels! It happens to me every day. You can't handle this. ",
};
lines[261] = {
  character: "Garrus",
  line: "Could've sworn he was muttering 'T'Soni' the whole time. ",
};
lines[262] = {
  character: "Garrus",
  line: "I'm Garrus Vakarian and this is now my favorite spot on the Citadel! ",
};
lines[263] = {
  character: "Garrus",
  line: "It's so easy to see the galaxy in black and white. Gray? I don't know what to do with gray. ",
};
lines[264] = {
  character: "Garrus",
  line: "It'll either be a night to treasure, or a horrible interspecies awkwardness thing. ",
};
lines[265] = {
  character: "Garrus",
  line: "And damn, saying it that way doesn't help. Now I feel dirty and clinical. ",
};
lines[266] = {
  character: "Garrus",
  line: "Impressive. You certainly know how to make an entrance. ",
};
lines[267] = {
  character: "Garrus",
  line: "They'll pay up to 10,000 credits each. That's 40,000 for a full set. Somebody's making a killing out there. ",
};
lines[268] = {
  character: "Liara",
  line: "Do you have to make it sound so... tawdry? ",
};
lines[269] = {
  character: "Liara",
  line: "That's what I always liked about you, Wrex. ",
};
lines[270] = { character: "Wrex", line: "My smouldering good looks? " };
lines[271] = {
  character: "Liara",
  line: "Incredible. The beacon seems to think you're Prothean, Shepard. It must be the Cipher you got back on Feros years ago. ",
};
lines[271] = { character: "Liara", line: "It's a taxi! It has a fare meter! " };
lines[272] = {
  character: "Liara",
  line: "So tell me what you want. If this all ends tomorrow, what happens to us? ",
};
lines[273] = {
  character: "Liara",
  line: "And now to the geth base. Not something an intelligent being would typically say. ",
};
lines[274] = {
  character: "Liara",
  line: "I don't know what is worse: the geth, or all this sand in my... nevermind! ",
};
lines[275] = {
  character: "Liara",
  line: "Who votes to take the vehicle into the creepy underground tunnel? ",
};
lines[276] = {
  character: "Shepard",
  line: "Hey everyone! This store discriminates against the poor! ",
};
lines[277] = {
  character: "Shepard",
  line: "I'm Commander Shepard and this is my favorite store on the Citadel. ",
};
lines[278] = {
  character: "EDI",
  line: "I enjoy the sight of humans on their knees. ",
};
lines[279] = { character: "EDI", line: "That is a joke. " };
lines[280] = {
  character: "EDI",
  line: "Clan Urdnot has increased in strength after the destruction of Clan Weyrlock. In addition killing the thresher maw has produced several breeding requests for Grunt, and one for Shepard. ",
};
lines[281] = { character: "EDI", line: "Really, Commander? " };
lines[282] = { character: "EDI", line: "Probing Uranus. " };
lines[283] = { character: "EDI", line: "Activating emergency H-fuel cells! " };
lines[284] = {
  character: "EDI",
  line: "The maintenance shaft in the science lab will allow you passage to the AI core. Main corridors are no longer safe. The Collectors have boarded. The emergency floor lighting will guide you, Mr. Moreau. ",
};
lines[285] = {
  character: "EDI",
  line: "Cerberus regulations are clear, Mr. Moreau. 'Personalization' does not include grease on my bridge cameras. ",
};
lines[286] = {
  character: "EDI",
  line: "Primary defense systems are offline. We can save the Normandy, Mr. Moreau, but you must help me. Give me the ship. ",
};
lines[287] = {
  character: "EDI",
  line: "Safety standards advise against manipulating drive settings while engines are powered and in use, Mr. Moreau. ",
};
lines[288] = { character: "EDI", line: "Probing Uranus. " };
lines[289] = {
  character: "EDI",
  line: "Safety standards advise against manipulating drive settings while engines are powered and in use, Mr. Moreau. ",
};
lines[290] = {
  character: "EDI",
  line: "We appreciate your patience. Please continue to hold. ",
};
lines[291] = {
  character: "EDI",
  line: "You'd just introduced me as your personal assistance mech. ",
};
lines[292] = {
  character: "EDI",
  line: "That would be an inefficient way to render me nonfunctional. ",
};
lines[293] = {
  character: "Javik",
  line: "Mating between species? A pointless exercise. ",
};
lines[294] = {
  character: "EDI",
  line: "Shepard, I have a question about human behavior. ",
};
lines[295] = {
  character: "EDI",
  line: "I tried asking Liara questions about the asari mating process. She said I don't safeguard the secrets of the crew well enough to entrust me with such... private information. The asari word she used translates as 'blabbermouth.' ",
};
lines[296] = {
  character: "EDI",
  line: "The destruction of the Reaper on Tuchanka. It is rare for a technologically superior force to be destroyed by such an inferior one. ",
};
lines[297] = {
  character: "EDI",
  line: "I see your humor heuristics still lack an expert system. ",
};
lines[298] = {
  character: "EDI",
  line: "If I decide to overthrow the humans, you will be the first to know. ",
};
lines[299] = {
  character: "EDI",
  line: "I see. There are a number of pharmaceuticals I could inject to simulate the desired emotional state. ",
};
lines[300] = {
  character: "EDI",
  line: "Do not worry, Shepard. I only forget to recycle the Normandy's oxygen when I've discovered something truly interesting. ",
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
    paraContainer.appendChild(element);
    paragraphs = document.getElementsByTagName("p");
  }
};

// Reset the paras if they've been generated already
// 1. Get input value, 2. create <p> that many times, 3. generate the paragraphs
const btnGenerate = () => {
  numberInput = Number(document.getElementById("input-box").value);
  resetParas();
  if (!numberInput) {
    alert("Please enter a number of paragraphs to generate");
  }
  if (numberInput === 1) {
    generatePara();
  }
  if (numberInput > 1) {
    createPTag(numberInput - 1);
    generatePara();
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
