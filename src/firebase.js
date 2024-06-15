// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjucVyTJLl8-TzaJnd-8RDZgibeXNNkDA",
  authDomain: "ambidrums-65b2a.firebaseapp.com",
  projectId: "ambidrums-65b2a",
  storageBucket: "ambidrums-65b2a.appspot.com",
  messagingSenderId: "109968561527",
  appId: "1:109968561527:web:0e637ab0ca15d7481b3d72",
  measurementId: "G-88XYKQPRQX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export async function getProducts(){
    const response = await getDocs(collection(db, "Products"));
    const listaProds=[];
    response.forEach((docu)=> listaProds.push({id: docu.id, ...docu.data()}))
    return listaProds;
}

export async function getProduct(id){
    const docRef = doc(db, "Products", id);
    const response = await getDoc(docRef); 

    if(response.exists()){
        return {id: response.id, ...response.data()}
    } else {
        throw new Error("No hay Documento");
    }
    
}

