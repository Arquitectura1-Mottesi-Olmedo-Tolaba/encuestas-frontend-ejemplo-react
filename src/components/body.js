import React, { Component } from 'react';

class Body extends Component {
  render(){
    return(
      <div id="accordion" role="tablist">
        <Course courseName="Matematica 1" date="Lunes 15hs - 18hs" href="#matematica1" id="matematica1"/>
        <Course courseName="Matematica 2" date={["Lunes 18hs - 22hs", "Martes 18hs - 22hs"]} href="#matematica2" id="matematica2"/>
      </div>
    );
  }
}

class Course extends Component {
  render(){
    return(
      <div className="card">
        <div className="card-header" role="tab" id="headingOne">
          <h5 className="mb-0">
            <a data-toggle="collapse" href={this.props.href} aria-expanded="true" aria-controls="collapseOne">
              <p>{this.props.courseName}</p>
            </a>
          </h5>
        </div>
        <div id={this.props.id} className="collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
          <div className="card-body">
            <p>{this.props.date}</p>
          </div>
        </div>
      </div>
    )
  }
}
