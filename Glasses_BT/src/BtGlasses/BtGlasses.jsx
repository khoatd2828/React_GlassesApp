import React, { useState } from 'react'
import glassesList from '../dataGlasses.json'
import { ProductList } from './ProductList'

export const BtGlasses = () => {
    const [glasses, setGlasses] = useState(null)
    const handleItem = (selectedGlasses) => {
        setGlasses(selectedGlasses);
    }
  return (
    <div className='background'>
        <div className="header text-center fs-5 fw-normal text-white" style={{paddingTop: '35px'}}>TRY GLASSES APP ONLINE</div>
        <div className="row mt-5">
            <div className="col-6 d-flex justify-content-center">
                <div className="card rounded-0" style={{width: '18rem'}}>
                    <div className='position-relative'>
                        <img src="../public/glassesImage/model.jpg" className="card-img-top" alt="..." />
                        <img src="./glassesImage/v7.png" alt="" className='layoutGlasses position-absolute w-50 opacity-25' />
                        <div className="layout position-absolute start-0 w-100">
                            <h4 className='fw-bold' style={{color: 'darkblue'}}>FENDI F8750</h4>
                            <p className='fw-bold text-white'>Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6 d-flex justify-content-center">
                <div className="card rounded-0 position-relative" style={{width: '18rem'}}>
                    {glasses &&
                        <img src={glasses.url} alt="" className='layoutGlasses position-absolute w-50 opacity-25' /> 
                    }
                    <img src="../public/glassesImage/model.jpg" className="card-img-top" alt="..." />
                </div>
            </div>
        </div>
        <div className="list-glasses container bg-light my-5">
            <ProductList data={glassesList} handleItem={handleItem}/>
        </div>
    </div>
  )
}