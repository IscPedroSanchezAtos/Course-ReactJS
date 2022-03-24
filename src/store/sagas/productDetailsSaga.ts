import { AxiosResponse } from 'axios';
import {put, call, takeLatest} from 'redux-saga/effects';
import ProductDetailsAction from '../actions/productDetailAction';
import ProductDetailsAPI from '../api/productsDetailsAPI';
import { ProductDetails } from '../reducers/productDetailsReducer'
function* workerFetchProductsDetailSaga(){
    const productDetailsAPI = new ProductDetailsAPI();
    const productDetailsAction = new ProductDetailsAction();

    try {
        const response: AxiosResponse = yield call(productDetailsAPI.getProducts);
        //const response = yield call(productDetailsAPI.getProducts);
        const productDetails = response.data as ProductDetails;

        yield put(productDetailsAction.set(productDetails));

    } catch (e) {
      console.log(e);
    }

}

export function* watchProductDetailsSaga(){
    yield takeLatest(ProductDetailsAction.FETCH_PRODUCTS_DETAILS, workerFetchProductsDetailSaga)
}