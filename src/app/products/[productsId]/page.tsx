import React from 'react';

const ProductsDetailPage =async({params}:{params:Promise<{productsId:string}>}) => {
    const {productsId} =await params
   
    const res=await fetch(`https://openapi.programming-hero.com/api/bazardor/products/${productsId}`)
    const product = await res.json()
    console.log(product)
    return (
        <div>
            newsdetailpage
        </div>
    );
};

export default ProductsDetailPage;