import Item from './Item';

const ItemList = ({items}) => {
  return (
    <>
        {   
            items.map(item => (
                <Item
                    key = {item.id}
                    id = {item.id}
                    title = {item.title}
                    description = {item.description}
                    modelId = {item.modelId}
                    cost = {item.cost}
                    stock = {item.stock}
                    categoryId = {item.categoryId}
                    img = {item.img}
                />
            ))
        }
    </>
  )
}

export default ItemList