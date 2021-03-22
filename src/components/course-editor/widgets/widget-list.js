import React, {useState, useEffect} from 'react'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";
import widgetService from "../../../services/widget-service";

const WidgetList = () => {
    // TODO: move state management to widgets-reducer.js
    const {topicId} = useParams();
    const [widgets, setWidgets] = useState([])
    const [editingWidget, setEditingWidget] = useState({});
    useEffect(() => {
        // TODO: move server communication to widget-service.js
        // fetch("http://localhost:8080/api/widgets")
        fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
            .then(response => response.json())
            .then(widgets => setWidgets(widgets))
    }, [topicId])

    return(
        <div>
            <i onClick={widgetService.createWidgetForTopic} className="fas fa-plus fa-2x float-right"></i>
            <h2>Widget List ({widgets.length}) {editingWidget.id}</h2>
            <ul className="list-group">
                {
                    widgets.map(widget =>
                    <li className="list-group-item" key={widget.id}>
                        {
                            editingWidget.id === widget.id &&
                                <>
                                    <i onClick={() => {
                                        widgetService.updateWidget(widget.id, editingWidget)
                                    }} className="fas fa-2x fa-check float-right"></i>
                                    <i onClick={() => widgetService.deleteWidget(widget.id)} className="fas fa-2x fa-trash float-right"></i>
                                </>
                        }
                        {
                            editingWidget.id !== widget.id &&
                            <i onClick={() => setEditingWidget(widget)} className="fas fa-2x fa-cog float-right"></i>
                        }
                        {
                            widget.type === "HEADING" &&
                            <HeadingWidget
                                editing={editingWidget.id === widget.id}
                                widget={widget}/>
                        }
                        {
                            widget.type === "PARAGRAPH" &&
                            <ParagraphWidget
                                editing={editingWidget.id === widget.id}
                                widget={widget}/>
                        }
                    </li>
                    )
                }
            </ul>
            {JSON.stringify(widgets)}
        </div>
    )
}
export default WidgetList;