
import React, {useState} from 'react'
import {Link, useParams} from "react-router-dom";
import moduleReducer from "../reducers/modules-reducer";
import lessonReducer from "../reducers/lesson-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import WidgetList from "./course-editor/widgets/widget-list";
import TopicPills from "./course-editor/topic-pills";

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer
})

// const store = createStore(moduleReducer)
// const store = createStore(lessonReducer)
const store = createStore(reducer)

const CourseEditor = ({history}) => {
    const {courseId, moduleId} = useParams();
    return (
    <Provider store={store}>
        <div>
            <h2>
                <Link to="/courses/table">
                    <i className="fas fa-arrow-left"></i>
                </Link>
                Course Editor {courseId} {moduleId}
                <i onClick={() => history.goBack()}
                   className="fas fa-times float-right"></i>
                {/*<i onClick={() => props.history.goBack()}*/}
                {/*   className="fas fa-times float-right"></i>*/}
            </h2>
            <div className="row">
                <div className="col-3">
                    <ModuleList/>
                </div>
                <div className="col-9">
                    <LessonTabs/>
                    <br/>
                    <TopicPills/>
                    <br/>
                    <WidgetList/>
                </div>
            </div>
        </div>
    </Provider>)}

export default CourseEditor