import { useState } from "react"
function Header (){
     const [isopen, setIsopen]=useState(false)
     const handleisopen=()=>{
    setIsopen(true)
     }
     const handleClose=()=>{
          setIsopen(false)
     }
return <div className="bg-primarycolor p-5 flex justify-between text-colorkasadaxaad ">
     <h1  className=" sm:text-4xl  text-2xl font-bold ">Ecommerce</h1>
   
     <i onClick={handleisopen} style={{display:isopen === true ? "none" : "" }}  class="fa-solid fa-bars  absolute right-2 text-3xl text-white sm:hidden "></i>
     <i style={{display:isopen === true ? "block" :"none" }}onClick={handleClose} class="fa-solid fa-xmark absolute right-2 text-3xl text-white hidden"></i>
     
     <ul style={{display:isopen===true ?"block" : ""}} className=" hidden sm:flex flex-col gap-5 mt-10 sm:flex-row sm:mt-0 sm:gap-20 text-4xl   ">
     
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>

     </ul>
     <ol>
   <li className="text-4xl"><i class="fa-solid fa-cart-shopping mr-10"></i></li>
     </ol>
</div>
}
export default Header