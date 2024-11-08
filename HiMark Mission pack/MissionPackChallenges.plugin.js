/**
 * Woa unique mission pack plugin - by OhHiMark credit to LukaM47 for giving me this plugin base. Thanks Anthony Fuller!
 *
 *
 * @licence Public Domain
 */

const { PEACOCKVER, PEACOCKVERSTRING } = require("@peacockproject/core/utils")
const { log, LogLevel } = require("@peacockproject/core/loggingInterop")

// Feat challenges here...
const featChallenges = [
                {
                    "Id": "07gfscb1-23yh-4faa-126a-ajhj657as405",
                    "Name": "UI_CONTRACT_GLUTTON_TITLE",
                    "ImageName": "images/actors/glutton.jpg",
                    "Description": "UI_CONTRACT_NEWYORK_GLUTTON_DESC",
                    "Rewards": {
                        "MasteryXP": 2000
                    },
                    "Drops": [],
                    "IsPlayable": false,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_ELUSIVE",
                    "Icon": "elusive",
                    "LocationId": "LOCATION_PARENT_GREEDY",
                    "ParentLocationId": "LOCATION_PARENT_GREEDY",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "OrderIndex": 10000,
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Context": {},
                        "Scope": "session",
                        "States": {
                            "Start": {
                                "Kill": {
                                    "Condition": {
                                        "$eq": ["$Value.IsTarget", true]
                                    },
                                    "Transition": "Success"
                                }
                            }
                        }
                    },
                    "Tags": ["story", "medium", "elusive"],
                    "InclusionData": {
                        "ContractIds": ["062f8721-2d67-4b61-a56a-acc26f71e405"]
                    }
                },
                {
                    "Id": "01fgh421-a0k7-6v61-a1da-ahc34fq1s4gh",
                    "Name": "UI_CONTRACT_NEWYORK_GLUTTON_SILENT",
                    "ImageName": "images/challenges/glutton_silent.jpg",
                    "Description": "UI_CONTRACT_NEWYORK_GLUTTON_SILENT_DESC",
                    "Rewards": {
                        "MasteryXP": 4000
                    },
                    "Drops": [],
                    "IsPlayable": false,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_ELUSIVE",
                    "Icon": "elusive",
                    "LocationId": "LOCATION_PARENT_GREEDY",
                    "ParentLocationId": "LOCATION_PARENT_GREEDY",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "OrderIndex": 10000,
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Context": {
                            "Witnesses": [],
                            "KilledTargets": [],
                            "RecordingDestroyed": true,
                            "LastAccidentTime": 0
                        },
                        "Scope": "session",
                        "States": {
                            "Start": {
                                "ContractEnd": {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    true,
                                                    "$.RecordingDestroyed"
                                                ]
                                            },
                                            {
                                                "$all": {
                                                    "in": "$.Witnesses",
                                                    "?": {
                                                        "$any": {
                                                            "in": "$.KilledTargets",
                                                            "?": {
                                                                "$eq": [
                                                                    "$.#",
                                                                    "$.##"
                                                                ]
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        ]
                                    },
                                    "Transition": "Success"
                                },
                                "AccidentBodyFound": {
                                    "$set": ["LastAccidentTime", "$Timestamp"]
                                },
                                "Witnesses": {
                                    "Condition": {
                                        "$any": {
                                            "in": "$Value",
                                            "?": {
                                                "$pushunique": [
                                                    "Witnesses",
                                                    "$.#"
                                                ]
                                            }
                                        }
                                    }
                                },
                                "Spotted": {
                                    "Condition": {
                                        "$any": {
                                            "in": "$Value",
                                            "?": {
                                                "$pushunique": [
                                                    "Witnesses",
                                                    "$.#"
                                                ]
                                            }
                                        }
                                    }
                                },
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$and": [
                                                {
                                                    "$eq": [
                                                        "$Value.IsTarget",
                                                        false
                                                    ]
                                                },
                                                {
                                                    "$not": {
                                                        "$eq": [
                                                            "$Value.KillContext",
                                                            1
                                                        ]
                                                    }
                                                }
                                            ]
                                        },
                                        "Transition": "Failure"
                                    },
                                    {
                                        "Condition": {
                                            "$and": [
                                                {
                                                    "$eq": [
                                                        "$Value.IsTarget",
                                                        false
                                                    ]
                                                },
                                                {
                                                    "$eq": [
                                                        "$Value.KillContext",
                                                        1
                                                    ]
                                                }
                                            ]
                                        },
                                        "Actions": {
                                            "$pushunique": [
                                                "KilledTargets",
                                                "$Value.RepositoryId"
                                            ]
                                        }
                                    },
                                    {
                                        "Condition": {
                                            "$eq": ["$Value.IsTarget", true]
                                        },
                                        "Actions": {
                                            "$pushunique": [
                                                "KilledTargets",
                                                "$Value.RepositoryId"
                                            ]
                                        }
                                    }
                                ],
                                "CrowdNPC_Died": {
                                    "Transition": "Failure"
                                },
                                "MurderedBodySeen": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.IsWitnessTarget",
                                                true
                                            ]
                                        },
                                        "Actions": {
                                            "$pushunique": [
                                                "Witnesses",
                                                "$Value.Witness"
                                            ]
                                        }
                                    },
                                    {
                                        "Condition": {
                                            "$and": [
                                                {
                                                    "$eq": [
                                                        "$Value.IsWitnessTarget",
                                                        false
                                                    ]
                                                },
                                                {
                                                    "$not": {
                                                        "$eq": [
                                                            "$.LastAccidentTime",
                                                            "$Timestamp"
                                                        ]
                                                    }
                                                }
                                            ]
                                        },
                                        "Transition": "Failure"
                                    }
                                ],
                                "SecuritySystemRecorder": [
                                    {
                                        "Actions": {
                                            "$set": [
                                                "RecordingDestroyed",
                                                false
                                            ]
                                        },
                                        "Condition": {
                                            "$eq": ["$Value.event", "spotted"]
                                        }
                                    },
                                    {
                                        "Actions": {
                                            "$set": ["RecordingDestroyed", true]
                                        },
                                        "Condition": {
                                            "$or": [
                                                {
                                                    "$eq": [
                                                        "$Value.event",
                                                        "erased"
                                                    ]
                                                },
                                                {
                                                    "$eq": [
                                                        "$Value.event",
                                                        "destroyed"
                                                    ]
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "Tags": ["story", "hard", "elusive"],
                    "InclusionData": {
                        "ContractIds": ["062f8721-2d67-4b61-a56a-acc26f71e405"]
                    }
                },
                {
                    "Id": "024fgsv1-26yh-412x-1123-67yfv0h81305",
                    "Name": "UI_CONTRACT_NEWYORK_ELUSIVE",
                    "ImageName": "images/challenges/greedy_elusive.jpg",
                    "Description": "UI_CONTRACT_NEWYORK_ELUSIVE_DESC",
                    "Rewards": {
                        "MasteryXP": 6000
                    },
                    "Drops": ["PROP_RACCOON_TOOL_MCGUFFIN"],
                    "IsPlayable": false,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_ELUSIVE",
                    "Icon": "elusive",
                    "LocationId": "LOCATION_PARENT_GREEDY",
                    "ParentLocationId": "LOCATION_PARENT_GREEDY",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "OrderIndex": 10000,
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Constants": {
                            "Goal": 1,
                            "RequiredContracts": [
                                "062f8721-2d67-4b61-a56a-acc26f71e405"
                            ]
                        },
                        "Context": {
                            "CompletedContracts": []
                        },
                        "ContextListeners": {
                            "Count": {
                                "count": "($.CompletedContracts).Count",
                                "total": "$.Goal",
                                "type": "challengecounter"
                            }
                        },
                        "Scope": "profile",
                        "States": {
                            "Start": {
                                "ContractEnd": [
                                    {
                                        "Condition": {
                                            "$any": {
                                                "?": {
                                                    "$eq": [
                                                        "$.#",
                                                        "$ContractId"
                                                    ]
                                                },
                                                "in": "$.RequiredContracts"
                                            }
                                        },
                                        "Actions": {
                                            "$pushunique": [
                                                "CompletedContracts",
                                                "$ContractId"
                                            ]
                                        }
                                    },
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$.Goal",
                                                "($.CompletedContracts).Count"
                                            ]
                                        },
                                        "Transition": "Success"
                                    }
                                ]
                            }
                        }
                    },
                    "Tags": ["story", "medium", "elusive"],
                    "InclusionData": {
                        "ContractIds": ["062f8721-2d67-4b61-a56a-acc26f71e405"]
                    }
                }
]

