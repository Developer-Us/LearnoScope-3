import '../Styles/Vedionote.css'
export default function Notesdata(props) {
   return (
      <>
         <div className="card my-3" style={{ marginLeft: "20px", marginTop: "20px", width: "18rem", height: "10rem" }}>
            <div className="card-body" style={(props.id + 1) % 2 === 0 ? { background: "#ff7eb9" } : { background: "#7afcff" }}>
               <p className="card-text" style={{ overflow: "auto", zIndex: "-1", width: "17vw", height: "19vh" }}><b >Note No :{props.id+1}</b><br />{props.noteData}</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" id="addLogo" width="20" height="20" style={{ zIndex: "2", position: "absolute" }} fill="currentColor" className="bi bi-dash-circle" viewBox="0 0 16 16" onClick={() => {
               props.deleteData(props.id)
            }}>
               <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
               <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
            </svg>
         </div>
      </>
   )
}