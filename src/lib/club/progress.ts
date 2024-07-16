import { firestore } from '../firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import React from 'react'
import AddScore from './addScore'

export async function addUser(userId:string|undefined){
  if(!userId ){
    console.error("DNE");
    return; 
  }
  const docRef = doc(firestore, 'club-progress', userId)
  const docSnap = await getDoc(docRef)
  if (!docSnap.exists()){
    await setDoc(docRef, {
      complete: false,
      completed_club: [],
      progress: 0
    } )
  }
  return;
}

export default async function Progress(club_name:string, userId:string | undefined, group:string|null) {
  if(!userId || !group){
    console.error("DNE");
    return; 
  }
  const docRef = doc(firestore, 'club-progress', userId)
  const docSnap = await getDoc(docRef)
  const data = docSnap.data()
  
  // check that user has already answer this club or not
  if(Array.isArray(data?.completed_club)){
    if(!(data?.completed_club.includes(club_name))){
      await setDoc(docRef, {
        progress: data?.progress + 1
     }, {merge:true})
    }
  }

  if(data?.progress === 2 && !(data?.complete)){
    AddScore(group,'auto_added', 5)
    await setDoc(docRef, {
      complete: true
   }, {merge:true})
  }
  const completed_club = data?.completed_club
  completed_club.push(club_name)
  await setDoc(docRef, {
    completed_club: completed_club
 }, {merge:true})

}
