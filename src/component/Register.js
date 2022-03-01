import React,{useState,useEffect}from 'react'

export default function Register() {


    useEffect(()=>{
        if(localStorage.getItem('user-info'))
        {
            window.location.href="/home"
        }
    },[])

    const[user,setUser]=useState({
     username:"",
     email:"",
     mobile:"",
     password:""

    })
    const{username,email,mobile,password}=user;

    const getdata=(e)=>{
       const{name,value}=e.target;
       setUser({...user,[name]: value})
    }

    const signUp= async (e)=>{
       e.preventDefault();
       let item={username,email,mobile,password}
    
      let result=await fetch("http://localhost:4000/register",{
           method:"POST",
           headers:{
               "Content-Type":"application/json",
               "Accept":"application/json"
           },
           body:JSON.stringify(item)
           });
           result=await result.json();
           console.log("result",result);
           alert("data is submitted")
           localStorage.setItem("user-info",JSON.stringify(result));
           window.location.href="/home"
           
           setUser({  username:"",email:"",mobile:"",password:""})

    }

    return (
        <div>
            <div className="container pt-5 pb-5">
                <div className="row py-5">
                    <div className="col-md-6 col-12 mx-auto mt-5 mb-5 shadow-lg p-5 rounded bg-light">
                        <h2 className="text-center mb-4">Sign Up</h2>
                            <form action="" onSubmit={(e)=>signUp(e)}>
                            <div className="form-group mb-4 ">
                                 <input type="text" name="username" id=""   
                                  placeholder="Enter your name .... "
                                 autoComplete="off"
                                  value={username}  onChange={getdata}
                                 className="form-control" required />
                             </div>

                             <div className="form-group mb-4">
                                 <input type="emial" name="email" id="" 
                                  placeholder="Enter your email .... "
                                autoComplete="off"
                                  value={email}  onChange={getdata}
                                 className="form-control" required />
                             </div>
                            
                            <div className="form-group mb-4">
                                <input type="mobile" name='mobile' id=''
                                placeholder='Enter Your Mobile Number....'
                                autoComplete='off'
                                value={mobile}  onChange={getdata}
                                className="form-control" required
                                 />
                            </div>

                             <div className="form-group mb-4">
                                 <input type="password" name="password" id="" 
                                  placeholder="Enter your password .... "
                                  autoComplete="off"
                                  value={password} onChange={getdata}
                                 className="form-control" required />
                             </div>

                             <div className="form-group mb-4">
                                 <button className="btn btn-outline-primary rouded w-100" >Sign Up</button>
                             </div>
                            </form>

                            
                        

                    </div>
                </div>
            </div>
        </div>
    )
}
