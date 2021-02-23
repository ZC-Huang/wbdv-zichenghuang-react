import React, {useState} from 'react'
import courseService, {findAllCourses, deleteCourse} from "../services/course-service"
import {Link} from "react-router-dom";

const CourseCard = ({course}) =>
  <div className="col-4">
    <div className="card">
      <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{course.title}</h5>
        <p className="card-text">Card Sample Text</p>
          <img src={``}/>
        <Link to="/courses/editor" className="btn btn-secondary">
            {course.title}
        </Link>
        <i onClick={() => deleteCourse(course)} className="fas fa-trash-alt"></i>
      </div>
    </div>
  </div>

export default CourseCard
