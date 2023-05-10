import {

    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
   
   } from '../types/index'
   import axiosClient from '../config/axios';
   import Swal from 'sweetalert2';

   export function addNewProductAction(product){
      return async (dispatch)=> {
        dispatch(addProductAction());
        try {
          await axiosClient.post('/productos', product)
          dispatch(addProductActionSuccesfull(product))
          Swal.fire(
            'Correcto',
            'el producto se agrego correctamente',
            'success'
          )
        } catch (error) {
          dispatch(addProductActionError(true))
          Swal.fire({
            icon: 'error',
            title: 'ha ocurrido un error',
            text: 'ha ocurrido un error, intenta de nuevo'
          })
        }
      }
   }
   const addProductAction =()=>({
    type: AGREGAR_PRODUCTO,
    payload: true,
   })
   const addProductActionSuccesfull =(product)=>({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: product,
   })
   const addProductActionError =(productState)=>({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: productState
   })
