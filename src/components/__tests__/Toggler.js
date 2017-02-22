import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Toggler from '../Toggler';

describe('Toggler', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <Toggler title="Some Title" />
        )
    })

    it('renders', () => {
        expect(toJSON(wrapper)).toMatchSnapshot();
    })

    it('show up icon when open', () => {
        wrapper.setProps({
            open: true
        })

        const sectiontitle = wrapper.find('Sectiontitle')

        expect(toJSON(sectiontitle)).toMatchSnapshot()
    })

    it('renders children', () => {
        const wrapper = shallow(
            <Toggler title="title">
                <p>one</p>
                <p>two</p>
                <p>three</p>
            </Toggler>
        )

        expect(toJSON(wrapper)).toMatchSnapshot()
    })

})