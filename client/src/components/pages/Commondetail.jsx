import react from "react"
import Card from "./Card.jsx";
import { useEffect ,useState} from "react";
import { Audio } from  'react-loader-spinner'
import axios from "axios"
export default function Commondetail(props)

{
  const [state, setState] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    const response = await axios.get(`/api/product/all/${props.propName}`);
    setState(response.data);
  };
  fetchData();
}, []);


    return(
        <div className="grid lg:grid-cols-3 gap-4 py-16 justify-items-center    ">
 {state.map((item)=>{
  return <Card  item={item}/>
})}
  </div>
    )

}

/*      */