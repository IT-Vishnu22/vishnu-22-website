import { firestore }  from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";


export default async function AddScore(group: string | undefined, type: 'auto_added'|'manual_added', score: number){
  if (!group) {
    console.error("DNE");
    return;
  }
  const docRef = doc(firestore, "score", group);
  const docSnap = await getDoc(docRef);


  if (docSnap.exists()) {
    await setDoc(docRef,{
      [type]: docSnap.data()[type] + score
    },{merge:true} )}
}