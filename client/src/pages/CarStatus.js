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
// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

// Custom Actions


// START IMPORT ACTIONS
import TrackActions from "../redux/actions/TrackActions";
import CarActions from "../redux/actions/CarActions";

// END IMPORT ACTIONS

/** APIs

* actionsTrack.LatestTrackByCarID
*	@description Get latest track by car ID
*	@returns String
*
* actionsCar.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*

**/

class CarEdit extends Component {
  // Init car
  constructor(props) {
    super(props);
    this.state = {
      car: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsCar.loadCar(this.props.match.params.id);
    }
    
  }

  // Insert props car in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      car: props.car
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.car._id) {
      this.props.actionsCar.saveCar(this.state.car).then(data => {
        this.props.history.push("/cars/");
      });
    } else {
      this.props.actionsCar.createCar(this.state.car).then(data => {
        this.props.history.push("/cars/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Car Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="BrandID"
            label="BrandID"
            value={this.state.car.BrandID || ""}
            onChange={Utils.handleChange.bind(this, "car")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.car.BrandID && this.state.car.BrandID === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="Capacity"
            label="Capacity"
            value={this.state.car.Capacity || ""}
            onChange={Utils.handleChange.bind(this, "car")}
            type="number"
            type="decimal"
            margin="normal"
            fullWidth
            required
            {...(!this.state.car.Capacity && this.state.car.Capacity === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="ModelID"
            label="ModelID"
            value={this.state.car.ModelID || ""}
            onChange={Utils.handleChange.bind(this, "car")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.car.ModelID && this.state.car.ModelID === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="Number"
            label="Number"
            value={this.state.car.Number || ""}
            onChange={Utils.handleChange.bind(this, "car")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.car.Number && this.state.car.Number === ""
              ? { error: true }
              : {})}
          />
          
          <FormControl fullWidth required
              {...(!this.state.car.Status && !this.state.car.Status
                ? { error: true }
                : {})}>
            <InputLabel shrink htmlFor="Status">
              Status
            </InputLabel>
            <Select
              value={this.state.car.Status || ""}
              onChange={Utils.handleChangeSelect.bind(this, "car")}
              inputProps={{
                id: "Status",
                name: "Status"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Booked"}>Booked</MenuItem>
              <MenuItem value={"Idle"}>Idle</MenuItem>
              <MenuItem value={"Removed"}>Removed</MenuItem>
              <MenuItem value={"Repair"}>Repair</MenuItem>
            </Select>
          </FormControl>

          {/* Footer */}
          <div className="footer-card">
            <Link to="/cars/">Back to list</Link>

            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsTrack: bindActionCreators(TrackActions, dispatch),
    actionsCar: bindActionCreators(CarActions, dispatch),
  };
};

// Validate types
CarEdit.propTypes = { 
  actionsTrack: PropTypes.object.isRequired,
  actionsCar: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    car: state.CarEditReducer.car
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarEdit);
