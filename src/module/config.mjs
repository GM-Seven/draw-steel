export const DRAW_STEEL = {};

/**
 * The set of Characteristics used within the system.
 * The long form can be accessed under `DRAW_STEEL.Actor.base.FIELDS.characteristics.{}.value`
 * The `label` is the short form in all caps (e.g. MGT)
 * The `hint` is the full name (e.g. Might)
 * @type {Array<string>}
 */
DRAW_STEEL.characteristics = ["mgt", "agl", "rea", "inu", "prs"];

/**
 * @type {Record<string, {img: string, name: string}>}
 */
DRAW_STEEL.conditions = {
  // bleeding: {},
  dazed: {
    name: "DRAW_STEEL.Effect.Conditions.Dazed",
    img: ""
  },
  frightened: {
    name: "DRAW_STEEL.Effect.Conditions.Frightened",
    img: ""

  },
  grabbed: {
    name: "DRAW_STEEL.Effect.Conditions.Grabbed",
    img: ""
  },
  // prone: {},
  restrained: {
    name: "DRAW_STEEL.Effect.Conditions.Restrained",
    img: ""
  },
  slowed: {
    name: "DRAW_STEEL.Effect.Conditions.Slowed",
    img: ""
  },
  taunted: {
    name: "DRAW_STEEL.Effect.Conditions.Taunted",
    img: ""
  },
  weakened: {
    name: "DRAW_STEEL.Effect.Conditions.Weakened",
    img: ""
  }
};

