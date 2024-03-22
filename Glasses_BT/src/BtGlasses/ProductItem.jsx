import React from 'react'

export const ProductItem = (props) => {
    const { glasses, handleItem } = props
    
    const handleClick = () => {
        handleItem(glasses); // Gọi hàm handleItem với tham số là đối tượng glasses được click
    }
    
    return (
        <div onClick={handleClick}> {/* Gọi handleClick khi click vào */}
            <img src={glasses.url} style={{width: '100px'}} alt="" />
        </div>
    )
}
