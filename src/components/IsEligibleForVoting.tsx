import { useState } from "react";



export default function IsEligibleForVoting(){
    const [age, setAge] = useState(18);

    if(age.length >= 18){
        return <>Your are eligbible for voting</>
    } else {
        return <>You are not eligbible for voting</>
    }
}