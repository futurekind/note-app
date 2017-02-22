import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import MenuItem from '../MenuItem';

describe('MenuItem', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<MenuItem index={100} />)
    })

    it('renders', () => {
        expect(toJSON(wrapper)).toMatchSnapshot();
    })

    it('renders title', () => {
        wrapper.setProps({
            title: 'Some Title'
        })

        const title = wrapper.children().at(0)

        expect(toJSON(title)).toMatchSnapshot()
    })

    it('renders subtitle', () => {
        wrapper.setProps({
            subtitle: 'Some Subtitle'
        })

        const title = wrapper.children().at(1)

        expect(toJSON(title)).toMatchSnapshot()
    })

    it('renders flag color', () => {
        wrapper.setProps({
            flagColor: 'red'
        })

        const flag = wrapper
                        .children().at(1)
                        .children().at(1)

        expect(toJSON(flag)).toMatchSnapshot()
    })

    it('delegates click to onClick prop', () => {
        const spy = jest.fn();

        wrapper.setProps({
            onClick: spy
        })

        wrapper.simulate('click');

        expect(spy).toHaveBeenLastCalledWith(100)
    })

    it('renders active prop', () => {
        wrapper.setProps({
            active: true
        })

        expect(toJSON(wrapper)).toMatchSnapshot()
    })
})