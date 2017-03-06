import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import TransitionGroup from 'react-addons-css-transition-group';
import ReactMarkdown from 'react-markdown';

import { colors } from '../utils/styles';

import * as notesSelectores from '../selectors/notes';
import * as categoriesSelectors from '../selectors/categories';

import * as notesActions from '../actions/notes';

import Sectiontitle from '../components/Sectiontitle';
import Divider from '../components/Divider';
import Chooser from '../components/CategoryChooser'
import Note from '../components/Note';

const View = styled.div`
    &.transition-enter {
        opacity: 0;
        transform: translateY(-10%);
    }

    &.transition-enter-active {
        opacity: 1;
        transform: none;
        transition: opacity .25s ease-out,
                    transform .25s ease-out;
    }

    &.transition-leave {
        opacity: 1;
    }

    &.transition-leave-active {
        opacity: 0;
        transform: translateY(10%);
        transition: opacity .25s ease-in,
                    transform .25s ease-in;
    }
`

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

const CatChooser = styled.div`
    text-align: right;
`

const mapCategoriesForChooser = ({results, entities}, activeCategory) => {
    const map = results.map(id => {
        const cat = entities[id];

        return {
            id,
            color: colors[cat.color],
            colorCode: cat.color, 
            label: cat.label,
            active: id === activeCategory
        }
    })

    return [
        { 
            id: '',
            color: '#fff',
            colorCode: 'none',
            label: 'Keine Kategorie',
            active: activeCategory === ''
        },
        ...map
    ]
}

class Detail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editModeTitle: false,
            catChooserOpen: false
        }
    }

    render () {
        const { note, categories } = this.props;
        const { editModeTitle, catChooserOpen } = this.state;

        if(!note) return null;

        return (
            <TransitionGroup
                transitionName="transition"
                transitionEnterTimeout={ 250 }
                transitionLeaveTimeout={ 250 }
                component="div"
            >
                <View key={ note.id }>
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

                    <CatChooser>
                        <Chooser 
                            open={ catChooserOpen }
                            onClickLabel={ this.handleClickCatChooserLabel }
                            onClickCategory={ this.handleClickCategory }
                            categories={ mapCategoriesForChooser(categories, note.category_id) } 
                        />
                    </CatChooser>


                    <Note>
                        <h1>Heading 1</h1>
                        <h2>Heading 2</h2>
                        <h3>Heading 3</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur saepe temporibus dicta aliquam, quos a labore commodi, quidem hic debitis quibusdam enim necessitatibus corrupti illum accusantium ipsa, rem vel. Ipsa.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dolores deleniti provident numquam, perferendis iste beatae sit consectetur doloremque suscipit temporibus commodi vel libero quod aliquam aspernatur ab accusamus ea.</p>
                    </Note>
                </View>
            </TransitionGroup>
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
                title: value,
                updatedAt: new Date().toISOString()
            })
        )

        this.closeTitleEditMode()
    }

    handleClickCatChooserLabel = () => {
        this.setState({
            catChooserOpen: !this.state.catChooserOpen
        })
    }

    handleClickCategory = (id) => {
        const { dispatch, note } = this.props;

        dispatch(
            notesActions.edit(note.id, {
                category_id: id,
                updatedAt: new Date().toISOString()
            })
        )

        this.setState({
            catChooserOpen: false
        })
    }
}

const mapState = state => ({
    note: notesSelectores.getNotesEntities(state)[notesSelectores.getNotesActive(state)],
    categories: {
        results: categoriesSelectors.getCategories(state),
        entities: categoriesSelectors.getCategoriesEntities(state)
    }
})

export default connect(mapState)(Detail)