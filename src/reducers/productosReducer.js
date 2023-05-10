// cada reducer tiene su propio state
import {
 AGREGAR_PRODUCTO,
 AGREGAR_PRODUCTO_EXITO,
 AGREGAR_PRODUCTO_ERROR,

} from '../types/index'


const initialState = {
  products: [],
  error: null,
  loading: false,
};

export default function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case AGREGAR_PRODUCTO:
      return{
        ...state,
        loading: action.payload
      }
    case AGREGAR_PRODUCTO_EXITO:
      return{
        ...state,
        loading: true,
        products: [...state.products, action.payload]
      }
    case AGREGAR_PRODUCTO_ERROR:
      return{
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}
