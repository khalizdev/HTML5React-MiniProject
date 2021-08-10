import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listproduct } from '../action/produkaction';
import Listproduk from './Listproduk'

export default function Dashboard() {
    // const [ products, setProduk ] = useState([])
    const productList = useSelector((state) => state.productList)
    const dispatch = useDispatch();
    const { products } = productList;
    useEffect(() =>{
        dispatch(listproduct())
    }, [])
    return(
        <div>
          <div className="row center">
            { products.map((product) => 
            <Listproduk key={product._id} product={product}></Listproduk>
            )}
          </div>
        </div>
    )
}
