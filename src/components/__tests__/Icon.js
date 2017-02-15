import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Icon from '../Icon';

describe('Icon', () => {
    const wrapper = shallow(
        <Icon />
    )

    it('it renders', () => {
        expect(toJSON(wrapper)).toMatchSnapshot()
    })

    it('renders width and height', () => {
        wrapper.setProps({
            size: 30
        })

        expect(toJSON(wrapper)).toMatchSnapshot();
    })

    it('renders `add` icon', () => {
        wrapper.setProps({
            id: 'add'
        })

        expect(toJSON(wrapper)).toMatchSnapshot()
    })

})