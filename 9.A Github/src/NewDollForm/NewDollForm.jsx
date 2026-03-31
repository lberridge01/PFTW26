import { useForm } from 'react-hook-form'
import "./NewDollForm.css";
export function NewDollForm(props) {
    const {addDollFn} = props;
    const { register, handleSubmit, formState:{errors}, reset } = useForm();
    function handleSubmitJob(data) {
        addDollFn(data);
        reset();
    }

    return (
        <div className = "form-wrapper">
            <h4>Add the Doll you had!</h4>
        <form onSubmit={handleSubmit(handleSubmitJob)}>
          <div className="form-group">
            <label htmlFor="dollName">AG Doll's Name</label>
            <input id="dollName" {...register("name", { required: true})} />
            {errors.dollName && (<p className = "error">Please Enter a Name</p>)}
          </div>
          <div className="form-group">
            <label htmlFor="year">Year</label>
            <select id="year" {...register("year")}>
            <option value="1700s">1700s</option>
            <option value="1800s">1800s</option>
            <option value="1900s">1900s</option>
            <option value="2000s">2000s</option>
            <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input id="location" {...register("location", )} />
          </div>
          <div className="form-group">
            <label htmlFor="history">Historical Significance</label>
            <input id="hisotry" {...register("history")} />
          </div>
          <div className="form-group">
            <label htmlFor="dollImage">Image</label>
            <input {...register("image", {required: true})} />
            {errors.image && (<p className = "error">Please Upload an Image</p>)}
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea id="description" {...register("description")} 
            rows="3"
            />
          </div>
          <button type="Submit">Add Doll</button>
          
        </form>
      </div>
    )
}