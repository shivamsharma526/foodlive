import { BsTagsFill } from "react-icons/bs";
import { useForm  } from 'react-hook-form';
import { useContext, useState } from "react";
import { CardsContext } from "../ContextApi";
import { nanoid } from "nanoid";
const AddRecipe = () => {
  const [recipe , setrecipe] = useContext(CardsContext)
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
const selectedTag = watch("type");

const onSubmit = (e) => {
  e.id = nanoid()
 let k = e.tags.split(" ")
   e.tags = k
  setrecipe([...recipe , e])
    reset()
  };
 const [imge, setimge] = useState("https://img.freepik.com/free-photo/blue-user-icon-symbol-website-admin-social-login-element-concept-white-background-3d-rendering_56104-1217.jpg?semt=ais_items_boosted&w=740")
   const data = (e)=>{
   setimge(e.target.value) 
    }


  const tags = (e) => {
    const value = e.target.closest("p")?.getAttribute("data-tag");
    if (value) {
      setValue("type", value); 
    }
  };

 

  return (
    <div className='px-5'>
      <h1 className='text-2xl capitalize font-bold'>create new recipe</h1>
    <form action="" className="flex w-full gap-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-[35%] ">
        <p className='capitalize tracking-tighter text-gray-600  my-5'>recipe general information</p>
<img src={imge} alt="" className='w-full aspect-3/1 rounded-2xl object-cover mb-4'  />
      <label htmlFor=""  className='capitalize tracking-tighter text-gray-900 font-bold'>recipe image url</label>
<input type="text" {...register("image" , {required:true})} onChange={data} placeholder="image url" className={`w-full outline-none ps-1 rounded-md h-10 mt-2 mb-3 capitalize border-2 ${errors.image ? "border-red-500" : "border-black/30"}`}/>
      <label htmlFor=""  className='capitalize tracking-tighter text-gray-900 font-bold'>recipe name</label>
      <input type="text" {...register("name" , {required:true})}  id="" placeholder='recipe name' className={`w-full border-2 border-black/30 outline-none ps-1 rounded-md h-10 mt-2 mb-3 capitalize ${errors.name ? "border-red-500" : "border-black/30"}`}/>
      <label htmlFor=""  className='capitalize tracking-tighter text-gray-900 font-bold'>recipe from</label>
      <input type="text" {...register('from', {required:true})}  id="" placeholder='recipe from' className={`w-full border-2 border-black/30 outline-none ps-1 rounded-md h-10 mt-2 mb-3 capitalize ${errors.from? "border-red-500" : "border-black/30"}`}/>
            <label htmlFor=""  className='capitalize tracking-tighter text-gray-900 font-bold'>tags recipe</label>
      <input type="text" {...register('tags', {required:true})}  id="" placeholder='tags recipe' className={`w-full border-2 border-black/30 outline-none ps-1 rounded-md h-10 mt-2 mb-3 capitalize ${errors.tags ? "border-red-500" : "border-black/30"}`}/>
     
        </div>
<div className="flex-1 bg-white">
<p className='capitalize tracking-tighter text-gray-600  my-5'>recipe detail</p>
            <label htmlFor=""  className='capitalize tracking-tighter text-gray-900 font-bold'>ingredients</label>
    <textarea {...register('ingredients', {required:true})}  id="" className={`border-1 border-black w-full h-50 outline-none rounded-md ps-2 mt-2 ${errors.ingredients ? "border-red-500" : "border-black/30"}`} placeholder='ingredients'></textarea>
      <input type="hidden" {...register("type", { required: true })} />
     <label htmlFor=""  className='capitalize tracking-tighter text-gray-900 font-bold'>rating</label>
      <input type="number" {...register('rating', {required:true , min: 0, max: 5,})}  id="" placeholder='rating' className={`w-full border-2 border-black/30 outline-none ps-1 rounded-md h-10 mt-2 mb-3 capitalize ${
    errors.rating ? "border-red-500" : "border-black/30"
  } `}/>
          <label className='capitalize tracking-tighter text-gray-900 font-bold'>type</label>
     
      <div className="flex mt-2" onClick={tags}>
        {["recommended", "more", "tranding"].map((type) => (
          <p
            key={type}
            data-tag={type}
            className={`ms-2 px-3 py-1 rounded-2xl flex items-center gap-1 capitalize cursor-pointer border 
              ${selectedTag === type ? "bg-blue-400 text-white border-blue-600" : "bg-gray-300 border-transparent"}`}
          >
            <BsTagsFill /> {type}
          </p>
        ))}
      </div>
            <input type="submit" value="save"  className="text-white bg-gray-900 w-1/2 mt-5 h-10 rounded-2xl text-xl capitalize"/>
</div>
 </form>
      </div>
  )
}

export default AddRecipe