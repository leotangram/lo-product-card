import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ProductCard, { ProductButtons, ProductImage, ProductTitle } from '../.';

const product = {
  id: '1',
  // img: './coffee-mug.png',
  title: 'Coffee Mug - Card',
};

const App = () => {
  return (
    <div>
      <ProductCard
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
        product={product}
      >
        {({ count, increaseBy, isMaxCountReached, maxCount, reset }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
