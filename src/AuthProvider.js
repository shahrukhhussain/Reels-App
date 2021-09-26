import {createContext , useEffect , useState} from "react";
import {auth, firestore} from "./firebase";

export const authContext = createContext();

let AuthProvider = (props) => {

    let [user , setUser] = useState(null);
    let [loading , setLoading] = useState(true);

    useEffect(()=>{

    let unsub = auth.onAuthStateChanged(async (user)=>{

    if(user){
        let {displayName , email , uid , photoURL} = user;

        let docRef = firestore.collection("users").doc(uid)
        // console.log(uid);
        let documentSnapshot = await docRef.get();
          console.log(documentSnapshot.exist);
        if(!documentSnapshot.exist){
            docRef.set({displayName , email , photoURL});
        }
        

        setUser({displayName , email , uid , photoURL});

    }
    else{
        setUser(null);
    }

    setLoading(false);

    });
    return() => {
        unsub();
    }

} , []);


return (
    <authContext.Provider value={user}>

         {!loading && props.children}

    </authContext.Provider>
)

}

export default AuthProvider;