import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import {getFirestore, collection, getDocs, where, query} from 'firebase/firestore';
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {

    const [item, setItem] = useState([])
    const {id} = useParams();

    useEffect(()=>{
        const queryDb = getFirestore();
        const queryCollection = collection(queryDb, 'audiolusa products');

        if(id){
            const queryFilter = query(queryCollection, where('categoryId', '==', id));
                getDocs(queryFilter).then((res)=>
                setItem(res.docs.map((p)=> ({id: p.id, ...p.data() })))
            );
        } 
            else{
                getDocs(queryCollection).then((res)=>
                setItem(res.docs.map((p)=> ({id: p.id, ...p.data() })))
            );
        }
       }, [id])

    return (
        <main>
            <div id="cards-container__products" className="container-products" data-aos="fade-up" data-aos-duration="200" data-aos-easing="ease-in-out">
                <div id="productTitle" className="container-fluid">
                    <ItemList item={item} />
                </div>
            </div>
        </main>
    )
}

export default ItemListContainer