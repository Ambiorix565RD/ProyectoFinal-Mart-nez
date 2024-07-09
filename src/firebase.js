// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Variable de entorno para proteger la informacion de la apikey que tenemos que nos generó FireBase
const firebaseConfig = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG)

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

//funcion para ver mostrar los productos
export async function getProducts(){
    const response = await getDocs(collection(db, "Products"));
    const listaProds=[];
    response.forEach((docu)=> listaProds.push({id: docu.id, ...docu.data()}))
    return listaProds;
}

//funcion para ver los detalles de los productos
export async function getProduct(id){
    const docRef = doc(db, "Products", id);
    const response = await getDoc(docRef); 

    if(response.exists()){
        return {id: response.id, ...response.data()}
    } else {
        throw new Error("No hay Documento");
    }
    
}


//Generar una orden
export async function addOrder(orderData, cartItems, total) {
    const ordersCollection = collection(db, 'Orders');
    const neworder = {
        ...orderData, items: cartItems, total, date: new Date(),
    };
    const docRef = await addDoc(ordersCollection, neworder);
    console.log('Doc ref generado: ' + docRef);
    console.log('Id generado: ' + docRef.id);
    return docRef.id;
  }

