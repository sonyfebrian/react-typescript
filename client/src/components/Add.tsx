import React, {useState, ChangeEvent} from "react"
import TutorialService from "../services/TutorialService"
import ITutorialData from "../types/Tutorial"

const Add: React.FC = () => {
 const initialTutorialState = {
    id:null,
    title:"",
    description:"",
    published:false,
 }

 const [tutorial, setTutorial] = useState<ITutorialData>(initialTutorialState);
 const [submitted, setSubmitted] = useState<Boolean>(false);

 const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value} = event.target;
    setTutorial({...tutorial, [name]: value})
 }

 const saveData = () => {
    var data = {
        title: tutorial.title,
        description: tutorial.description
    }

    TutorialService.create(data)
    .then((response: any) => {
        setTutorial({
            id: response.data.id,
            title: response.data.title,
            description: response.data.description,
            published: response.data.published
        })

        setSubmitted(true);
        console.log(response.data);
    })
    .catch((e: Error) => {
        console.log(e)
    })
 }

 const newData = () => {
    setTutorial(initialTutorialState);
    setSubmitted(false);
 }


 return (
<></>
 );
};

export default Add