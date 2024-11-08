const { log, LogLevel } = require("@peacockproject/core/loggingInterop")

const contracts = [
{
    "Data": {
        "Objectives": [],
        "Bricks": [
		"assembly:/_pro/scenes/missions/sheep/celebrities.brick",
		"assembly:/_pro/scenes/missions/sheep/tod_midday.brick",
		"assembly:/_pro/scenes/missions/sheep/override_skipintro.brick"
		],
        "GameChangers": [
            "61a618c2-1cfc-46fa-846b-467de76042d6",
            "b48bb7f9-b630-48cb-a816-720ed7959319",
            "1f8f0b8b-1f65-4d6c-a2f4-fc8adffa394a",
            "9673f602-3b2a-4bd3-94b3-b3b311b7bc7e",
            "a77cf01e-ab02-4b1c-a4bd-a37fb8be1114",
            "008d2eb9-c1c8-44e0-a636-ccca63629f3c",
            "1efef5c0-7381-4e22-ac04-ffbd0822cc96",
            "f96e94b7-1c0e-49c9-9332-07346a955fd2",
            "95690829-7da4-4225-a087-08918cccf120"
        ]
    },
    "Metadata": {
        "IsLocked": false,
        "CreatorUserId": "fadb923c-e6bb-4283-a537-eb4d1150262e",
        "IsPublished": true,
        "TileImage": "images/thumbnail/celebrity_house_custom.jpg",
        "Location": "LOCATION_NEWZEALAND",
        "Title": "UI_CONTRACT_CREATE_CONTRACT_TITLE",
        "ScenePath": "assembly:/_pro/scenes/missions/sheep/scene_sheep.entity",
        "Description": "UI_CONTRACT_CREATE_CONTRACT_DESC",
        "Id": "3124fsxd-gsf7-21f7-9bsa-i12631746t8e",
        "CreationTimestamp": "2018-04-30T12:55:18Z",
        "CodeName_Hint": "Create contract New Zealand Cattle",
        "Type": "creation",
        "Subtype": "specialassignment",
        "Release": "2.0.x",
        "Entitlements": ["H2_LEGACY_STANDARD"],
        "LastUpdate": "2021-06-01T12:15:38.4090419Z",
        "PublicId": "020386538747"
    },
    "UserData": {}
}
]

module.exports = function MissionPlugin(controller) {
    contracts.forEach((contract) => {
        controller.addMission(contract)
        controller.missionsInLocations[contract.Metadata.Location].push(contract.Metadata.Id)
    })

    log(LogLevel.INFO, "[Mission pack CC] Plugin is loaded and contract creation should be on mission screen!")
}
