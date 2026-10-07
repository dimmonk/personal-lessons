// Psychology, Unit Four: fresh cases kept back for later days (second file: the other three names, one case each).
// Field guide: see u4.cases-return-1.js.

FC.cases('psychology', 'u4', [

  { id: 'pa-ret-yoga', use: 'return', tier: 'varied', setting: 'health', topic: 'a yoga teacher and her class',
    text: "Giulia is thirty-four and a yoga teacher. In every class she has taught, in three studios, she opens by telling the room about her week in a trembling voice. When a student shared a piece of good news, Giulia gave a long account of her own worst day until the class turned toward her and the student sat down. Two studios have had complaints, and students say they stopped coming because the class is about her.",
    outcome: 'histrionic', route: { D1: ['pattern'], P1: ['center'] },
    cues: { D1: ['In every class she has taught, in three studios'], P1: ['opens by telling the room about her week in a trembling voice', 'gave a long account of her own worst day until the class turned toward her', 'students say they stopped coming because the class is about her'] },
    reason: { D1: 'This covers every class in three studios: {cue:D1}.',
              P1: 'Giulia puts herself at the center, and when a student had good news her show got bigger: {cue:P1}. It has cost her students and two complaints.' },
    not: { outcome: 'narcgrand', why: 'Giulia does not run the student down. She turns the attention back to herself.' } },

  { id: 'pa-ret-builder', use: 'return', tier: 'varied', setting: 'work', topic: 'a builder and householders’ deposits',
    text: "Barry is forty-four and a builder who has taken deposits from nine households in two towns and finished three jobs. He tells each that materials have 'gone up' and asks for more. When a family wrote that they were living without a roof, he said, 'You wanted the cheapest quote.' He had a suspended sentence at twenty-two for the same thing in another county, and fifty-four thousand dollars of customers' money has gone.",
    outcome: 'antisocial', route: { D1: ['pattern'], P1: ['uses'] },
    cues: { D1: ['in two towns', 'at twenty-two for the same thing in another county'], P1: ['taken deposits from nine households', 'You wanted the cheapest quote', "fifty-four thousand dollars of customers' money has gone"] },
    reason: { D1: 'This covers two decades and several places: {cue:D1}.',
              P1: 'Barry has taken deposits and not done the work, and showed no regret to a family without a roof: {cue:P1}. Fifty-four thousand dollars has gone.' },
    not: { outcome: 'narcgrand', why: 'Nothing here shows Barry needing to be treated as special, or turning scornful when he is not. What drives it is the money.' } },

  { id: 'pa-ret-bus', use: 'return', tier: 'varied', setting: 'work', topic: 'a gruff bus driver',
    text: "Ahmed is fifty-two and has driven the number 9 bus for twenty-five years. At the depot, at home and at the bar he is the same: gruff, never smiling at anyone he does not know, and complaining about the schedule to anyone who will listen. His regulars wait for his bus, the depot asks him to train the new drivers every year, and the old woman who rides it every Tuesday brings him a cake.",
    outcome: 'ordpersonality', route: { D1: ['pattern'], P1: ['steady'] },
    cues: { D1: ['At the depot, at home and at the bar he is the same'], P1: ['gruff, never smiling at anyone he does not know', 'His regulars wait for his bus', 'brings him a cake'] },
    reason: { D1: 'This covers twenty-five years and three places where he is the same: {cue:D1}.',
              P1: 'Ahmed has been gruff for a quarter of a century, and nothing has been lost: {cue:P1}.' },
    not: { outcome: 'narcgrand', why: 'He is gruff, as {o:narcgrand} can be. But nobody is scorned and nobody has left: his regulars wait for him.' } },

]);
