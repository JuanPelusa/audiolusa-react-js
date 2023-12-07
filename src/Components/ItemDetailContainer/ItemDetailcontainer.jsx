import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import allProducts from '../json/allProducts.json'
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const {id} = useParams()

    useEffect (()=>{
        const promise = new Promise ((resolve)=>{
            setTimeout (()=>{
                resolve(allProducts.find(item=> item.id === parseInt(id)))
            }, 100)
        });
        promise.then((data)=>{
            setItem(data)
        })
    }, [id])

    return (
        <div className="backMobile">
            <div className="container">
                <div>    
                    <ItemDetail item={item} />
                </div>
            </div>
        </div>
    )

}
 
export default ItemDetailContainer


    