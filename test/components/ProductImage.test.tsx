import React from 'react';
import renderer from 'react-test-renderer';
import ProductCard, { ProductImage } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductTitle', () => {
  test('should show the component correctly with personalized image', () => {
    const wrapper = renderer.create(
      <ProductImage img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should show the component with product image', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
