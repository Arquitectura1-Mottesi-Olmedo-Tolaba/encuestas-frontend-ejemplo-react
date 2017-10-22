import React from 'react';
import Textarea from 'react-textarea-autosize';
import { degreesActions, degreesSelectors } from '../store/degrees/index';
import { connect } from 'react-redux';
import { isEqual } from 'lodash';

@connect(
  (state, props) => {
    return {
      degree: degreesSelectors.getDegree(state, props.params.degreeId),
    };
  }
)
export class DegreesEdit extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object,
    store: React.PropTypes.object
  };

  static propTypes = {
    params: React.PropTypes.object,
    degree: React.PropTypes.object,
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      ...this.state,
      degreeId: this.props.params.degreeId,
      degree: {title: ''}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(nextProps.degree, this.state.degree)) {
      this.setState({...this.state, degree: nextProps.degree});
    }
  }

  componentDidMount() {
    if (this.state.degreeId) {
      this.context.store.dispatch(degreesActions.fetchDegree(this.props.params.degreeId));
    }
  }

  handleChange(field, e) {
    const degree = Object.assign({}, this.state.degree, {[field]: e.target.value});
    this.setState(Object.assign({}, this.state, {degree}));
  }

  handleSubmit() {
    if (this.state.degreeId) {
      this.context.store.dispatch(degreesActions.updateDegree(this.state.degree));
    } else {
      this.context.store.dispatch(degreesActions.createDegree(this.state.degree));
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} noValidate>
        <div className="form-group">
          <label className="label-control">Title</label>
          <input
            type="text"
            className="form-control"
            value={this.state.degree.title}
            onChange={this.handleChange.bind(this, 'title')} />
        </div>
        <button type="submit" className="btn btn-default">
          {this.state.degreeId ? 'Update' : 'Create' } Degree
        </button>
      </form>
    );
  }
}
