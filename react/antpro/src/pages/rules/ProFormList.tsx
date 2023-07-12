import { PlusOutlined,EditOutlined } from '@ant-design/icons';
import {
    ModalForm,
    ProForm,
    ProFormDependency,
    ProFormList,
    ProFormSelect,
    ProFormText,
} from '@ant-design/pro-components';

import { Button, Form, Input, Select, Space } from 'antd';
import React, { useState,useRef }  from 'react';

const Demo = () => {

    const conditons = {
        "operator": [
            "LINE01"
        ],
        "product_id": [
            "Product001",
            "Product002"
        ],
        "recipe_id": [
            "Receipe001",
            "Receipe002",
            "Receipe005"
        ],
        "side_hp": [
            "L"
        ],
        "side_aligner": [
            "L"
        ]
    }

    const rules = [
        {
            "task_rule_id": "30",
            "task_rule_name": "1111",
            "model_setting": [
                {
                    "model_id": 120,
                    "model_name": "24242",
                    "confidence": 0.5,
                    "flag": {
                        "NewModel": {
                            "enable": false
                        },
                        "NewProduct": {
                            "enable": false
                        },
                        "PM": {
                            "enable": false
                        },
                        "AE": {
                            "enable": false,
                            "count": 3,
                            "diff": 1
                        },
                        "GSI": {
                            "enable": false,
                            "count": 3
                        },
                        "RI": {
                            "enable": false,
                            "count": 3
                        },
                        "DQIX": {
                            "enable": false,
                            "count": 3
                        },
                        "DQIY": {
                            "enable": false,
                            "count": 3
                        }
                    },
                    "models": [
                        {
                            "project_id": "532ba4dc-e598-11ed-8d2b-fc3497b12c13",
                            "experiment_id": "7d2a82b6-e598-11ed-be94-fc3497b12c13",
                            "name": "",
                            "algorithms": {
                                "xgboost": {},
                                "lightgbm": {}
                            },
                            "class_list": [],
                            "variables": [
                                "Date",
                                "High",
                                "Low",
                                "Close",
                                "Adj Close",
                                "Volume"
                            ],
                            "target": "Open",
                            "type": "regression",
                            "dqiy": 0.5,
                            "eda_id": "6078ddf1-e598-11ed-a401-fc3497b12c13",
                            "initial_dataset_id": "6078ddf1-e598-11ed-a401-fc3497b12c13",
                            "feature_engineering_id": "7d20b6c3-e598-11ed-bebd-fc3497b12c13",
                            "best_algorithm": "xgboost_9",
                            "gsi_mode": [
                                "gsi",
                                "ghi"
                            ],
                            "gsi_distance": "euclidean",
                            "scoring": "mae",
                            "is_stacking": false,
                            "cv_split_num": 5,
                            "n_trials": 20,
                            "random_seed": 5,
                            "error_info": null,
                            "created_at": "2023-04-28T15:44:21",
                            "simulation_value": null,
                            "dataset_id": "6078ddf1-e598-11ed-a401-fc3497b12c13",
                            "row_count": 70,
                            "experiment_url": "http://192.168.0.46:8000/file/project/532ba4dc-e598-11ed-8d2b-fc3497b12c13/experiment/7d2a82b6-e598-11ed-be94-fc3497b12c13/7d2a82b6-e598-11ed-be94-fc3497b12c13.zip",
                            "best_model": ""
                        }
                    ]
                },
                {
                    "model_id": 121,
                    "model_name": "000",
                    "confidence": 0.5,
                    "flag": {
                        "NewModel": {
                            "enable": false
                        },
                        "NewProduct": {
                            "enable": false
                        },
                        "PM": {
                            "enable": false
                        },
                        "AE": {
                            "enable": false,
                            "count": 3,
                            "diff": 1
                        },
                        "GSI": {
                            "enable": false,
                            "count": 3
                        },
                        "RI": {
                            "enable": false,
                            "count": 3
                        },
                        "DQIX": {
                            "enable": false,
                            "count": 3
                        },
                        "DQIY": {
                            "enable": false,
                            "count": 3
                        }
                    },
                    "models": [
                        {
                            "project_id": "532ba4dc-e598-11ed-8d2b-fc3497b12c13",
                            "experiment_id": "585b974f-e599-11ed-a159-fc3497b12c13",
                            "name": "000",
                            "algorithms": {
                                "xgboost": {},
                                "lightgbm": {}
                            },
                            "class_list": [],
                            "variables": [
                                "Date",
                                "Open",
                                "High",
                                "Low",
                                "Adj Close",
                                "Volume"
                            ],
                            "target": "Close",
                            "type": "regression",
                            "dqiy": 0.5,
                            "eda_id": "6078ddf1-e598-11ed-a401-fc3497b12c13",
                            "initial_dataset_id": "6078ddf1-e598-11ed-a401-fc3497b12c13",
                            "feature_engineering_id": "5844a58e-e599-11ed-8d4b-fc3497b12c13",
                            "best_algorithm": "xgboost_1",
                            "gsi_mode": [
                                "gsi",
                                "ghi"
                            ],
                            "gsi_distance": "euclidean",
                            "scoring": "mae",
                            "is_stacking": false,
                            "cv_split_num": 5,
                            "n_trials": 5,
                            "random_seed": 5,
                            "error_info": null,
                            "created_at": "2023-04-28T15:50:29",
                            "simulation_value": null,
                            "dataset_id": "6078ddf1-e598-11ed-a401-fc3497b12c13",
                            "row_count": 70,
                            "experiment_url": "http://192.168.0.46:8000/file/project/532ba4dc-e598-11ed-8d2b-fc3497b12c13/experiment/585b974f-e599-11ed-a159-fc3497b12c13/585b974f-e599-11ed-a159-fc3497b12c13.zip",
                            "best_model": ""
                        }
                    ]
                }
            ],
            "update_by": "test",
            "update_time": "2023-06-06 11:31:20",
            "server_id": [
                12,
                10
            ],
            "operator": {
                "type": "Include",
                "filter": [
                    "LINE01"
                ]
            },
            "product_id": {
                "type": "Include",
                "filter": [
                    "Product001"
                ]
            },
            "recipe_id": {
                "type": "All",
                "filter": []
            },
            "side_hp": {
                "type": "All",
                "filter": []
            },
            "side_aligner": {
                "type": "All",
                "filter": []
            },
            "color_id": null
        },
        {
            "task_rule_id": "16",
            "task_rule_name": "Innolux(DL DEMOI0530)",
            "model_setting": [
                {
                    "model_id": 121,
                    "model_name": "000",
                    "confidence": 0.5,
                    "models": [
                        {
                            "project_id": "532ba4dc-e598-11ed-8d2b-fc3497b12c13",
                            "experiment_id": "585b974f-e599-11ed-a159-fc3497b12c13",
                            "name": "000",
                            "algorithms": {
                                "xgboost": {},
                                "lightgbm": {}
                            },
                            "class_list": [],
                            "variables": [
                                "Date",
                                "Open",
                                "High",
                                "Low",
                                "Adj Close",
                                "Volume"
                            ],
                            "target": "Close",
                            "type": "regression",
                            "dqiy": 0.5,
                            "eda_id": "6078ddf1-e598-11ed-a401-fc3497b12c13",
                            "initial_dataset_id": "6078ddf1-e598-11ed-a401-fc3497b12c13",
                            "feature_engineering_id": "5844a58e-e599-11ed-8d4b-fc3497b12c13",
                            "best_algorithm": "xgboost_1",
                            "gsi_mode": [
                                "gsi",
                                "ghi"
                            ],
                            "gsi_distance": "euclidean",
                            "scoring": "mae",
                            "is_stacking": false,
                            "cv_split_num": 5,
                            "n_trials": 5,
                            "random_seed": 5,
                            "error_info": null,
                            "created_at": "2023-04-28T15:50:29",
                            "simulation_value": null,
                            "dataset_id": "6078ddf1-e598-11ed-a401-fc3497b12c13",
                            "row_count": 70,
                            "experiment_url": "http://192.168.0.46:8000/file/project/532ba4dc-e598-11ed-8d2b-fc3497b12c13/experiment/585b974f-e599-11ed-a159-fc3497b12c13/585b974f-e599-11ed-a159-fc3497b12c13.zip",
                            "best_model": ""
                        }
                    ]
                },
                {
                    "model_id": 122,
                    "model_name": "Innolux(DL DEMOI0530)",
                    "confidence": 0.5,
                    "models": [
                        {
                            "project_id": "default",
                            "experiment_id": "811480d5-feac-11ed-a8c4-fc3497b12c13",
                            "name": "Innolux(DEMOI0530)",
                            "algorithms": {
                                "xgboost": {}
                            },
                            "class_list": [],
                            "variables": [
                                "CFCT-SENSOR001",
                                "CFCT-SENSOR002",
                                "CFCT-SENSOR003",
                                "CFCT-SENSOR004",
                                "CFCT-SENSOR005",
                                "CFCT-SENSOR006",
                                "CFCT-SENSOR030",
                                "CFCT-SENSOR031",
                                "CFCT-SENSOR032",
                                "CFCT-SENSOR033",
                                "CFCT-SENSOR034",
                                "CFCT-SENSOR035",
                                "CFCT-SENSOR036",
                                "CFCT-SENSOR037",
                                "CFCT-SENSOR038",
                                "CFCT-SENSOR039",
                                "CFCT-SENSOR040",
                                "CFCT-SENSOR041",
                                "CFCT-SENSOR042",
                                "CFCT-SENSOR043",
                                "CFCT-SENSOR044",
                                "CFCT-SENSOR045",
                                "CFCT-SENSOR047",
                                "CFCT-SENSOR048",
                                "CFCT-SENSOR049",
                                "CFCT-SENSOR051",
                                "CFCT-SENSOR052",
                                "CFCT-SENSOR053",
                                "CFCT-SENSOR054",
                                "CFCT-SENSOR055",
                                "CFCT-SENSOR056",
                                "CFCT-SENSOR057",
                                "CFCT-SENSOR059",
                                "CFCT-SENSOR060",
                                "CFCT-SENSOR061",
                                "CFCT-SENSOR062",
                                "CFCT-SENSOR063",
                                "CFCT-SENSOR064",
                                "CFDV-SENSOR001",
                                "CFDV-SENSOR002",
                                "CFDV-SENSOR003",
                                "CFDV-SENSOR004",
                                "CFDV-SENSOR005",
                                "CFDV-SENSOR006",
                                "CFDV-SENSOR007",
                                "CFDV-SENSOR008",
                                "CFDV-SENSOR009",
                                "CFDV-SENSOR010",
                                "CFDV-SENSOR011",
                                "CFDV-SENSOR012",
                                "CFDV-SENSOR013",
                                "CFDV-SENSOR014",
                                "CFDV-SENSOR015",
                                "CFDV-SENSOR016",
                                "CFDV-SENSOR018",
                                "CFDV-SENSOR019",
                                "CFDV-SENSOR020",
                                "CFDV-SENSOR021",
                                "CFDV-SENSOR022",
                                "CFDV-SENSOR024",
                                "CFDV-SENSOR025",
                                "CFDV-SENSOR026",
                                "CFDV-SENSOR027",
                                "CFDV-SENSOR028",
                                "CFDV-SENSOR030",
                                "CFDV-SENSOR031",
                                "CFDV-SENSOR032",
                                "CFDV-SENSOR033",
                                "CFDV-SENSOR034",
                                "CFDV-SENSOR035",
                                "CFDV-SENSOR036",
                                "CFDV-SENSOR037",
                                "CFDV-SENSOR038",
                                "CFDV-SENSOR039",
                                "CFDV-SENSOR040",
                                "CFDV-SENSOR041",
                                "CFDV-SENSOR042",
                                "CFDV-SENSOR043",
                                "CFDV-SENSOR044",
                                "CFDV-SENSOR045",
                                "CFDV-SENSOR046",
                                "CFDV-SENSOR047",
                                "CFDV-SENSOR048",
                                "CFDV-SENSOR049",
                                "CFDV-SENSOR050",
                                "CFDV-SENSOR051",
                                "HPCP-SENSOR001",
                                "HPCP-SENSOR002",
                                "HPCP-SENSOR003",
                                "HPCP-SENSOR004",
                                "HPCP-SENSOR005",
                                "HPCP-SENSOR006",
                                "HPCP-SENSOR007",
                                "HPCP-SENSOR008",
                                "HPCP-SENSOR009",
                                "HPCP-SENSOR010",
                                "HPCP-SENSOR011",
                                "HPCP-SENSOR012",
                                "HPCP-SENSOR013",
                                "POBK-SENSOR001",
                                "POBK-SENSOR002",
                                "POBK-SENSOR003",
                                "POBK-SENSOR004",
                                "POBK-SENSOR005",
                                "POBK-SENSOR006",
                                "POBK-SENSOR007",
                                "POBK-SENSOR008",
                                "POBK-SENSOR009",
                                "POBK-SENSOR010",
                                "POBK-SENSOR011"
                            ],
                            "target": "METROLOGY-Point_001",
                            "type": "regression",
                            "dqiy": 0.8246220224803321,
                            "eda_id": "448788d6-eaf8-11ed-8732-fc3497b12c13",
                            "initial_dataset_id": "448788d6-eaf8-11ed-8732-fc3497b12c13",
                            "feature_engineering_id": "80f67177-feac-11ed-9343-fc3497b12c13",
                            "best_algorithm": "xgboost_7",
                            "gsi_mode": [
                                "gsi",
                                "ghi"
                            ],
                            "gsi_distance": "euclidean",
                            "scoring": "mse",
                            "is_stacking": false,
                            "cv_split_num": 5,
                            "n_trials": 10,
                            "random_seed": 42,
                            "error_info": null,
                            "created_at": "2023-05-30T13:40:37",
                            "simulation_value": null,
                            "dataset_id": "448788d6-eaf8-11ed-8732-fc3497b12c13",
                            "row_count": 30,
                            "experiment_url": "http://192.168.0.46:8000/file/project/default/experiment/811480d5-feac-11ed-a8c4-fc3497b12c13/811480d5-feac-11ed-a8c4-fc3497b12c13.zip",
                            "best_model": ""
                        }
                    ]
                }
            ],
            "update_by": "test",
            "update_time": "2023-06-02 16:41:34",
            "server_id": [
                10,
                12
            ],
            "operator": {
                "type": "Include",
                "filter": [
                    "LINE01"
                ]
            },
            "product_id": {
                "type": "Include",
                "filter": [
                    "Product002"
                ]
            },
            "recipe_id": {
                "type": "Exclude",
                "filter": [
                    "Receipe002"
                ]
            },
            "side_hp": {
                "type": "All",
                "filter": []
            },
            "side_aligner": {
                "type": "All",
                "filter": []
            },
            "color_id": null
        },
        {
            "task_rule_id": "14",
            "task_rule_name": "www",
            "model_setting": [
                {
                    "model_id": 120,
                    "model_name": "24242",
                    "confidence": 0.5,
                    "models": [
                        {
                            "project_id": "532ba4dc-e598-11ed-8d2b-fc3497b12c13",
                            "experiment_id": "7d2a82b6-e598-11ed-be94-fc3497b12c13",
                            "name": "",
                            "algorithms": {
                                "xgboost": {},
                                "lightgbm": {}
                            },
                            "class_list": [],
                            "variables": [
                                "Date",
                                "High",
                                "Low",
                                "Close",
                                "Adj Close",
                                "Volume"
                            ],
                            "target": "Open",
                            "type": "regression",
                            "dqiy": 0.5,
                            "eda_id": "6078ddf1-e598-11ed-a401-fc3497b12c13",
                            "initial_dataset_id": "6078ddf1-e598-11ed-a401-fc3497b12c13",
                            "feature_engineering_id": "7d20b6c3-e598-11ed-bebd-fc3497b12c13",
                            "best_algorithm": "xgboost_9",
                            "gsi_mode": [
                                "gsi",
                                "ghi"
                            ],
                            "gsi_distance": "euclidean",
                            "scoring": "mae",
                            "is_stacking": false,
                            "cv_split_num": 5,
                            "n_trials": 20,
                            "random_seed": 5,
                            "error_info": null,
                            "created_at": "2023-04-28T15:44:21",
                            "simulation_value": null,
                            "dataset_id": "6078ddf1-e598-11ed-a401-fc3497b12c13",
                            "row_count": 70,
                            "experiment_url": "http://192.168.0.46:8000/file/project/532ba4dc-e598-11ed-8d2b-fc3497b12c13/experiment/7d2a82b6-e598-11ed-be94-fc3497b12c13/7d2a82b6-e598-11ed-be94-fc3497b12c13.zip",
                            "best_model": ""
                        }
                    ]
                },
                {
                    "model_id": 121,
                    "model_name": "000",
                    "confidence": 0.5,
                    "models": [
                        {
                            "project_id": "532ba4dc-e598-11ed-8d2b-fc3497b12c13",
                            "experiment_id": "585b974f-e599-11ed-a159-fc3497b12c13",
                            "name": "000",
                            "algorithms": {
                                "xgboost": {},
                                "lightgbm": {}
                            },
                            "class_list": [],
                            "variables": [
                                "Date",
                                "Open",
                                "High",
                                "Low",
                                "Adj Close",
                                "Volume"
                            ],
                            "target": "Close",
                            "type": "regression",
                            "dqiy": 0.5,
                            "eda_id": "6078ddf1-e598-11ed-a401-fc3497b12c13",
                            "initial_dataset_id": "6078ddf1-e598-11ed-a401-fc3497b12c13",
                            "feature_engineering_id": "5844a58e-e599-11ed-8d4b-fc3497b12c13",
                            "best_algorithm": "xgboost_1",
                            "gsi_mode": [
                                "gsi",
                                "ghi"
                            ],
                            "gsi_distance": "euclidean",
                            "scoring": "mae",
                            "is_stacking": false,
                            "cv_split_num": 5,
                            "n_trials": 5,
                            "random_seed": 5,
                            "error_info": null,
                            "created_at": "2023-04-28T15:50:29",
                            "simulation_value": null,
                            "dataset_id": "6078ddf1-e598-11ed-a401-fc3497b12c13",
                            "row_count": 70,
                            "experiment_url": "http://192.168.0.46:8000/file/project/532ba4dc-e598-11ed-8d2b-fc3497b12c13/experiment/585b974f-e599-11ed-a159-fc3497b12c13/585b974f-e599-11ed-a159-fc3497b12c13.zip",
                            "best_model": ""
                        }
                    ]
                },
                {
                    "model_id": 122,
                    "model_name": "Innolux(DL DEMOI0530)",
                    "confidence": 0.5,
                    "models": [
                        {
                            "project_id": "default",
                            "experiment_id": "811480d5-feac-11ed-a8c4-fc3497b12c13",
                            "name": "Innolux(DEMOI0530)",
                            "algorithms": {
                                "xgboost": {}
                            },
                            "class_list": [],
                            "variables": [
                                "CFCT-SENSOR001",
                                "CFCT-SENSOR002",
                                "CFCT-SENSOR003",
                                "CFCT-SENSOR004",
                                "CFCT-SENSOR005",
                                "CFCT-SENSOR006",
                                "CFCT-SENSOR030",
                                "CFCT-SENSOR031",
                                "CFCT-SENSOR032",
                                "CFCT-SENSOR033",
                                "CFCT-SENSOR034",
                                "CFCT-SENSOR035",
                                "CFCT-SENSOR036",
                                "CFCT-SENSOR037",
                                "CFCT-SENSOR038",
                                "CFCT-SENSOR039",
                                "CFCT-SENSOR040",
                                "CFCT-SENSOR041",
                                "CFCT-SENSOR042",
                                "CFCT-SENSOR043",
                                "CFCT-SENSOR044",
                                "CFCT-SENSOR045",
                                "CFCT-SENSOR047",
                                "CFCT-SENSOR048",
                                "CFCT-SENSOR049",
                                "CFCT-SENSOR051",
                                "CFCT-SENSOR052",
                                "CFCT-SENSOR053",
                                "CFCT-SENSOR054",
                                "CFCT-SENSOR055",
                                "CFCT-SENSOR056",
                                "CFCT-SENSOR057",
                                "CFCT-SENSOR059",
                                "CFCT-SENSOR060",
                                "CFCT-SENSOR061",
                                "CFCT-SENSOR062",
                                "CFCT-SENSOR063",
                                "CFCT-SENSOR064",
                                "CFDV-SENSOR001",
                                "CFDV-SENSOR002",
                                "CFDV-SENSOR003",
                                "CFDV-SENSOR004",
                                "CFDV-SENSOR005",
                                "CFDV-SENSOR006",
                                "CFDV-SENSOR007",
                                "CFDV-SENSOR008",
                                "CFDV-SENSOR009",
                                "CFDV-SENSOR010",
                                "CFDV-SENSOR011",
                                "CFDV-SENSOR012",
                                "CFDV-SENSOR013",
                                "CFDV-SENSOR014",
                                "CFDV-SENSOR015",
                                "CFDV-SENSOR016",
                                "CFDV-SENSOR018",
                                "CFDV-SENSOR019",
                                "CFDV-SENSOR020",
                                "CFDV-SENSOR021",
                                "CFDV-SENSOR022",
                                "CFDV-SENSOR024",
                                "CFDV-SENSOR025",
                                "CFDV-SENSOR026",
                                "CFDV-SENSOR027",
                                "CFDV-SENSOR028",
                                "CFDV-SENSOR030",
                                "CFDV-SENSOR031",
                                "CFDV-SENSOR032",
                                "CFDV-SENSOR033",
                                "CFDV-SENSOR034",
                                "CFDV-SENSOR035",
                                "CFDV-SENSOR036",
                                "CFDV-SENSOR037",
                                "CFDV-SENSOR038",
                                "CFDV-SENSOR039",
                                "CFDV-SENSOR040",
                                "CFDV-SENSOR041",
                                "CFDV-SENSOR042",
                                "CFDV-SENSOR043",
                                "CFDV-SENSOR044",
                                "CFDV-SENSOR045",
                                "CFDV-SENSOR046",
                                "CFDV-SENSOR047",
                                "CFDV-SENSOR048",
                                "CFDV-SENSOR049",
                                "CFDV-SENSOR050",
                                "CFDV-SENSOR051",
                                "HPCP-SENSOR001",
                                "HPCP-SENSOR002",
                                "HPCP-SENSOR003",
                                "HPCP-SENSOR004",
                                "HPCP-SENSOR005",
                                "HPCP-SENSOR006",
                                "HPCP-SENSOR007",
                                "HPCP-SENSOR008",
                                "HPCP-SENSOR009",
                                "HPCP-SENSOR010",
                                "HPCP-SENSOR011",
                                "HPCP-SENSOR012",
                                "HPCP-SENSOR013",
                                "POBK-SENSOR001",
                                "POBK-SENSOR002",
                                "POBK-SENSOR003",
                                "POBK-SENSOR004",
                                "POBK-SENSOR005",
                                "POBK-SENSOR006",
                                "POBK-SENSOR007",
                                "POBK-SENSOR008",
                                "POBK-SENSOR009",
                                "POBK-SENSOR010",
                                "POBK-SENSOR011"
                            ],
                            "target": "METROLOGY-Point_001",
                            "type": "regression",
                            "dqiy": 0.8246220224803321,
                            "eda_id": "448788d6-eaf8-11ed-8732-fc3497b12c13",
                            "initial_dataset_id": "448788d6-eaf8-11ed-8732-fc3497b12c13",
                            "feature_engineering_id": "80f67177-feac-11ed-9343-fc3497b12c13",
                            "best_algorithm": "xgboost_7",
                            "gsi_mode": [
                                "gsi",
                                "ghi"
                            ],
                            "gsi_distance": "euclidean",
                            "scoring": "mse",
                            "is_stacking": false,
                            "cv_split_num": 5,
                            "n_trials": 10,
                            "random_seed": 42,
                            "error_info": null,
                            "created_at": "2023-05-30T13:40:37",
                            "simulation_value": null,
                            "dataset_id": "448788d6-eaf8-11ed-8732-fc3497b12c13",
                            "row_count": 30,
                            "experiment_url": "http://192.168.0.46:8000/file/project/default/experiment/811480d5-feac-11ed-a8c4-fc3497b12c13/811480d5-feac-11ed-a8c4-fc3497b12c13.zip",
                            "best_model": ""
                        }
                    ]
                }
            ],
            "update_by": "test",
            "update_time": "2023-06-05 14:24:25",
            "server_id": [
                10
            ],
            "operator": {
                "type": "All",
                "filter": []
            },
            "product_id": {
                "type": "Exclude",
                "filter": [
                    "Product001",
                    "Product002"
                ]
            },
            "recipe_id": {
                "type": "All",
                "filter": []
            },
            "side_hp": {
                "type": "All",
                "filter": []
            },
            "side_aligner": {
                "type": "All",
                "filter": []
            },
            "color_id": null
        }
    ]

    const rule = rules[0];

    const server = [
        {
            "uuid": [
                "464b6c49-ddb6-42d0-b6da-cb29cc927717"
            ],
            "server_id": "12",
            "server_name": "AutoML_Y",
            "manager_ip": "127.0.0.1",
            "manager_port": "9303",
            "server_ip": "127.0.0.1",
            "server_port": "8082",
            "connection_type": "TuneModel",
            "create_time": [
                "2023",
                "1",
                "3 下午 01:41:14"
            ],
            "update_time": [
                "2023",
                "5",
                "30 下午 02:35:07"
            ]
        },
        {
            "uuid": [
                "bf859215-ed5c-4254-9433-aeeb5269da6c"
            ],
            "server_id": "10",
            "server_name": "AutoML_X",
            "manager_ip": "127.0.0.1",
            "manager_port": "9301",
            "server_ip": "127.0.0.1",
            "server_port": "8081",
            "connection_type": "FreeRun",
            "create_time": [
                "2022",
                "11",
                "24 上午 11:06:23"
            ],
            "update_time": [
                "2023",
                "5",
                "30 下午 02:35:10"
            ]
        }
    ]

    const serverArray = server.map(item => {
        return {
            value: Number(item.server_id),
            label: item.server_name,
        }
    })

    function convertRuleToObjectArray(conditons, rule) {
        const ruleArray = [];
        const newRuleArray = [];

        for (const key in conditons) {
            if (rule.hasOwnProperty(key)) {
                const ruleObj = {
                    name: key,
                    type: rule[key].type,
                    filter: rule[key].filter,
                };
                const newRuleObj = {
                    name: key,
                    type: 'All',
                    filter: [],
                };


                ruleArray.push(ruleObj);
                newRuleArray.push(newRuleObj);
            }
        }

        return [newRuleArray,ruleArray];
    }

    const [newRuleArray,ruleArray] = convertRuleToObjectArray(conditons, rule);
    console.log(newRuleArray,ruleArray);

    const [modalVisit, setModalVisit] = useState(false);
    const [modalAction, setModalAction] = useState('add');

    const formRef = useRef();

    return (
        <>
        <Space>
        <Button
          type="primary"
          onClick={() => {
            formRef?.current?.setFieldsValue({task_rule_name: '', server_id:[], conditions:newRuleArray});            
            //setInitValue();
            setInitFormListValue(newRuleArray);
            setModalAction('add');
            setModalVisit(true);

          }}
        >
          <PlusOutlined />
          Add
        </Button>
        <Button
          type="primary"
          onClick={() => {
            formRef?.current?.setFieldsValue({task_rule_name: rule.task_rule_name, server_id: rule.server_id, conditions:ruleArray});            
            //setInitValue();
            setInitFormListValue(ruleArray);
            setModalAction('edit');
            setModalVisit(true);
          }}
        >
          <EditOutlined />
          Edit
        </Button>        
       
      </Space>

        <ModalForm 
        formRef={formRef}
        title={modalAction == 'add' ? 'Add' : 'Edit'}
        open={modalVisit}
        onOpenChange={setModalVisit}
        //initialValues={initValue}
        onFinish={async (e) => console.log(e)}>

            <ProFormText width="md" name="task_rule_name" label="Name" />

            <ProFormList
                name={'conditions'}
                label=""
                //initialValue={initFormListValue}
                alwaysShowItemLabel
                creatorButtonProps={false}
                actionRender={() => {
                    return <></>
                }}
            >
                {(f, index, action) => {
                    //console.log(f, index, action)
                    return (
                        <>
                            <ProForm.Group key="group">
                                <ProFormSelect
                                    options={['All', 'Include', 'Exclude']}
                                    width="xs"
                                    name="type"
                                    label={ruleArray[index]?.name}
                                />
                                <ProFormDependency name={['type']}>
                                    {({ type }) => {

                                        if (type === 'All') {
                                            //action.setCurrentRowData({type:"All",filter:[]})
                                            return (
                                                <ProFormSelect
                                                    disabled
                                                    mode="multiple"
                                                    width="md"
                                                    name="filterNone"
                                                    label=' '
                                                    placeholder=' '
                                                />
                                            );
                                        }
                                        return (
                                            <ProFormSelect
                                                mode="multiple"
                                                options={conditons[ruleArray[index]?.name]}
                                                width="md"
                                                name="filter"
                                                label=' '
                                            />
                                        );
                                    }}
                                </ProFormDependency>
                            </ProForm.Group>
                        </>
                    );
                }}
            </ProFormList>
            <ProFormSelect
                mode="multiple"
                options={serverArray}
                width="md"
                name="server_id"
                label='Server'
            />
        </ModalForm>
        </>
    );
};

export default Demo;