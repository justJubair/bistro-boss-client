import Container from "../../../Shared/Container/Container";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const AddItem = () => {
  return (
    <Container>
      <SectionTitle heading="add an item" subHeading="What's new?" />
      {/* form container */}
      <div className="mt-10 bg-[#F3F3F3]">
        <form className="p-4 md:px-10 space-y-6">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">What is your name?</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
          {/* category and price */}
          <div className="flex gap-4 ">
            <div className="form-control w-full ">
            <label className="label">
                <span className="label-text">Category?</span>
              </label>
              <select defaultValue="default" className="select select-bordered w-full">
                <option value="default" disabled >
                  Category
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">What is your name?</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
          </div>
        <div>
        <label className="label">
                <span className="label-text">Recipe Details</span>
              </label>
          <textarea className="textarea w-full md:h-28 textarea-bordered" placeholder="Bio"></textarea>
        </div>
        <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
        <button className="btn block btn-primary" type="submit">add item</button>
        </form>
      </div>
    </Container>
  );
};
export default AddItem;
