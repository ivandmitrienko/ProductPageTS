import React, { PureComponent } from 'react';
import { Routes, Route } from "react-router-dom";
import ProductList from './ProductList';
import Layout from './Layout';
import styles from './App.module.scss';
import Product from './Product';
// import { getProducts } from './actions/product-actions';

export default class App extends PureComponent {

  // componentDidMount(): void {
  //   getProducts();
  // }
  render() {
    return (
      <div className={styles.app}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<ProductList />} />
            <Route path='/ProductDescription/:id' element={<Product />} />
          </Route>
        </Routes>
      </div>
    )
  }
}
