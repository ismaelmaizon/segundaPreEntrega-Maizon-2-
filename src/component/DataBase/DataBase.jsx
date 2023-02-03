import { db } from '../../../db/firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';


const DataBase = () => {

    const [items, setItems] = useState([])
    const itemsCollectionRef = collection(db, "productos" )

    const getItems = async () => {
        const querySnapshot = await getDocs(itemsCollectionRef);
        console.log(querySnapshot);
        // setItems(querySnapshot.docChanges.map((doc) => ({...doc.data(), id: doc.id})));
        const docs = querySnapshot.docs.map((doc) => doc.data());
        console.log(docs);
        setItems(docs);
    };

    useEffect(() => {
        getItems();
    }, []);

    return (
        items.map((item) => {
            // console.log(item.name);
            return (
                <div>
                    <h1>{item.name} </h1>
                    <div>
                        <img  src={item.url} alt="" />
                    </div>
                    
                </div>
            )
        } )

    )

    
    
}

export default DataBase;
