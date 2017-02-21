import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Sectiontitle from '../Sectiontitle';

describe('Sectiontitle', () => {
    let wrapper;

    beforeAll(() => {
        wrapper = shallow(
            <Sectiontitle />
        )
    })

    it('renders', () => {
        expect(toJSON(wrapper)).toMatchSnapshot()
    })

    it('renders children', () => {
        wrapper.setProps({
            children: 'Some Title'
        })

        expect(toJSON(wrapper)).toMatchSnapshot()
    })

    it('renders icon', () => {
        wrapper.setProps({
            iconId: 'edit',
        })

        expect(toJSON(wrapper)).toMatchSnapshot()
    })

})