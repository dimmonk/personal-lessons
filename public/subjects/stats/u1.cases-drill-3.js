// Statistical Claims, Unit One: drill cases, second stage, misleading (the most noticeable thing in the story is not what decides it).
// echo names a teaching case of a DIFFERENT answer whose story this one is built to bring back, so that the second look
// ("does it look like a case you know?") is practised where the likeness points the wrong way. also lists an answer the case shows
// as well as its own, which loses to its own by a tie-break in the key. Field guide: see u1.cases-drill-1.js.

FC.cases('stats', 'u1', [

  { id: 'gate-r-streak', use: 'drill', tier: 'misleading', setting: 'money', topic: 'model portfolios and the ones that stopped being shown', echo: 'gate-music',
    also: ['cause'],
    text: "A trading newsletter says: 'Our stock-picking method makes money: every one of our model portfolios from 2015 is up an average of 90%.' The newsletter published 40 model portfolios in 2015 and has quietly stopped showing the 28 that lost money. Stock markets rose strongly in all those years.",
    route: { S1: ['counted'] },
    cues: { S1: 'has quietly stopped showing the 28 that lost money' },
    reason: { S1: 'The newsletter says its method makes money, and the case shows another way to explain the result: markets rose. But the first part goes wrong before that. The figure is worked out from the 12 portfolios still shown, and {cue:S1}. The ones that lost are not in it.' },
    not: { outcome: 'cause', why: 'The claim that the method makes money does have another way to explain it, the rising markets. But when a case shows two answers, the answer is the earlier part, and who is in the figure comes before what the claim says caused what.' },
    wouldChange: 'If the newsletter had shown all 40 portfolios and the average was still up 90%, the first part would hold, and the answer would be {a:S1.cause}: the rising markets would still be another way to explain it.' },

  { id: 'gate-r-scores', use: 'drill', tier: 'misleading', setting: 'learning', topic: 'a bonus for rising test scores', echo: 'gate-music',
    also: ['cause'],
    text: "A school district says: 'Since we began paying teachers a bonus for rising test scores, scores have risen 15 points, so the bonus has raised learning.' Teachers now spend most of the term drilling last year's test questions.",
    route: { S1: ['measure'] },
    cues: { S1: "Teachers now spend most of the term drilling last year's test questions" },
    reason: { S1: 'The district says the bonus raised learning. But the first part to go wrong comes earlier: what the figure counts. The figure is a test score, teachers are paid on it, and {cue:S1}. Scores can rise by 15 points with no more learning.' },
    not: { outcome: 'cause', why: 'The claim of cause is there, but a claim that the bonus raised learning cannot be sound if the figure it rests on could have risen without the learning. When a case shows two answers, the answer is the earlier part.' },
    wouldChange: 'If the bonus were paid on a test that nobody could prepare for in that way, and the figure still rose, the first two parts would hold, and the claim would go on to the question of cause.' },

  { id: 'gate-r-deal', use: 'drill', tier: 'misleading', setting: 'home', topic: 'a smart thermostat and percentage savings', echo: 'gate-vitamin',
    also: ['cause'],
    text: "An energy company says: 'Customers who bought our smart thermostat cut their bills by 35%, so the thermostat pays for itself.' It does not say what the bills were, or what the thermostat costs. Customers who buy one are mostly people who had just insulated their homes.",
    route: { S1: ['compare'] },
    cues: { S1: 'It does not say what the bills were, or what the thermostat costs' },
    reason: { S1: 'The company says the thermostat pays for itself, and the case shows another way the bills could have fallen: the insulation. But the first part to go wrong is earlier: {cue:S1}. A 35% cut of a $60 bill is $21, and of a $300 bill it is $105.' },
    not: { outcome: 'cause', why: 'The claim of cause is there, with another way to explain the fall. But the percentage has no numbers behind it, so you cannot yet say how big the fall is. When a case shows two answers, the answer is the earlier part.' },
    wouldChange: 'If the company had given the bills before and after for every customer, and the cost of the thermostat, the third part would hold, and the question would move on to cause.' },

  { id: 'gate-r-crash', use: 'drill', tier: 'misleading', setting: 'money', topic: 'an insurer’s test of a lane alert', echo: 'gate-depots',
    text: "A car insurer ran a 'test' of a lane-keeping alert. It offered the alert free to 10,000 customers, and 4,000 accepted. Over the next year the customers with the alert had 80 crashes per 5,000 drivers and the others had 110 per 5,000. The insurer says: 'The alert prevents crashes.' Customers who accepted the alert were mostly older drivers who drive fewer miles.",
    route: { S1: ['cause'] },
    cues: { S1: ['The alert prevents crashes', 'Customers who accepted the alert were mostly older drivers who drive fewer miles'] },
    reason: { S1: 'The numbers are all given and both groups are counted the same way, and it is called a test. But the customers chose whether to have the alert, and the insurer says this: {cue:S1}. That is a claim of cause, with another way for the result: the drivers who accepted were already the ones who crash less.' },
    not: { outcome: 'holds', why: 'It is called a test and it has numbers for both groups, but the customers decided which group they were in. A group formed by chance would be a different case.' },
    wouldChange: 'If the insurer had drawn 4,000 of the 10,000 names by lottery to get the alert, and the figures had come out the same, it would be {a:S1.holds}.' },

  { id: 'gate-r-survey', use: 'drill', tier: 'misleading', setting: 'community', topic: 'trash pickup and the households that did not reply', echo: 'gate-golf',
    text: "A town hall mailed a survey about trash pickup to every one of the 9,000 households in town. Of these, 5,400 returned it. The town then phoned 300 households picked from those that had not replied and found that they answered much the same way. Seventy-two percent said they are happy with the pickup. The town says: 'About seven in ten households are happy with trash pickup.'",
    route: { S1: ['holds'] },
    cues: { S1: 'phoned 300 households picked from those that had not replied and found that they answered much the same way' },
    reason: { S1: 'Many households did not reply, which is why the case can look like a poll with a missing group. But the town did what was needed about it: {cue:S1}. The ones who did not reply answered the same way, so the people in the figure are a fair picture of the town, and the claim says no more than that.' },
    not: { outcome: 'counted', why: 'Four in ten households did not reply, and that would be a trouble if nothing were done about them. But the town phoned a group of them and found that they answered much the same way as the others.' },
    wouldChange: 'If the town had not phoned anyone who had not replied, and the ones who did reply were mostly the unhappy ones, it would be {a:S1.counted}.' }
]);
