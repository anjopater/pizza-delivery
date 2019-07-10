import React from 'react';
import { shallow } from 'enzyme';
import MultiPizza from './MultiPizza';

describe('MultiPizza', () => {
    it('should render', () => {
        const wrapper = shallow(<MultiPizza />);
        expect(wrapper.find('MultiPizza').length).toEqual(1);
    });
});