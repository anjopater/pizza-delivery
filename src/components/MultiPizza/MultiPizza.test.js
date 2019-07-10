import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import MultiPizza from './MultiPizza';

describe('MultiPizza', () => {
    it('should render', () => {
        const wrapper = shallow(<MultiPizza />);
        console.log('hey',wrapper.find('MultiPizza'));
       // expect(wrapper.find(MultiPizza)).to.have.lengthOf(1);
    });
});