import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Checkbox from '../Checkbox';

describe('Checkbox', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <Checkbox />
        )
    })

    it('renders', () => {
        expect(toJSON(wrapper)).toMatchSnapshot();
    })

    it('renders bg colors of type prop', () => {
        wrapper.setProps({
            type: 'blue'
        })

        expect(toJSON(wrapper)).toMatchSnapshot()
    })

    it('renders checked Icon', () => {
        wrapper.setProps({
            checked: true
        })

        expect(toJSON(wrapper)).toMatchSnapshot()
    })

    it('calls onCheck callback', () => {
        const spy = jest.fn();

        wrapper.setProps({
            onCheck: spy
        })

        wrapper.simulate('click');

        expect(spy).toHaveBeenCalledWith(false)

        wrapper.setProps({
            checked: true
        })

        wrapper.simulate('click');

        expect(spy).toHaveBeenLastCalledWith(true)
    })

})