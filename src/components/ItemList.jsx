import React from 'react'

const ItemList = ({item}) => {
  return (
    <>
        <div style={{border:"1px solid gray",borderRadius:"10px",marginBottom:"0.5rem",display:"flex"}} >
            <img src={item?.picture?.thumbnail} style={{objectFit:"cover",marginRight:"3px"}} alt="" />
        <p>{item?.name?.first} {item?.name?.last}</p>
        </div>
    </>
  )
}

export default ItemList