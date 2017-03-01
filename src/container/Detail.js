import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import * as notesSelectores from '../selectors/notes';

import * as notesActions from '../actions/notes';

import Sectiontitle from '../components/Sectiontitle';
import Divider from '../components/Divider';

const Title = styled.header`
    cursor: pointer;
`

const EditTitle = styled.input`
    width: 100%;
    padding: 20px 0;
    font-size: 24px;
    font-weight: 300;
    font-family: 'Source Sans Pro', sans-serif;
    border: none;

    &:focus {
        outline: none;
    }
`

class Detail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editModeTitle: false
        }
    }

    render () {
        const { note } = this.props;
        const { editModeTitle } = this.state;

        if(!note) return null;

        return (
            <Title onClick={ this.openTitleEditMode }>
                { editModeTitle && 
                    <div>
                        <EditTitle 
                            autoFocus
                            defaultValue={ note.title } 
                            onBlur={ this.handleTitleChange }
                        />
                        <Divider />
                    </div>
                }
                { !editModeTitle && 
                    <Sectiontitle iconId="edit">
                        { note.title }
                    </Sectiontitle> 
                }
            </Title>
        )
    }

    openTitleEditMode = () => {
        if(this.state.editModeTitle) return;

        this.setState({
            editModeTitle: true
        })
    }

    closeTitleEditMode = () => {
        if(!this.state.editModeTitle) return;

        this.setState({
            editModeTitle: false
        })
    }

    handleTitleChange = e => {
        const { dispatch, note } = this.props;
        const value = e.target.value;

        if(value === '') return;

        dispatch(
            notesActions.edit(note.id, {
                title: value
            })
        )

        this.closeTitleEditMode()
    }
}

const mapState = state => ({
    note: notesSelectores.getNotesEntities(state)[notesSelectores.getNotesActive(state)]
})

export default connect(mapState)(Detail)