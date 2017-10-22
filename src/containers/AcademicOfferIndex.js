import React from 'react';
import Textarea from 'react-textarea-autosize';
import { connect } from 'react-redux';
import { isEqual } from 'lodash';
import { academicOffersActions, academicOffersSelectors } from '../store/academicOffers/index';
import { AcademicOfferList } from '../components/academicOffer/AcademicOfferList';

@connect(
  (state, props) => {
    return {
      academicOffers: academicOffersSelectors.getAcademicOffers(state),
    };
  }
)

export class AcademicOfferIndex extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object,
    store: React.PropTypes.object
  };

  static propTypes = {
    params: React.PropTypes.object,
    academicOffers: React.PropTypes.array,
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      ...this.state,
      degreeId: this.props.params.degreeId,
      academicOffers: []
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(nextProps.academicOffers, this.state.academicOffers)) {
      this.setState({...this.state, academicOffers: nextProps.academicOffers});
    }
  }

  componentDidMount() {
    if (this.state.degreeId) {
      this.context.store.dispatch(academicOffersActions.fetchAcademicOfferFromDegree(this.props.params.degreeId));
    }
  }

  render() {
    const {
      params,
      academicOffers,
    } = this.props;

    return (
      <div>
        {academicOffers.length > 0 &&
        <AcademicOfferList academicOffers={academicOffers} />}
      </div>
    );
  }
  }
