export const getId = (product)=>{
    // id = product id + attribute items select id
    let attr = product.attributes
    if(attr.length === 0) return product.id
    let id = product.id
    for(let i of attr){
       id = id.concat("_", i.selected)
    }
    return id;
}
export const selectFirstAttri = (product)=>{
    let attr = product.attributes
    let updatedAttribute = []
    for (let i of attr){
        let val = i.items[0].value
        updatedAttribute.push({...i, selected:val})
    }
    return {...product, attributes:updatedAttribute}
}
export const inCart = (cart, id)=>{
    let prods = cart.filter(p=> p.id === id)
    return prods.length !== 0;
}