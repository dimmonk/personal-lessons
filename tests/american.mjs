// The app is written in American English for a reader in the United States: dollars, US institutions, US spelling.
// One list, read by the lesson validator (every string a learner reads, case stories included) and by the browser tests.
// Each entry is a British form that must not appear; a trailing * matches any ending (organis* catches organise, organised).
// Only forms that are unambiguous are listed: "flat fee", "holiday season" and "toward(s)" are American too, so they are not.
export const BRITISH = [
  '£', '€', 'pence', 'quid',                                                    // dollars and cents only
  'colour*', 'favour*', 'behaviour*', 'neighbour*', 'honour*', 'labour*', 'humour*', 'flavour*', 'rumour*', 'harbour*', 'endeavour*', 'armour*',   // -or
  'centre', 'centres', 'centred', 'theatre*', 'metre*', 'litre*', 'fibre*',     // -er
  // -ise, not -ism or -ist: "criticism", "realist", "specialist" and "organism" are American too
  'organise', 'organised', 'organises', 'organising', 'organisation*', 'realise', 'realised', 'realises', 'realising', 'realisation*', 'recognise', 'recognised', 'recognises', 'recognising', 'recognisation*', 'apologise', 'apologised', 'apologises', 'apologising', 'apologisation*', 'minimise', 'minimised', 'minimises', 'minimising', 'minimisation*', 'maximise', 'maximised', 'maximises', 'maximising', 'maximisation*', 'prioritise', 'prioritised', 'prioritises', 'prioritising', 'prioritisation*', 'summarise', 'summarised', 'summarises', 'summarising', 'summarisation*', 'criticise', 'criticised', 'criticises', 'criticising', 'criticisation*', 'categorise', 'categorised', 'categorises', 'categorising', 'categorisation*', 'specialise', 'specialised', 'specialises', 'specialising', 'specialisation*', 'utilise', 'utilised', 'utilises', 'utilising', 'utilisation*', 'emphasise', 'emphasised', 'emphasises', 'emphasising', 'emphasisation*',
  'analyse', 'analysed', 'analysing', 'paralyse*',   // -ize, -yze
  'programme*', 'cheque*', 'catalogue*', 'travelled', 'travelling', 'traveller*', 'cancelled', 'cancelling', 'labelled', 'labelling', 'modelled', 'modelling', 'counselled', 'counsellor*', 'fuelled', 'jeweller*',
  'defence*', 'offence*', 'licence*', 'practise', 'practised', 'practises', 'practising', 'enrol', 'enrols', 'enrolment*', 'fulfil', 'fulfils', 'fulfilment', 'instalment*', 'judgement*', 'aluminium', 'grey*', 'tyre*', 'kerb*', 'mould*', 'plough*', 'storey*', 'sceptic*',
  'whilst', 'amongst', 'learnt', 'spelt', 'straight away',
  'mum', 'mums', 'postcode*', 'solicitor*', 'council tax', 'stamp duty', 'ISA', 'ISAs', 'HMRC', 'NHS', 'GP', 'GPs', 'Action Fraud', 'high street', 'current account*', 'mobile phone*', 'petrol', 'lorry', 'lorries', 'fortnight*', 'maths'
];

// One entry as a regular expression: whole word, or word start when the entry ends in *.
export function britishPattern(entry) {
  if (entry === '£' || entry === '€') return new RegExp(entry);
  const stem = entry.endsWith('*');
  const word = (stem ? entry.slice(0, -1) : entry).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`\\b${word}${stem ? '\\w*' : '\\b'}`, /[A-Z]{2}/.test(entry) ? '' : 'i');   // ISA, NHS, GP: capitals only
}
// The British forms in one string.
export const britishIn = text => BRITISH.filter(entry => britishPattern(entry).test(text));
