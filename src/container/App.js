import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';

import * as catSelectors from '../selectors/categories'
import * as catActions from '../actions/categories'
import * as notesSelectors from '../selectors/notes'
import * as notesActions from '../actions/notes'

import Pagetitle from '../components/Pagetitle';
import Toggler from '../components/Toggler';
import CategoryToggler from '../components/CategoryToggler';
import MenuItem from '../components/MenuItem';

const View = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    padding: 20px;
`

const Body = styled.div`
    height: calc(100vh - 105px);
    margin-top: 20px;
    display: flex;
`

const Sidebar = styled.aside`
    width: 225px;
    padding-right: 20px;
    position: absolute;
    transform: translateX(-110%);
    transition: transform .3s;

    @media (min-width: 40em) {
        position: relative;
        transform: none;
        display: flex;
        flex-direction: column;
    }
`

const SidebarToggler = styled(Toggler)`
    margin-bottom: 40px;
    max-height: 50%;
    display: flex;
    flex-direction: column;
`

const Category = styled(CategoryToggler)`
    margin-bottom: 10px;
`

const Main = styled.main`
    flex: 1;
    background: #fff;
`

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editableCategory: ''
        }
    }

    render () {
        const { categories, notes } = this.props;
        const { editableCategory } = this.state;

        return (
            <View>
                <Pagetitle>Memorandum</Pagetitle>

                <Body>
                    <Sidebar>
                        <SidebarToggler 
                            title="Kategorien" 
                            open={ categories.open }
                            onToggle={ this.handleToggleCategories }
                        >
                            { categories.results.map(id => {
                                const cat = categories.entities[id];

                                return (
                                    <Category 
                                        key={ id }
                                        value={ id }
                                        checkboxType={ cat.color } 
                                        label={ cat.label }
                                        checked={ categories.active.indexOf(id) > -1 } 
                                        editMode={ editableCategory === id }
                                        onCheck={ this.handleCategoryCheck }
                                        onEdit={ this.handleCategoryEdit }
                                        onEditDone={ this.handleCategoryEditDone }
                                    />
                                )
                            }) }
                        </SidebarToggler>
                        
                        <SidebarToggler 
                            title="Listen" 
                            open={ !notes.open }
                            onToggle={ this.handleToggleNotes }
                        >
                            { notes.results.map((id, i) => {
                                const note = notes.entities[id];

                                return (
                                    <MenuItem
                                        key={ note.id }
                                        index={ note.id }
                                        active={ notes.active === note.id }
                                        title={ note.title }
                                        subtitle={ note.updatedAtHumanized }
                                        onClick={ this.handleNoteItemClick }
                                    />
                                )
                            }) }
                        </SidebarToggler>
                        <button onClick={ this.handleAddNote }>Add</button>
                    </Sidebar>

                    <Main></Main>
                </Body>
            </View>
        )
    }

    handleToggleCategories = () => {
        const { dispatch } = this.props;

        dispatch(
            catActions.toggleOpen()
        )
    }

    handleCategoryCheck = (checked, value) => {
        const { dispatch } = this.props;

        dispatch(
            catActions.toggleActive(value)
        )
    }

    handleCategoryEdit = (value) => {
        this.setState({
            editableCategory: value
        })
    }

    handleCategoryEditDone = (e, value) => {
        const { dispatch } = this.props;

        dispatch(
            catActions.edit(value, {
                label: e.target.value
            })
        )

        this.setState({
            editableCategory: ''
        })
    }

    handleToggleNotes = () => {
        const { dispatch } = this.props;

        dispatch(
            notesActions.toggleOpen()
        )
    }

    handleAddNote = () => {
        const { dispatch } = this.props;
        const id = new Date().getTime();

        dispatch(notesActions.create({
            id,
            updatedAt: new Date().toISOString(),
            title: 'New Note'
        }))

        this.handleNoteItemClick(id)
    }

    handleNoteItemClick = (index) => {
        const { dispatch } = this.props;

        dispatch(notesActions.setActive(index))
    }
}

const mapState = state => ({
    categories: {
        results: catSelectors.getCategories(state),
        entities: catSelectors.getCategoriesEntities(state),
        open: catSelectors.getCategoriesOpen(state),
        active: catSelectors.getCategoriesActive(state)
    },
    notes: {
        results: notesSelectors.getNotes(state),
        entities: notesSelectors.getNotesEntities(state),
        open: notesSelectors.getNotesOpen(state),
        active: notesSelectors.getNotesActive(state)
    }
})

export default connect(mapState)(App)