'use client'
import Image from "next/image";

// club json
import club from "./club.json"
import { useContext, useEffect, useState } from "react";
import Progress from "@/lib/club/progress";
import { GetCompletedClub } from "@/lib/club/getData";
import { UserContext } from "@/lib/context";
import { falseArray, trueArray } from "@/lib/club/array";

type clubInfo = {
  Name: string;
  Type: string;
  Detail: string;
  Contact: string;
  Question?: string;
  Answer?: string;
}

export const ClubSection = () => {
  //studentId and group from login
  const { user, group} = useContext(UserContext);
  const studentId = user?.uid 

  const [popUpOpen, setPopUpOpen] = useState<boolean[]>(falseArray);
  const [answer, setAnswer] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState<boolean[]>(falseArray);
  const [canEditAnswer, setCanEditAnswer] = useState<boolean[]>(trueArray);
  const [currentIdex, setCurrentIndex] = useState<number>(0)
  

  useEffect(() => {
    const setArray = async() => {
      const data: string[] = await GetCompletedClub(studentId)
      
      if(!data){
        return;
      }
      
      if(data.length === 0){
        return;
      }

      const trueIndexArray = club.ClubDetails.map((item, index) => {
        if(data.includes(item.Name)){
          return index
        }
      }) 
      const newCorrectAnswer = correctAnswer.map((c, i) => {
        if (trueIndexArray.includes(i)) {
          return true;
        } else {
          return c;
        }
      })
      setCorrectAnswer(newCorrectAnswer);
    }
    setArray()
  },[])

    
  // handleClick
  const handleClick = (index:number) => {
    setCurrentIndex(index)
    const dialog = document.getElementById("DialogQuestion");
    if (correctAnswer[index]) {
        return;
    }
    if (!popUpOpen[index]) {
        dialog?.classList.remove('hidden');
        document.body.style.overflowY = 'hidden';
    }
    else {
        dialog?.classList.add('hidden');
        document.body.style.overflowY = 'auto';
    }
    const newPopUpOpen = popUpOpen.map((c, i) => {
      if (i === currentIdex) {
        // Increment the clicked counter
        return !(popUpOpen[i]);
      } else {
        // The rest haven't changed
        return c;
      }
    })
    setPopUpOpen(newPopUpOpen);
  }
  
  // handleConfirm
  const handleConfirm = async(index:number) => {
    const dialog = document.getElementById("DialogQuestion");
    if (answer === club.ClubDetails[index].Answer) {
        Progress(club.ClubDetails[index].Name, studentId, group)
        
        const newCanEditAnswer = canEditAnswer.map((c, i) => {
          if (i === currentIdex) {
            // Increment the clicked counter
            return false;
          } else {
            // The rest haven't changed
            return c;
          }
        })
        setCanEditAnswer(newCanEditAnswer);
    }
    dialog?.classList.add('hidden');
    document.body.style.overflowY = 'auto';
  }

  return club.ClubDetails.map((item, index) => {
    const detail: clubInfo = item;
    return(
      <>
        <div 
          key={index}
          className="cursor-pointer w-[300px] min-h-[300px] bg-secondary rounded-3xl flex flex-col justify-top items-center gap-y-4 p-6" 
          onClick={() => handleClick(index)}
        >
          <div 
            key={index}
            className="w-[130px] h-[130px] rounded-2xl relative "
          >
              <Image 
                alt="club image" 
                src={`/club_logo/${detail.Name}.png`} 
                width={130} 
                height={130} 
                className="absolute top-0 left-0 w-full h-full" 
              />
             {  <Image 
                key={index}
                alt="Approve Icon" 
                src="/images/approveIcon.png" 
                width={130} 
                height={130} 
                className={`${correctAnswer[index] ? "absolute top-0 left-0 w-full h-full" : "hidden"}`} 
              /> }
          </div>
          <p className="font-regular text-sm">
            {detail.Detail}
          </p>
          <br />
          <p className="font-regular text-sm">
              {
                  detail.Answer ? "Click to answer" : "No question"
              }
          </p>
      </div>
      {
        canEditAnswer[index] ?
          <div
            id="DialogQuestion" 
            className="hidden z-[60] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[310px] min-h-[310px] flex flex-col justify-center items-center backdrop-blur"
          >
            <div className="relative w-[310px] min-h-[310px] flex flex-col justify-center items-center ">
              <div className="absolute inset-0 w-full h-full bg-[#F45868] -rotate-6 mx-auto drop-shadow-md"/>
              <div className="relative inset-0 w-full bg-secondary flex flex-col justify-center items-center p-8 gap-6 drop-shadow-md">
                <div className="flex flex-col gap-2">
                  <p className="font-bold text-3xl">
                    {club.ClubDetails[currentIdex].Name}
                  </p>
                  <p className="text-sm">
                    Contact-@Punwachi
                  </p>
                </div>
                  <div className="flex flex-col gap-2">
                    <label 
                      htmlFor="Question1" 
                      className="text-left text-base font-semibold">
                        {club.ClubDetails[currentIdex]["Question "]}
                    </label>
                    <input 
                      type="text" 
                      id="Question1" 
                      className="bg-[#E8EDE9] py-1 px-2 text-base border border-none" 
                      onChange={(e) => setAnswer(e.target.value)} 
                    />
                    <div className="flex flex-row justify-center items-center gap-10">
                        <button 
                          className="font-medium text-sm text-[#F45868] border border-1 border-[#F45868] bg-secondary px-6 py-1" 
                          onClick={() => handleClick(currentIdex)}
                        >
                          ยกเลิก
                        </button>
                        <button 
                          type="button" 
                          className="font-medium text-sm text-primary border border-1 border-primary bg-secondary px-6 py-1" 
                          onClick={() => handleConfirm(currentIdex)}
                        >
                          ตกลง
                        </button>
                    </div>
                </div>
              </div>
            </div>
          </div> 
          : null
      }


  </>
    )
  })
}
