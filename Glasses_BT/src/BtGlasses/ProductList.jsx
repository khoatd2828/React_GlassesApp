import React from 'react'
import { ProductItem } from './ProductItem'

export const ProductList = (props) => {
    const {handleItem} = props
  return (
    <div>
        <div className="row ms-5">
            {props.data.map((glasses) => {
                return <div className="col-2 mt-3" key={glasses.id}>
                    <ProductItem glasses={glasses} handleItem={handleItem}/>
                </div>
            })}
        </div>
    </div>
  )
}
