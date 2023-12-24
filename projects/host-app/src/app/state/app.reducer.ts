import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { toggleParentCode } from './app.action';

  
  const initialState: any = {
    parentApp: true,
  };

  // Selector functions


export const parentReducer = createReducer<any>(
    initialState,
    on(toggleParentCode, (state): any => {
        return {
          ...state,
          parentApp: !state.parentApp
        };
      })
)