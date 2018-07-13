import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class SurveyList extends Component {
    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveys() {
        return this.props.surveys.reverse().map(survey => {
            return (
                <div className="col s12 m6" key={survey._id}>
                    <div className="card blue-grey">
                        <div className="card-content white-text">
                            <span className="card-title">{survey.title}</span>
                            <p>{survey.body}</p>
                            <p className="right">Sent on: {new Date(survey.dateSent).toLocaleDateString()}</p>
                        </div>
                        <div className="card-action">
                            <a href="#">Yes: {survey.yes}</a>
                            <a href="#">No: {survey.no}</a>
                        </div>
                    </div>
                </div>                
            );
        });
    }

    render() {
        return (
            <div className="row">{this.renderSurveys()}</div>
        );
    }
}

function mapStateToPros({ surveys }) {
    return { surveys }
}

export default connect(mapStateToPros, actions )(SurveyList);