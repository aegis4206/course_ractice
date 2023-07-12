import { PageContainer, ProFormSwitch } from '@ant-design/pro-components';
import {
  Tag, Card, Typography, Input, Button, Space, Form, message, Row, Col, Table, Popconfirm
} from 'antd';
import {
  ProTable,
  ModalForm,
  ProForm,
  ProFormSelect,
  ProFormText,
  EditableProTable,
  ProFormGroup,
  ProFormCheckbox,
  ProFormDigit,
  ProFormList,
  ProFormDependency
} from '@ant-design/pro-components';
import { SearchOutlined, PlusCircleTwoTone, EditOutlined } from '@ant-design/icons';
import React, { useState, useEffect, useRef } from 'react';
import { useModel } from '@umijs/max';

const conditions = {
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
const mod = [{
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
}]

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


const RulesSetting: React.FC = () => {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState(undefined);
  const [conditons, setConditons] = useState([{}])
  const [models, setModels] = useState([])
  const [servers, setServers] = useState([])
  const form = useRef();
  const formRef = useRef();


  const [operator_type, setOperator_type] = useState('')
  const [product_id_type, setProduct_id_type] = useState('')
  const [recipe_id_type, setRecipe_id_type] = useState('')

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [modalState, setModalState] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [editFlag, setEditFlag] = useState([])
  const [flagId, setFlagId] = useState()
  const [addFlag, setAddFlag] = useState([])


  const [ruleTable, setRuleTable] = useState([])
  const [addTable, setAddTable] = useState([])
  const [editTable, setEditTable] = useState([])

  const [newRuleArray, setNewRuleArray] = useState([])
  const [ruleArray, setRuleArray] = useState([])

  const [modalVisit, setModalVisit] = useState(false);
  const [modalAction, setModalAction] = useState('add');
  const [flagInit, setFlagInit] = useState()



  //API
  const getRulesSetting = async () => {
    setIsLoading(true)
    try {
      //取得rules list
      // console.log(res);
      setData(rules);

      //取得rule
      const flagList = rules.map((rule) => {
        return {
          task_rule_id: rule.task_rule_id,
          model_setting: rule.model_setting
        }
      })
      console.log('flagList', flagList)
      setEditFlag(flagList)
      //取得conditions
      // const jsonCondition = Object.keys(resConditons).reduce((acc,item):any=>{
      //    acc[item]={data:resConditons[item],name:item,type:'All'}
      //    return acc
      // },[])

      setConditons(conditions)
      console.log('jsonCondition', Object.keys(resConditons))

      //取得servers lsit
      setServers(server)
      console.log('resServers', resServers)

      // 取得models list
      // const resModels = await getReports('GET', 'setting/models');
      // 需加入key值否則selectedRowKeys會讀不到值
      setModels(mod)
      console.log('resModels', NewResModels)
    }
    catch (err: any) {
      console.log(err);
    }
    setIsLoading(false)

  };


  //table動態欄位處理
  function convertRuleToObjectArray(conditons, rule) {
    const ruleArray = [];
    const newRuleArray = [];
    for (const key in conditons) {
      if (rule?.hasOwnProperty(key)) {
        const ruleObj = {
          name: key,
          type: rule[key]?.type,
          filter: rule[key]?.filter,
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
    console.log(ruleArray, newRuleArray)
    setNewRuleArray(newRuleArray)
    setRuleArray(ruleArray)
    console.log(ruleArray)
    return ruleArray
  }


  useEffect(() => {
    //API請求
    getRulesSetting()
    //conditons初始化
  }, []);

  //modal

  useEffect(() => {
    //rule table
    convertRuleToObjectArray(conditons, data[0])

    const rTable = Object.keys(conditons).map((item: any) => {
      console.log('rTableitem', item)
      return (
        {
          title: item.split("_").map((part: any) =>
            part.charAt(0).toUpperCase() + part.slice(1)).join("_"),
          dataIndex: item,
          key: item,
          onCell: (text: any) => {
            // console.log('onCell', text)
            if (text[item]?.type === 'Include') {
              return { className: 'include' }
            }
            if (text[item]?.type === 'Exclude') {
              return { className: 'exclude' }
            }
          },
          render: (text: any) => text?.type === 'All' ? '*' : text.filter?.map((i: any) => <>{i}<br /></>),
          align: 'center'
        }
      )
    })
    setRuleTable(rTable)



  }, [conditons, data])


  useEffect(() => {
    setSearchData(data)
  }, [data]);

  //reset condition type
  // const resetCondition = () => {
  //   const reset = conditons.map((i) => {
  //     i.type = 'All'
  //     return i
  //   })
  //   setConditons(reset)
  // }
  //condition init (add table)
  // const initCondition = []
  // const initConditionHandler = conditons.map((i) => {

  // })

  // console.log

  //AddTable sumbit OnFinishHandler
  const onFinishHandler = async (value, id?) => {
    console.log('submitValue', value)
    const selectRow = models.filter((i) => {
      return selectedRowKeys.map((num: any) => {
        return num === i.model_id
      }).includes(true)
    })


    console.log('selectedRowKeys', selectedRowKeys, 'addFlag', addFlag, 'editFlag', editFlag, 'task_rule_id', id)

    let model_settingFlag
    // const model_setting = selectRow.map((i) => {
    // })
    if (modalAction === 'add') {
      const model_setting = selectedRowKeys.map((i, index) => {
        const origin = addFlag.filter((o: any) => {
          return o.Model_id === i
        })
        if (origin.length === 0) {
          console.log('選單=0', i)
          const modelFilter = models.filter((m: any) => {
            return m.model_id === i
          })
          console.log('modelFilter', modelFilter)
          const modelDefault = modelFilter.map((filter) => {
            return {
              model_id: filter.model_id,
              model_name: filter.model_name,
              confidence: filter.confidence,
              flag: {
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
              }
            }
          })
          console.log('modelDefault', modelDefault)
          return modelDefault
        }
        console.log('origin', index, origin)
        return origin.map((o: any) => {
          return {
            model_id: o.Model_id,
            model_name: o.model_name,
            confidence: o.confidence,
            flag: {
              "NewModel": {
                "enable": o.values.New_Model
              },
              "NewProduct": {
                "enable": o.values.New_Product
              },
              "PM": {
                "enable": o.values.PM
              },
              "AE": {
                "enable": o.values.AE,
                "count": o.values.AE_Count,
                "diff": o.values.AE_Diff
              },
              "GSI": {
                "enable": o.values.GSI,
                "count": o.values.GSI_count
              },
              "RI": {
                "enable": o.values.RI,
                "count": o.values.RI_count
              },
              "DQIX": {
                "enable": o.values.DQIX,
                "count": o.values.DQIX_Count
              },
              "DQIY": {
                "enable": o.values.DQIY,
                "count": o.values.DQIY_Count
              }
            }
          }
        })
      })
      console.log('model_setting', model_setting)
      model_settingFlag = model_setting.map((i) => i[0])
      setAddFlag([])
    }

    if (modalAction === 'edit') {
      const model_setting = selectedRowKeys.map((i, index) => {
        console.log('editFlag', editFlag)
        const origin = editFlag.filter((o: any) => {
          return o.task_rule_id === id
        }).map((setting: any) => setting.model_setting)[0].filter((model: any) => model.model_id === i)
        console.log('origin', index, origin, i)
        if (origin.length === 0) {
          console.log('選單=0', i)
          const modelFilter = models.filter((m: any) => {
            return m.model_id === i
          })
          console.log('modelFilter', modelFilter)
          const modelDefault = modelFilter.map((filter) => {
            return {
              model_id: filter.model_id,
              model_name: filter.model_name,
              confidence: filter.confidence,
              flag: {
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
              }
            }
          })
          console.log('modelDefault', modelDefault)
          return modelDefault
        }

        // model_setting.filter((model:any)=>model.model_id===i)
        return origin.map((o: any) => {
          console.log('374', o)
          return {
            model_id: o.model_id,
            model_name: o.model_name,
            confidence: o.confidence,
            flag: {
              "NewModel": {
                "enable": o.flag.NewModel.enable
              },
              "NewProduct": {
                "enable": o.flag.NewProduct.enable
              },
              "PM": {
                "enable": o.flag.PM.enable
              },
              "AE": {
                "enable": o.flag.AE.enable,
                "count": o.flag.AE.count,
                "diff": o.flag.AE.diff
              },
              "GSI": {
                "enable": o.flag.GSI.enable,
                "count": o.flag.GSI.count
              },
              "RI": {
                "enable": o.flag.RI.enable,
                "count": o.flag.RI.count
              },
              "DQIX": {
                "enable": o.flag.DQIX.enable,
                "count": o.flag.DQIX.count
              },
              "DQIY": {
                "enable": o.flag.DQIY.enable,
                "count": o.flag.DQIY.count
              }
            }
          }
        })
      })
      console.log('model_setting', model_setting)
      model_settingFlag = model_setting.map((i) => i[0])
    }


    const server_id = value.server_id?.map((i: any) => {
      if (i === "AutoML_Y") {
        return 12
      }
      if (i === "AutoML_X") {
        return 10
      }
      return null
    })

    console.log(conditons)
    const condition = value.conditions?.reduce((acc, i) => {
      console.log(i)
      acc[i.name] = {
        'type': i.type,
        'filter': i.filter
      }
      return acc
    }, [])

    const body = {
      task_rule_name: value.task_rule_name,
      ...condition,
      model_setting: model_settingFlag,
      server_id,
      update_by: null
    }
    console.log(body);

    try {
      // modalAction === 'add' ? false : true
      const res = await getReports(modalAction === 'add' ? 'POST' : 'PUT', modalAction === 'add' ? 'setting/rule' : 'setting/rule/' + id, body);
      console.log(res);
      getRulesSetting()
      return res
    } catch (err: any) {
      console.log(err);
    }
  }

  //searchHandler
  //待修正!! 陣列無法正常搜尋
  const searchHandler = (value: string) => {
    if (value === '') {
      setSearchData(data)
      return
    }

    const res = data.filter((item: any) => {
      delete item.create_time
      // delete item.update_time
      delete item.uuid
      const obj = Object.values(item)
      return obj.map((i) =>
        i ? i.toString().includes(value) ? true : false : false
      ).includes(true)
    })
    setSearchData(res)
  }




  //EditTable Sumbit
  const flagHandler = (values, Model_id, task_rule_id?) => {
    console.log('flagHandler', values, Model_id, task_rule_id)
    const selectRow = models.filter((i: any) => {
      return selectedRowKeys.map((num: any) => {
        return num === i.model_id
      }).includes(true)
    })
    console.log('selectRow', selectRow)

    if (modalAction === 'edit') {
      console.log(values)
      const updateFlag = editFlag.map((item: any) => {
        //判斷task_rule_id相同在往下
        if (item.task_rule_id === task_rule_id) {
          console.log('task_rule_id相同', item, Model_id)
          if (!item.model_setting.map((i: any, index: any) => {
            //判斷model_id相同在往下
            console.log('498', i, Model_id)
            if (i.model_id === Model_id) {
              console.log('499', i)
              item.model_setting[index] =
              {
                model_id: Model_id,
                model_name: i.model_name,
                confidence: i.confidence,
                flag: {
                  AE:
                    { enable: values.AE, count: values.AE_count, diff: values.AE_Diff },
                  DQIX:
                    { enable: values.DQIX, count: values.DQIX_Count },
                  DQIY:
                    { enable: values.DQIY, count: values.DQIY_Count },
                  GSI:
                    { enable: values.GSI, count: values.GSI_Count },
                  NewModel:
                    { enable: values.New_Model },
                  NewProduct:
                    { enable: values.New_Product },
                  PM:
                    { enable: values.PM },
                  RI:
                    { enable: values.RI, count: values.RI_Count },
                }
                // AE:
                //   { enable: i.flag.AE.enable, count: i.flag.AE.count, diff: i.flag.AE.diff },
                // DQIX:
                //   { enable: i.flag.DQIX.enable, count: i.flag.DQIX.count },
                // DQIY:
                //   { enable: i.flag.DQIY.enable, count: i.flag.DQIY.count },
                // GSI:
                //   { enable: i.flag.GSI.enable, count: i.flag.GSI.count },
                // NewModel:
                //   { enable: i.flag.NewModel.enable },
                // NewProduct:
                //   { enable: i.flag.NewProduct.enable },
                // PM:
                //   { enable: i.flag.PM.enable },
                // RI:
                //   { enable: i.flag.RI.enable, count: i.flag.RI.count },
              }
              return true
            }
            return false
          }).includes(true)
          ) {
            item.model_setting = [...item.model_setting, {
              model_id: Model_id,
              model_name: selectRow.model_name,
              confidence: selectRow.confidence,
              flag: {
                AE:
                  { enable: false, count: 3, diff: 1 },
                DQIX:
                  { enable: false, count: 3 },
                DQIY:
                  { enable: false, count: 3 },
                GSI:
                  { enable: false, count: 3 },
                NewModel:
                  { enable: false },
                NewProduct:
                  { enable: false },
                PM:
                  { enable: false },
                RI:
                  { enable: false, count: 3 },
              }
            }]
          }
        }
        return item
      })
      setEditFlag(updateFlag)
      console.log('更新flag', updateFlag)
    }


    if (modalAction === 'add') {
      const filter = addFlag.filter((i: any) => {
        return i.Model_id !== Model_id
      })
      const modelsFilter = models.filter((i: any) => {
        console.log(i, Model_id)
        return i.model_id === Model_id
      })
      console.log('modelsFilter', modelsFilter)
      const flagArray = [...filter, {
        model_name: modelsFilter[0].model_name,
        confidence: modelsFilter[0].confidence,
        Model_id,
        values
      }]
      setAddFlag(flagArray)
      console.log('新建flag', flagArray)

    }



    // const flagArray = [...filter, {
    //   id,
    //   values
    // }]
    // console.log('flagArray', flagArray)
    // setEditFlag(flagArray)
    //sumbit後需清空
    return true
  }


  //Edit Columns
  useEffect(() => { }, [modalAction])
  const Editcolumns = [

    {
      key: "model_id",
      title: "Model ID",
      dataIndex: "model_id",
      sorter: (a, b) => a.model_id - b.model_id,
    },
    {
      key: "model_name",
      title: "Model Name",
      dataIndex: "model_name",
      sorter: (a, b) => a.model_name.localeCompare(b.model_name),
    },
    {
      key: "create_time",
      title: "Create Time",
      dataIndex: "create_time",
      sorter: (a, b) => a.create_time.localeCompare(b.create_time),
    },
    {
      key: "model_type",
      title: "Model Type",
      dataIndex: "model_type",
      sorter: (a, b) => a.model_type.localeCompare(b.model_type),
      render: (_, record) => <Tag color="geekblue"> {record.model_type} </Tag>,
    },
    {
      // Flag Modal
      key: 'key',
      title: "Flag",
      render: (text) => {
        console.log(text.model_id)
        console.log('flagId', flagId)
        console.log('editFlag', editFlag)
        const flagInfo = modalAction === 'edit' ?
          editFlag.filter((i: any) => {
            return i.task_rule_id === flagId
          }).map((i: any) => i.model_setting)[0]?.filter((i: any) => i.model_id === text.model_id)[0]
          : undefined
        console.log('flagInfo', flagInfo)
        // const initflag = flagInfo ? 
        // {
        //   New_Model: flagInfo?.flag.NewModel.enable,
        //   New_Product: flagInfo?.flag.NewProduct.enable,
        //   PM: flagInfo?.flag.PM.enable,
        //   AE: flagInfo?.flag.AE.enable,
        //   AE_Count: flagInfo?.flag.AE.count,
        //   AE_Diff: flagInfo?.flag.AE.diff,
        //   GSI: flagInfo?.flag.GSI.enable,
        //   GSI_Count: flagInfo?.flag.GSI.count,
        //   RI: flagInfo?.flag.RI.enable,
        //   RI_Count: flagInfo?.flag.RI.count,
        //   DQIX: flagInfo?.flag.DQIX.enable,
        //   DQIX_Count: flagInfo?.flag.DQIX.count,
        //   DQIY: flagInfo?.flag.DQIY.enable,
        //   DQIY_Count: flagInfo?.flag.DQIY.count,
        // } 
        // : 
        // {
        //   New_Model: false,
        //   New_Product: false,
        //   PM: false,
        //   AE: false,
        //   AE_Count: 3,
        //   AE_Diff: 1,
        //   GSI: false,
        //   GSI_Count: 3,
        //   RI: false,
        //   RI_Count: 3,
        //   DQIX: false,
        //   DQIX_Count: 3,
        //   DQIY: false,
        //   DQIY_Count: 3,
        // }
        // console.log('initflag', initflag)
        // if (modalAction === 'edit') {
        //   console.log('data && text', data, text)
        //   flagInfo = data.filter((i: any) => {
        //     return i.task_rule_id === flagId
        //   }).map((i: any) => i.model_setting)[0]?.filter((i: any) => i.model_id === text.model_id)[0]
        //   console.log('flagInfo', flagInfo)
        // }

        //待修正
        // const selectFlag= editFlag.length?editFlag.filter((i:any)=>{
        //   return i.id===text.model_id
        // }):[]
        // console.log('selectFlag',selectFlag)

        return <ModalForm
          width={'80%'}
          title="Edit Flag"
          trigger={
            <Button onClick={() => {
              // || !(flagInfo?.flag)
              setFlagInit(modalAction === 'add' ?
                {
                  New_Model: false,
                  New_Product: false,
                  PM: false,
                  AE: false,
                  AE_Count: 3,
                  AE_Diff: 1,
                  GSI: false,
                  GSI_Count: 3,
                  RI: false,
                  RI_Count: 3,
                  DQIX: false,
                  DQIX_Count: 3,
                  DQIY: false,
                  DQIY_Count: 3,
                } :
                flagInfo ?
                  {
                    New_Model: flagInfo?.flag.NewModel.enable,
                    New_Product: flagInfo?.flag.NewProduct.enable,
                    PM: flagInfo?.flag.PM.enable,
                    AE: flagInfo?.flag.AE.enable,
                    AE_Count: flagInfo?.flag.AE.count,
                    AE_Diff: flagInfo?.flag.AE.diff,
                    GSI: flagInfo?.flag.GSI.enable,
                    GSI_Count: flagInfo?.flag.GSI.count,
                    RI: flagInfo?.flag.RI.enable,
                    RI_Count: flagInfo?.flag.RI.count,
                    DQIX: flagInfo?.flag.DQIX.enable,
                    DQIX_Count: flagInfo?.flag.DQIX.count,
                    DQIY: flagInfo?.flag.DQIY.enable,
                    DQIY_Count: flagInfo?.flag.DQIY.count,
                  }
                  :
                  {
                    New_Model: false,
                    New_Product: false,
                    PM: false,
                    AE: false,
                    AE_Count: 3,
                    AE_Diff: 1,
                    GSI: false,
                    GSI_Count: 3,
                    RI: false,
                    RI_Count: 3,
                    DQIX: false,
                    DQIX_Count: 3,
                    DQIY: false,
                    DQIY_Count: 3,
                  })
            }}>
              <EditOutlined />
            </Button>
          }

          formRef={form}
          autoFocusFirstInput
          modalProps={{
            destroyOnClose: modalAction === 'add' ? false : true,
            // destroyOnClose: false,
            // maskClosable: false,//禁止模糊取消
            onCancel: () => {
              console.log(flagInit)
              // form.current.resetFields()
            },
          }}
          // submitter={{
          //   searchConfig: {
          //     submitText: 'Submit', // OK按钮的文字
          //     resetText: 'Reset', // Cancel按钮的文字
          //   },
          // }}
          submitTimeout={10000}
          onFinish={(values) => {
            const id = formRef.current.getFieldValue('task_rule_id')
            return flagHandler(values, text.model_id, id);
          }}

          //flag初始值
          initialValues={flagInit}
          layout='horizontal'
        >
          <ProFormSwitch name="New_Model" label="New Model" />
          <ProFormSwitch name="New_Product" label="New Product" />
          <ProFormSwitch name="PM" label="PM" />
          {/* AE */}
          <ProFormGroup>
            <ProFormSwitch name="AE" label="AE" />
            <ProFormDigit
              width={60}
              label="AE Count" name="AE_Count" min={0} max={10}
              fieldProps={{
                precision: 1,
                step: 0.1
              }}
            />
            <ProFormDigit
              width={60}
              label="AE Diff" name="AE_Diff" min={0} max={10}
              fieldProps={{
                precision: 1,
                step: 0.1
              }}
            />
          </ProFormGroup>
          {/* GSI */}
          <ProFormGroup>
            <ProFormSwitch name="GSI" label="GSI" />
            <ProFormDigit
              width={60}
              label="GSI Count" name="GSI_Count" min={0} max={10}
              fieldProps={{
                precision: 1,
                step: 0.1
              }}
            />
          </ProFormGroup>
          {/* RI */}
          <ProFormGroup>
            <ProFormSwitch name="RI" label="RI" />
            <ProFormDigit
              width={60}
              label="RI Count" name="RI_Count" min={0} max={10}
              fieldProps={{
                precision: 1,
                step: 0.1
              }}
            />
          </ProFormGroup>
          {/* DQIX */}
          <ProFormGroup>
            <ProFormSwitch name="DQIX" label="DQIX" />
            <ProFormDigit
              width={60}
              label="DQIX Count" name="DQIX_Count" min={0} max={10}
              fieldProps={{
                precision: 1,
                step: 0.1
              }}
            />
          </ProFormGroup>
          {/* DQIY */}
          <ProFormGroup>
            <ProFormSwitch name="DQIY" label="DQIY" />
            <ProFormDigit
              width={60}
              label="DQIY Count" name="DQIY_Count" min={0} max={10}
              fieldProps={{
                precision: 1,
                step: 0.1
              }}
            />
          </ProFormGroup>

        </ModalForm>
      },

    },

  ];



  //rule table
  const columns = [
    {
      title: 'Rule Name',
      dataIndex: 'task_rule_name',
      key: 'task_rule_name',
      width: 100,
    }, {
      title: 'Update Time',
      dataIndex: 'update_time',
      key: 'update_time',
      width: 100,
    },
    ...ruleTable,
    {
      title: 'Model',
      dataIndex: 'model_setting',
      key: 'model_name',
      render: (text: any) => {
        // <Tag color={'orange'} key={text}>{text}</Tag>
        return text.map((text: any) => <Tag color={'orange'} key={text.model_name}>{text.model_name}</Tag>)
      },
    }, {
      title: 'Server Name',
      dataIndex: 'server_id',
      key: 'server_id',
      render: (text: any) => {
        return text.map((text: any) => <Tag color={'purple'} key={text}>{parseInt(text) === 10 ? 'AutoML_X' : 'AutoML_Y'}</Tag>)
        //陣列map輸出
      },
    }, {
      title: 'Edit',
      key: 'edit',

      render: (text: any, _, index) => {

        return <Button
          type="primary"
          onClick={() => {
            setTimeout(() => {
              formRef?.current?.setFieldsValue({
                task_rule_name: text.task_rule_name, server_id: text.server_id.map((i) => {
                  if (i === 10) {
                    return 'AutoML_X'
                  }
                  if (i === 12) {
                    return 'AutoML_Y'
                  }
                }), conditions: convertRuleToObjectArray(conditons, text),
                // text.map((i) => {
                //   return {
                //     // name:i.,
                //   }
                // })
                task_rule_id: text.task_rule_id
              });
            }, 0)
            setModalAction('edit');
            setModalVisit(true);
            //model選單init處理
            setSelectedRowKeys(text.model_setting.map((i) => i.model_id))
            setFlagId(text.task_rule_id)
          }}
        >
          <EditOutlined />
          Edit
        </Button>

      }
    }, {
      title: 'Delete',
      key: 'delete',

      render: (text: any, _, index) => {
        // console.log(text)
        const confirm = async () => {
          console.log(text.task_rule_id);
          const res = await getReports('DELETE', 'setting/rule/' + text.task_rule_id);
          getRulesSetting()
          message.success('successfully deleted');
          return res
        };

        const cancel = () => {
        };

        return <Popconfirm
          title="Are you sure to delete this rule?"
          onConfirm={confirm}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"

        >
          <Button type='primary' danger>Delete</Button>
        </Popconfirm>

      }
    }
  ]



  return (
    <PageContainer>
      <Card title='' hoverable>
        {/* <Table
          columns={columns}
          dataSource={searchData||data}
          rowKey={'key'}
        /> */}

        <ProTable
          // key={}
          loading={isLoading}
          columns={columns}
          dataSource={searchData || data}
          request={(params, sorter, filter) => {
            // console.log('request')
            // getRulesSetting()
            setSearchData(data)
          }}
          toolBarRender={() => [
            <>
              <div style={{ background: '#bae7ff', padding: '5px', height: '50px', display: 'flex', alignItems: 'center' }}>Include</div>
              <div style={{ background: '#ffd8bf', padding: '5px', height: '50px', display: 'flex', alignItems: 'center' }}>Exclude</div>
              <Button
                type="primary"
                onClick={() => {
                  console.log('newRuleArray', newRuleArray)
                  setTimeout(() => {
                    formRef?.current?.setFieldsValue({ task_rule_name: '', server_id: [], conditions: newRuleArray });
                  }, 0)
                  setModalAction('add');
                  setModalVisit(true);
                  setSelectedRowKeys([])
                }}
              >
                <PlusCircleTwoTone />
                Add
              </Button>
            </>
          ]}

          // 左上搜尋行
          toolbar={{
            search: {
              onSearch: (value: string) => {
                searchHandler(value)
              },
            },

          }}
          rowKey="key"
          search={false}
        />
        <Typography.Text strong style={{ marginRight: "30px" }}>

        </Typography.Text>
        <Typography.Text strong style={{ marginRight: "30px" }}>

        </Typography.Text>
        <Typography.Text strong style={{ marginRight: "30px" }}>

        </Typography.Text>
      </Card>
      {/* <ModalForm open={open} onCancel={hideUserModal} /> */}


      <ModalForm
        formRef={formRef}
        layout='horizontal'
        title={modalAction === 'add' ? 'Add' : 'Edit'}
        open={modalVisit}
        onOpenChange={(e) => {
          console.log(e)
          setModalVisit(e)
        }}
        //initialValues={initValue}
        onFinish={async (e) => {
          const id = formRef.current.getFieldValue('task_rule_id')
          console.log('送出', e, id)
          form?.current?.resetFields()
          return onFinishHandler(e, id);
        }}
        modalProps={{
          onCancel: () => {
            console.log("form測試", form)
            form?.current?.resetFields()

          }
        }}
      >


        <ProFormText
          disabled={modalAction === 'add' ? false : true}
          width="md" name="task_rule_name" label="Rule Name" />

        <ProFormList
          name={'conditions'}
          label=""
          //initialValue={initFormListValue}
          alwaysShowItemLabel
          creatorButtonProps={false}
          actionRender={(actionRender) => {
            // console.log('actionRender', actionRender)
            return <></>
          }}
        >
          {(f, index, action) => {
            // console.log(f, index, action)
            return (
              <>
                <ProForm.Group key="group" size="small">
                  <ProFormSelect
                    options={['All', 'Include', 'Exclude']}
                    width="xs"
                    name="type"
                    label={ruleArray[index]?.name.split("_").map((part: any) =>
                      part.charAt(0).toUpperCase() + part.slice(1)).join("_")}
                  />
                  <ProFormDependency name={['type']}>
                    {({ type }) => {
                      return (
                        <ProFormSelect
                          disabled={type === 'All' ? true : false}
                          mode="multiple"
                          options={conditons[ruleArray[index]?.name]}
                          width="md"
                          name="filter"
                          label=''
                        />
                      );
                    }}
                    {/* {({ type }) => {

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
                    }} */}
                  </ProFormDependency>
                </ProForm.Group>
              </>
            );
          }}
        </ProFormList>
        <Table size='small'
          rowSelection={
            {
              selectedRowKeys,
              onChange: (newSelectedRowKeys: React.Key[]) => {
                console.log(newSelectedRowKeys)
                setSelectedRowKeys(newSelectedRowKeys);
              },
              // defaultSelectedRowKeys:Object.values(text.model_setting)
            }
          }
          columns={Editcolumns}
          dataSource={models}
          rowKey={"model_id"}
          title={() => 'Model'}
          loading={isLoading}
        // pagination={{
        //   pageSize: 5, // 設定顯示5筆
        // }}
        />
        <ProFormSelect
          mode="multiple"
          options={servers.map((i) => i.server_name)}
          width="md"
          name="server_id"
          label='Server'
        />
      </ModalForm>


    </PageContainer >

  );
};

export default RulesSetting;
