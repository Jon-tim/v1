// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";


type dataType = {
	id: string;
	src: string;
	name: string;
	details: string;
	category: string;
};


// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyC87xxp1asKo68hU6x3OMNxhdTDsA5R5hY",
	authDomain: "links-e5d7e.firebaseapp.com",
	projectId: "links-e5d7e",
	storageBucket: "links-e5d7e.appspot.com",
	messagingSenderId: "1052229407544",
	appId: "1:1052229407544:web:d33270470ba89626d267cd",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
export const colRef = collection(db, "links");


export const fetchData = async () => {
	const snapshot = await getDocs(colRef);
	const data: dataType[] = snapshot.docs.map(
		(doc) =>
			({
				...doc.data(),
				id: doc.id,
			} as dataType)
	);
	return data;
};