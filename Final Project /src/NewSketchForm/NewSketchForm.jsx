import { useForm } from "react-hook-form";
import "./NewSketchForm.css";
export function NewSketchForm(props) {
  const { addSketchFn } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  function handleSubmitJob(data) {
    addSketchFn(data);
    reset();
  }

  return (
    <div className="form-wrapper">
      <h4>Submit a Sketch Request!</h4>
      <form onSubmit={handleSubmit(handleSubmitJob)}>
        <div className="form-group">
          <label htmlFor="sketchName">Name of Sketch</label>
          <input id="sketchName" {...register("name", { required: true })} />
          {errors.sketchName && <p className="error">Please Enter a Name</p>}
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" {...register("category")}>
            <option value="Nature">Nature</option>
            <option value="Abstract">Abstract</option>
            <option value="Animated">Animated</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="sketchImage">Upload any Helpful Images</label>
          <input {...register("image")} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            {...register("description", { required: true })}
            rows="3"
          />
          {errors.description && (
            <p className="error">Please Enter a Description</p>
          )}
        </div>
        <button type="Submit">Submit Idea</button>
      </form>
    </div>
  );
}
