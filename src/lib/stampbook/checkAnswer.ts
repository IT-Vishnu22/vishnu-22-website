import {ReadDataSQ} from './readData'
import { CheckComplete, Update } from './progress'
import AddScore from './addScore'

export default async function CheckAnswer(docId: string, input:string, userId:string|undefined) {

  if (!userId) {
    console.error("DNE");
    return;
  }
  const answer:string = (await ReadDataSQ(docId))?.Answer
  const checkComplete: boolean = await CheckComplete(userId, docId)

  if (input === answer) {
    if(!checkComplete){
      AddScore('L','auto_added', 2) // group
      Update(userId, docId, true )
      return true;
    }
    return true;
  }
  
  return false;
}

