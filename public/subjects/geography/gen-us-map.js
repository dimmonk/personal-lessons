// Geography, the map of the United States: the two groups of places parts 2 and 2b ask about, made into questions in two forms (a name to tap, a lit place to
// name) from the map data `us`: the coasts and the four regions first, then the mountain ranges, the rivers, the Great Lakes and the big water.
// Each place's line names the regions and states it runs through or sits beside: the one line the feedback shows (lesson standard 3.5).
(() => {
  const words = { tap: 'Tap it on the map.', name: 'What is the lit place called?' };
  const place = (id, name, reason, accept = [name]) => ({ id, name, accept, reason });

  FC.gen('geography', [
    { id: 'g-us-frame', strand: 'us-map', places: { map: 'us', forms: ['tap', 'name'], words,
      slips: { 'rocky-mountains': 'two-ranges', 'appalachian-mountains': 'two-ranges', 'cascade-range': 'two-short-ranges', 'sierra-nevada': 'two-short-ranges' }, list: [
      place('west-coast', 'The West Coast', 'The West Coast is the shore of the lower 48 on the Pacific: California, Oregon and Washington.', ['The West Coast', 'Pacific Coast']),
      place('east-coast', 'The East Coast', 'The East Coast is the shore on the Atlantic, from Maine down to Florida.', ['The East Coast', 'Atlantic Coast']),
      place('gulf-coast', 'The Gulf Coast', 'The Gulf Coast is the shore on the Gulf of Mexico, from Texas round to Florida.', ['The Gulf Coast']),
      place('west', 'The West', 'The West is the big region on the left, from the Rocky Mountains to the Pacific, with Alaska and Hawaii.', ['The West']),
      place('midwest', 'The Midwest', 'The Midwest is the region in the middle and the north, from the Great Lakes across the Plains, between the West and the Northeast.', ['The Midwest']),
      place('south', 'The South', 'The South is the region along the bottom and the southeast, from Texas to Florida and up to Delaware.', ['The South']),
      place('northeast', 'The Northeast', 'The Northeast is the small region in the top right corner, New England and the states from New York to Pennsylvania.', ['The Northeast']),
      place('rocky-mountains', 'Rocky Mountains', 'The Rocky Mountains run down the West from Montana to New Mexico, the long range in the middle of the West.', ['Rocky Mountains', 'Rockies']),
      place('appalachian-mountains', 'Appalachian Mountains', 'The Appalachian Mountains run down the East, from Pennsylvania to Alabama, behind the East Coast.', ['Appalachian Mountains', 'Appalachians']),
      place('cascade-range', 'Cascade Range', 'The Cascade Range runs north to south through Washington and Oregon, near the Pacific.', ['Cascade Range', 'Cascades']),
      place('sierra-nevada', 'Sierra Nevada', 'The Sierra Nevada runs down the east side of California, along the border with Nevada.', ['Sierra Nevada', 'Sierra Nevada Mountains']),
      place('lake-superior', 'Lake Superior', 'Lake Superior is the biggest and westernmost Great Lake, between Minnesota, Wisconsin, Michigan and Canada.', ['Lake Superior', 'Superior']),
      place('lake-michigan', 'Lake Michigan', 'Lake Michigan is the one Great Lake wholly in the United States, between Wisconsin, Illinois, Indiana and Michigan.', ['Lake Michigan', 'Michigan']),
      place('lake-huron', 'Lake Huron', 'Lake Huron is the Great Lake east of Michigan\'s mitten, between Michigan and Canada.', ['Lake Huron', 'Huron']),
      place('lake-erie', 'Lake Erie', 'Lake Erie is the shallow Great Lake south of Canada, along Ohio, Pennsylvania and New York.', ['Lake Erie', 'Erie']),
      place('lake-ontario', 'Lake Ontario', 'Lake Ontario is the smallest and easternmost Great Lake, between New York and Canada.', ['Lake Ontario', 'Ontario']),
      place('gulf-of-mexico', 'Gulf of Mexico', 'The Gulf of Mexico is the sea along the bottom of the South, from Texas round to Florida, with Mexico on its other side.', ['Gulf of Mexico', 'The Gulf', 'Gulf of America'])
    ] } },
    { id: 'g-us-rivers', strand: 'us-map', places: { map: 'us', forms: ['tap', 'name'], words: { tap: 'Tap it on the map.', name: 'What is the lit river called?' },
      slips: { 'missouri-river': 'missouri-mississippi', 'mississippi-river': 'missouri-mississippi', 'ohio-river': 'ohio-tennessee', 'tennessee-river': 'ohio-tennessee', 'snake-river': 'snake-columbia', 'columbia-river': 'snake-columbia' }, list: [
      place('mississippi-river', 'Mississippi River', 'The Mississippi runs straight down the middle of the country, from near the Canadian border to the Gulf of Mexico.', ['Mississippi River', 'Mississippi']),
      place('missouri-river', 'Missouri River', 'The Missouri comes in from the Rockies in the northwest, across the Plains of the Midwest, and runs into the Mississippi in the middle of the country.', ['Missouri River', 'Missouri']),
      place('ohio-river', 'Ohio River', 'The Ohio runs west from the Northeast, along the bottom of the Midwest, and runs into the Mississippi.', ['Ohio River', 'Ohio']),
      place('arkansas-river', 'Arkansas River', 'The Arkansas runs east from the Rockies, across the Plains and into the South, and runs into the Mississippi.', ['Arkansas River', 'Arkansas']),
      place('tennessee-river', 'Tennessee River', 'The Tennessee loops through the South, down and back up, and runs into the Ohio just before the Ohio meets the Mississippi.', ['Tennessee River', 'Tennessee']),
      place('colorado-river', 'Colorado River', 'The Colorado runs southwest from the Rockies, through the Grand Canyon, to Mexico, all in the West.', ['Colorado River', 'Colorado']),
      place('columbia-river', 'Columbia River', 'The Columbia runs from Canada through the far northwest corner of the West to the Pacific.', ['Columbia River', 'Columbia']),
      place('snake-river', 'Snake River', 'The Snake bends west across the northern West and runs into the Columbia.', ['Snake River', 'Snake']),
      place('rio-grande-river', 'Rio Grande', 'The Rio Grande runs south from the Rockies, then along the border with Mexico to the Gulf of Mexico.', ['Rio Grande', 'Rio Grande River']),
      place('hudson-river', 'Hudson River', 'The Hudson runs straight down the Northeast to the Atlantic at New York City.', ['Hudson River', 'Hudson'])
    ] } }
  ]);
})();
