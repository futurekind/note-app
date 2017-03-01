import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Chooser from '../CategoryChooser';

describe('CategoryChooser', () => {

    const wrapper = shallow(
        <Chooser />
    )

    const categories = [
        { id: 'cat1', color: 'red', label: 'Cat 1', active: true },
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

})