// Put your assassination challenges here...
const assassinationChallenges = [
                {
                    "Id": "012dgbna-a127-6hda-a45a-865g4h4e24gh",
                    "Name": "UI_CONTRACT_ELUSIVE_GENERAL",
                    "ImageName": "images/challenges/truly_elusive_paris.png",
                    "Description": "UI_CONTRACT_ELUSIVE_GENERAL_DESC",
                    "Rewards": {
                        "MasteryXP": 6000
                    },
                    "Drops": [],
                    "IsPlayable": false,
                    "IsLocked": false,
                    "HideProgression": false,
					"CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
					"Icon": "challenge_category_assassination",
                    "LocationId": "LOCATION_PARENT_PARIS",
                    "ParentLocationId": "LOCATION_PARENT_PARIS",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "OrderIndex": 10000,
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Context": {
                            "Witnesses": [],
                            "KilledTargets": [],
                            "RecordingDestroyed": true,
                            "LastAccidentTime": 0
                        },
                        "Scope": "session",
                        "States": {
                            "Start": {
                                "ContractEnd": {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    true,
                                                    "$.RecordingDestroyed"
                                                ]
                                            },
                                            {
                                                "$all": {
                                                    "in": "$.Witnesses",
                                                    "?": {
                                                        "$any": {
                                                            "in": "$.KilledTargets",
                                                            "?": {
                                                                "$eq": [
                                                                    "$.#",
                                                                    "$.##"
                                                                ]
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        ]
                                    },
                                    "Transition": "Success"
                                },
                                "AccidentBodyFound": {
                                    "$set": ["LastAccidentTime", "$Timestamp"]
                                },
                                "Witnesses": {
                                    "Condition": {
                                        "$any": {
                                            "in": "$Value",
                                            "?": {
                                                "$pushunique": [
                                                    "Witnesses",
                                                    "$.#"
                                                ]
                                            }
                                        }
                                    }
                                },
                                "Spotted": {
                                    "Condition": {
                                        "$any": {
                                            "in": "$Value",
                                            "?": {
                                                "$pushunique": [
                                                    "Witnesses",
                                                    "$.#"
                                                ]
                                            }
                                        }
                                    }
                                },
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$and": [
                                                {
                                                    "$eq": [
                                                        "$Value.IsTarget",
                                                        false
                                                    ]
                                                },
                                                {
                                                    "$not": {
                                                        "$eq": [
                                                            "$Value.KillContext",
                                                            1
                                                        ]
                                                    }
                                                }
                                            ]
                                        },
                                        "Transition": "Failure"
                                    },
                                    {
                                        "Condition": {
                                            "$and": [
                                                {
                                                    "$eq": [
                                                        "$Value.IsTarget",
                                                        false
                                                    ]
                                                },
                                                {
                                                    "$eq": [
                                                        "$Value.KillContext",
                                                        1
                                                    ]
                                                }
                                            ]
                                        },
                                        "Actions": {
                                            "$pushunique": [
                                                "KilledTargets",
                                                "$Value.RepositoryId"
                                            ]
                                        }
                                    },
                                    {
                                        "Condition": {
                                            "$eq": ["$Value.IsTarget", true]
                                        },
                                        "Actions": {
                                            "$pushunique": [
                                                "KilledTargets",
                                                "$Value.RepositoryId"
                                            ]
                                        }
                                    }
                                ],
                                "CrowdNPC_Died": {
                                    "Transition": "Failure"
                                },
                                "MurderedBodySeen": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.IsWitnessTarget",
                                                true
                                            ]
                                        },
                                        "Actions": {
                                            "$pushunique": [
                                                "Witnesses",
                                                "$Value.Witness"
                                            ]
                                        }
                                    },
                                    {
                                        "Condition": {
                                            "$and": [
                                                {
                                                    "$eq": [
                                                        "$Value.IsWitnessTarget",
                                                        false
                                                    ]
                                                },
                                                {
                                                    "$not": {
                                                        "$eq": [
                                                            "$.LastAccidentTime",
                                                            "$Timestamp"
                                                        ]
                                                    }
                                                }
                                            ]
                                        },
                                        "Transition": "Failure"
                                    }
                                ],
                                "SecuritySystemRecorder": [
                                    {
                                        "Actions": {
                                            "$set": [
                                                "RecordingDestroyed",
                                                false
                                            ]
                                        },
                                        "Condition": {
                                            "$eq": ["$Value.event", "spotted"]
                                        }
                                    },
                                    {
                                        "Actions": {
                                            "$set": ["RecordingDestroyed", true]
                                        },
                                        "Condition": {
                                            "$or": [
                                                {
                                                    "$eq": [
                                                        "$Value.event",
                                                        "erased"
                                                    ]
                                                },
                                                {
                                                    "$eq": [
                                                        "$Value.event",
                                                        "destroyed"
                                                    ]
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "Tags": ["story", "hard"],
                    "InclusionData": {
                        "ContractIds": ["01c86ff1-e5d2-4525-bf42-dce8da0d26a8"]
                    }
                }
]

const sapienzaChallenges = [
                {
                    "Id": "0hbf1c41-236h-af2a-121a-a6bj6a72gs05",
                    "Name": "UI_CONTRACT_THE_SINGER",
                    "ImageName": "images/actors/singer.jpg",
                    "Description": "UI_CONTRACT_THE_SINGER_DESC",
                    "Rewards": {
                        "MasteryXP": 2000
                    },
                    "Drops": [],
                    "IsPlayable": false,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_ELUSIVE",
                    "Icon": "elusive",
                    "LocationId": "LOCATION_PARENT_COASTALTOWN",
                    "ParentLocationId": "LOCATION_PARENT_COASTALTOWN",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "OrderIndex": 10000,
                    "XpModifier": {},
                    "RuntimeType": "Hit",
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
                    "Tags": ["story", "medium", "elusive"],
                    "InclusionData": {
                        "ContractIds": ["962c08c5-88ed-40ec-902b-abeff2ad355c"]
                    }
                },
                {
                    "Id": "17gfscg1-22ya-1faa-126a-ajhj657as405",
                    "Name": "UI_CONTRACT_THE_PRODUCER",
                    "ImageName": "images/actors/producer.jpg",
                    "Description": "UI_CONTRACT_THE_PRODUCER_DESC",
                    "Rewards": {
                        "MasteryXP": 2000
                    },
                    "Drops": [],
                    "IsPlayable": false,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_ELUSIVE",
                    "Icon": "elusive",
                    "LocationId": "LOCATION_PARENT_COASTALTOWN",
                    "ParentLocationId": "LOCATION_PARENT_COASTALTOWN",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "OrderIndex": 10000,
                    "XpModifier": {},
                    "RuntimeType": "Hit",
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
					},
                    "Tags": ["story", "medium", "elusive"],
                    "InclusionData": {
                        "ContractIds": ["962c08c5-88ed-40ec-902b-abeff2ad355c"]
                    }
                },
                {
                    "Id": "05dxh421-a0k7-6v61-a1da-ahc34fq1s4gh",
                    "Name": "UI_CONTRACT_NEWYORK_GLUTTON_SILENT",
                    "ImageName": "images/challenges/puppets.jpg",
                    "Description": "UI_CONTRACT_THE_LABEL",
                    "Rewards": {
                        "MasteryXP": 4000
                    },
                    "Drops": [],
                    "IsPlayable": false,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_ELUSIVE",
                    "Icon": "elusive",
                    "LocationId": "LOCATION_PARENT_COASTALTOWN",
                    "ParentLocationId": "LOCATION_PARENT_COASTALTOWN",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "OrderIndex": 10000,
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Context": {
                            "Witnesses": [],
                            "KilledTargets": [],
                            "RecordingDestroyed": true,
                            "LastAccidentTime": 0
                        },
                        "Scope": "session",
                        "States": {
                            "Start": {
                                "ContractEnd": {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    true,
                                                    "$.RecordingDestroyed"
                                                ]
                                            },
                                            {
                                                "$all": {
                                                    "in": "$.Witnesses",
                                                    "?": {
                                                        "$any": {
                                                            "in": "$.KilledTargets",
                                                            "?": {
                                                                "$eq": [
                                                                    "$.#",
                                                                    "$.##"
                                                                ]
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        ]
                                    },
                                    "Transition": "Success"
                                },
                                "AccidentBodyFound": {
                                    "$set": ["LastAccidentTime", "$Timestamp"]
                                },
                                "Witnesses": {
                                    "Condition": {
                                        "$any": {
                                            "in": "$Value",
                                            "?": {
                                                "$pushunique": [
                                                    "Witnesses",
                                                    "$.#"
                                                ]
                                            }
                                        }
                                    }
                                },
                                "Spotted": {
                                    "Condition": {
                                        "$any": {
                                            "in": "$Value",
                                            "?": {
                                                "$pushunique": [
                                                    "Witnesses",
                                                    "$.#"
                                                ]
                                            }
                                        }
                                    }
                                },
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$and": [
                                                {
                                                    "$eq": [
                                                        "$Value.IsTarget",
                                                        false
                                                    ]
                                                },
                                                {
                                                    "$not": {
                                                        "$eq": [
                                                            "$Value.KillContext",
                                                            1
                                                        ]
                                                    }
                                                }
                                            ]
                                        },
                                        "Transition": "Failure"
                                    },
                                    {
                                        "Condition": {
                                            "$and": [
                                                {
                                                    "$eq": [
                                                        "$Value.IsTarget",
                                                        false
                                                    ]
                                                },
                                                {
                                                    "$eq": [
                                                        "$Value.KillContext",
                                                        1
                                                    ]
                                                }
                                            ]
                                        },
                                        "Actions": {
                                            "$pushunique": [
                                                "KilledTargets",
                                                "$Value.RepositoryId"
                                            ]
                                        }
                                    },
                                    {
                                        "Condition": {
                                            "$eq": ["$Value.IsTarget", true]
                                        },
                                        "Actions": {
                                            "$pushunique": [
                                                "KilledTargets",
                                                "$Value.RepositoryId"
                                            ]
                                        }
                                    }
                                ],
                                "CrowdNPC_Died": {
                                    "Transition": "Failure"
                                },
                                "MurderedBodySeen": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.IsWitnessTarget",
                                                true
                                            ]
                                        },
                                        "Actions": {
                                            "$pushunique": [
                                                "Witnesses",
                                                "$Value.Witness"
                                            ]
                                        }
                                    },
                                    {
                                        "Condition": {
                                            "$and": [
                                                {
                                                    "$eq": [
                                                        "$Value.IsWitnessTarget",
                                                        false
                                                    ]
                                                },
                                                {
                                                    "$not": {
                                                        "$eq": [
                                                            "$.LastAccidentTime",
                                                            "$Timestamp"
                                                        ]
                                                    }
                                                }
                                            ]
                                        },
                                        "Transition": "Failure"
                                    }
                                ],
                                "SecuritySystemRecorder": [
                                    {
                                        "Actions": {
                                            "$set": [
                                                "RecordingDestroyed",
                                                false
                                            ]
                                        },
                                        "Condition": {
                                            "$eq": ["$Value.event", "spotted"]
                                        }
                                    },
                                    {
                                        "Actions": {
                                            "$set": ["RecordingDestroyed", true]
                                        },
                                        "Condition": {
                                            "$or": [
                                                {
                                                    "$eq": [
                                                        "$Value.event",
                                                        "erased"
                                                    ]
                                                },
                                                {
                                                    "$eq": [
                                                        "$Value.event",
                                                        "destroyed"
                                                    ]
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "Tags": ["story", "hard", "elusive"],
                    "InclusionData": {
                        "ContractIds": ["962c08c5-88ed-40ec-902b-abeff2ad355c"]
                    }
                }
]

const sapienzaassChallenges = [
                {
                    "Id": "0t56tcb1-12vh-432t-vxaa-123j657as405",
                    "Name": "UI_CONTRACT_THE_CLIENT",
                    "ImageName": "images/actors/client_artist.jpg",
                    "Description": "UI_CONTRACT_THE_CLIENT_DESC",
                    "Rewards": {
                        "MasteryXP": 4000
                    },
                    "Drops": [],
                    "IsPlayable": false,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
                    "Icon": "challenge_category_assassination",
                    "LocationId": "LOCATION_PARENT_COASTALTOWN",
                    "ParentLocationId": "LOCATION_PARENT_COASTALTOWN",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "OrderIndex": 10000,
                    "XpModifier": {},
                    "RuntimeType": "Hit",
					"Definition": {
						"Scope": "Hit",
						"Context": {
							"Targets": [
								"a0b3c75d-2e35-4d5c-a607-eda13b017e85"
							]
						},
						"States": {
							"Start": {
								"Kill": {
									"Condition": {
										"$eq": [
											"$Value.RepositoryId",
											"a0b3c75d-2e35-4d5c-a607-eda13b017e85"
										]
									},
									"Transition": "Success"
								}
							}
						}
					},
                    "Tags": ["story", "medium", "elusive"],
                    "InclusionData": {
                        "ContractIds": ["962c08c5-88ed-40ec-902b-abeff2ad355c"]
                    }
                },
                {
                    "Id": "04bfas41-126h-av3a-1hga-a4b12a7fgsca",
                    "Name": "UI_CONTRACT_PRODUCER_SNIPE",
                    "ImageName": "images/challenges/view_down.jpg",
                    "Description": "UI_CONTRACT_PRODUCER_SNIPE_DESC",
                    "Rewards": {
                        "MasteryXP": 2000
                    },
                    "Drops": ["PROP_ICA_IMPACT_EXPLOSIVE"],
                    "IsPlayable": false,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
                    "Icon": "challenge_category_assassination",
                    "LocationId": "LOCATION_PARENT_COASTALTOWN",
                    "ParentLocationId": "LOCATION_PARENT_COASTALTOWN",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "OrderIndex": 10000,
                    "XpModifier": {},
                    "RuntimeType": "Hit",
					"Definition": {
						"Scope": "Hit",
						"Context": {
							"Targets": [
								"914f0c3c-f4a7-46e5-a672-0792f8f30fd4"
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
														"914f0c3c-f4a7-46e5-a672-0792f8f30fd4"
													]
												},
												{
													"$any": {
														"?": {
															"$eq": [
																"$.#",
																"sniperrifle"
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
														"914f0c3c-f4a7-46e5-a672-0792f8f30fd4"
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
                    "Tags": ["story", "medium", "elusive"],
                    "InclusionData": {
                        "ContractIds": ["962c08c5-88ed-40ec-902b-abeff2ad355c"]
                    }
                }
]

const hokkaidoChallenges = [
                {
                    "Id": "012ccxz1-5gch-12dt-vv5a-121jdv657t55",
                    "Name": "UI_CONTRACT_PATIENT_ZERO_MISSION_STORY_ONE",
                    "ImageName": "images/challenges/incinerated.jpg",
                    "Description": "UI_CONTRACT_PATIENT_ZERO_MISSION_STORY_ONE_DESC",
                    "Rewards": {
                        "MasteryXP": 4000
                    },
                    "Drops": [],
                    "IsPlayable": false,
                    "IsLocked": false,
                    "HideProgression": false,
                    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
                    "Icon": "challenge_category_feats",
                    "LocationId": "LOCATION_PARENT_HOKKAIDO",
                    "ParentLocationId": "LOCATION_PARENT_HOKKAIDO",
                    "Type": "contract",
                    "DifficultyLevels": [],
                    "OrderIndex": 10000,
                    "XpModifier": {},
                    "RuntimeType": "Hit",
                    "Definition": {
                        "Scope": "hit",
                        "States": {
                            "Start": {
                                "Kill": {
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
                                                    "$Value.KillMethodStrict",
                                                    "accident_burn"
                                                ]
                                            }
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            }
                        }
                    },
                    "Tags": ["story", "medium", "assassination"],
                    "InclusionData": {
                        "ContractIds": ["375f4a88-0b3e-4641-bf7f-e1b81e3d6742", "a2befcec-7799-4987-9215-6a152cb6a320"]
                    }
                }
]

module.exports = function ElusivesChallenges(controller) {
    if (Math.abs(PEACOCKVER) < 6600) {
        log(LogLevel.ERROR, `[Elusive's WoA Challenges] This plugin requires Peacock v6.6.0! You're on v${PEACOCKVERSTRING}!`)
        return
    }

    controller.challengeService.registerGroup(featChallenges, "LOCATION_PARENT_GREEDY", "h3")
    controller.challengeService.registerGroup(assassinationChallenges, "LOCATION_PARENT_PARIS", "h3")
    controller.challengeService.registerGroup(sapienzaChallenges, "LOCATION_PARENT_COASTALTOWN", "h3")
    controller.challengeService.registerGroup(sapienzaassChallenges, "LOCATION_PARENT_COASTALTOWN", "h3")
    controller.challengeService.registerGroup(hokkaidoChallenges, "LOCATION_PARENT_HOKKAIDO", "h3")

    /**
     * For feats
     */
    for (const challenge of featChallenges) {
        controller.challengeService.registerChallenge(
            challenge,
            "feats",
            challenge.ParentLocationId,
            "h3"
        )
    }

    /**
     * For assassinations
     */
    for (const challenge of assassinationChallenges) {
        controller.challengeService.registerChallenge(
            challenge,
            "assassination",
            challenge.ParentLocationId,
            "h3"
        )
    }
	
    for (const challenge of sapienzaChallenges) {
        controller.challengeService.registerChallenge(
            challenge,
            "feats",
            challenge.ParentLocationId,
            "h3"
        )
    }

    for (const challenge of sapienzaassChallenges) {
        controller.challengeService.registerChallenge(
            challenge,
            "assassination",
            challenge.ParentLocationId,
            "h3"
        )
    }
	
    for (const challenge of hokkaidoChallenges) {
        controller.challengeService.registerChallenge(
            challenge,
            "feats",
            challenge.ParentLocationId,
            "h3"
        )
    }

    log(LogLevel.INFO, "[Mission pack challenges] Challenges for my mission pack is loaded, have fun!")
}