import { firestore } from '../firebase'
import { collection, doc, getDoc, getDocs, orderBy, query } from 'firebase/firestore'
import React from 'react'

export async function ReadDataSQ(docId:string) {
  const docRef = doc(firestore, 'StampQuest', docId)
  const docSnap = await getDoc(docRef)
  const data = docSnap.data()
  return data;
}

export async function ReadDataSP(userId:string|undefined) {
  if(userId){
    const docRef = doc(firestore, 'stamp-progress', userId)
    const docSnap = await getDoc(docRef)
    const data = docSnap.data()
    return data;
  }
  return undefined;
}

export async function GetQuerySnapshot(){
  const stampRef = collection(firestore,'StampQuest')
  const q = query(stampRef, orderBy('order'))
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs;
}