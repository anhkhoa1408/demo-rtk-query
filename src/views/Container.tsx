import React from 'react'

import {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
} from '../api/productApi'

const Container = () => {
  const { data: productList } = useGetAllProductsQuery({})
  const { data: productItem } = useGetProductByIdQuery('1')

  return (
    <div>
      <h1>Product list</h1>
      <p>{JSON.stringify(productList)}</p>
      <h1>Product Item</h1>
      <p>{JSON.stringify(productItem)}</p>
    </div>
  )
}

export default Container
