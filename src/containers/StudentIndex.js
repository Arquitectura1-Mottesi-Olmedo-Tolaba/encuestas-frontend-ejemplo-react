import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Link } from 'react-router';
import { studentsActions, studentsSelectors } from '../store/students/index';
import { UserTabs } from '../components/students/UserTabs';

@connect(
  (state) => {
    return {
      params: userAcademicOffersSelectors.getParams(state),
      student: studentsSelectors.getStudent(state),
    };
  }
)

export class StudentIndex extends React.Component {

  static contextTypes = {
    router: React.PropTypes.object,
    store: React.PropTypes.object,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      ...this.state,
      student: {
        degrees: [],
        offers: []
      }
    };
  }

  componentDidMount() {
    this.fetchStudent();
  }

  fetchDegrees(params) {
    this.context.store.dispatch(studentsActions.fetchStudent(params));
  }

  deleteDegree(degree) {
    console.log("TODO")
  }

  deleteOffer(offer) {
    console.log("TODO")
  }

  addOffer(offer) {
    console.log("TODO")
  }

  render() {
    const {
      params,
      student,
    } = this.props;

    return (
      <div>
        <UserTabs
          offers={student.offers}
          onAddOffer={this.addOffer}
          onDeleteOffer={this.deleteOffer}
          degrees={student.degrees}
          onDeleteDegree={this.deleteDegree}
        />
      </div>
    );
  }
}
