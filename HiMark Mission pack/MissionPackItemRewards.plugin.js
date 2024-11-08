/**
 * Item Challenge Rewards - by HiMark
 *
 * Credits to:
 *   - Anthony Fuller as I used his "moar items" plugin as a base
 *
 * @licence https://www.mozilla.org/en-US/MPL/2.0
 */

const { randomUUID } = require("crypto")
const { existsSync } = require("fs")
const { join } = require("path")
const { log, LogLevel } = require("@peacockproject/core/loggingInterop")

const items = [
    {
        id: "PROP_RACCOON_TOOL_MCGUFFIN",
        type: "gear",
        subtype: "tool",
        loadoutslot: "gear",
        repoid: "7f90421c-fd20-499e-8821-0950cc8995bc",
    },
    {
        id: "PROP_ICA_IMPACT_EXPLOSIVE",
        type: "gear",
        subtype: "explosive",
        loadoutslot: "gear",
        repoid: "2a493cf9-7cb1-4aad-b892-17abf8b329f4",
    },
    {
        id: "AIR_RIFLE_HIMARK_CUSTOM_WEAPON",
        type: "weapon",
        subtype: "sniperrifle",
        loadoutslot: "carriedweapon",
        repoid: "a73c2d9e-e69a-4745-b025-40fc756d845a",
    },
    {
        id: "AIR_RIFLE_HIMARK_CUSTOM_WEAPONFFFF",
        type: "weapon",
        subtype: "sniperrifle",
        loadoutslot: "carriedweapon",
        repoid: "907e0277-7806-42a4-b4b2-338cf8dd9391",
    }
]

module.exports = function moarItemsPlugin(controller) {
    const unlockables = controller.configManager.configs.allunlockables


    items.forEach((item) => {
        unlockables.push({
            Id: item.id,
            Guid: randomUUID(),
            Type: item.type,
            Subtype: item.subtype,
            RMTPrice: -1,
            GamePrice: -1,
            IsPurchasable: false,
            IsPublished: true,
            IsDroppable: false,
            Capabilities: [],
            Qualities: {},
            Properties: {
                Gameplay: {},
                Quality: 4,
                Rarity: "common",
                IsContainer: item.iscontainer || false,
                LoadoutSlot: item.loadoutslot,
                RepositoryId: item.repoid,
            },
            Rarity: "common",
        })
    })

    log(LogLevel.INFO, "[Mission pack item rewards] Plugin is loaded! Challenges should now give item rewards (Plugin Started)")
}
