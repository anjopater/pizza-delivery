import React from 'react';
import { shallow, render, mount } from 'enzyme';
import { expect } from 'chai';

import MultiPizza from '.';

describe('MultiPizza', () => {
    const images = ['https://cache.dominos.com/olo/5_65_6/assets/build/market/BR/_pt/images/img/products/larges/S_PIZQU.jpg', 'https://cache.dominos.com/olo/5_65_6/assets/build/market/BR/_pt/images/img/products/larges/S_PIZFR.jpg']

    const props = {
        images: images
    }

    it('should render', () => {
        const wrapper = shallow(<MultiPizza {...props} />);
        expect(wrapper).to.have.length(1);
        console.log(wrapper.debug())
    });

    it('should receibe a props images', () => {
        const wrapper = shallow(<MultiPizza {...props} />);
        console.log(wrapper.props().images);
       // expect(wrapper.props()).to.equal(images);
        console.log(wrapper.debug())
     
    });
});