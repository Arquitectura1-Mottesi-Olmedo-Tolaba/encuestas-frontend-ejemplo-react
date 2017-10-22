import React from 'react';
import Textarea from 'react-textarea-autosize';
import { connect } from 'react-redux';
import { isEqual } from 'lodash';
import { academicOffersActions, academicOffersSelectors } from '../store/academicOffers/index';
import { CourseList } from '../components/courses/CourseList';

@connect(
  (state, props) => {
    return {
      academicOffer: academicOffersSelectors.getAcademicOffer(state, props.params.academicOfferId),
    };
  }
)
export class AcademicOfferForm extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object,
    store: React.PropTypes.object
  };

  static propTypes = {
    params: React.PropTypes.object,
    academicOffer: React.PropTypes.object,
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      ...this.state,
      academicOfferId: this.props.params.academicOfferId,
      academicOffer: {courses: []},
      courseSelected: []
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(nextProps.academicOffer, this.state.academicOffer)) {
      this.setState({...this.state, academicOffer: nextProps.academicOffer});
    }
  }

  componentDidMount() {
    if (this.state.academicOfferId) {
      this.context.store.dispatch(academicOffersActions.fetchAcademicOffer(this.props.params.academicOfferId));
    }
  }

  addCourse(course){
    var newArray = this.state.courseSelected.slice();
    newArray.push(course.id);
    this.setState({courseSelected: newArray})
  };

  handleSubmit() {
    this.context.store.dispatch(
      academicOffersActions.submitAcademicOffer(this.state.courseSelected)
    );
  }

  render() {
    const {
      params,
      academicOffer,
    } = this.props;

    return (
      <form onSubmit={this.handleSubmit.bind(this)} noValidate>
        <div className="form-group">
          <CourseList courses={academicOffer.courses} addCourse={this.addCourse.bind(this)}/>
        </div>
        <button type="submit" className="btn btn-default">
          Enviar Oferta
        </button>
      </form>
    );
  }
}
