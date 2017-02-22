import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Toggler from '../CategoryToggler';

describe('CategoryToggler', () => {
    
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Toggler checkboxType="green" />)
    })

    it('renders', () => {
        expect(toJSON(wrapper)).toMatchSnapshot();
    })

    it('renders checked checkbox', () => {
        wrapper.setProps({
            checked: true
        })
        const cb = wrapper.find('Checkbox');
        
        expect(toJSON(cb)).toMatchSnapshot()
    })

    it('renders label', () => {
        wrapper.setProps({
            label: 'Some Label'
        })

        const label = wrapper.children().at(1)

        expect(toJSON(label)).toMatchSnapshot() 
    })

    it('delegates clicks on checkbox with false', () => {
        const spy = jest.fn();

        wrapper.setProps({
            onCheck: spy
        })
        
        const checkbox = wrapper.children().at(0);

        checkbox.simulate('click');
        expect(spy).lastCalledWith(false)
    })

    it('delegates clicks on checkbox with true', () => {
        const spy = jest.fn();

        wrapper.setProps({
            onCheck: spy,
            checked: true
        })

        const checkbox = wrapper.children().at(0);

        checkbox.simulate('click');
        expect(spy).lastCalledWith(true)
    })

    it('renders input field instead of label when in editMode', () => {
        wrapper.setProps({
            label: 'Some label',
            editMode: true
        })

        const label = wrapper.children().at(1)

        expect(toJSON(label)).toMatchSnapshot();
    })

    it('delegates input value on blur', () => {
        const spy = jest.fn();

        wrapper.setProps({
            label: 'Some label',
            editMode: true,
            onEditDone: spy
        })

        const input = wrapper.children().at(1).children(0)
        const event = {
            target: {
                value: 'Foo'
            }
        }

        input.simulate('blur', event);
        
        expect(spy).toBeCalledWith(event)

    })

    it('delegate click on label', () => {
        const spy = jest.fn();

        wrapper.setProps({
            label: 'Some label',
            onEdit: spy
        })

        const input = wrapper.children().at(1)

        input.simulate('click');

        expect(spy).toBeCalled()

    })
})