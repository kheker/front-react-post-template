import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchProfile } from "../../actions/users";
import UserProfile from "./UserProfile";

class Profile extends Component {
  static propTypes = {
    fetchProfile: PropTypes.func.isRequired,
    profile: PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      rating: PropTypes.number,
      country: PropTypes.string,
      profession: PropTypes.string,
      skills: PropTypes.arrayOf(PropTypes.string),
      pricePerHour: PropTypes.number,
      finishJobs: PropTypes.number,
      portfolio: PropTypes.arrayOf(PropTypes.string)
    }).isRequired,
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.any])
      .isRequired
  };

  componentDidMount = () => {
    this.props.fetchProfile(this.props.match.params.id);
  };

  render() {
    return <UserProfile profile={this.props.profile} />;
  }
}

const mapStateToProps = state => {
  const { profile, isLoading, error } = state.profile;
  return {
    profile,
    isLoading,
    error
  };
};

export default withRouter(connect(mapStateToProps, { fetchProfile })(Profile));
