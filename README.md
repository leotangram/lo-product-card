# LO-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Leonardo Omaña

## Ejemplo

```
import ProductCard, { ProductButtons, ProductImage, ProductTitle } from 'lo-product-card'
```

```
import { ProductButtons } from '../components/ProductButtons'
import ProductCard, { ProductImage, ProductTitle } from '../components/'
import { products } from '../data/products'

const product = products[0]

const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard
        initialValues={{
          count: 4,
          maxCount: 10
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
  )
}

export default ShoppingPage
```
