import { useForm } from "react-hook-form";
import Container from "../../../Shared/Container/Container";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";


const UpdateItem = () => {
  const item = useLoaderData()

    const axiosSecure = useAxiosSecure()
    const {
        register,
        handleSubmit,
        // eslint-disable-next-line no-unused-vars
        formState: { errors },
      } = useForm()
    
      const onSubmit = async(data) => {
       const {name, price, category, recipe} = data
        const imgageFile = {image: data?.image[0]}
        const res = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`, imgageFile, {
            headers: {
                "content-type": "multipart/form-data"
            }
        })
        if(res.data.success){
            const image = res.data.data.display_url
            const newMenuItem = {name, price, category, recipe, image}
            try{
               const res = await axiosSecure.post("/menus", newMenuItem)
               console.log(res)
               if(res.data.insertedId){
                toast.success(`${name} has been added`)
               }
               
            }
            catch(err){
                toast.error(err.message)
            }
            
        }
        
      }

  return (
    <Container>
      <SectionTitle heading="update an item" subHeading="What's new?" />
      {/* form container */}
      <div className="my-10  bg-[#F3F3F3]">
        <form onSubmit={handleSubmit(onSubmit)} className="p-4 md:px-10 space-y-6">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Recipe name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              defaultValue={item?.name}
              className="input input-bordered w-full "
              {...register("name")}
            />
          </div>
          {/* category and price */}
          <div className="flex gap-4 ">
            <div className="form-control w-full ">
            <label className="label">
                <span className="label-text">Category?</span>
              </label>
              <select defaultValue={item?.category} className="select select-bordered w-full"  {...register("category")}>
                <option value="default" disabled >
                  Category
                </option>
                <option value="pizza">Pizza</option>
                <option value="salad">Salad</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              
              </select>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                defaultValue={item?.price}
                placeholder="Type here"
                className="input input-bordered w-full "
                {...register("price")}
              />
            </div>
          </div>
        <div>
        <label className="label">
                <span className="label-text">Recipe Details</span>
              </label>
          <textarea className="textarea w-full md:h-28 textarea-bordered" placeholder="recipe..." defaultValue={item?.recipe} {...register("recipe")}></textarea>
        </div>
        <input type="file" className="file-input file-input-bordered w-full max-w-xs"  {...register("image")}/>
        <button className="btn block btn-primary" type="submit">add item</button>
        </form>
      </div>
    </Container>
  );
};
export default UpdateItem;
