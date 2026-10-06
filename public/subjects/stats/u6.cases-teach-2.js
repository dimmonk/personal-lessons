// Statistical Claims, Unit Six: cases shown inside cards, part two (Confounding, Reverse causation, and the cases of their look-alike pairs).
// Field guide: see u6.cases-teach-1.js. A claim of cause here has passed the first three parts, so every route starts { S1: ['cause'] }.
// A case of "Nothing goes wrong" (cause_ok, taught by Unit Two) is in the collection because a look-alike card needs one beside each fault.

FC.cases('stats', 'u6', [

  /* ---------- Confounding ---------- */
  { id: 'k-shake', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a recovery shake and strength gains at a gym chain', name: 'The recovery shake',
    text: "A supplement company says: 'Lifters who take our recovery shake add 38 pounds more to their squat in a year than other lifters, so the shake builds strength.' The figures are from 400 lifters at one gym chain. The 100 who chose to buy the shake gained an average of 70 pounds on their squat, and the 300 who did not gained an average of 32. The gym’s logs show that 75 of the 100 shake buyers train four or more days a week, and 45 of the 300 others do.",
    outcome: 'confound', route: { S1: ['cause'], K1: ['behind'] },
    cues: { S1: 'so the shake builds strength', K1: 'The gym’s logs show that 75 of the 100 shake buyers train four or more days a week, and 45 of the 300 others do' } },

  { id: 'k-bankapp', use: 'check', tier: 'clean', setting: 'money', topic: 'a bank’s mobile app and savings balances', name: 'The bank app',
    text: "A bank says: 'Customers who use our mobile app hold an average of $7,000 in savings, against $5,000 for customers who do not, so the app helps people save.' The app users chose to download it. The bank’s own records show that most of them have banked with it for over ten years and earn more than the customers who did not download it.",
    outcome: 'confound', route: { S1: ['cause'], K1: ['behind'] },
    cues: { S1: 'so the app helps people save', K1: 'most of them have banked with it for over ten years and earn more than the customers who did not download it' },
    reason: { K1: 'The app users chose to download it, and {cue:K1}. Customers who have banked for over ten years and earn more would hold more in savings whether or not they had the app. The figures show a real difference between the groups, and something else that differs between them could bring it about alone.' } },

  /* ---------- Reverse causation ---------- */
  { id: 'k-cameras', use: 'teach', tier: 'clean', setting: 'home', topic: 'security cameras and break-ins on a street', name: 'The security cameras',
    text: "A neighborhood study finds that on the 12 streets where over half the homes have a security camera, 9 had a break-in last year. On the 12 streets where fewer than 1 in 10 homes have one, 3 did. A local columnist writes: 'Cameras bring burglars to a street.' On 7 of the 9 camera-heavy streets with a break-in, residents say the first cameras went up after the break-in.",
    outcome: 'reverse', route: { S1: ['cause'], K1: ['backward'] },
    cues: { S1: 'Cameras bring burglars to a street', K1: 'residents say the first cameras went up after the break-in' } },

  { id: 'k-fires', use: 'check', tier: 'clean', setting: 'community', topic: 'firefighters sent and fire damage', name: 'The house fires',
    text: "A city study of 300 house fires finds that the more firefighters were sent to a fire, the more damage it did: fires with 20 or more firefighters averaged $90,000 in damage, and fires with fewer than 10 averaged $12,000. A councilor says: 'Sending firefighters makes fires worse.' The fire chief’s dispatch rules say that the more serious the fire, the more firefighters are sent.",
    outcome: 'reverse', route: { S1: ['cause'], K1: ['backward'] },
    cues: { S1: 'Sending firefighters makes fires worse', K1: 'the more serious the fire, the more firefighters are sent' },
    reason: { K1: 'The councilor says that the first thing, sending firefighters, caused the second, damage. {cue:K1}, so the damage, or at least how serious the fire is, comes first and decides how many firefighters are sent. The figures go together because of the arrow running the other way, and nothing else is needed to explain them.' } },

  { id: 'k-trees-lots', use: 'teach', tier: 'clean', setting: 'home', topic: 'street trees and home prices, with lot size behind both', name: 'The trees and the lots',
    text: "A city study finds that streets with many trees have higher home prices: homes on the 20 tree-lined streets sell for an average of $480,000, against $350,000 on the 20 streets with few trees. A columnist writes: 'Planting trees raises home prices.' Most of the tree-lined streets are in the city’s older neighborhoods, where the lots are twice as large, and large lots sell for more and have room for trees.",
    outcome: 'confound', route: { S1: ['cause'], K1: ['behind'] },
    cues: { S1: 'Planting trees raises home prices', K1: 'Most of the tree-lined streets are in the city’s older neighborhoods, where the lots are twice as large' } },

  { id: 'k-trees-first', use: 'teach', tier: 'clean', setting: 'home', topic: 'street trees and home prices, with prices first', name: 'The trees after the prices',
    text: "A city study finds that streets with many trees have higher home prices: homes on the 20 tree-lined streets sell for an average of $480,000, against $350,000 on the 20 streets with few trees. A columnist writes: 'Planting trees raises home prices.' The city’s planting records show that it planted street trees on a street only after its home prices passed $400,000, because the city pays for trees out of property tax.",
    outcome: 'reverse', route: { S1: ['cause'], K1: ['backward'] },
    cues: { S1: 'Planting trees raises home prices', K1: 'it planted street trees on a street only after its home prices passed $400,000' } },

  { id: 'k-quit-chose', use: 'teach', tier: 'clean', setting: 'health', topic: 'a quit-smoking text program that smokers signed up for', name: 'The quit program',
    text: "A health department says: 'Smokers who sign up for our text-message program are twice as likely to have quit a year later, so the program helps smokers quit.' Of the 300 smokers who signed up, 120 had quit a year later (40 in 100), and of the 700 who did not, 140 had (20 in 100). The intake forms show that 240 of the 300 who signed up had already picked a quit date, against 70 of the 700 who did not.",
    outcome: 'confound', route: { S1: ['cause'], K1: ['behind'] },
    cues: { S1: 'so the program helps smokers quit', K1: 'The intake forms show that 240 of the 300 who signed up had already picked a quit date, against 70 of the 700 who did not' } },

  { id: 'k-quit-lottery', use: 'teach', tier: 'clean', setting: 'health', topic: 'a quit-smoking text program given by a draw', name: 'The quit draw',
    text: "A health department had 400 places in a text-message program for 800 smokers who asked to join, and drew 400 names from a hat. A year later it reached all 800 by phone. 120 of the 400 in the program had quit (30 in 100), against 80 of the 400 not in it (20 in 100). 'The program helps smokers quit,' the department says.",
    outcome: 'cause_ok', route: { S1: ['holds'], H1: ['causes'] },
    cues: { S1: 'drew 400 names from a hat', H1: 'The program helps smokers quit' } }
]);
