import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import allProducts from '../json/allProducts.json'
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {

    const [item, setItem] = useState([])
    const {id} = useParams();

    useEffect (()=> {
        const fetchData = async()=>{
            try{
                const data = await new Promise((resolve)=>{
                    setTimeout(()=>{
                        resolve( id ? allProducts.filter(item => item.category === id) : allProducts)
                    })
                });
                setItem(data);
            }catch (error) {
                console.log('Error:', error);
            }
        };
        fetchData();
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