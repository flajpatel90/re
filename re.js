const fs = require('fs');
const path = require('path');

// Directory to save the files
const outputDir = path.join(__dirname, 'ultio');

// Create the directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// List of short, meaningful words or syllables
const syllables = [
    "ember", "flare", "spark", "glint", "flame", "ignite", "glow", "flicker",
    "quartz", "amber", "onyx", "agate", "jasper", "opal", "beryl", "topaz", "zircon", "garnet",
    "torrent", "ripple", "whirl", "gush", "cascade", "eddy", "swirl", "stream", "brook", "current",
    "summit", "bluff", "ridge", "peak", "crag", "knoll", "ledge", "butte", "pinnacle", "promontory",
    "gale", "zephyr", "whirlwind", "sirocco", "monsoon", "tempest", "squall", "draft", "gust", "breeze",
    "radiance", "luster", "glimmer", "shine", "gleam", "sparkle", "shimmer", "beam", "flash",
    "kindle", "smolder", "torch", "blaze", "inferno", "cinder", "bonfire",
    "frost", "rime", "sleet", "blizzard", "flurry", "icicle", "snowflake", "hailstone", "glaze", "avalanche",
    "coral", "kelp", "anemone", "plankton", "urchin", "barnacle", "mollusk", "seaweed", "clam", "oyster",
    "sprite", "wisp", "faerie", "goblin", "troll", "sylph", "imp", "pooka", "boggart", "pixie",
    "shade", "phantom", "wraith", "spirit", "specter", "ghoul", "shadow", "revenant", "poltergeist", "apparition",
    "hydra", "gryphon", "basilisk", "wyvern", "dragon", "manticore", "phoenix", "sphinx", "chimera", "kraken",
    "serpent", "wyrm", "drake", "roc", "leviathan", "gargoyle",
    "talon", "fang", "quill", "tusk", "antler", "claw", "spine", "plume", "horn", "beak",
    "glacier", "firn", "serac", "crevasse", "floe", "iceberg", "snowdrift", "permafrost",
    "grove", "bramble", "thicket", "glade", "meadow", "copse", "clearing", "woodland", "shrub", "orchard",
    "whirlpool", "maelstrom", "riptide", "vortex", "wave", "surge", "tidal", "break",
    "cosmos", "asteroid", "nebula", "quasar", "galaxy", "starfield", "meteor", "comet", "universe", "orbit",
    "geode", "magma", "obsidian", "lava", "tephra", "pyroclast", "caldera", "volcano", "eruption", "ashfall",
    "emerald", "ruby", "sapphire", "jade", "diamond", "amethyst",
    "ocelot", "panther", "jaguar", "cheetah", "cougar", "lynx", "puma", "leopard", "caracal", "tiger",
    "chasm", "cavern", "grotto", "sinkhole", "abyss", "fissure", "tunnel", "rift", "gorge",
    "faun", "djinn", "nymph", "siren", "banshee", "glyph", "sigil", "rune", "ward", "hex", "charm", "spell", "ritual", "incantation", "enchant"
];

// Function to generate a random file name with up to 8 characters
function generateFileName() {
    let fileName = '';
    while (fileName.length < 5 || fileName.length > 8) {
        const part1 = syllables[Math.floor(Math.random() * syllables.length)];
        const part2 = syllables[Math.floor(Math.random() * syllables.length)];
        fileName = (part1 + part2).substring(0, 8);  // Ensure the file name does not exceed 8 characters
    }
    return fileName;
}

// Generate 30 unique JS file names
for (let i = 1; i <= 30; i++) {
    const fileName = generateFileName();
    const filePath = path.join(outputDir, `${fileName}.js`);

    // URL for redirection
    const redirectUrl = `https://example.com/${fileName}`;

    // Write redirect JavaScript code to the file
    fs.writeFileSync(filePath, `window.location.href = "${redirectUrl}";\n`);
    console.log(`Generated: ${fileName}.js, redirecting to ${redirectUrl}`);
}
