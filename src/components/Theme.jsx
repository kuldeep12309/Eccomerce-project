import{useSelector,useDispatch} from "react-redux"
import  {toggleTheme}  from "../app/features/themeSlice"
import { useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
const Theme =()=>{

    const dispatch = useDispatch()
    const theme = useSelector((state)=>state.theme.mode)


    useEffect(()=>{
        document.body.className=theme=== "light" ?"light":"dark"
    },[theme])
    

    return(
    
        <button onClick={()=>dispatch(toggleTheme())} >
             <FontAwesomeIcon
        icon={theme === "light" ? faSun : faMoon}
        className="text-xl text-yellow-500 dark:text-white"
      />
        </button>
    )
}
export default Theme