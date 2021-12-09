import React from 'react';
import renderer from 'react-test-renderer';
import ProductCard, { ProductTitle } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductTitle', () => {
  test('should show the component correctly with personalized title', () => {
    const wrapper = renderer.create(<ProductTitle title="Product Title" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should show the component with product name', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
