import {FaPhone} from "react-icons/fa"
import { IoMdLock } from "react-icons/io";
import classNames from 'classnames'
FaPhone
const Input = ({value='placeholder',label='Label',error,disabled,helpertext,size,fullwidth,multiline,row}) => {
    
    const height=size=='sm'?40:56;
    const multi= multiline? 56*row:height;
    var inputClass=classNames({
        'input':true,
        'error':error,
        'disabled':disabled,
        'full':fullwidth,
        'multiline':multiline,
      })
  return (
    <div className='input-box'>
        <label htmlFor="input" className={error?'error-text':'text'}>{label}</label>
        <input type="text" placeholder={value} className={inputClass} disabled={disabled} style={{height:multi}}/>
        <p className={error?'error-text':'text'}>{helpertext}</p>
    </div>
  )
}

export default Input

 export const Inputi=({startIcon,endIcon})=>{
    return(
            <div className="d-box">
<span className={startIcon?'show':'hide'}><FaPhone/></span> <input type="text" placeholder="Placeholder"/> <span className={endIcon?'show':'hide'}><IoMdLock/></span>
            </div>
    )
 }