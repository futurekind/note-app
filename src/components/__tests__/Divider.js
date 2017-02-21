import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Divider from '../Divider';

describe('Divider', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <Divider />
        )
    })

    it('renders', () => {
        expect(toJSON(wrapper)).toMatchSnapshot()
    })
})