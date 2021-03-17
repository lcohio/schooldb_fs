import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Courses extends Component {

  state = {
    courses: []
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/courses')
      .then(response => response.json())
      .then(data => this.setState({ courses: data }));
  }

  render() {
    return (
      <div className="bounds">
        {this.state.courses.map((course, key) =>
          <div className="grid-33" key={ key }>
            <Link to={`/courses/${key + 1}`} className="course--module course--link">
              <h4 className="course--label">Course</h4>
              <h3 className="course--title">{ course.title }</h3>
            </Link>
          </div>
        )}
      </div>
    )
  }
}