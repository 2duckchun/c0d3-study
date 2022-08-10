const states = ['Delaware', 'Missouri', 'Hawaii']
const firstState = states.shift()
// firstState is "Delaeare" and states is now ["Missouri", "Hawaii"]

const nuts = ['almond', 'pistachio', 'hazelnut']
const seeds = nuts
const drupe = nuts.shift()

// nut = ['pistachio', 'hazelnut']
// seed =  ['pistachio', 'hazelnut']
// drupe = 'almond'