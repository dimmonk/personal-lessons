// Civics, Unit Four: fresh cases kept back for later days (first file: three names, three cases each).
// A name that is due returns as a case the learner has not seen, run as a whole route, so every case carries
// marked words and a reason for both questions. Three cases for each name: one for each scheduled return (E9).

FC.cases('civics', 'u4', [

  /* ---------- A law put into practice ---------- */
  { id: 'e-ret-bees', use: 'return', tier: 'varied', setting: 'community', topic: 'a farm chemical that harms bees',
    text: "A law Congress passed bans the sale of a farm chemical that harms bees, from the start of next year. In October the federal farm office published the list of products that count as that chemical, and the form that sellers must use to report their stock.",
    outcome: 'execute', route: { D1: ['president'], E1: ['carryout'] },
    cues: { D1: 'the federal farm office published the list of products that count as that chemical',
            E1: ['A law Congress passed bans the sale of a farm chemical that harms bees', 'published the list of products that count as that chemical'] },
    reason: { D1: 'The last decision in the case is an office’s: {cue:D1}. It belongs to the government of the whole country.',
              E1: 'The ban is the law’s own, and the office says which products it covers: {cue:E1}. The office adds no demand of its own.' },
    not: { outcome: 'beyondpres', why: 'The ban comes from a law Congress passed. The office only works out which products fall under it.' } },

  { id: 'e-ret-alarms', use: 'return', tier: 'varied', setting: 'home', topic: 'smoke alarms in new apartments',
    text: "Under a law Congress passed, every new apartment building paid for with federal money must have smoke alarms in each apartment. The federal housing office sent every builder a checklist on Monday, and said its inspectors would test the alarms before anyone moves in.",
    outcome: 'execute', route: { D1: ['president'], E1: ['carryout'] },
    cues: { D1: 'The federal housing office sent every builder a checklist on Monday',
            E1: ['Under a law Congress passed, every new apartment building paid for with federal money must have smoke alarms in each apartment', 'sent every builder a checklist'] },
    reason: { D1: 'The last decision is an office’s: {cue:D1}. Nobody votes, and no judge is asked anything.',
              E1: 'The law asks for the alarms, and the office supplies the checklist and the tests: {cue:E1}. It asks for nothing the law does not.' },
    not: { outcome: 'veto', why: 'The law has already been passed and is in force. Nobody is deciding whether it goes ahead: an office is making it work.' } },

  { id: 'e-ret-jets', use: 'return', tier: 'varied', setting: 'money', topic: 'a small tax on private jet tickets',
    text: "A law Congress passed puts a small tax on every ticket for a private jet. In March the federal tax office mailed airlines the form for paying the tax each month, and started to check the payments.",
    outcome: 'execute', route: { D1: ['president'], E1: ['carryout'] },
    cues: { D1: 'the federal tax office mailed airlines the form for paying the tax each month',
            E1: ['A law Congress passed puts a small tax on every ticket for a private jet', 'started to check the payments'] },
    reason: { D1: 'The last decision is an office’s: {cue:D1}. It belongs to the government of the whole country.',
              E1: 'The tax is the law’s own, and the office collects and checks it: {cue:E1}. Nothing new is demanded.' },
    not: { outcome: 'diplomacy', why: 'Some of the airlines may belong to other countries, but the office is not dealing with those countries. It is collecting a tax under a law.' } },

  /* ---------- A demand that no law allows ---------- */
  { id: 'e-ret-lunch', use: 'return', tier: 'varied', setting: 'learning', topic: 'hot lunches in every school',
    text: "The federal education office announced that every school in the country must serve a hot lunch to every student each day, starting in September. No law Congress passed requires hot lunches, and the office points to none.",
    outcome: 'beyondpres', route: { D1: ['president'], E1: ['newduty'] },
    cues: { D1: 'The federal education office announced that every school in the country must serve a hot lunch to every student each day', E1: 'No law Congress passed requires hot lunches' },
    reason: { D1: 'The last decision in the case is an office’s: {cue:D1}. Nobody votes, and no judge is asked anything.',
              E1: 'The office demands something of every school, and the case says nothing stands behind it: {cue:E1}.' },
    not: { outcome: 'execute', why: 'There is no law about hot lunches for the office to be putting into practice, and the office points to none.' } },

  { id: 'e-ret-buspass', use: 'return', tier: 'varied', setting: 'work', topic: 'a bus pass for every worker',
    text: "The President signed an executive order that every company with more than fifty workers must give each worker a free bus pass. Congress has passed no law on bus passes, and the order does not rest on any.",
    outcome: 'beyondpres', route: { D1: ['president'], E1: ['newduty'] },
    cues: { D1: 'The President signed an executive order that every company with more than fifty workers must give each worker a free bus pass', E1: 'Congress has passed no law on bus passes' },
    reason: { D1: 'The last decision in the case is the President’s: {cue:D1}.',
              E1: 'The order demands something of companies outside the government, and the case says no law allows it: {cue:E1}.' },
    not: { outcome: 'execute', why: 'The order tells private companies what to do, and it names no law that it carries out.' } },

  { id: 'e-ret-pets', use: 'return', tier: 'varied', setting: 'home', topic: 'pets in rented homes',
    text: "The federal housing office announced a rule that no landlord in the country may refuse a tenant a pet, and that landlords who refuse will be fined. Congress has passed no law about pets in rented homes.",
    outcome: 'beyondpres', route: { D1: ['president'], E1: ['newduty'] },
    cues: { D1: 'The federal housing office announced a rule that no landlord in the country may refuse a tenant a pet', E1: 'Congress has passed no law about pets in rented homes' },
    reason: { D1: 'The last decision in the case is an office’s: {cue:D1}.',
              E1: 'The rule demands something of every landlord and backs it with a fine, and the case says that no law allows it: {cue:E1}.' },
    not: { outcome: 'execute', why: 'The rule is about rented homes, and Congress has passed no law on them. The office has nothing to be carrying out.' } },

  /* ---------- Orders to the armed forces ---------- */
  { id: 'e-ret-bridgeworks', use: 'return', tier: 'varied', setting: 'community', topic: 'a collapsed bridge and the army’s engineers',
    text: "A river bridge on the main road to the north collapsed in the night. At dawn the President ordered the army’s engineers to build a temporary bridge, and told them to finish it within a week.",
    outcome: 'commander', route: { D1: ['president'], E1: ['military'] },
    cues: { D1: 'the President ordered the army’s engineers to build a temporary bridge', E1: 'the President ordered the army’s engineers to build a temporary bridge, and told them to finish it within a week' },
    reason: { D1: 'The last decision in the case is the President’s: {cue:D1}.',
              E1: 'The order goes to part of the armed forces and says what they are to do: {cue:E1}. No law is named.' },
    not: { outcome: 'diplomacy', why: 'Nobody from another country is met or negotiated with. The order goes to the army’s engineers.' } },

  { id: 'e-ret-general', use: 'return', tier: 'varied', setting: 'work', topic: 'a general chosen to lead a region',
    text: "The commander of the army’s western region retired in May. On Friday the President chose a general to take his place, and told her to start on the first of July.",
    outcome: 'commander', route: { D1: ['president'], E1: ['military'] },
    cues: { D1: 'the President chose a general to take his place', E1: 'the President chose a general to take his place, and told her to start on the first of July' },
    reason: { D1: 'The last decision in the case is the President’s: {cue:D1}.',
              E1: 'The President is choosing who leads part of the armed forces: {cue:E1}. Nothing is negotiated with anyone.' },
    not: { outcome: 'diplomacy', why: 'Nobody from another country is met or negotiated with. The choice is of a person to lead part of the armed forces.' } },

  { id: 'e-ret-supplyship', use: 'return', tier: 'varied', setting: 'travel', topic: 'a supply ship sent to a damaged harbor',
    text: "The navy’s supply ship was on its way to a port in the east when a storm struck the coast. On Wednesday the President told the navy to send the ship to the damaged harbor in the west instead, with its cargo of blankets.",
    outcome: 'commander', route: { D1: ['president'], E1: ['military'] },
    cues: { D1: 'the President told the navy to send the ship to the damaged harbor in the west instead', E1: 'the President told the navy to send the ship to the damaged harbor in the west' },
    reason: { D1: 'The last decision in the case is the President’s: {cue:D1}.',
              E1: 'The President tells the navy where a ship is to go: {cue:E1}. The ship obeys, and no law is named.' },
    not: { outcome: 'diplomacy', why: 'Both harbors are in the country’s own territory, and nobody from another country is involved. The order goes to the navy.' } }
]);