DRAW_STEEL.skills = {
  groups: {
    crafting: {
      label: "DRAW_STEEL.Skill.Group.Crafting"
    },
    exploration: {
      label: "DRAW_STEEL.Skill.Group.Exploration"
    },
    interpersonal: {
      label: "DRAW_STEEL.Skill.Group.Interpersonal"
    },
    intrigue: {
      label: "DRAW_STEEL.Skill.Group.Intrigue"
    },
    lore: {
      label: "DRAW_STEEL.Skill.Group.Lore"
    }
  },
  list: {
    alchemy: {
      label: "DRAW_STEEL.Skill.List.Alchemy",
      group: "crafting"
    },
    architecture: {
      label: "DRAW_STEEL.Skill.List.Architecture",
      group: "crafting"
    },
    blacskmithing: {
      label: "DRAW_STEEL.Skill.List.Blacksmithing",
      group: "crafting"
    },
    fletching: {
      label: "DRAW_STEEL.Skill.List.Fletching",
      group: "crafting"
    },
    forgery: {
      label: "DRAW_STEEL.Skill.List.Forgery",
      group: "crafting"
    },
    jewelry: {
      label: "DRAW_STEEL.Skill.List.Jewelry",
      group: "crafting"
    },
    mechanics: {
      label: "DRAW_STEEL.Skill.List.Mechanics",
      group: "crafting"
    },
    tailoring: {
      label: "DRAW_STEEL.Skill.List.Tailoring",
      group: "crafting"
    },
    climb: {
      label: "DRAW_STEEL.Skill.List.Climb",
      group: "exploration"
    },
    drive: {
      label: "DRAW_STEEL.Skill.List.Drive",
      group: "exploration"
    },
    endurance: {
      label: "DRAW_STEEL.Skill.List.Endurance",
      group: "exploration"
    },
    gymnastics: {
      label: "DRAW_STEEL.Skill.List.Gymnastics",
      group: "exploration"
    },
    heal: {
      label: "DRAW_STEEL.Skill.List.Heal",
      group: "exploration"
    },
    jump: {
      label: "DRAW_STEEL.Skill.List.Jump",
      group: "exploration"
    },
    lift: {
      label: "DRAW_STEEL.Skill.List.Lift",
      group: "exploration"
    },
    navigate: {
      label: "DRAW_STEEL.Skill.List.Navigate",
      group: "exploration"
    },
    ride: {
      label: "DRAW_STEEL.Skill.List.Ride",
      group: "exploration"
    },
    swim: {
      label: "DRAW_STEEL.Skill.List.Swim",
      group: "exploration"
    },
    brag: {
      label: "DRAW_STEEL.Skill.List.Brag",
      group: "interpersonal"
    },
    empathize: {
      label: "DRAW_STEEL.Skill.List.Empathize",
      group: "interpersonal"
    },
    flirt: {
      label: "DRAW_STEEL.Skill.List.Flirt",
      group: "interpersonal"
    },
    gamble: {
      label: "DRAW_STEEL.Skill.List.Gamble",
      group: "interpersonal"
    },
    handleAnimals: {
      label: "DRAW_STEEL.Skill.List.HandleAnimals",
      group: "interpersonal"
    },
    interrogate: {
      label: "DRAW_STEEL.Skill.List.Interrogate",
      group: "interpersonal"
    },
    intimidate: {
      label: "DRAW_STEEL.Skill.List.Intimidate",
      group: "interpersonal"
    },
    lead: {
      label: "DRAW_STEEL.Skill.List.Lead",
      group: "interpersonal"
    },
    lie: {
      label: "DRAW_STEEL.Skill.List.Lie",
      group: "interpersonal"
    },
    music: {
      label: "DRAW_STEEL.Skill.List.Music",
      group: "interpersonal"
    },
    perform: {
      label: "DRAW_STEEL.Skill.List.Perform",
      group: "interpersonal"
    },
    persuade: {
      label: "DRAW_STEEL.Skill.List.Persuade",
      group: "interpersonal"
    },
    readPerson: {
      label: "DRAW_STEEL.Skill.List.ReadPerson",
      group: "interpersonal"
    },
    alertness: {
      label: "DRAW_STEEL.Skill.List.Alertness",
      group: "intrigue"
    },
    concealObject: {
      label: "DRAW_STEEL.Skill.List.ConcealObject",
      group: "intrigue"
    },
    disguise: {
      label: "DRAW_STEEL.Skill.List.Disguise",
      group: "intrigue"
    },
    eavesdrop: {
      label: "DRAW_STEEL.Skill.List.Eavesdrop",
      group: "intrigue"
    },
    escapeArtist: {
      label: "DRAW_STEEL.Skill.List.EscapeArtist",
      group: "intrigue"
    },
    hide: {
      label: "DRAW_STEEL.Skill.List.Hide",
      group: "intrigue"
    },
    pickLock: {
      label: "DRAW_STEEL.Skill.List.PickLock",
      group: "intrigue"
    },
    pickPocket: {
      label: "DRAW_STEEL.Skill.List.PickPocket",
      group: "intrigue"
    },
    sabotage: {
      label: "DRAW_STEEL.Skill.List.Sabotage",
      group: "intrigue"
    },
    search: {
      label: "DRAW_STEEL.Skill.List.Search",
      group: "intrigue"
    },
    sneak: {
      label: "DRAW_STEEL.Skill.List.Sneak",
      group: "intrigue"
    },
    track: {
      label: "DRAW_STEEL.Skill.List.Track",
      group: "intrigue"
    },
    culture: {
      label: "DRAW_STEEL.Skill.List.Culture",
      group: "lore"
    },
    criminalUnderworld: {
      label: "DRAW_STEEL.Skill.List.CriminalUnderworld",
      group: "lore"
    },
    history: {
      label: "DRAW_STEEL.Skill.List.History",
      group: "lore"
    },
    magic: {
      label: "DRAW_STEEL.Skill.List.Magic",
      group: "lore"
    },
    monsters: {
      label: "DRAW_STEEL.Skill.List.Monsters",
      group: "lore"
    },
    nature: {
      label: "DRAW_STEEL.Skill.List.Nature",
      group: "lore"
    },
    psionics: {
      label: "DRAW_STEEL.Skill.List.Psionics",
      group: "lore"
    },
    religion: {
      label: "DRAW_STEEL.Skill.List.Religion",
      group: "lore"
    },
    rumors: {
      label: "DRAW_STEEL.Skill.List.Rumors",
      group: "lore"
    },
    society: {
      label: "DRAW_STEEL.Skill.List.Society",
      group: "lore"
    },
    timescape: {
      label: "DRAW_STEEL.Skill.List.Timescape",
      group: "lore"
    }
  }
};

// TODO: Languages

/**
 * Configuration details for Cultures
 * @type {Record<string, Record<string, {label: string, skillOpts: Set<string>}>>}
 */
