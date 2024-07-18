import { doc, getDoc } from "firebase/firestore"
import { firestore } from "../firebase"


export async function GetCompletedClub(userId: string| undefined){
  if(!userId){
    console.error("DNE");
    return; 
  }
  const docRef = doc(firestore, 'club-progress', userId)
  const docSnap = await getDoc(docRef)
  const completed_club = docSnap.data()?.completed_club
  return completed_club
}

export async function GetProgress(userId: string| undefined){
  if(!userId){
    console.error("DNE");
    return; 
  }
  const docRef = doc(firestore, 'club-progress', userId)
  const docSnap = await getDoc(docRef)
  const count = docSnap.data()?.progress
  return count
}

