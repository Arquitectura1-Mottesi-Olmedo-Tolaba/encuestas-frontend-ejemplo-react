import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Link } from 'react-router';
import { DegreeList } from '../components/degrees/DegreeList';
import { SearchInput } from '../components/shared/SearchInput';
import { degreesActions, degreesSelectors } from '../store/degrees/index';
import { Auth } from '../services/Auth';

@connect(
  (state) => {
    return {
      params: degreesSelectors.getParams(state),
      degrees: degreesSelectors.getDegrees(state),
    };
  }
)

export class DegreesIndex extends React.Component {

  static contextTypes = {
    router: React.PropTypes.object,
    store: React.PropTypes.object,
  };

  constructor(props, context) {
    super(props, context);
    this.deleteDegree = this.deleteDegree.bind(this);
    this.handleSearch = this.handleSearch.bind(this, 'title_like');
  }

  componentDidMount() {
    this.fetchDegrees({});
  }

  fetchDegrees(params) {
    this.context.store.dispatch(degreesActions.fetchDegrees(params));
  }

  deleteDegree(degree) {
    this.context.store.dispatch(degreesActions.deleteDegree(degree));
  }

  handleSearch(field, value) {
    this.fetchDegrees({q: value})
  }

  render() {
    const {
      params,
      degrees,
    } = this.props;

    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <SearchInput
              value={params.q}
              onSearch={this.handleSearch}
              placeholder="Title search ..."
            />
          </div>
          <div className="col-md-6 text-right">
          {
            Auth.authenticated() &&
            <Link to="/degrees/new" className="btn btn-primary">New Degree</Link>
          }
          </div>
        </div>
        {degrees.length > 0 &&
        <DegreeList degrees={degrees} onDelete={this.deleteDegree}/>}
      </div>
    );
  }
}
