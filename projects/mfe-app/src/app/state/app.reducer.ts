import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import * as AppState from './app.state';
import * as ProductActions from '../state/app.actions';

// Extends the app state to include the product feature.
// This is required because products are lazy loaded.
// So the reference to ProductState cannot be added to app.state.ts directly.
export interface State extends AppState.State {
    products: ProductState;
  }
  
  // State for this feature (Product)
export interface ProductState {
    showProductCode: boolean;
    // currentProduct: Product;
    // products: Product[];
    // error: string;
  }
  
  const initialState: ProductState = {
    showProductCode: true,
    // currentProduct: null,
    // products: [],
    // error: ''
  };

  // Selector functions
const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(
  getProductFeatureState,
  state => state.showProductCode
);

export const productReducer = createReducer<ProductState>(
    initialState,
    on(ProductActions.toggleProductCode, (state): ProductState => {
      return {
        ...state,
        showProductCode: !state.showProductCode
      };
    }))