DRAW_STEEL.culture = {
  environments: {
    nomadic: {
      label: "DRAW_STEEL.Item.Culture.Environments.Nomadic",
      skillOpts: new Set()
    },
    rural: {
      label: "DRAW_STEEL.Item.Culture.Environments.Rural",
      skillOpts: new Set()
    },
    secluded: {
      label: "DRAW_STEEL.Item.Culture.Environments.Secluded",
      skillOpts: new Set()
    },
    urban: {
      label: "DRAW_STEEL.Item.Culture.Environments.Urban",
      skillOpts: new Set()
    },
    wilderness: {
      label: "DRAW_STEEL.Item.Culture.Environments.Wilderness",
      skillOpts: new Set()
    }
  },
  organization: {
    anarchic: {
      label: "DRAW_STEEL.Item.Culture.Organization.Anarchic",
      skillOpts: new Set()
    },
    bureaucratic: {
      label: "DRAW_STEEL.Item.Culture.Organization.Bureaucratic",
      skillOpts: new Set()
    },
    communal: {
      label: "DRAW_STEEL.Item.Culture.Organization.Communal",
      skillOpts: new Set()
    }
  },
  upbringing: {
    academic: {
      label: "DRAW_STEEL.Item.Culture.Upbringing.Academic",
      skillOpts: new Set()
    },
    creative: {
      label: "DRAW_STEEL.Item.Culture.Upbringing.Creative",
      skillOpts: new Set()
    },
    illegal: {
      label: "DRAW_STEEL.Item.Culture.Upbringing.Illegal",
      skillOpts: new Set()
    },
    labor: {
      label: "DRAW_STEEL.Item.Culture.Upbringing.Labor",
      skillOpts: new Set()
    },
    martial: {
      label: "DRAW_STEEL.Item.Culture.Upbringing.Martial",
      skillOpts: new Set()
    },
    noble: {
      label: "DRAW_STEEL.Item.Culture.Upbringing.Noble",
      skillOpts: new Set()
    }
  }
};

/**
 * Configuration details for Kits
 * @type {Record<string,  Record<string, {label: string, equipment?: Set<string>}>>}
 */
DRAW_STEEL.kits = {
  types: {
    martial: {
      label: "DRAW_STEEL.Item.Kit.Types.Martial",
      equipment: new Set("armor", "weapon")
    },
    caster: {
      label: "DRAW_STEEL.Item.Kit.Types.Caster",
      equipment: new Set("armor", "implement")
    }
  },
  armor: {
    none: {
      label: "DRAW_STEEL.Item.Kit.Armor.None"
    },
    light: {
      label: "DRAW_STEEL.Item.Kit.Armor.Light"
    },
    medium: {
      label: "DRAW_STEEL.Item.Kit.Armor.Medium"
    },
    heavy: {
      label: "DRAW_STEEL.Item.Kit.Armor.Heavy"
    },
    shield: {
      label: "DRAW_STEEL.Item.Kit.Armor.Shield"
    }
  },
  weapon: {
    none: {
      label: "DRAW_STEEL.Item.Kit.Weapons.None"
    },
    bow: {
      label: "DRAW_STEEL.Item.Kit.Weapons.Bow"
    },
    ensnaring: {
      label: "DRAW_STEEL.Item.Kit.Weapons.Ensnaring"
    },
    heavy: {
      label: "DRAW_STEEL.Item.Kit.Weapons.Heavy"
    },
    light: {
      label: "DRAW_STEEL.Item.Kit.Weapons.Light"
    },
    medium: {
      label: "DRAW_STEEL.Item.Kit.Weapons.Medium"
    },
    polearm: {
      label: "DRAW_STEEL.Item.Kit.Weapons.Polearm"
    },
    unarmed: {
      label: "DRAW_STEEL.Item.Kit.Weapons.Unarmed"
    },
    whip: {
      label: "DRAW_STEEL.Item.Kit.Weapons.Whip"
    }
  },
  implement: {
    bone: {
      label: "DRAW_STEEL.Item.Kit.Implements.Bone"
    },
    crystal: {
      label: "DRAW_STEEL.Item.Kit.Implements.Crystal"
    },
    glass: {
      label: "DRAW_STEEL.Item.Kit.Implements.Glass"
    },
    metal: {
      label: "DRAW_STEEL.Item.Kit.Implements.Metal"
    },
    stone: {
      label: "DRAW_STEEL.Item.Kit.Implements.Stone"
    },
    wood: {
      label: "DRAW_STEEL.Item.Kit.Implements.Wood"
    }
  }
};
