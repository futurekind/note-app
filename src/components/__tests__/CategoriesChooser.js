import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Chooser from '../CategoryChooser';

describe('CategoryChooser', () => {

    const wrapper = shallow(
        <Chooser />
    )

    const categories = [
        { id: 'cat1', color: 'red', label: 'Cat 1', active: false },
        { id: 'cat2', color: 'blue', label: 'Cat 2', active: false },
        { id: 'cat3', color: 'green', label: 'Cat 3', active: true },
    ]

    it('renders', () => {
        expect(toJSON(wrapper)).toMatchSnapshot();
    })

    it('renders list of categories', () => {
        wrapper.setProps({
            categories
        })

        const list = wrapper.childAt(0).childAt(0);

        expect(toJSON(list)).toMatchSnapshot()
    })

    it('delegates to onClickLabel', () => {
        const spy = jest.fn();
        
        wrapper.setProps({
            onClickLabel: spy
        })

        const label = wrapper.childAt(0)

        label.simulate('click')

        expect(spy).toHaveBeenCalled()
    })

    it('renders body with all categories', () => {
        wrapper.setProps({
            categories,
            open: true
        })

        const body = wrapper.childAt(1)

        expect(toJSON(body)).toMatchSnapshot()
    })

    it('delegates to onClickCategory', () => {
        const spy = jest.fn();

        wrapper.setProps({
            categories,
            open: true,
            onClickCategory: spy
        })

        const cat = wrapper.childAt(1).childAt(1)

        cat.simulate('click')

        expect(spy).toHaveBeenCalledWith('cat2')
    })

})