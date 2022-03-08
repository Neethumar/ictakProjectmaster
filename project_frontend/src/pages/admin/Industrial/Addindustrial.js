import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';

function Addindustrial() {

    const navigate = useNavigate();

    const [inpval,setINP] = useState({
        image:"",
    })

const setdata =(e) =>{
    console.log(e.target.value);

    const {name,value} = e.target;
    setINP((preval)=>{
        return{
            ...preval,
            [name]:value
        }
    })
}


const addinpdata = async(e)=>{
    e.preventDefault();
    const {image} = inpval;

    const res = await fetch("http://localhost:8000/Addindustrial",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            image
        })
    });

    const data = await res.json();
    console.log(data);

    if(res.status===422||!data){
        alert("error");
        console.log("error");
    }else{
        alert("data added");
        console.log("data added");
        navigate("/industrial");
    }
}

    return (
    <section className="max-w-4xl p-6 mx-auto bg-gray-300 m-10 rounded-md shadow-md">
        <h2 className="text-lg font-semibold text-gray-700 capitalize">Add User</h2>
        
        <form onSubmit={addinpdata}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
               

                <div>
                    <label className="text-gray-700 " for="image">Image url</label>
                    <input value={inpval.image} name="image" onChange={setdata} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"/>
                </div>
            </div>

            <div className="flex justify-end mt-6">
                <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
            </div>
        </form>
    </section>
    );
}

export default Addindustrial;