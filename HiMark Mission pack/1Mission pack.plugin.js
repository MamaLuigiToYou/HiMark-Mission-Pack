const { log, LogLevel } = require("@peacockproject/core/loggingInterop")

const contracts = [
{
    "Data": {
        "Objectives": [
            {
                "Type": "statemachine",
                "Id": "5f555c2b-2e80-4dbe-88aa-7f676c5ac011",
                "BriefingText": {
                    "$loc": {
                        "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                        "data": "$($repository f5e0d20f-319e-41d4-96ba-b88bd4dda9a1).Name"
                    }
                },
                "HUDTemplate": {
                    "display": {
                        "$loc": {
                            "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                            "data": "$($repository f5e0d20f-319e-41d4-96ba-b88bd4dda9a1).Name"
                        }
                    }
                },
                "Category": "primary",
                "Definition": {
                    "Scope": "Hit",
                    "Context": {
                        "Targets": [
                            "f5e0d20f-319e-41d4-96ba-b88bd4dda9a1"
                        ]
                    },
                    "States": {
                        "Start": {
                            "Kill": {
                                "Condition": {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "f5e0d20f-319e-41d4-96ba-b88bd4dda9a1"
                                    ]
                                },
                                "Transition": "Success"
                            }
                        }
                    }
                }
            },
            {
                "Type": "statemachine",
                "Id": "641c0e91-58f9-43d9-9d28-581e80912d6a",
                "BriefingText": {
                    "$loc": {
                        "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                        "data": "$($repository 1bdd4835-b317-422e-ae20-5a63a53a107b).Name"
                    }
                },
                "HUDTemplate": {
                    "display": {
                        "$loc": {
                            "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                            "data": "$($repository 1bdd4835-b317-422e-ae20-5a63a53a107b).Name"
                        }
                    }
                },
                "Category": "primary",
                "Definition": {
                    "Scope": "Hit",
                    "Context": {
                        "Targets": [
                            "1bdd4835-b317-422e-ae20-5a63a53a107b"
                        ]
                    },
                    "States": {
                        "Start": {
                            "Kill": {
                                "Condition": {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "1bdd4835-b317-422e-ae20-5a63a53a107b"
                                    ]
                                },
                                "Transition": "Success"
                            }
                        }
                    }
                }
            },
            {
                "Type": "statemachine",
                "Id": "11343671-4d8b-435f-a901-fa0b95e18dbd",
                "BriefingText": {
                    "$loc": {
                        "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                        "data": "$($repository 00e09abc-b234-42c8-b50d-b8184fa0f0cc).Name"
                    }
                },
                "HUDTemplate": {
                    "display": {
                        "$loc": {
                            "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                            "data": "$($repository 00e09abc-b234-42c8-b50d-b8184fa0f0cc).Name"
                        }
                    }
                },
                "Category": "primary",
                "Definition": {
                    "Scope": "Hit",
                    "Context": {
                        "Targets": [
                            "00e09abc-b234-42c8-b50d-b8184fa0f0cc"
                        ]
                    },
                    "States": {
                        "Start": {
                            "Kill": {
                                "Condition": {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "00e09abc-b234-42c8-b50d-b8184fa0f0cc"
                                    ]
                                },
                                "Transition": "Success"
                            }
                        }
                    }
                }
            },
            {
                "Type": "statemachine",
                "Id": "83eacc0a-978b-4f81-b01e-73a3dd1a2b8d",
                "BriefingText": {
                    "$loc": {
                        "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                        "data": "$($repository 2282764d-165a-4925-b558-94419a8367ab).Name"
                    }
                },
                "HUDTemplate": {
                    "display": {
                        "$loc": {
                            "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                            "data": "$($repository 2282764d-165a-4925-b558-94419a8367ab).Name"
                        }
                    }
                },
                "Category": "primary",
                "Definition": {
                    "Scope": "Hit",
                    "Context": {
                        "Targets": [
                            "2282764d-165a-4925-b558-94419a8367ab"
                        ]
                    },
                    "States": {
                        "Start": {
                            "Kill": {
                                "Condition": {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "2282764d-165a-4925-b558-94419a8367ab"
                                    ]
                                },
                                "Transition": "Success"
                            }
                        }
                    }
                }
            }
        ],
        "GameChangers": [],
        "Bricks": [
		"assembly:/_pro/scenes/missions/sheep/celebrities.brick",
		"assembly:/_pro/scenes/missions/sheep/tod_midday.brick",
		"assembly:/_pro/scenes/missions/sheep/override_skipintro.brick"
		]
    },
    "Metadata": {
        "Title": "UI_CONTRACT_LCB_NAME",
        "Description": "UI_CONTRACT_LCB_DESC",
        "Entitlements": [
            "H2_LEGACY_STANDARD"
        ],
        "ScenePath": "assembly:/_pro/scenes/missions/sheep/scene_sheep.entity",
        "Location": "LOCATION_NEWZEALAND",
        "IsPublished": true,
        "CreatorUserId": "fadb923c-e6bb-4283-a537-eb4d1150262e",
        "GameVersion": "8.15.0.0",
        "ServerVersion": "8.15.0.0",
        "Type": "mission",
		"Subtype": "flashback",
        "CodeName_Hint": "Cattle",
        "Id": "4053b92b-1f3d-4ebb-9002-1ba65dc39ede",
        "PublicId": "130777627816",
        "TileImage": "images/thumbnail/celebrity_house.jpg",
        "GroupObjectiveDisplayOrder": [
            {
                "Id": "f5e0d20f-319e-41d4-96ba-b88bd4dda9a1"
            },
            {
                "Id": "1bdd4835-b317-422e-ae20-5a63a53a107b"
            },
            {
                "Id": "00e09abc-b234-42c8-b50d-b8184fa0f0cc"
            },
            {
                "Id": "2282764d-165a-4925-b558-94419a8367ab"
            }
        ],
        "CreationTimestamp": "2024-06-11T00:04:43.096Z"
    },
    "UserData": {}
},
{
    "Data": {
        "Objectives": [
            {
                "Type": "statemachine",
                "Id": "8b56a57d-51a5-483d-8629-f66e17a790ae",
                "IsHidden": true,
                "BriefingText": {
                    "$loc": {
                        "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                        "data": "$($repository 580f96a8-0e13-4e54-ae0a-a0dff1a90fde).Name"
                    }
                },
				"HUDTemplate": {
					"display": "Eliminate Fritz Blackwood",
				},
                "Category": "primary",
                "Definition": {
                    "Scope": "Hit",
                    "Context": {
                        "Targets": [
                            "580f96a8-0e13-4e54-ae0a-a0dff1a90fde"
                        ]
                    },
                    "States": {
                        "Start": {
                            "Kill": {
                                "Condition": {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "580f96a8-0e13-4e54-ae0a-a0dff1a90fde"
                                    ]
                                },
                                "Transition": "Success"
                            }
                        }
                    }
                },
                "TargetConditions": [
                    {
                        "Type": "killmethod",
                        "RepositoryId": "e68927af-746d-41fa-83e2-402da0163262",
                        "HardCondition": false,
                        "ObjectiveId": "e10add1f-d30c-42a2-bd09-f129a01b69e0",
                        "KillMethod": "accident_explosion"
                    }
                ]
            },
            {
                "Type": "statemachine",
                "Id": "e10add1f-d30c-42a2-bd09-f129a01b69e0",
                "Category": "secondary",
                "Definition": {
                    "Scope": "Hit",
                    "Context": {
                        "Targets": [
                            "580f96a8-0e13-4e54-ae0a-a0dff1a90fde"
                        ]
                    },
                    "States": {
                        "Start": {
                            "Kill": [
                                {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.RepositoryId",
                                                    "580f96a8-0e13-4e54-ae0a-a0dff1a90fde"
                                                ]
                                            },
                                            {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "accident_explosion"
                                                        ]
                                                    },
                                                    "in": [
                                                        "$Value.KillMethodBroad",
                                                        "$Value.KillMethodStrict"
                                                    ]
                                                }
                                            }
                                        ]
                                    },
                                    "Transition": "Success"
                                },
                                {
                                    "Condition": {
                                        "$eq": [
                                            "$Value.RepositoryId",
                                            "580f96a8-0e13-4e54-ae0a-a0dff1a90fde"
                                        ]
                                    },
                                    "Transition": "Failure"
                                }
                            ]
                        }
                    }
                }
            },
            {
                "Id": "0c5eb0aa-6b87-4006-a80a-074612c9e782",
                "Type": "statemachine",
                "Category": "primary",
                "Image": "images/actors/sheep_gather_intel.jpg",
                "BriefingName": "$loc UI_CONTRACT_STEAL_DOUBLE_TITLE",
                "BriefingText": "$loc UI_CONTRACT_STEAL_DOUBLE_DESC",
                "IsHidden": false,
                "LongBriefingText": "$loc UI_CONTRACT_STEAL_DOUBLE_DESC"	,
                "ObjectiveType": "custom",
                "ForceShowOnLoadingScreen": true,
                "HUDTemplate": {
                    "display": "$loc UI_CONTRACT_STEAL_DOUBLE_TITLE",
                    "iconType": 17
                },
                "Definition": {
                    "Context": {
                        "Targets": ["581fcabe-0548-4857-9d29-410fcc0cbf06"]
                    },
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "setpieces": {
                                "Condition": {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "581fcabe-0548-4857-9d29-410fcc0cbf06"
                                    ]
                                },
                                "Transition": "Success"
                            }
                        }
                    }
                }
            }
        ],
        "GameChangers": [],
        "Bricks": []
    },
    "Metadata": {
        "Title": "UI_CONTRACT_BODY_DOUBLE_TITLE",
        "Description": "UI_CONTRACT_BODY_DOUBLE_DESC",
        "Entitlements": [
            "H2_LEGACY_STANDARD"
        ],
        "ScenePath": "assembly:/_pro/scenes/missions/sheep/scene_adonis.entity",
        "Location": "LOCATION_NEWZEALAND",
        "IsPublished": true,
        "CreatorUserId": "fadb923c-e6bb-4283-a537-eb4d1150262e",
        "GameVersion": "8.10.0.0",
        "ServerVersion": "8.10.0.0",
        "CodeName_Hint": "Adonis",
        "Type": "elusive",
        "Subtype": "specialassignment",
        "Id": "d3axckfd-915a-4407-75ca-72251e356500",
        "PublicId": "194707810076",
        "TileImage": "images/thumbnail/bodydouble.jpg",
        "GroupObjectiveDisplayOrder": [
            {
                "Id": "580f96a8-0e13-4e54-ae0a-a0dff1a90fde"
            },
            {  
				"Id": "ba1f88a4-3a7f-4db2-92da-e88fe556eb1b"
            }
        ],
        "CreationTimestamp": "2024-05-11T21:33:17.090Z",
		"Release": "2.00.x",
		"Entitlements": ["H2_LEGACY_STANDARD"]
    },
    "UserData": {}
},
{
    "Data": {
        "Objectives": [
            {
                "Type": "statemachine",
                "Id": "6ef7c3b6-2511-442c-861b-70599267e0c1",
                "BriefingText": {
                    "$loc": {
                        "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                        "data": "$($repository 3cf8ef68-e6f3-466a-9299-de50e9f0a9bb).Name"
                    }
                },
                "HUDTemplate": {
                    "display": {
                        "$loc": {
                            "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                            "data": "$($repository 3cf8ef68-e6f3-466a-9299-de50e9f0a9bb).Name"
                        }
                    }
                },
                "Category": "primary",
                "Definition": {
                    "Scope": "Hit",
                    "Context": {
                        "Targets": [
                            "3cf8ef68-e6f3-466a-9299-de50e9f0a9bb"
                        ]
                    },
                    "States": {
                        "Start": {
                            "Kill": {
                                "Condition": {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "3cf8ef68-e6f3-466a-9299-de50e9f0a9bb"
                                    ]
                                },
                                "Transition": "Success"
                            }
                        }
                    }
                }
            },
			{
                "Id": "9c0825f8-30f9-4ff0-ac32-693c2d44393c",
				"IgnoreIfInactive": true,
				"Category": "primary",
                "ObjectiveType": "custom",
                "BriefingName": "$loc UI_CONTRACT_WAY_BITTER_SICK",
                "Image": "images/objectives/workers.jpg",
                "HUDTemplate": {
                    "display": "$loc UI_CONTRACT_WAY_BITTER_SICK_MID"
                },
                "BriefingText": "$loc UI_CONTRACT_WAY_BITTER_SICK_MID",
				"LongBriefingText": "$loc UI_CONTRACT_WAY_BITTER_SICK_LONG",
                "Type": "statemachine",
                "Definition": {
                    "Context": {
                        "KilledActors": [],
                        "Targets": ["2ca60a80-31e2-430b-93a0-63c8cc5fa930", "55a76010-c587-4e89-84fd-2e5c085785ac", "1fc8e519-f9f8-46c6-a0dd-33797fa0872a", "01282035-ab26-448c-8aa5-89e73373269a", "6433e667-73da-4859-aa3d-63e0aeeda3ec", "47b3caf8-7e37-4646-b16a-b034b724db68"],
                        "TargetsCounter": 0
                    },
                    "States": {
                        "Start": {
                            "Kill": [{
                                    "Actions": {
                                        "$pushunique": ["KilledActors", "$Value.RepositoryId"]
                                    }
                                }, {
                                    "Actions": {
                                        "$dec": "TargetsCounter"
                                    },
                                    "Condition": {
                                        "$inarray": {
                                            "in": "$.Targets",
                                            "?": {
                                                "$eq": ["$.#", "$Value.RepositoryId"]
                                            }
                                        }
                                    }
                                }, {
                                    "Condition": {
                                        "$all": {
                                            "in": "$.Targets",
                                            "?": {
                                                "$any": {
                                                    "in": "$.KilledActors",
                                                    "?": {
                                                        "$eq": ["$.#", "$.##"]
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "Transition": "Success"
                                }
                            ],
                            "ContractLoad": [{
                                    "Actions": {
                                        "$set": ["TargetsCounter", "$.TargetsCounter"]
                                    }
                                }
                            ]
                        }
                    }
                },
				"OnInactive": {
                    "IfCompleted": {
                        "State": "Completed",
                        "Visible": false
                    }
                },
                "OnActive": {
                    "IfCompleted": {
                        "Visible": true
                    }
                }
            },
			{
                "Id": "fb3c6d3f-c68c-4f34-919c-049db3272c6a",
				"IgnoreIfInactive": true,
				"Category": "primary",
                "ObjectiveType": "custom",
                "BriefingName": "$loc UI_CONTRACT_WAY_BITTER_SICK",
                "Image": "images/objectives/patients.jpg",
                "HUDTemplate": {
                    "display": "$loc UI_CONTRACT_WAY_BITTER_SICK_PAT"
                },
                "BriefingText": "$loc UI_CONTRACT_WAY_BITTER_SICK_PAT",
				"LongBriefingText": "$loc UI_CONTRACT_WAY_BITTER_SICK_PAT_LONG",
                "Type": "statemachine",
                "Definition": {
                    "Context": {
                        "KilledActors": [],
                        "Targets": ["f312ef26-6d88-4057-babb-30a969d428cf", "1ad1f2bf-825a-4d61-9a49-cb5db334d380", "54207b47-c289-49a0-944f-b52201baa429"],
                        "TargetsCounter": 0
                    },
                    "States": {
                        "Start": {
                            "Kill": [{
                                    "Actions": {
                                        "$pushunique": ["KilledActors", "$Value.RepositoryId"]
                                    }
                                }, {
                                    "Actions": {
                                        "$dec": "TargetsCounter"
                                    },
                                    "Condition": {
                                        "$inarray": {
                                            "in": "$.Targets",
                                            "?": {
                                                "$eq": ["$.#", "$Value.RepositoryId"]
                                            }
                                        }
                                    }
                                }, {
                                    "Condition": {
                                        "$all": {
                                            "in": "$.Targets",
                                            "?": {
                                                "$any": {
                                                    "in": "$.KilledActors",
                                                    "?": {
                                                        "$eq": ["$.#", "$.##"]
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "Transition": "Success"
                                }
                            ],
                            "ContractLoad": [{
                                    "Actions": {
                                        "$set": ["TargetsCounter", "$.TargetsCounter"]
                                    }
                                }
                            ]
                        }
                    }
                },
				"OnInactive": {
                    "IfCompleted": {
                        "State": "Completed",
                        "Visible": false
                    }
                },
                "OnActive": {
                    "IfCompleted": {
                        "Visible": true
                    }
                }
            }
        ],
        "GameChangers": [],
        "GameDifficulties": [
            {
                "Difficulty": "easy",
                "Bricks": [
                    "assembly:/_pro/scenes/missions/skunk/difficulty_easy_vermont_gartersnake.brick"
                ]
            },
            {
                "Difficulty": "normal",
                "Bricks": []
            },
            {
                "Difficulty": "hard",
                "Bricks": [
                    "assembly:/_pro/scenes/missions/skunk/difficulty_hard_vermont_gartersnake.brick"
                ]
            }
        ],
        "Bricks": [
            "assembly:/_pro/scenes/missions/skunk/elusive_alabamaslammer.brick",
            "assembly:/_pro/scenes/missions/skunk/mission_gartersnake.brick"
        ]
    },
    "Metadata": {
        "Title": "UI_CONTRACT_WAY_BITTER_TITLE",
        "Description": "UI_CONTRACT_WAY_BITTER_DESC",
        "Entitlements": [
            "H2_LEGACY_STANDARD"
        ],
        "ScenePath": "assembly:/_pro/scenes/missions/skunk/scene_gartersnake.entity",
        "Location": "LOCATION_NORTHAMERICA_GARTERSNAKE",
        "IsPublished": true,
        "CreatorUserId": "fadb923c-e6bb-4283-a537-eb4d1150262e",
        "GameVersion": "8.15.0.0",
        "ServerVersion": "8.15.0.0",
        "Type": "flashback",
        "Subtype": "specialassignment",
        "Id": "16c131de-1990-4ed0-8d6b-75a1dbca0996",
        "PublicId": "166667967053",
        "TileImage": "images/thumbnail/waybitter.jpg",
        "GroupObjectiveDisplayOrder": [
            {
                "Id": "3cf8ef68-e6f3-466a-9299-de50e9f0a9bb"
            },
            {
                "Id": "9c0825f8-30f9-4ff0-ac32-693c2d44393c"
            }
        ],
        "CreationTimestamp": "2024-05-30T03:30:42.270Z"
    },
    "UserData": {}
},
{
    "Data": {
        "Objectives": [
            {
                "Id": "577c2e90-2657-4d5f-9d90-c4cc2342af00",
                "IsHidden": true,
                "Category": "primary",
                "ObjectiveType": "setpiece",
                "ForceShowOnLoadingScreen": true,
                "Image": "images/actors/singer.jpg",
                "DisplayAsKillObjective": true,
                "Type": "statemachine",
                "BriefingText": "Eliminate Cristina Dionisi with an accident kill",
                "LongBriefingText": "$loc UI_CONTRACT_WAY_THE_SINGER",
                "HUDTemplate": {
                    "display": "$loc UI_CONTRACT_SINGER_ACCIDENT"
                },
                "Definition": {
                    "Scope": "Hit",
                    "Context": {
                        "Targets": [
                            "36eab2c5-79b3-4aca-bf8b-8b40ff64c3d5"
                        ]
                    },
                    "States": {
                        "Start": {
                            "Kill": [
                                {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.RepositoryId",
                                                    "36eab2c5-79b3-4aca-bf8b-8b40ff64c3d5"
                                                ]
                                            },
                                            {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "accident"
                                                        ]
                                                    },
                                                    "in": [
                                                        "$Value.KillMethodBroad",
                                                        "$Value.KillMethodStrict"
                                                    ]
                                                }
                                            }
                                        ]
                                    },
                                    "Transition": "Success"
                                },
                                {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.RepositoryId",
                                                    "36eab2c5-79b3-4aca-bf8b-8b40ff64c3d5"
                                                ]
                                            }
                                        ]
                                    },
                                    "Transition": "Failure"
                                }
                            ]
                        }
                    }
                },
                "TargetConditions": [
                    {
                        "Type": "killmethod",
                        "HardCondition": true,
                        "ObjectiveId": "39acc43c-5ec7-43c4-ba02-fef12ca9ef49",
                        "KillMethod": "accident"
                    }
                ]
            },
            {
                "Id": "6907769c-ed7b-4d0c-ab2e-27f929ef284a",
                "IsHidden": true,
                "Category": "primary",
                "ObjectiveType": "setpiece",
                "ForceShowOnLoadingScreen": true,
                "Image": "images/actors/producer.jpg",
                "DisplayAsKillObjective": true,
                "Type": "statemachine",
                "BriefingText": {
                    "$loc": {
                        "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                        "data": "$($repository 914f0c3c-f4a7-46e5-a672-0792f8f30fd4).Name"
                    }
                },
                "LongBriefingText": "$loc UI_CONTRACT_WAY_THE_PRODUCER",
                "HUDTemplate": {
                    "display": {
                        "$loc": {
                            "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                            "data": "$($repository 914f0c3c-f4a7-46e5-a672-0792f8f30fd4).Name"
                        }
                    }
                },
                "Definition": {
                    "Scope": "Hit",
                    "Context": {
                        "Targets": [
                            "914f0c3c-f4a7-46e5-a672-0792f8f30fd4"
                        ]
                    },
                    "States": {
                        "Start": {
                            "Kill": {
                                "Condition": {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "914f0c3c-f4a7-46e5-a672-0792f8f30fd4"
                                    ]
                                },
                                "Transition": "Success"
                            }
                        }
                    }
                }
            },
            {
                "_comment": "----- Do not eliminate the client -----",
                "Id": "d5331a6d-4d91-4949-884f-eb981048a137",
                "Category": "secondary",
                "ObjectiveType": "custom",
                "ForceShowOnLoadingScreen": true,
                "Image": "images/actors/client_artist.jpg",
                "BriefingName": "$loc UI_CONTRACT_WAY_DK_CLIENT",
                "BriefingText": "$loc UI_CONTRACT_WAY_DK_CLIENT",
                "LongBriefingText": "$loc UI_CONTRACT_WAY_THE_CLIENT",
                "HUDTemplate": {
                    "display": "$loc UI_CONTRACT_WAY_DK_CLIENT",
                    "iconType": 17
                },
                "Type": "statemachine",
                "ExcludeFromScoring": false,
                "Definition": {
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "ContractEnd": { "Transition": "Success" },
                            "Kill": [
                                {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.RepositoryId",
                                                    "a0b3c75d-2e35-4d5c-a607-eda13b017e85"
                                                ]
                                            }
                                        ]
                                    },
                                    "Transition": "Failure"
                                }
                            ]
                        }
                    }
                }
            }
        ],
        "GameChangers": [],
        "Bricks": []
    },
    "Metadata": {
        "Title": "UI_CONTRACT_WAY_THE_LABEL",
        "Description": "UI_CONTRACT_WAY_THE_LABEL_DESC",
        "Entitlements": [],
        "ScenePath": "assembly:/_PRO/Scenes/Missions/CoastalTown/_scene_mamba.entity",
        "Location": "LOCATION_COASTALTOWN_NIGHT",
        "IsPublished": true,
        "CreatorUserId": "fadb923c-e6bb-4283-a537-eb4d1150262e",
        "GameVersion": "8.15.0.0",
        "ServerVersion": "8.15.0.0",
        "Type": "elusive",
        "Subtype": "specialassignment",
        "Id": "962c08c5-88ed-40ec-902b-abeff2ad355c",
        "PublicId": "145483649852",
        "TileImage": "images/thumbnail/puppets.jpg",
        "GroupObjectiveDisplayOrder": [
            { "Id": "577c2e90-2657-4d5f-9d90-c4cc2342af00" },
            { "Id": "6907769c-ed7b-4d0c-ab2e-27f929ef284a" },
            { "Id": "d5331a6d-4d91-4949-884f-eb981048a137" }
        ],
        "CreationTimestamp": "2024-05-30T21:46:14.830Z"
    },
    "UserData": {}
},
{
    "Data": {
        "EnableSaving": true,
        "Objectives": [
            {
                "Type": "statemachine",
                "Id": "9dc321ab-96d2-4490-b2d7-31408a6c5c6a",
                "IsHidden": true,
                "BriefingText": {
                    "$loc": {
                        "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                        "data": "$($repository 441209db-35ca-46e8-bb99-b9c3f8e8783c).Name"
                    }
                },
                "HUDTemplate": {
                    "display": {
                        "$loc": {
                            "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                            "data": "$($repository 441209db-35ca-46e8-bb99-b9c3f8e8783c).Name"
                        }
                    }
                },
                "Category": "primary",
                "Definition": {
                    "Scope": "Hit",
                    "Context": {
                        "Targets": [
                            "441209db-35ca-46e8-bb99-b9c3f8e8783c"
                        ]
                    },
                    "States": {
                        "Start": {
                            "Kill": [
                                {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.RepositoryId",
                                                    "441209db-35ca-46e8-bb99-b9c3f8e8783c"
                                                ]
                                            },
                                            {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "Electric"
                                                        ]
                                                    },
                                                    "in": "$Value.DamageEvents"
                                                }
                                            }
                                        ]
                                    },
                                    "Transition": "Success"
                                },
                                {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.RepositoryId",
                                                    "441209db-35ca-46e8-bb99-b9c3f8e8783c"
                                                ]
                                            }
                                        ]
                                    },
                                    "Transition": "Failure"
                                }
                            ]
                        }
                    }
                },
                "TargetConditions": [
                    {
                        "Type": "killmethod",
                        "HardCondition": true,
                        "ObjectiveId": "6e60233f-4aa8-4652-8a68-15521b5cda3a",
                        "KillMethod": "accident_electric"
                    }
                ]
            },
			{
                "Id": "086c6861-795c-45aa-841d-4754922bc5e1",
                "Category": "primary",
                "IsHidden": true,
                "Activation": {
                    "$eq": [
                        "$9dc321ab-96d2-4490-b2d7-31408a6c5c6a",
                        "Completed"
                    ]
                },
                "ObjectiveType": "custom",
                "Image": "images/objectives/tractor.jpg",
                "BriefingName": "$loc UI_CONTRACT_TARGET1_HUD",
                "HUDTemplate": {
                    "display": "$loc UI_CONTRACT_TARGET1_HUD"
                },
                "BriefingText": "$loc UI_CONTRACT_TARGET1_DESC",
				"LongBriefingText": "$loc UI_CONTRACT_TARGET1_DESC",
                "Type": "statemachine",
                "Definition": {
                    "Scope": "hit",
                    "Context": {
                        "KilledActors": [],
                        "Targets": ["f6b0259f-a448-4868-9dd4-25223de39967"]
                    },
                    "States": {
                        "Start": {
                            "Kill": [
                                {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.RepositoryId",
                                                    "f6b0259f-a448-4868-9dd4-25223de39967"
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.KillClass",
                                                    "explosion"
                                                ]
                                            }
                                        ]
                                    },
                                    "Transition": "Success"
                                },
                                {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.RepositoryId",
                                                    "f6b0259f-a448-4868-9dd4-25223de39967"
                                                ]
                                            }
                                        ]
                                    },
                                    "Transition": "Failure"
                                }
                            ]
                        }
                    }
                }
            },
			{
                "Id": "15a3245d-a32b-4440-a654-9f2004e372f9",
                "Category": "primary",
                "IsHidden": true,
                "Activation": {
                    "$eq": [
                        "$086c6861-795c-45aa-841d-4754922bc5e1",
                        "Completed"
                    ]
                },
                "ObjectiveType": "custom",
                "Image": "images/objectives/wideshot.jpg",
                "BriefingName": "$loc UI_CONTRACT_TARGET2_HUD",
                "HUDTemplate": {
                    "display": "$loc UI_CONTRACT_TARGET2_HUD"
                },
                "BriefingText": "$loc UI_CONTRACT_TARGET2_DESC",
				"LongBriefingText": "$loc UI_CONTRACT_TARGET2_DESC",
                "Type": "statemachine",
                "Definition": {
                    "Scope": "hit",
                    "Context": {
                        "KilledActors": [],
                        "Targets": ["a109591e-1225-4043-9a12-c4535dc28764"]
                    },
                    "States": {
                        "Start": {
                            "Kill": [
                                {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.RepositoryId",
                                                    "a109591e-1225-4043-9a12-c4535dc28764"
                                                ]
                                            },
                                            {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "accident"
                                                        ]
                                                    },
                                                    "in": [
                                                        "$Value.KillMethodBroad",
                                                        "$Value.KillMethodStrict"
                                                    ]
                                                }
                                            }
                                        ]
                                    },
                                    "Transition": "Success"
                                },
                                {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.RepositoryId",
                                                    "a109591e-1225-4043-9a12-c4535dc28764"
                                                ]
                                            }
                                        ]
                                    },
                                    "Transition": "Failure"
                                }
                            ]
                        }
                    }
                }
            }
        ],
        "Bricks": [
            "assembly:/_PRO/Scenes/Missions/Colorado_2/_scene_bushwacker.brick",
			"assembly:/_PRO/Scenes/Missions/Colorado_2/_scene_flirtini.brick"
        ],
        "VR": [
            {
                "Quality": "base",
                "Bricks": [
                    "assembly:/_pro/Scenes/Bricks/vr_setup.brick",
                    "assembly:/_PRO/Scenes/missions/colorado_2/vr_overrides_bull.brick",
                    "assembly:/_PRO/scenes/missions/colorado_2/vr_overrides_ps4perf.brick"
                ]
            },
            {
                "Quality": "better",
                "Bricks": [
                    "assembly:/_pro/Scenes/Bricks/vr_setup.brick",
                    "assembly:/_PRO/Scenes/missions/colorado_2/vr_overrides_bull.brick"
                ]
            }
        ],
        "Entrances": [],
        "GameChangers": []
    },
    "Metadata": {
        "Id": "12344d75-ca87-4be7-a18e-caf30e6c8136",
        "Title": "UI_CONTRACT_BUSHWHACKER_TITLE",
        "Description": "UI_CONTRACT_BUSHWHACKER_DESC",
        "CodeName_Hint": "Bushwacker",
        "ScenePath": "assembly:/_PRO/Scenes/Missions/Colorado_2/scene_rabies.entity",
        "TileImage": "images/thumbnail/chameleon_day.jpg",
        "Location": "LOCATION_COLORADO_RABIES",
        "CreatorUserId": "fadb923c-e6bb-4283-a537-eb4d1150262e",
        "Type": "elusive",
        "Subtype": "specialassignment",
        "PublicId": "009556361447",
        "Entitlements": ["H1_LEGACY_STANDARD"],
        "Season": 1
    },
    "UserData": {}
},
{
    "Data": {
        "Bricks": [
            "assembly:/_PRO/Scenes/Missions/Colorado_2/_scene_flirtini.brick"
        ],
        "VR": [
            {
                "Quality": "base",
                "Bricks": [
                    "assembly:/_pro/Scenes/Bricks/vr_setup.brick",
                    "assembly:/_PRO/Scenes/missions/colorado_2/vr_overrides_bull.brick",
                    "assembly:/_PRO/scenes/missions/colorado_2/vr_overrides_ps4perf.brick"
                ]
            },
            {
                "Quality": "better",
                "Bricks": [
                    "assembly:/_pro/Scenes/Bricks/vr_setup.brick",
                    "assembly:/_PRO/Scenes/missions/colorado_2/vr_overrides_bull.brick"
                ]
            }
        ],
        "EnableSaving": true,
        "Entrances": [],
        "GameChangers": [],
        "Objectives": [
            {
                "FailedEvent": null,
                "Id": "0a87490c-076c-4d08-ba73-37c70600c02d",
                "IsHidden": true,
                "Primary": true,
                "ResetEvent": null,
                "SuccessEvent": {
                    "EventName": "Kill",
                    "EventValues": {
                        "RepositoryId": "229d24be-d95a-4c73-a1be-afac4a05a5e3"
                    }
                },
                "Text": null
            },
            {
                "Category": "condition",
                "Definition": {
                    "Context": {},
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "TargetEscaped": { "Transition": "Success" }
                        }
                    }
                },
                "ExcludeFromScoring": true,
                "Id": "d76898ad-1279-45e0-a83f-3821ab4507d8",
                "OnActive": { "IfInProgress": { "Visible": false } },
                "Type": "statemachine"
            },
            {
                "Activation": {
                    "$eq": [
                        "$d76898ad-1279-45e0-a83f-3821ab4507d8",
                        "Completed"
                    ]
                },
                "BriefingText": "$loc UI_CONTRACT_FLIRTINI_FAIL_TARGET_ESCAPED",
                "Category": "primary",
                "Definition": {
                    "Context": {},
                    "States": {
                        "EscapeCountdownStart": {
                            "$timer": {
                                "Condition": { "$after": 30 },
                                "Transition": "Failure"
                            },
                            "CarDestroyed": { "Transition": "Success" },
                            "Kill": [
                                {
                                    "Condition": {
                                        "$eq": [
                                            "$Value.RepositoryId",
                                            "229d24be-d95a-4c73-a1be-afac4a05a5e3"
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        },
                        "Start": {
                            "TargetEscaped": {
                                "Transition": "EscapeCountdownStart"
                            }
                        }
                    }
                },
                "IgnoreIfInactive": true,
                "HUDTemplate": { "display": "$loc UI_CONTRACT_FLIRTINI_OBJ_3" },
                "Id": "980a8b37-21f1-466f-a220-d2083df88ebb",
                "Scope": "session",
                "Type": "statemachine"
            },
            {
                "Id": "18767c70-0b9a-4e09-af3a-25e7f55937b8",
                "IsHidden": true,
                "Category": "primary",
                "ObjectiveType": "setpiece",
                "ForceShowOnLoadingScreen": true,
                "Image": "images/contracts/createcontract/tile.jpg",
                "DisplayAsKillObjective": true,
                "Type": "statemachine",
                "BriefingText": {
                    "$loc": {
                        "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                        "data": "$($repository becfbd45-5a91-4cca-8d3b-411e70e16172).Name"
                    }
                },
                "LongBriefingText": "$loc UI_CONTRACT_JOHN_DOE_DESC",
                "HUDTemplate": {
                    "display": {
                        "$loc": {
                            "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                            "data": "$($repository becfbd45-5a91-4cca-8d3b-411e70e16172).Name"
                        }
                    }
                },
                "Definition": {
                    "Scope": "Hit",
                    "Context": {
                        "Targets": [
                            "becfbd45-5a91-4cca-8d3b-411e70e16172"
                        ]
                    },
                    "States": {
                        "Start": {
                            "Kill": {
                                "Condition": {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "becfbd45-5a91-4cca-8d3b-411e70e16172"
                                    ]
                                },
                                "Transition": "Success"
                            }
                        }
                    }
                }
            },
            {
                "Type": "statemachine",
                "Id": "1a596216-381e-4592-9798-26f156973942",
                "ObjectiveType": "custom",
                "Category": "secondary",
                "BriefingName": "$loc UI_CONTRACT_CLUE_TIME_NAME",
                "BriefingText": {
                    "$loc": {
                        "key": "UI_CONTRACT_CLUE_TIME_DESC",
                        "data": "$formatstring 00:30"
                    }
                },
                "LongBriefingText": {
                    "$loc": {
                        "key": "UI_CONTRACT_CLUE_TIME_DESC",
                        "data": "$formatstring 00:30"
                    }
                },
                "HUDTemplate": {
                    "display": {
                        "$loc": {
                            "key": "UI_CONTRACT_CLUE_TIME_DESC",
                            "data": "$formatstring 00:30"
                        }
                    }
                },
                "Image": "images/contractconditions/condition_contrac_time_limit.jpg",
                "CombinedDisplayInHud": true,
                "Definition": {
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "Kill": {
                                "Condition": {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "becfbd45-5a91-4cca-8d3b-411e70e16172"
                                    ]
                                },
                                "Transition": "Success"
                            },
                            "IntroCutEnd": {
                                "Transition": "TimerRunning"
                            }
                        },
                        "TimerRunning": {
                            "$timer": [
                                {
                                    "Condition": {
                                        "$after": 30
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                }
            },
			{
				"Id": "a6830de3-37fd-4df0-be49-341a6726e608",
                "Activation": {
                    "$eq": [
                        "$1a596216-381e-4592-9798-26f156973942",
                        "Completed"
                    ]
                },
				"IgnoreIfInactive": true,
				"ObjectiveType": "custom",
				"Image": "images/hint/garage.jpg",
				"BriefingName": "$loc UI_CONTRACT_CLUE_1",
				"BriefingText": "$loc UI_CONTRACT_CLUE_1_DESC",
				"LongBriefingText": "$loc UI_CONTRACT_CLUE_1_DESC",
				"DisplayAsKillObjective": false,
				"HUDTemplate": {
					"display": "$loc UI_CONTRACT_CLUE_1_HUD",
					"iconType": 8
				},
				"Category": "secondary",
				"Type": "statemachine",
				"Definition": {
					"Scope": "session",
					"States": {
						"Start": {
						}
					}
				}
			},
			{
                "Type": "statemachine",
                "Id": "2a596216-381e-4592-9798-26f156973942",
                "Activation": {
                    "$eq": [
                        "$1a596216-381e-4592-9798-26f156973942",
                        "Completed"
                    ]
                },
                "ObjectiveType": "custom",
                "Category": "secondary",
                "BriefingName": "$loc UI_CONTRACT_CLUE_TIME_NAME",
                "BriefingText": {
                    "$loc": {
                        "key": "UI_CONTRACT_CLUE_TIME_DESC",
                        "data": "$formatstring 01:00"
                    }
                },
                "LongBriefingText": {
                    "$loc": {
                        "key": "UI_CONTRACT_CLUE_TIME_DESC",
                        "data": "$formatstring 01:00"
                    }
                },
                "HUDTemplate": {
                    "display": {
                        "$loc": {
                            "key": "UI_CONTRACT_CLUE_TIME_DESC",
                            "data": "$formatstring 01:00"
                        }
                    }
                },
                "Image": "images/contractconditions/condition_contrac_time_limit.jpg",
                "CombinedDisplayInHud": true,
                "Definition": {
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "Kill": {
                                "Condition": {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "becfbd45-5a91-4cca-8d3b-411e70e16172"
                                    ]
                                },
                                "Transition": "Success"
                            },
                            "IntroCutEnd": {
                                "Transition": "TimerRunning"
                            }
                        },
                        "TimerRunning": {
                            "exit_gate": {
                                "Transition": "Success"
                            },
                            "$timer": [
                                {
                                    "Condition": {
                                        "$after": 60
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                }
            },
			{
				"Id": "b6830de3-37fd-4df0-be49-341a6726e608",
                "Activation": {
                    "$eq": [
                        "$2a596216-381e-4592-9798-26f156973942",
                        "Completed"
                    ]
                },
				"IgnoreIfInactive": true,
				"ObjectiveType": "custom",
				"Image": "images/hint/car.jpg",
				"BriefingName": "$loc UI_CONTRACT_CLUE_2",
				"BriefingText": "$loc UI_CONTRACT_CLUE_2_DESC",
				"LongBriefingText": "$loc UI_CONTRACT_CLUE_2_DESC",
				"DisplayAsKillObjective": false,
				"HUDTemplate": {
					"display": "$loc UI_CONTRACT_CLUE_2_HUD",
					"iconType": 8
				},
				"Category": "secondary",
				"Type": "statemachine",
				"Definition": {
					"Scope": "session",
					"States": {
						"Start": {
						}
					}
				}
			},
			{
                "Type": "statemachine",
                "Id": "3a596216-381e-4592-9798-26f156973942",
                "Activation": {
                    "$eq": [
                        "$2a596216-381e-4592-9798-26f156973942",
                        "Completed"
                    ]
                },
                "ObjectiveType": "custom",
                "Category": "secondary",
                "BriefingName": "$loc UI_CONTRACT_CLUE_TIME_NAME",
                "BriefingText": {
                    "$loc": {
                        "key": "UI_CONTRACT_CLUE_TIME_DESC",
                        "data": "$formatstring 01:30"
                    }
                },
                "LongBriefingText": {
                    "$loc": {
                        "key": "UI_CONTRACT_CLUE_TIME_DESC",
                        "data": "$formatstring 01:30"
                    }
                },
                "HUDTemplate": {
                    "display": {
                        "$loc": {
                            "key": "UI_CONTRACT_CLUE_TIME_DESC",
                            "data": "$formatstring 01:30"
                        }
                    }
                },
                "Image": "images/contractconditions/condition_contrac_time_limit.jpg",
                "CombinedDisplayInHud": true,
                "Definition": {
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "IntroCutEnd": {
                                "Transition": "TimerRunning"
                            }
                        },
                        "TimerRunning": {
                            "$timer": [
                                {
                                    "Condition": {
                                        "$after": 90
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                }
            },
			{
				"Id": "c6830de3-37fd-4df0-be49-341a6726e608",
                "Activation": {
                    "$eq": [
                        "$3a596216-381e-4592-9798-26f156973942",
                        "Completed"
                    ]
                },
				"IgnoreIfInactive": true,
				"ObjectiveType": "custom",
				"Image": "images/hint/food.jpg",
				"BriefingName": "$loc UI_CONTRACT_CLUE_3",
				"BriefingText": "$loc UI_CONTRACT_CLUE_3_DESC",
				"LongBriefingText": "$loc UI_CONTRACT_CLUE_3_DESC",
				"DisplayAsKillObjective": false,
				"HUDTemplate": {
					"display": "$loc UI_CONTRACT_CLUE_3_HUD",
					"iconType": 8
				},
				"Category": "secondary",
				"Type": "statemachine",
				"Definition": {
					"Scope": "session",
					"States": {
						"Start": {
						}
					}
				}
			}
        ]
    },
    "Metadata": {
        "CodeName_Hint": "Flirtini",
        "CreatorUserId": "fadb923c-e6bb-4283-a537-eb4d1150262e",
        "Description": "UI_CONTRACT_BOOKKEEPER_DESC",
        "Id": "123c5a57-69d1-48b6-a14b-2ae396c16174",
        "Location": "LOCATION_COLORADO_RABIES",
        "ScenePath": "assembly:/_PRO/Scenes/Missions/Colorado_2/scene_rabies.entity",
        "TileImage": "images/thumbnail/bookeeper_day.jpg",
        "Title": "UI_CONTRACT_FLIRTINI_TITLE",
        "Type": "elusive",
        "Subtype": "specialassignment",
        "PublicId": "009407438847",
        "Entitlements": ["H1_LEGACY_STANDARD"],
        "Season": 1
    },
    "UserData": {}
},
{
    "Data": {
		"Objectives": [
		{
			"Id": "e00b7a3b-5903-4026-9f97-7a0353bbc223",
			"IsHidden": true,
			"Category": "primary",
			"ObjectiveType": "setpiece",
			"ForceShowOnLoadingScreen": true,
			"Image": "images/actors/glutton.jpg",
			"DisplayAsKillObjective": true,
			"Type": "statemachine",
			"BriefingText": {
				"$loc": {
					"key": "UI_CONTRACT_GENERAL_OBJ_KILL",
					"data": "$($repository 928fe230-791b-4f73-a617-ec05c35d6902).Name"
				}
			},
			"LongBriefingText": "$loc UI_CONTRACT_GLUTTON",
			"HUDTemplate": {
				"display": {
					"$loc": {
						"key": "UI_CONTRACT_GENERAL_OBJ_KILL",
						"data": "$($repository 928fe230-791b-4f73-a617-ec05c35d6902).Name"
					}
				}
			},
			"Definition": {
				"Scope": "Hit",
				"Context": {
					"Targets": [
						"928fe230-791b-4f73-a617-ec05c35d6902"
					]
				},
				"States": {
					"Start": {
						"Kill": {
							"Condition": {
								"$eq": [
									"$Value.RepositoryId",
									"928fe230-791b-4f73-a617-ec05c35d6902"
								]
							},
							"Transition": "Success"
						}
					}
				}
			}
		},
		{
			"Id": "7739085e-09ea-4d9d-999e-5fe3253b67c6",
			"IgnoreIfInactive": true,
			"ObjectiveType": "custom",
			"Image": "images/objectives/fabian.jpg",
			"BriefingName": "$loc UI_CONTRACT_GLUTTON_DISC_HUD",
			"BriefingText": "$loc UI_CONTRACT_GLUTTON_DISC_DESC",
			"LongBriefingText": "$loc UI_CONTRACT_GLUTTON_DISC_LONG",
			"DisplayAsKillObjective": false,
			"HUDTemplate": {
				"display": "$loc UI_CONTRACT_GLUTTON_DISC_HUD",
				"iconType": 17
			},
			"Category": "primary",
			"Primary": true,
			"Type": "statemachine",
			"Definition": {
				"Scope": "session",
				"Context": {
					"Targets": ["06af455f-2186-436f-a70d-5ad060bb986e"]
				},
				"States": {
					"Start": {
						"ItemPickedUp": [{
							"Condition": {
								"$eq": ["$Value.RepositoryId", "06af455f-2186-436f-a70d-5ad060bb986e"]
							},
							"Transition": "Success"
						}]
					}
				}
			}
		}
		],
        "GameChangers": [],
        "Bricks": []
    },
    "Metadata": {
        "Title": "UI_CONTRACT_GLUTTON_TITLE",
        "Description": "UI_CONTRACT_GLUTTON_DESC",
        "Entitlements": [
            "H2_LEGACY_EXPANSION"
        ],
        "ScenePath": "assembly:/_pro/scenes/missions/Greedy/mission_raccoon/scene_raccoon_basic.entity",
        "Location": "LOCATION_GREEDY_RACCOON",
        "IsPublished": true,
        "CreatorUserId": "fadb923c-e6bb-4283-a537-eb4d1150262e",
        "GameVersion": "8.10.0.0",
        "ServerVersion": "8.10.0.0",
        "Type": "elusive",
        "Subtype": "specialassignment",
        "Id": "062f8721-2d67-4b61-a56a-acc26f71e405",
        "PublicId": "188272307069",
        "TileImage": "images/thumbnail/glutton.jpg",
        "GroupObjectiveDisplayOrder": [
            {
                "Id": "928fe230-791b-4f73-a617-ec05c35d6902"
            }
        ],
        "CreationTimestamp": "2024-05-04T02:49:23.885Z"
    },
    "UserData": {}
},
{
    "Data": {
        "EnableSaving": true,
        "Objectives": [
            {
                "Id": "d84ad5f8-0312-4232-b65c-8cb2bdfff689",
                "Primary": true,
                "IsHidden": true,
                "SuccessEvent": {
                    "EventName": "Kill",
                    "EventValues": {
                        "RepositoryId": "d339202b-5282-4bb9-9be6-d3335311be1e"
                    }
                }
            }
        ],
        "Bricks": [
            "assembly:/_pro/scenes/missions/colombia/elusive_highball.brick"
        ],
        "VR": [
            {
                "Quality": "base",
                "Bricks": [
                    "assembly:/_pro/Scenes/Bricks/vr_setup.brick",
                    "assembly:/_pro/scenes/missions/colombia/vr_overrides_hippo.brick",
                    "assembly:/_PRO/scenes/missions/colombia/vr_overrides_ps4perf.brick"
                ]
            },
            {
                "Quality": "better",
                "Bricks": [
                    "assembly:/_pro/Scenes/Bricks/vr_setup.brick",
                    "assembly:/_pro/scenes/missions/colombia/vr_overrides_hippo.brick"
                ]
            }
        ],
        "GameChangers": [],
        "Entrances": ["37d5b96b-2c27-4d1b-a7e4-2fa290e6d2d6"]
    },
    "Metadata": {
        "Id": "c5d21a21-e586-492c-994e-1fcd9e1dd6de",
        "Type": "elusive",
        "Subtype": "specialassignment",
        "Title": "UI_CONTRACT_HIGHBALL_TITLE",
        "Description": "UI_CONTRACT_HIGHBALL_DESC",
        "BriefingVideo": "briefing_highball",
        "DebriefingVideo": "debriefing_highball",
        "ScenePath": "assembly:/_pro/scenes/missions/colombia/scene_anaconda.entity",
        "TileImage": "images/thumbnail/revolutionary_fog.jpg",
        "Location": "LOCATION_COLOMBIA_ANACONDA",
        "CreatorUserId": "fadb923c-e6bb-4283-a537-eb4d1150262e",
        "Entitlements": ["H2_LEGACY_EXPANSION"],
        "PublicId": "021110827047",
        "Season": 2
    },
    "UserData": {}
},
{
    "Data": {
        "EnableSaving": true,
        "Objectives": [
            {
                "Id": "fb63a347-6f03-481a-9a88-5a0162c5f741",
                "Primary": true,
                "ResetEvent": null,
                "FailedEvent": null,
                "IsHidden": true,
                "SuccessEvent": {
                    "EventName": "Kill",
                    "EventValues": {
                        "RepositoryId": "7387e648-ad6b-408d-a0ee-3b3943767e78"
                    }
                }
            },
            {
                "Id": "d1311911-9529-4ec3-a0de-52885c4f4d7a",
                "Primary": true,
                "ResetEvent": null,
                "FailedEvent": null,
                "IsHidden": true,
                "SuccessEvent": {
                    "EventName": "Kill",
                    "EventValues": {
                        "RepositoryId": "978ad630-8d31-4416-8976-8ed1009a4dbd"
                    }
                }
            }
        ],
        "Bricks": [
            "assembly:/_pro/scenes/missions/bangkok/mission_bangkok_brassmonkey.brick"
        ],
        "VR": [
            {
                "Quality": "base",
                "Bricks": [
                    "assembly:/_pro/Scenes/Bricks/vr_setup.brick",
                    "assembly:/_PRO/Scenes/Missions/bangkok/vr_overrides_bangkok.brick",
                    "assembly:/_PRO/Scenes/Missions/bangkok/vr_overrides_ps4perf.brick"
                ]
            },
            {
                "Quality": "better",
                "Bricks": [
                    "assembly:/_pro/Scenes/Bricks/vr_setup.brick",
                    "assembly:/_PRO/Scenes/Missions/bangkok/vr_overrides_bangkok.brick"
                ]
            }
        ],
        "GameChangers": []
    },
    "Metadata": {
        "Id": "2fb4ae19-a233-4v0f-jbe3-5c06af08c74c",
        "Title": "UI_CONTRACT_BRASSMONKEY_TITLE",
        "Description": "UI_CONTRACT_BRASSMONKEY_DESC",
        "CodeName_Hint": "Brass Monkey",
        "ScenePath": "assembly:/_pro/scenes/missions/Bangkok/scene_zika.entity",
        "TileImage": "images/thumbnail/exdictator_night.jpg",
        "Location": "LOCATION_BANGKOK_ZIKA",
        "BriefingVideo": "briefing_brassmonkey",
        "DebriefingVideo": "debriefing_brassmonkey",
        "CreatorUserId": "fadb923c-e6bb-4283-a537-eb4d1150262e",
        "Type": "elusive",
        "Subtype": "specialassignment",
        "PublicId": "008733765547",
        "Entitlements": ["H1_LEGACY_STANDARD"],
        "Season": 1
    },
    "UserData": {}
},
{
    "Data": {
        "EnableSaving": true,
        "Objectives": [
            {
                "Id": "d27b6142-11b8-4319-9c0b-fac076b016e4",
                "Primary": true,
                "IsHidden": true,
                "SuccessEvent": {
                    "EventName": "Kill",
                    "EventValues": {
                        "RepositoryId": "c4502487-26fb-4b6c-8760-3cc63ac873ec"
                    }
                }
            }
        ],
        "Bricks": [
            "assembly:/_pro/scenes/missions/bangkok/mission_bangkok_martini.brick"
        ],
        "VR": [
            {
                "Quality": "base",
                "Bricks": [
                    "assembly:/_pro/Scenes/Bricks/vr_setup.brick",
                    "assembly:/_PRO/Scenes/Missions/bangkok/vr_overrides_bangkok.brick",
                    "assembly:/_PRO/Scenes/Missions/bangkok/vr_overrides_ps4perf.brick"
                ]
            },
            {
                "Quality": "better",
                "Bricks": [
                    "assembly:/_pro/Scenes/Bricks/vr_setup.brick",
                    "assembly:/_PRO/Scenes/Missions/bangkok/vr_overrides_bangkok.brick"
                ]
            }
        ],
        "GameChangers": []
    },
    "Metadata": {
        "Id": "2fc4ae19-ca33-440f-bbe3-5c06a508c74c",
        "Title": "UI_CONTRACT_MARTINI_TITLE",
        "Description": "UI_CONTRACT_MARTINI_DESC",
        "CodeName_Hint": "Martini",
        "ScenePath": "assembly:/_pro/scenes/missions/Bangkok/scene_zika.entity",
        "TileImage": "images/thumbnail/foodcritic_night.jpg",
        "Location": "LOCATION_BANGKOK_ZIKA",
        "BriefingVideo": "briefing_martini",
        "DebriefingVideo": "debriefing_martini",
        "CreatorUserId": "fadb923c-e6bb-4283-a537-eb4d1150262e",
        "Type": "elusive",
        "Subtype": "specialassignment",
        "PublicId": "008385381447",
        "Entitlements": ["H1_LEGACY_STANDARD"],
        "Season": 1
    },
    "UserData": {}
},
{
    "Data": {
        "EnableSaving": true,
        "Objectives": [
            {
                "Id": "a0dc6d26-1114-4e4f-8bef-096e3924c545",
                "Primary": true,
                "IsHidden": true,
                "SuccessEvent": {
                    "EventName": "Kill",
                    "EventValues": {
                        "RepositoryId": "3a26a487-5f3b-440a-a55d-13a136eb1bea"
                    }
                }
            },
            {
                "Id": "e8da2281-192e-45b4-886e-36d713314145",
                "IsHidden": true,
                "Category": "primary",
                "ObjectiveType": "custom",
                "ForceShowOnLoadingScreen": true,
                "Image": "images/unlockables/item_perspective_55d34557-5b46-422f-84ce-7bb13cfcef96_0.jpg",
                "BriefingName": "$loc UI_CONTRACT_BLOODYMARY_OBJ_2_TITLE",
                "BriefingText": "$loc UI_CONTRACT_BLOODYMARY_OBJ_2_TITLE",
                "LongBriefingText": "$loc UI_CONTRACT_BLOODYMARY_OBJ_2_DESC",
                "HUDTemplate": {
                    "display": "$loc UI_CONTRACT_BLOODYMARY_OBJ_2_TITLE"
                },
                "Type": "statemachine",
                "Definition": {
                    "Context": {
                        "Targets": ["6c05ffd3-a02b-45b6-9c05-ac3f6fcc0561"]
                    },
                    "States": {
                        "Start": {
                            "ItemPickedUp": {
                                "Condition": {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "6c05ffd3-a02b-45b6-9c05-ac3f6fcc0561"
                                    ]
                                },
                                "Transition": "Success"
                            }
                        }
                    }
                }
            }
        ],
        "Bricks": [
            "assembly:/_pro/scenes/missions/bangkok/mission_bangkok_bloodymary.brick"
        ],
        "VR": [
            {
                "Quality": "base",
                "Bricks": [
                    "assembly:/_pro/Scenes/Bricks/vr_setup.brick",
                    "assembly:/_PRO/Scenes/Missions/bangkok/vr_overrides_bangkok.brick",
                    "assembly:/_PRO/Scenes/Missions/bangkok/vr_overrides_ps4perf.brick"
                ]
            },
            {
                "Quality": "better",
                "Bricks": [
                    "assembly:/_pro/Scenes/Bricks/vr_setup.brick",
                    "assembly:/_PRO/Scenes/Missions/bangkok/vr_overrides_bangkok.brick"
                ]
            }
        ],
        "GameChangers": []
    },
    "Metadata": {
        "Id": "2hc4ae39-xa33-4n0f-bbg3-5c06a518c74c",
        "Title": "UI_CONTRACT_BLOODYMARY_TITLE",
        "Description": "UI_CONTRACT_BLOODYMARY_DESC",
        "CodeName_Hint": "BloodyMary",
        "ScenePath": "assembly:/_pro/scenes/missions/Bangkok/scene_zika.entity",
        "TileImage": "images/thumbnail/warlord_night.jpg",
        "Location": "LOCATION_BANGKOK_ZIKA",
        "BriefingVideo": "briefing_bloodymary",
        "DebriefingVideo": "debriefing_bloodymary",
        "CreatorUserId": "fadb923c-e6bb-4283-a537-eb4d1150262e",
        "Type": "elusive",
        "Subtype": "specialassignment",
        "PublicId": "008817603347",
        "Entitlements": ["H1_LEGACY_STANDARD"],
        "Season": 1
    },
    "UserData": {}
},
{
    "Data": {
        "EnableSaving": true,
        "Objectives": [
            {
                "Id": "6bd1e308-9bf9-4f9d-97d7-12caf1db6b95",
                "Primary": true,
                "SuccessEvent": {
                    "EventName": "Kill",
                    "EventValues": {
                        "RepositoryId": "731db58c-ec2f-40e1-92a1-6c367683b7d9"
                    }
                }
            }
        ],
        "Bricks": [
            "assembly:/_pro/scenes/missions/bangkok/mission_ts6_gimlet.brick"
        ],
        "GameChangers": []
    },
    "Metadata": {
        "Id": "d38d3937-be63-48e4-aa4f-ea77ef93a16d",
        "IsPublished": true,
        "Year": 1,
        "Title": "UI_CONTRACT_GIMLET_TITLE",
        "Description": "UI_CONTRACT_GIMLET_DESC",
        "BriefingVideo": "briefing_gimlet",
        "DebriefingVideo": "debriefing_gimlet",
        "CodeName_Hint": "Gimlet",
        "ScenePath": "assembly:/_pro/scenes/missions/Bangkok/scene_zika.entity",
        "TileImage": "images/thumbnail/veteran_night.jpg",
        "Location": "LOCATION_BANGKOK_ZIKA",
        "LastUpdate": "2015-03-10T12:00:00.441Z",
        "CreationTimestamp": "2023-08-17T11:03:06.1530891Z",
        "CreatorUserId": "fadb923c-e6bb-4283-a537-eb4d1150262e",
        "Type": "orbis",
        "Subtype": "specialassignment",
        "Release": "1.4.x",
        "RequiredUnlockable": "ACCESS_SARAJEVO6_GIMLET",
        "Entitlements": ["H3_SARAJEVO_SIX"],
        "Drops": ["ACCESS_SARAJEVO6_BLACK_RUSSIAN"],
        "PublicId": "008825915747"
    },
    "UserData": {}
},
{
    "Data": {
        "Objectives": [
			{
                "Id": "023d0cd6-349c-498f-a291-d44c3edb4fe7",
				"IgnoreIfInactive": true,
				"Category": "primary",
                "ObjectiveType": "custom",
                "BriefingName": "$loc UI_CONTRACT_PARIS_ALL_TARGETS_HUD",
                "Image": "images/objectives/all_targets_paris.png",
                "HUDTemplate": {
                    "display": "$loc UI_CONTRACT_PARIS_ALL_TARGETS_HUD"
                },
                "BriefingText": "$loc UI_CONTRACT_PARIS_ALL_TARGETS",
				"LongBriefingText": "$loc UI_CONTRACT_PARIS_ALL_TARGETS",
                "Type": "statemachine",
                "Definition": {
                    "Context": {
                        "KilledActors": [],
                        "Targets": ["65c6eafe-a9a1-42d9-99f8-5796507117e0", "e30acbd5-cb3b-4691-a919-d1cf0ccf7fc4", "124c40d5-b342-4288-b202-57e80148e0d7", "fc036cf1-7c6c-4418-b821-593628b67826", "e44ef736-8bba-4d58-8136-c1aca6b74d71", "46b78498-b470-4aad-b72b-d90f3126a7f6", "052434e7-f451-462f-a9d7-13657cb047c0", "edad702b-5b37-4dc1-a47c-36a1588f1d3f", "1b21e6e6-beba-4f7e-8760-e9604a69c569", "2c11757e-905e-44e7-8115-81e6a5a72ee2", "b1db6854-b82b-4bb4-8e73-a9c138a283d2", "7635712b-ebe1-40a4-a947-452fa6820cfc"],
                        "TargetsCounter": 0
                    },
                    "States": {
                        "Start": {
                            "Kill": [{
                                    "Actions": {
                                        "$pushunique": ["KilledActors", "$Value.RepositoryId"]
                                    }
                                }, {
                                    "Actions": {
                                        "$dec": "TargetsCounter"
                                    },
                                    "Condition": {
                                        "$inarray": {
                                            "in": "$.Targets",
                                            "?": {
                                                "$eq": ["$.#", "$Value.RepositoryId"]
                                            }
                                        }
                                    }
                                }, {
                                    "Condition": {
                                        "$all": {
                                            "in": "$.Targets",
                                            "?": {
                                                "$any": {
                                                    "in": "$.KilledActors",
                                                    "?": {
                                                        "$eq": ["$.#", "$.##"]
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "Transition": "Success"
                                }
                            ],
                            "ContractLoad": [{
                                    "Actions": {
                                        "$set": ["TargetsCounter", "$.TargetsCounter"]
                                    }
                                }
                            ]
                        }
                    }
                },
				"OnInactive": {
                    "IfCompleted": {
                        "State": "Completed",
                        "Visible": false
                    }
                },
                "OnActive": {
                    "IfCompleted": {
                        "Visible": true
                    }
                }
            },
            {
                "Id": "1495cf66-c9a8-481e-92da-9990c4e2630f",
                "IsHidden": true,
                "Category": "primary",
                "ObjectiveType": "custom",
                "Image": "images/unlockables/item_perspective_d12fc231-020b-4673-a7b8-3789ed9fee93_0.jpg",
                "BriefingName": "$loc UI_CONTRACT_MARGARITA_OBJ_2_TITLE",
                "BriefingText": "$loc UI_CONTRACT_PARIS_IVORY",
                "LongBriefingText": "$loc UI_CONTRACT_MARGARITA_OBJ_2_DESC",
                "HUDTemplate": {
                    "display": "$loc UI_CONTRACT_MARGARITA_OBJ_2_TITLE"
                },
                "Type": "statemachine",
                "Definition": {
                    "Context": {
                        "Targets": ["d12fc231-020b-4673-a7b8-3789ed9fee93"]
                    },
                    "States": {
                        "Start": {
                            "ItemPickedUp": {
                                "Condition": {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "d12fc231-020b-4673-a7b8-3789ed9fee93"
                                    ]
                                },
                                "Transition": "Success"
                            }
                        }
                    }
                }
            },
            {
                "Id": "c6c864fe-287c-4345-8a04-03682a65498f",
                "IsHidden": true,
                "Category": "primary",
                "ObjectiveType": "custom",
                "Image": "images/unlockables/item_perspective_55d34557-5b46-422f-84ce-7bb13cfcef96_0.jpg",
                "BriefingName": "$loc UI_CONTRACT_LUMUMBA_OBJ_2_TITLE",
                "BriefingText": "$loc UI_CONTRACT_PARIS_FLASH",
                "LongBriefingText": "$loc UI_CONTRACT_LUMUMBA_OBJ_2_DESC",
                "HUDTemplate": {
                    "display": "$loc UI_CONTRACT_LUMUMBA_OBJ_2_TITLE"
                },
                "Type": "statemachine",
                "Definition": {
                    "Context": {
                        "Targets": ["6c05ffd3-a02b-45b6-9c05-ac3f6fcc0561"]
                    },
                    "States": {
                        "Start": {
                            "ItemPickedUp": {
                                "Condition": {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "6c05ffd3-a02b-45b6-9c05-ac3f6fcc0561"
                                    ]
                                },
                                "Transition": "Success"
                            }
                        }
                    }
                }
            }
        ],
        "GameChangers": [],
        "GameDifficulties": [
            {
                "Difficulty": "easy",
                "Bricks": [
                    "assembly:/_pro/scenes/missions/paris/difficulty_easy_paris_peacock.brick"
                ]
            },
            {
                "Difficulty": "normal",
                "Bricks": []
            },
            {
                "Difficulty": "hard",
                "Bricks": [
                    "assembly:/_pro/scenes/missions/paris/difficulty_pro1_paris_fashionshow.brick"
                ]
            }
        ],
        "Bricks": [
		"assembly:/_PRO/Scenes/Missions/Paris/_scene_Kamikaze.brick",
		"assembly:/_PRO/Scenes/Missions/Paris/_scene_Lumumba.brick",
		"assembly:/_PRO/Scenes/Missions/Paris/_Scene_Margarita_01.brick",
		"assembly:/_PRO/Scenes/Missions/Paris/_scene_Sakini.brick",
		"assembly:/_PRO/Scenes/Missions/Paris/_Scene_TequilaSunrise_01.brick",
		"assembly:/_PRO/Scenes/Missions/Paris/_Scene_WhiteRussian_01.brick",
		"assembly:/_PRO/Scenes/Missions/Paris/_scene_Mojito.brick",
		"assembly:/_PRO/Scenes/Missions/Paris/_scene_kirroyal.brick",
		"assembly:/_PRO/Scenes/Missions/Paris/_Scene_Shandy.brick",
		"assembly:/_PRO/Scenes/Missions/Paris/_scene_ts6_blueblazer.brick"
		]
    },
    "Metadata": {
        "Title": "UI_CONTRACT_PARIS_ALL",
        "Description": "UI_CONTRACT_PARIS_ALL_DESC",
        "Entitlements": [
            "H1_LEGACY_STANDARD"
        ],
        "ScenePath": "assembly:/_PRO/Scenes/Missions/Paris/_scene_paris.entity",
        "Location": "LOCATION_PARIS",
        "IsPublished": true,
        "CreatorUserId": "fadb923c-e6bb-4283-a537-eb4d1150262e",
        "GameVersion": "8.15.0.0",
        "ServerVersion": "8.15.0.0",
        "Type": "flashback",
        "Subtype": "flashback",
        "Id": "01c86ff1-e5d2-4525-bf42-dce8da0d26a8",
        "PublicId": "179237592539",
        "TileImage": "images/thumbnail/all_targets_paris.png",
        "Opportunities": [
            "f246e3ab-3a35-49a0-a159-615632d7fa89",
            "728ff71e-395d-4a00-8065-305a43a92105",
            "0a051691-d391-47f9-aad6-6d2807b3bb69",
            "468177b2-fa0a-41f5-b510-80fcd142ed6f",
            "2e79a8f1-4498-41c8-9784-d48173d61b0a",
            "6175fbd2-84f5-4c7f-a677-f61990b3a0fd",
            "e8c68134-b552-4f48-a51f-7039f36381b1",
            "e6cb331f-82b1-4023-b037-21da954babbc"
        ],
        "CreationTimestamp": "2024-06-02T05:13:04.645Z"
    },
    "UserData": {}
},
{
    "Data": {
        "Objectives": [
			{
                "Id": "5f0219ef-f018-4d1c-a187-bcd14be02065",
				"IgnoreIfInactive": true,
				"Category": "primary",
                "ObjectiveType": "custom",
                "BriefingName": "$loc UI_CONTRACT_PARIS_ALL_TARGETS_HUD",
                "Image": "images/objectives/all_targets_sapienza.jpg",
                "HUDTemplate": {
                    "display": "$loc UI_CONTRACT_PARIS_ALL_TARGETS_HUD"
                },
                "BriefingText": "$loc UI_CONTRACT_SAPIENZA_ALL_TARGETS",
				"LongBriefingText": "$loc UI_CONTRACT_SAPIENZA_ALL_TARGETS",
                "Type": "statemachine",
                "Definition": {
                    "Context": {
                        "KilledActors": [],
                        "Targets": ["0dfaea51-3c36-4722-9eff-f1e7ef139878", "94ab740b-b30f-4086-9aea-5c9c0de28456", "752053dd-2ab7-4d49-897d-97c957f83083", "89fafd79-9c9f-4a0d-a4a1-13c2ffdcf039", "97b05a61-84d6-4b22-8dcc-3658986e1758", "3abdf4fd-4db9-4276-8a1a-6b6e119bedae", "fddd444a-e9a5-4650-96ff-029df224bb61", "d749b0f2-d1f0-47d5-bab9-10e3ff4dac8b"],
                        "TargetsCounter": 0
                    },
                    "States": {
                        "Start": {
                            "Kill": [{
                                    "Actions": {
                                        "$pushunique": ["KilledActors", "$Value.RepositoryId"]
                                    }
                                }, {
                                    "Actions": {
                                        "$dec": "TargetsCounter"
                                    },
                                    "Condition": {
                                        "$inarray": {
                                            "in": "$.Targets",
                                            "?": {
                                                "$eq": ["$.#", "$Value.RepositoryId"]
                                            }
                                        }
                                    }
                                }, {
                                    "Condition": {
                                        "$all": {
                                            "in": "$.Targets",
                                            "?": {
                                                "$any": {
                                                    "in": "$.KilledActors",
                                                    "?": {
                                                        "$eq": ["$.#", "$.##"]
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "Transition": "Success"
                                }
                            ],
                            "ContractLoad": [{
                                    "Actions": {
                                        "$set": ["TargetsCounter", "$.TargetsCounter"]
                                    }
                                }
                            ]
                        }
                    }
                },
				"OnInactive": {
                    "IfCompleted": {
                        "State": "Completed",
                        "Visible": false
                    }
                },
                "OnActive": {
                    "IfCompleted": {
                        "Visible": true
                    }
                }
            },
            {
                "Id": "f15b5171-2b12-4966-9339-3344042f9867",
                "ObjectiveType": "setpiece",
                "ForceShowOnLoadingScreen": true,
                "Image": "images/contracts/octopus/Contract_Octopus_Virus_ObjectiveTile.jpg",
                "BriefingName": "$loc UI_CONTRACT_OCTOPUS_VIRUS_BRIEFING_NAME",
                "LongBriefingText": "$loc UI_CONTRACT_OCTOPUS_VIRUS_BRIEFING_DESC",
                "Category": "primary",
                "HUDTemplate": {
                    "display": "$loc UI_CONTRACT_OCTOPUS_OBJ_2"
                },
                "BriefingText": "$loc UI_CONTRACT_OCTOPUS_OBJ_2",
                "Type": "statemachine",
                "Definition": {
                    "Context": {
                        "Targets": ["53629764-635d-4d11-b671-7ba9b5a03298"]
                    },
                    "States": {
                        "Start": {
                            "VirusDestroyed": [
                                {
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                }
            },
        ],
        "GameChangers": [],
        "Bricks": [
            "assembly:/_PRO/Scenes/Missions/CoastalTown/Mission_MintJulep.brick",
            "assembly:/_PRO/Scenes/Missions/CoastalTown/Mission_HarveyWallbanger.brick",
            "assembly:/_PRO/Scenes/Missions/CoastalTown/mission_sazerac.brick",
            "assembly:/_PRO/Scenes/Missions/CoastalTown/mission_piscosour.brick",
            "assembly:/_PRO/Scenes/Missions/CoastalTown/mission_quadruplerumandcoke.brick",
            "assembly:/_PRO/Scenes/Missions/CoastalTown/mission_ts6_mimosa.brick"
        ]
    },
    "Metadata": {
        "Title": "UI_CONTRACT_SAPIENZA_ALL",
        "Description": "UI_CONTRACT_SAPIENZA_ALL_DESC",
        "Entitlements": [
            "H1_LEGACY_STANDARD"
        ],
        "ScenePath": "assembly:/_PRO/Scenes/Missions/CoastalTown/_scene_octopus.entity",
        "Location": "LOCATION_COASTALTOWN",
        "IsPublished": true,
        "CreatorUserId": "fadb923c-e6bb-4283-a537-eb4d1150262e",
        "GameVersion": "8.15.0.0",
        "ServerVersion": "8.15.0.0",
        "Type": "flashback",
        "Subtype": "flashback",
        "Id": "527accc8-c3f1-4f15-9eeb-96179befab32",
        "PublicId": "112979341726",
        "TileImage": "images/thumbnail/all_targets_sapienza.jpg",
        "GroupObjectiveDisplayOrder": [
            {
                "Id": "d749b0f2-d1f0-47d5-bab9-10e3ff4dac8b"
            },
            {
                "Id": "fddd444a-e9a5-4650-96ff-029df224bb61"
            },
            {
                "Id": "3abdf4fd-4db9-4276-8a1a-6b6e119bedae"
            },
            {
                "Id": "97b05a61-84d6-4b22-8dcc-3658986e1758"
            },
            {
                "Id": "89fafd79-9c9f-4a0d-a4a1-13c2ffdcf039"
            }
        ],
        "CreationTimestamp": "2024-06-03T16:51:23.932Z"
    },
    "UserData": {}
},
{
    "Data": {
        "Objectives": [
			{
                "Id": "23ba9044-be26-41c9-aeb1-7bea7edc4dd0",
				"IgnoreIfInactive": true,
				"Category": "primary",
                "ObjectiveType": "custom",
                "BriefingName": "$loc UI_CONTRACT_PARIS_ALL_TARGETS_HUD",
                "Image": "images/objectives/all_targets_marrakesh.jpg",
                "HUDTemplate": {
                    "display": "$loc UI_CONTRACT_PARIS_ALL_TARGETS_HUD"
                },
                "BriefingText": "$loc UI_CONTRACT_MARRAKESH_ALL_TARGETS",
				"LongBriefingText": "$loc UI_CONTRACT_MARRAKESH_ALL_TARGETS",
                "Type": "statemachine",
                "Definition": {
                    "Context": {
                        "KilledActors": [],
                        "Targets": ["b38b0b62-8071-4761-b2a5-2f635cd8da1b", "905e7cd5-1dd9-4ce3-bec2-a0120b921308", "38c1700e-0247-4c09-8985-d98573a39f24", "b38b0b62-8071-4761-b2a5-2f635cd8da1b", "ca31c88f-d15e-407b-8407-231f1b068402", "756f6462-9c1f-460e-bbf4-331f2916508a", "50cea951-bb99-431d-aa22-9a31afcaec59"],
                        "TargetsCounter": 0
                    },
                    "States": {
                        "Start": {
                            "Kill": [{
                                    "Actions": {
                                        "$pushunique": ["KilledActors", "$Value.RepositoryId"]
                                    }
                                }, {
                                    "Actions": {
                                        "$dec": "TargetsCounter"
                                    },
                                    "Condition": {
                                        "$inarray": {
                                            "in": "$.Targets",
                                            "?": {
                                                "$eq": ["$.#", "$Value.RepositoryId"]
                                            }
                                        }
                                    }
                                }, {
                                    "Condition": {
                                        "$all": {
                                            "in": "$.Targets",
                                            "?": {
                                                "$any": {
                                                    "in": "$.KilledActors",
                                                    "?": {
                                                        "$eq": ["$.#", "$.##"]
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "Transition": "Success"
                                }
                            ],
                            "ContractLoad": [{
                                    "Actions": {
                                        "$set": ["TargetsCounter", "$.TargetsCounter"]
                                    }
                                }
                            ]
                        }
                    }
                },
				"OnInactive": {
                    "IfCompleted": {
                        "State": "Completed",
                        "Visible": false
                    }
                },
                "OnActive": {
                    "IfCompleted": {
                        "Visible": true
                    }
                }
            }
        ],
        "GameChangers": [],
        "Bricks": [
            "assembly:/_pro/scenes/missions/marrakesh/mission_marrakesh_cosmopolitan.brick",
            "assembly:/_pro/scenes/missions/marrakesh/mission_marrakesh_screwdriver.brick",
            "assembly:/_pro/scenes/missions/marrakesh/mission_marrakesh_hottoddy.brick",
            "assembly:/_pro/scenes/missions/marrakesh/mission_marrakesh_ts6_ginfizz.brick"
        ]
    },
    "Metadata": {
        "Title": "UI_CONTRACT_MARRAKESH_ALL",
        "Description": "UI_CONTRACT_MARRAKESH_ALL_DESC",
        "Entitlements": [
            "H1_LEGACY_STANDARD"
        ],
        "ScenePath": "assembly:/_pro/scenes/missions/marrakesh/_scene_spider.entity",
        "Location": "LOCATION_MARRAKECH",
        "IsPublished": true,
        "CreatorUserId": "fadb923c-e6bb-4283-a537-eb4d1150262e",
        "GameVersion": "8.15.0.0",
        "ServerVersion": "8.15.0.0",
        "Type": "flashback",
        "Subtype": "flashback",
        "Id": "96b38794-6e42-4796-bc3b-c38dcc5d3d22",
        "PublicId": "130269404147",
        "TileImage": "images/thumbnail/all_targets_marrakesh.jpg",
        "GroupObjectiveDisplayOrder": [
        ],
        "CreationTimestamp": "2024-06-04T00:32:58.010Z"
    },
    "UserData": {}
},
{
    "Data": {
        "Objectives": [
			{
                "Id": "56d1e3a6-0c40-4c03-a761-7a8a9bbe050a",
				"IgnoreIfInactive": true,
                "ForceShowOnLoadingScreen": true,
				"Category": "primary",
                "ObjectiveType": "custom",
                "BriefingName": "$loc UI_CONTRACT_PARIS_ALL_TARGETS_HUD",
                "Image": "images/objectives/all_targets_marrakesh_night.jpg",
                "HUDTemplate": {
                    "display": "$loc UI_CONTRACT_PARIS_ALL_TARGETS_HUD"
                },
                "BriefingText": "$loc UI_CONTRACT_MARRAKESH_NIGHT_ALL_TARGETS",
				"LongBriefingText": "$loc UI_CONTRACT_MARRAKESH_NIGHT_ALL_TARGETS",
                "Type": "statemachine",
                "Definition": {
                    "Context": {
                        "KilledActors": [],
                        "Targets": ["e63259c4-1a82-4299-9633-6ac54991e1e9", "23415c1d-6ee8-41a8-9975-523f3eede581", "4d0953f0-7f19-4130-abae-610a8f5dddca", "3d1b5b6c-a1fe-430e-a4c4-57e76872fa1f", "d0c17d33-182b-45c7-92fe-96c376ca9301"],
                        "TargetsCounter": 0
                    },
                    "States": {
                        "Start": {
                            "Kill": [{
                                    "Actions": {
                                        "$pushunique": ["KilledActors", "$Value.RepositoryId"]
                                    }
                                }, {
                                    "Actions": {
                                        "$dec": "TargetsCounter"
                                    },
                                    "Condition": {
                                        "$inarray": {
                                            "in": "$.Targets",
                                            "?": {
                                                "$eq": ["$.#", "$Value.RepositoryId"]
                                            }
                                        }
                                    }
                                }, {
                                    "Condition": {
                                        "$all": {
                                            "in": "$.Targets",
                                            "?": {
                                                "$any": {
                                                    "in": "$.KilledActors",
                                                    "?": {
                                                        "$eq": ["$.#", "$.##"]
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "Transition": "Success"
                                }
                            ],
                            "ContractLoad": [{
                                    "Actions": {
                                        "$set": ["TargetsCounter", "$.TargetsCounter"]
                                    }
                                }
                            ]
                        }
                    }
                },
				"OnInactive": {
                    "IfCompleted": {
                        "State": "Completed",
                        "Visible": false
                    }
                },
                "OnActive": {
                    "IfCompleted": {
                        "Visible": true
                    }
                }
            },
            {
                "Id": "123493cc-05b5-45df-8b32-17ffa44e29ac",
                "Category": "primary",
                "ObjectiveType": "custom",
                "ForceShowOnLoadingScreen": true,
                "Image": "images/unlockables/item_perspective_74a4f6ee-b465-437c-bef9-3a67c9932853_0.jpg",
                "BriefingName": "$loc UI_CONTRACT_PYTHON_OBJ_DOCS_DESC_SHORT",
                "BriefingText": "$loc UI_CONTRACT_MARRAKESH_NIGHT_ALL_DOCUMENTS",
                "LongBriefingText": "$loc UI_CONTRACT_PYTHON_OBJ_DOCS_DESC",
                "HUDTemplate": {
                    "display": "$loc UI_CONTRACT_PYTHON_OBJ_DOCS_NAME"
                },
                "Type": "statemachine",
                "Definition": {
                    "Context": {
                        "Targets": ["74a4f6ee-b465-437c-bef9-3a67c9932853"]
                    },
                    "States": {
                        "Start": {
                            "ItemPickedUp": {
                                "Condition": {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "74a4f6ee-b465-437c-bef9-3a67c9932853"
                                    ]
                                },
                                "Transition": "Success"
                            }
                        }
                    }
                }
            },
            {
                "Id": "1234d4f6-fcb5-48c3-b3c9-15595069080b",
                "IsHidden": true,
                "Category": "primary",
                "ObjectiveType": "custom",
                "Image": "images/unlockables/item_perspective_74a4f6ee-b465-437c-bef9-3a67c9932853_0.jpg",
                "ForceShowOnLoadingScreen": true,
                "BriefingName": "$loc UI_CONTRACT_MAITAI_OBJ_2_TITLE",
                "BriefingText": "$loc UI_CONTRACT_MARRAKESH_NIGHT_ALL_GUESTLIST",
                "LongBriefingText": "$loc UI_CONTRACT_MAITAI_OBJ_2_DESC",
                "HUDTemplate": {
                    "display": "$loc UI_CONTRACT_MAITAI_OBJ_2_TITLE"
                },
                "Type": "statemachine",
                "Definition": {
                    "Context": {
                        "Targets": ["f8b7e382-6893-48b5-b34e-aec668d20564"]
                    },
                    "States": {
                        "Start": {
                            "ItemPickedUp": {
                                "Condition": {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "f8b7e382-6893-48b5-b34e-aec668d20564"
                                    ]
                                },
                                "Transition": "Success"
                            }
                        }
                    }
                }
            },
            {
                "Id": "12341bce-ae6d-4b7b-8e43-aa130cce17a6",
                "ObjectiveType": "custom",
                "Image": "images/contracts/Elusive/007_Negroni/delgado.jpg",
                "ForceShowOnLoadingScreen": true,
                "BriefingName": "$loc UI_NEGRONI_INTEL_NAME",
                "BriefingText": "$loc UI_CONTRACT_MARRAKESH_NIGHT_ALL_DELGADO",
                "HUDTemplate": {
                    "display": "$loc UI_NEGRONI_INTEL_TEXT",
                    "iconType": 17
                },
                "Category": "secondary",
                "Scope": "hit",
                "Type": "statemachine",
                "Definition": {
                    "States": {
                        "Start": {
                            "Uncovered": {
                                "Transition": "Success"
                            }
                        }
                    }
                }
            }
        ],
        "GameChangers": [],
        "Bricks": [
            "assembly:/_pro/scenes/missions/marrakesh/mission_marrakesh_maitai.brick",
            "assembly:/_pro/scenes/missions/marrakesh/mission_marrakesh_negroni.brick"
        ]
    },
    "Metadata": {
        "Title": "UI_CONTRACT_MARRAKESH_NIGHT_ALL",
        "Description": "UI_CONTRACT_MARRAKESH_NIGHT_ALL_DESC",
        "Entitlements": [
            "H1_LEGACY_STANDARD"
        ],
        "ScenePath": "assembly:/_pro/scenes/missions/marrakesh/_scene_python.entity",
        "Location": "LOCATION_MARRAKECH_NIGHT",
        "IsPublished": true,
        "CreatorUserId": "fadb923c-e6bb-4283-a537-eb4d1150262e",
        "GameVersion": "8.15.0.0",
        "ServerVersion": "8.15.0.0",
        "Type": "flashback",
        "Subtype": "flashback",
        "Id": "fc5acadc-398c-437c-9764-1439598dd382",
        "PublicId": "193840360063",
        "TileImage": "images/thumbnail/all_targets_marrakesh_night.jpg",
        "GroupObjectiveDisplayOrder": [
        ],
        "CreationTimestamp": "2024-06-04T23:26:04.938Z"
    },
    "UserData": {}
},
{
    "Data": {
        "Objectives": [
            {
                "Type": "statemachine",
                "Id": "baa3274a-c9da-4896-9d9b-ad8a6e53804e",
                "IsHidden": true,
                "BriefingText": {
                    "$loc": {
                        "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                        "data": "$($repository 3798fcf3-4e33-40db-a8a2-c160a3ec55bf).Name"
                    }
                },
                "HUDTemplate": {
                    "display": {
                        "$loc": {
                            "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                            "data": "$($repository 3798fcf3-4e33-40db-a8a2-c160a3ec55bf).Name"
                        }
                    }
                },
                "Category": "primary",
                "Definition": {
                    "Scope": "Hit",
                    "Context": {
                        "Targets": [
                            "3798fcf3-4e33-40db-a8a2-c160a3ec55bf"
                        ]
                    },
                    "States": {
                        "Start": {
                            "Kill": [
                                {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.RepositoryId",
                                                    "3798fcf3-4e33-40db-a8a2-c160a3ec55bf"
                                                ]
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.OutfitRepositoryId",
                                                    "e8ef431d-62b2-4d0a-a766-750c0bc6e39e"
                                                ]
                                            }
                                        ]
                                    },
                                    "Transition": "Success"
                                },
                                {
                                    "Condition": {
                                        "$eq": [
                                            "$Value.RepositoryId",
                                            "3798fcf3-4e33-40db-a8a2-c160a3ec55bf"
                                        ]
                                    },
                                    "Transition": "Failure"
                                }
                            ]
                        }
                    }
                },
                "TargetConditions": [
                    {
                        "Type": "disguise",
                        "RepositoryId": "e8ef431d-62b2-4d0a-a766-750c0bc6e39e",
                        "HardCondition": true,
                        "ObjectiveId": "833985cb-fbc3-4212-b9bd-ba1f21e3d635",
                        "KillMethod": ""
                    }
                ]
            },
            {
                "Id": "bvfa50aa-654c-4126-x8sa-57g662f9372c",
                "Type": "statemachine",
                "Category": "primary",
                "Image": "images/objectives/research.jpg",
                "BriefingName": "$loc UI_CONTRACT_PATIENT_ZERO_ELUSIVE_RESEARCH",
                "BriefingText": "$loc UI_CONTRACT_PATIENT_ZERO_ELUSIVE_RESEARCH_DESC",
                "IsHidden": false,
                "LongBriefingText": "$loc UI_CONTRACT_PATIENT_ZERO_ELUSIVE_RESEARCH_DESC",
                "ObjectiveType": "custom",
                "HUDTemplate": {
                    "display": "$loc UI_CONTRACT_PATIENT_ZERO_ELUSIVE_RESEARCH",
                    "iconType": 17
                },
                "Definition": {
                    "Context": {
                        "Targets": ["5a23a5bd-cc06-41ed-9eaf-5a9d6e133e22"]
                    },
                    "Scope": "session",
                    "States": {
                        "Start": {
                            "setpieces": {
                                "Condition": {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "5a23a5bd-cc06-41ed-9eaf-5a9d6e133e22"
                                    ]
                                },
                                "Transition": "Success"
                            }
                        }
                    }
                }
            }
        ],
        "GameChangers": [],
        "Bricks": ["assembly:/_PRO/Scenes/Missions/Hokkaido/contractcreation_flu.brick"]
    },
    "Metadata": {
        "Title": "UI_CONTRACT_PATIENT_ZERO_ELUSIVE",
        "Description": "UI_CONTRACT_PATIENT_ZERO_ELUSIVE_DESC",
        "Entitlements": [
            "H1_LEGACY_EXPANSION"
        ],
        "ScenePath": "assembly:/_PRO/Scenes/Missions/Hokkaido/_scene_flu.entity",
        "Location": "LOCATION_HOKKAIDO_FLU",
        "IsPublished": true,
        "CreatorUserId": "fadb923c-e6bb-4283-a537-eb4d1150262e",
        "GameVersion": "8.15.0.0",
        "ServerVersion": "8.15.0.0",
        "Type": "elusive",
        "Subtype": "specialassignment",
        "Id": "375f4a88-0b3e-4641-bf7f-e1b81e3d6742",
        "PublicId": "127220767324",
        "TileImage": "images/thumbnail/the_patient_zero.jpg",
        "GroupObjectiveDisplayOrder": [
            {
                "Id": "3798fcf3-4e33-40db-a8a2-c160a3ec55bf"
            }
        ],
        "CreationTimestamp": "2024-06-06T00:33:34.992Z"
    },
    "UserData": {}
},
{
    "Data": {
        "Objectives": [
            {
                "Type": "statemachine",
                "Id": "831bf829-53dd-40bf-bd62-3a7b855f93e1",
                "BriefingText": {
                    "$loc": {
                        "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                        "data": "$($repository 441209db-35ca-46e8-bb99-b9c3f8e8783c).Name"
                    }
                },
                "HUDTemplate": {
                    "display": {
                        "$loc": {
                            "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                            "data": "$($repository 441209db-35ca-46e8-bb99-b9c3f8e8783c).Name"
                        }
                    }
                },
                "Category": "primary",
                "Definition": {
                    "Scope": "Hit",
                    "Context": {
                        "Targets": [
                            "441209db-35ca-46e8-bb99-b9c3f8e8783c"
                        ]
                    },
                    "States": {
                        "Start": {
                            "Kill": [
                                {
                                    "Condition": {
                                        "$eq": [
                                            "$Value.RepositoryId",
                                            "441209db-35ca-46e8-bb99-b9c3f8e8783c"
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                }
            },
            {
                "Type": "statemachine",
                "Id": "40a04ab3-b0ea-4710-aef0-f9cd600c360b",
                "BriefingText": {
                    "$loc": {
                        "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                        "data": "$($repository 229d24be-d95a-4c73-a1be-afac4a05a5e3).Name"
                    }
                },
                "HUDTemplate": {
                    "display": {
                        "$loc": {
                            "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                            "data": "$($repository 229d24be-d95a-4c73-a1be-afac4a05a5e3).Name"
                        }
                    }
                },
                "Category": "primary",
                "Definition": {
                    "Scope": "Hit",
                    "Context": {
                        "Targets": [
                            "229d24be-d95a-4c73-a1be-afac4a05a5e3"
                        ]
                    },
                    "States": {
                        "Start": {
                            "Kill": [
                                {
                                    "Condition": {
                                        "$eq": [
                                            "$Value.RepositoryId",
                                            "229d24be-d95a-4c73-a1be-afac4a05a5e3"
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                }
            },
            {
                "Type": "statemachine",
                "Id": "4ha54zb3-b0fa-4711-aefg-fkcd600c360b",
                "BriefingText": {
                    "$loc": {
                        "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                        "data": "$($repository a109591e-1225-4043-9a12-c4535dc28764).Name"
                    }
                },
                "HUDTemplate": {
                    "display": {
                        "$loc": {
                            "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                            "data": "$($repository a109591e-1225-4043-9a12-c4535dc28764).Name"
                        }
                    }
                },
                "Category": "primary",
                "Definition": {
                    "Scope": "Hit",
                    "Context": {
                        "Targets": [
                            "a109591e-1225-4043-9a12-c4535dc28764"
                        ]
                    },
                    "States": {
                        "Start": {
                            "Kill": [
                                {
                                    "Condition": {
                                        "$eq": [
                                            "$Value.RepositoryId",
                                            "a109591e-1225-4043-9a12-c4535dc28764"
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                }
            },
            {
                "Type": "statemachine",
                "Id": "4has4tb3-b7fa-4711-aefg-fkcc610ck60b",
                "BriefingText": {
                    "$loc": {
                        "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                        "data": "$($repository abb0c23f-a38a-4492-8a16-4e3c7c438b70).Name"
                    }
                },
                "HUDTemplate": {
                    "display": {
                        "$loc": {
                            "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                            "data": "$($repository abb0c23f-a38a-4492-8a16-4e3c7c438b70).Name"
                        }
                    }
                },
                "Category": "primary",
                "Definition": {
                    "Scope": "Hit",
                    "Context": {
                        "Targets": [
                            "abb0c23f-a38a-4492-8a16-4e3c7c438b70"
                        ]
                    },
                    "States": {
                        "Start": {
                            "Kill": [
                                {
                                    "Condition": {
                                        "$eq": [
                                            "$Value.RepositoryId",
                                            "abb0c23f-a38a-4492-8a16-4e3c7c438b70"
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            ]
                        }
                    }
                }
            }
        ],
        "GameChangers": [],
        "Bricks": [
		"assembly:/_PRO/Scenes/Missions/Colorado_2/_scene_bushwacker.brick",
		"assembly:/_PRO/Scenes/Missions/Colorado_2/_scene_flirtini.brick",
		"assembly:/_PRO/Scenes/Missions/Colorado_2/mission_rabies.brick",
		"assembly:/_PRO/Scenes/Missions/Colorado_2/_scene_ts6_blackrussian.brick"	
		],
        "EnableSaving": true,
        "Entrances": ["237e7963-574a-48c8-8d8a-e415b30f5643"],
        "MandatoryLoadout": [
            {
                "Id": "TOKEN_OUTFIT_COLORADO_HERO_RABIESSUIT",
                "Properties": {
                    "LoadoutSlot": "disguise",
                    "RepositoryId": "e3b30dec-d130-4091-85d4-020a29040b74"
                }
            }
        ]
    },
    "Metadata": {
        "Title": "Eagle's eye",
        "Description": "While 47 is mounting a perch, Richard M. Foreman, Peretti Jarnefelt, Bradley Pine and Patrick Morgan are soon to meet their fate without them or anyone even knowing where they got killed from...",
        "Entitlements": [
            "H1_LEGACY_STANDARD"
        ],
        "ScenePath": "assembly:/_pro/scenes/missions/colorado_2/scene_rabies.entity",
        "Location": "LOCATION_COLORADO_RABIES",
        "IsPublished": true,
        "CreatorUserId": "fadb923c-e6bb-4283-a537-eb4d1150262e",
        "GameVersion": "8.10.0.0",
        "ServerVersion": "8.10.0.0",
        "Type": "flashback",
        "Subtype": "flashback",
        "Id": "f914317a-fe56-42a3-b928-cb98541188eb",
        "PublicId": "116473763171",
        "TileImage": "images/contracts/whitespider/003_rabies/tile.jpg",
        "GroupObjectiveDisplayOrder": [
            {
                "Id": "229d24be-d95a-4c73-a1be-afac4a05a5e3"
            },
            {
                "Id": "441209db-35ca-46e8-bb99-b9c3f8e8783c"
            },
            {
                "Id": "a109591e-1225-4043-9a12-c4535dc28764"
            },
            {
                "Id": "abb0c23f-a38a-4492-8a16-4e3c7c438b70"
            }
        ],
        "CreationTimestamp": "2024-05-02T23:21:41.034Z"
    },
    "UserData": {}
}
]

module.exports = function MissionPlugin(controller) {
    contracts.forEach((contract) => {
        controller.addMission(contract)
        controller.missionsInLocations[contract.Metadata.Location].push(contract.Metadata.Id)
    })

    log(LogLevel.INFO, "[Mission pack] Plugin is loaded and contracts should be on mission screen!")
}
