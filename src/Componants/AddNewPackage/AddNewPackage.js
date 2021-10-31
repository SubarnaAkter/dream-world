import axios from 'axios';

import { useForm } from 'react-hook-form';

const AddNewPackage = () => {
   

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        axios.post('https://shrouded-peak-64401.herokuapp.com/packages',data)
        .then(res=>{
         if(res.data.insertedId)
         {
             alert("One Package Inserted Successfully")
         }
        })
     }

  
   
    return (
        <div>
            <div>
    <form  className="w-50 mx-auto m-5" onSubmit={handleSubmit(onSubmit)}>


      <input  placeholder="Enter Package Name" className="w-100 p-2 m-1" type="text" {...register("packageName")}  /> <br />

      <textarea   placeholder="Enter Package Details" className="w-100 p-2 m-1" type="text" {...register("details")} /> <br />

      <input  placeholder="Enter Package Fee" className="w-100 p-2 m-1" type="number" {...register("fee")} required /> <br />

      <input placeholder="Enter image Url"  className="w-100 p-2 m-1 " type="img" {...register("img")} /> <br />
      
    
      <input className="w-100 p-2 m-1" type="submit"  />
    </form>
    </div>
        </div>
    );
};

export default AddNewPackage;