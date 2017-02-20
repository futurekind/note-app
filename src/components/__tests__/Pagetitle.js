import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Pagetitle from '../Pagetitle';

describe('Pagetitle', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <Pagetitle />
        )
    })

    it('renders', () => {
        expect(toJSON(wrapper)).toMatchSnapshot();
    })

    it('renders children', () => {
        const wrapper = shallow(
            <Pagetitle>Some Title</Pagetitle>
        )
        expect(toJSON(wrapper)).toMatchSnapshot();
    })

})