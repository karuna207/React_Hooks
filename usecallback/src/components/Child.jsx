import {React,memo} from 'react' 

const Child = (props) => { 
    console.log('child re-rendered');
    return (
    <div>
      COUNT:{props.cnt} 
      <button onClick={()=>{props.ccount()}}>Call to count</button>
    </div>
  )
}

export default memo(Child);
