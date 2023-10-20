import ItemList from "./ItemsProducts/ItemList";
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const { id }  = useParams();

    useEffect(() => {
      const querydb = getFirestore();
      const queryCollection = collection(querydb, 'products');

      if(id){
        const queryFilter = query(queryCollection, where('categoryId', '==', id));
        getDocs(queryFilter)
        .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() } ))));
      } else {
        getDocs(queryCollection)
          .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() } ))));
      }

    }, [id]);

    return (
      <>
        <ItemList items={data} />
      </>
    );
};

export default ItemListContainer;