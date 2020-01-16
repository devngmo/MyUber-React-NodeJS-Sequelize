/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5d525f5a7b158e50f28eb4af
*
* You will get 10% discount for each one of your friends
* 
*/
/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE FUNCTIONS IN CarActionsGenerated.js PLEASE EDIT ../CarActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import CarApi from "../../../api/CarApi";

let actionsFunction = {

  //CRUD METHODS

  // Create car
  createCar: function(car) {
    return function(dispatch) {
      return CarApi
        .createCar(car)
        .then(car => {
          dispatch(actionsFunction.createCarSuccess(car));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createCarSuccess: function(car) {
    return { type: types.CREATE_CAR_SUCCESS, payload: car };
  },


  // Delete car
  deleteCar: function(id) {
    return function(dispatch) {
      return CarApi
        .deleteCar(id)
        .then(car => {
          dispatch(actionsFunction.deleteCarSuccess(car));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteCarSuccess: function(car) {
    return { type: types.DELETE_CAR_SUCCESS, payload: car };
  },


  // Find by Capacity
  findByCapacity: function(key) {
    return function(dispatch) {
      return CarApi
        .findByCapacity(key)
        .then(item => {
          dispatch(actionsFunction.findByCapacitySuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findByCapacitySuccess: function(item) {
    return { type: types.FINDBYCAPACITY_CAR_SUCCESS, payload: item };
  },


  // Find by Capacity
  findByCapacity: function(key) {
    return function(dispatch) {
      return CarApi
        .findByCapacity(key)
        .then(item => {
          dispatch(actionsFunction.findByCapacitySuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findByCapacitySuccess: function(item) {
    return { type: types.FINDBYCAPACITY_CAR_SUCCESS, payload: item };
  },


  // Find by Status
  findByStatus: function(key) {
    return function(dispatch) {
      return CarApi
        .findByStatus(key)
        .then(item => {
          dispatch(actionsFunction.findByStatusSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findByStatusSuccess: function(item) {
    return { type: types.FINDBYSTATUS_CAR_SUCCESS, payload: item };
  },


  // Get car
  loadCar: function(id) {
    return function(dispatch) {
      return CarApi
        .getOneCar(id)
        .then(car => {
          dispatch(actionsFunction.loadCarSuccess(car));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadCarSuccess: function(car) {
    return { type: types.GET_CAR_SUCCESS, payload: car };
  },

  // Load  list
  loadCarList: function() {
    return function(dispatch) {
      return CarApi
        .getCarList()
        .then(list => {
          dispatch(actionsFunction.loadCarListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadCarListSuccess: function(list) {
    return { type: types.LIST_CAR_SUCCESS, payload: list };
  },

	
  // Save car
  saveCar: function(car) {
    return function(dispatch) {
      return CarApi
        .saveCar(car)
        .then(car => {
          dispatch(actionsFunction.saveCarSuccess(car));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveCarSuccess: function(car) {
    return { type: types.UPDATE_CAR_SUCCESS, payload: car };
  },


};

export default actionsFunction;
