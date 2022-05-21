import '../Styles/Vedionote.css'
import {useState} from 'react';
import Notesdata from './Notesdata';
export default function Vedionote(props){
/*State declaration */
const [addBtn,setAddBtn]=useState(false);
const [data,setData]=useState("Enter your note here...");
const [noteArray,setNoteArr]=useState([]);
const [timeArray,setTimeArr]=useState([]);
const updateData=(e)=>{
setData(e.target.value);
}
const chgState=()=>{
    document.getElementById('outerContainer').style.display="block";
    setAddBtn(true);
    props.setTime();
}
const removeData=(id)=>{
    setNoteArr(()=>{
        return(
            noteArray.filter((val,index)=>{
                return index!==id;
                })
        )
    })
}
const addNote=()=>{
    if(data==="Enter your note here..."){
        alert("Enter the valid data....");
    }else{
    setNoteArr((prev)=>{
        return[
        ...prev,
        data
        ]
    }) 
    setData(" ");
    props.setTime();
    setTimeArr((prev)=>{
        return[
        ...prev,
        props.cuTime
        ]
    })
}
    
}
if(addBtn===true)
{
return(
    <>
<div style={{padding:"23px"}}>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" cols="30" onChange={updateData} value={data} ></textarea>
  <svg xmlns="http://www.w3.org/2000/svg" id="addLogo" width="30" height="30" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16" style={{marginTop:"20px"}} onClick={addNote}>
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
{
noteArray.map((val,index)=>{
return (
    <>
<Notesdata noteData={val} deleteData={removeData} id={index} data={timeArray}/>
</>
)
})
}

</div>
    </>
)
}else{
return(
    <>
<div className="list-group" id="outerContainer">
<svg xmlns="http://www.w3.org/2000/svg" id="addLogo1" width="30" height="30" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16" onClick={chgState}>
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
</div>
    </>
)
}
}