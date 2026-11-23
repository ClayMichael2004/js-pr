function createCurriedCharacterCreator(initialCharacter) {
  const isObj = (v) => v && typeof v === 'object' && !Array.isArray(v)

  const merge = (target, source) => {
    const out = { ...target }
    for (const [k, v] of Object.entries(source)) {
      out[k] = isObj(out[k]) && isObj(v) ? merge(out[k], v) : isObj(v) ? merge({}, v) : v
    }
    return out
  }

  let char = merge({}, initialCharacter)

  return function builder(...args) {
    if (!args.length) return char
    char = args.reduce((acc, arg) => (typeof arg === 'function' ? arg(acc) : merge(acc, arg)), char)
    return builder
  }
}


const initialChar = {
  name: "Aria",
  stats: {
    strength: 5,
    intelligence: 10,
  },
};

const charBuilder = createCurriedCharacterCreator(initialChar);

const result = charBuilder(
  {
    class: "Wizard",
    stats: { strength: 7, mana: 50 },
    equipment: { weapon: "Staff", robe: "Silk Robe" },
  },
  (char) => {
    const updatedStats = {
      ...char.stats,
      strength: char.stats.strength + 3,
      intelligence: char.stats.intelligence + 2,
    };
    return { ...char, stats: updatedStats };
  },
)();

console.log(result);