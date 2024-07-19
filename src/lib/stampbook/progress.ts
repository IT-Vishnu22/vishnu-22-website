import { firestore } from "../firebase";
import { collection, doc, getDoc, getDocs, orderBy, query, setDoc } from "firebase/firestore";

export async function Default(userId:string | undefined){
  if (!userId) {
    console.error("DNE");
    return;
}
  const docRef = doc(firestore, "stamp-progress", userId);
  const docSnap = await getDoc(docRef);
  if(docSnap.exists()){
    return docSnap
  }
  else{
    return undefined
  }
}



export async function CountAchieved(userId: string | undefined){
  if (!userId) {
    console.error("DNE");
    return ;
  }
  const docSnap = await Default(userId)
  const data = docSnap?.data()
  
  let i: number = 0
  for (let key in data) {
    if(data[key])
      i++
  }
  return i

}


export async function Update(userId:string | undefined, docId: string = '', update?:boolean) {
  
  if (!userId) {
    console.error("DNE");
    return;
  }
  const docRef = doc(firestore, "stamp-progress", userId);
  const docSnap = await getDoc(docRef);
  const docId2 = docId.replaceAll("-","_");

  if (!docSnap.exists()){
    await setDoc(docRef, {
      Engineering_1: false,
      Engineering_2: false,
      Engineering_3: false,
      Engineering_4: false,
      Engineering_Alumni: false,
      ENGINEERING_100_YEARS_ANNIVERSARY: false,
      Engineering_Garden: false,
      Larngear: false,
    } )
  }
  if(update){
    await setDoc(docRef, {
      [docId2]: true 
   }, {merge:true})
  }

}


export async function CheckComplete(userId: string | undefined, docId: string){
  if (!userId) {
    console.error("DNE");
    return;
  }
  const docSnap = await Default(userId);
  const docId2 = docId.replaceAll("-","_");
  if (docSnap?.exists()) {
    return docSnap.data()[docId2];
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }  

}