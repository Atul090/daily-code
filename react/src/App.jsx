import { useState } from "react"


function App() {
  return (
    <div style={{backgroundColor: "#dfe6e9", height: "100vh"}}>
      <ToggleMessage/>
      <ToggleMessage/>
      {/* hi there 2
      <div style={{display:"flex", justifyContent: "center"}}>
        <div>
        <div>
          <PostComponent/>
        </div>
        <br />
        <div>
        <PostComponent/>
        </div>
        <br />
       
        
        <PostComponent/>
        </div>
      </div> */}
    </div>
  )
}

const style={ width:200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 10,  padding: 20}

function PostComponent({name, followerCounf, time, image, description}){
  return <div style={style}>
      <div style={{display:"flex"}}>
        <img src="https://media.licdn.com/dms/image/v2/D4D03AQEehCzXoGdY0A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1692558058462?e=1734566400&v=beta&t=xOdzbkn0l7Eh7g6h-hEQHK2Cr0QcyoAVpFeLmFPqat8" style={({width:50,
          height:50,
          borderRadius:20
        })}/>
        <div style={{fontSize: 10, marginLeft: 20}}>
          <b> 
            Codethenics
          </b>
          <div>10,109 followers</div> 
          <div>12 minutes</div>
        </div>
        </div>
        <div style={{fontSize: 12}}>
          want to knwo how to win right?
          LEts deep dive into the learningns  
        </div>
    </div>
  
}

const ToggleMessage = () => {
  const [isVisible, setIsvisible]=useState(false);
  return <div>
    <button onClick={()=>setIsvisible(!isVisible)}>
      Toggle message
    </button>
    {isVisible && <p>rerender</p>}
  </div>
}


export default App
