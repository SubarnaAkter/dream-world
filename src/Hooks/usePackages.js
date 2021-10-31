import  { useEffect, useState } from 'react';

const usePackages = () => {
    const [packages,setPackages]=useState([]);
     const [loading,setLoading]=useState(true)
    useEffect(()=>{
        setLoading(true)
        fetch('https://shrouded-peak-64401.herokuapp.com/packages')
        .then(res=>res.json())
        .then(data=>{
            setPackages(data)
            setLoading(false)
        })
      
    
    },[])
    return [packages,setPackages,loading]
};

export default usePackages;