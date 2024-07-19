import { firestore } from '../firebase'
import { collection, doc, getDoc, getDocs, orderBy, query } from 'firebase/firestore'


export async function ReadDataSQ(docId:string) {
  const docRef = doc(firestore, 'StampQuest', docId)
  const docSnap = await getDoc(docRef)
  const data = docSnap.data()
  console.log("stampbook: ReadDataSQ")
  return data;
}

export async function ReadDataSP(userId:string|undefined) {
  if(userId){
    const docRef = doc(firestore, 'stamp-progress', userId)
    const docSnap = await getDoc(docRef)
    const data = docSnap.data()
    console.log("stampbook: ReadDataSP");
    return data;
  }
  return undefined;
}

export async function GetDetailsArray(){
  const stampRef = collection(firestore,'StampQuest')
  const q = query(stampRef, orderBy('order'))
  const querySnapshot = await getDocs(q);
  console.log("stampbook: GetDetailsArray")
  return querySnapshot.docs;
}