import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import TransitionGroup from 'react-addons-css-transition-group'
import uuid from 'uuid/v4';

import * as catSelectors from '../selectors/categories'
import * as catActions from '../actions/categories'
import * as notesSelectors from '../selectors/notes'
import * as notesActions from '../actions/notes'

import Pagetitle from '../components/Pagetitle';
import Toggler from '../components/Toggler';
import CategoryToggler from '../components/CategoryToggler';
import MenuItem from '../components/MenuItem';
import Icon from '../components/Icon'
import Detail from './Detail';

import { colors } from '../utils/styles'

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

const AddBtnContainer = styled.div`
    text-align: right
`

const AddBtn = styled.span`
    cursor: pointer;
    transition: color .2s;

    &:hover {
        color: ${ colors.blueDark };
    }
`

const Category = styled(CategoryToggler)`
    margin-bottom: 10px;
`

const Main = styled.main`
    padding: 0 20px;
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

    componentDidUpdate (prevProps, prevState) {
        const { notes } = this.props;
        const prevNotesLength = prevProps.notes.results.length;
        const notesLength = notes.results.length;

        if(prevNotesLength !== notesLength) {
            setTimeout(() => {
                this.handleNoteItemClick(0)
            }, 500)
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
                            topspace
                            title="Kategorien" 
                            open={ categories.open }
                            onToggle={ this.handleToggleCategories }
                        >
                            <Category 
                                value=""
                                checkboxType="none"
                                label="Keine Kategorie"
                                checked={ categories.active.indexOf('') > -1 } 
                                onCheck={ this.handleCategoryCheck }
                            />
                            
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
                            <TransitionGroup
                                transitionName="menu-item"
                                transitionEnterTimeout={10500}
                                transitionLeaveTimeout={10500}
                            >
                                { notes.results.map((id, i) => {
                                    const note = notes.entities[id];
                                    const category = categories.entities[note.category_id] || {}

                                    return (
                                        <MenuItem
                                            key={ note.id }
                                            index={ i }
                                            active={ notes.active === note.id }
                                            title={ note.title }
                                            subtitle={ note.updatedAtHumanized }
                                            onClick={ this.handleNoteItemClick }
                                            flagColor={ colors[category.color] }
                                        />
                                    )
                                }) }
                            </TransitionGroup>
                        </SidebarToggler>
                        
                        <AddBtnContainer>
                            <AddBtn onClick={ this.handleAddNote }>
                                <Icon id="add" />
                            </AddBtn>
                        </AddBtnContainer>
                    </Sidebar>

                    <Main>
                        <Detail />
                    </Main>
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
        const id = uuid();

        dispatch(notesActions.create({
            id,
            updatedAt: new Date().toISOString(),
            title: 'New Note',
            category_id: 'cat4'
        }))

    }

    handleNoteItemClick = (index) => {
        const { dispatch, notes } = this.props;
        const id = notes.results[index]
        
        dispatch(notesActions.setActive(id))
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