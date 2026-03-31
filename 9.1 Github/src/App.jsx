import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  const{ register, handleSubmit } = useForm();
  function handleMyForm(data){
    console.log("this is my data", data)
  }


return(
  <div>
    <div>
  
      <form onSubmit={handleSubmit(handleMyForm)}>
        <fieldset>
          <legend>Alpaca Fan Club Registration</legend>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" {...register("firstName")} />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" {...register("lastName")} />
          </div>
          <div>
            <label htmlFor="streetAddress">Street Address</label>
            <input type="text" id="streetAddress" {...register("streetAddress")} />
          </div>
           <div>
            <label htmlFor="state">State</label>
            <select id="state" {...register("state")}>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
          </div>
           <div>
            <label htmlFor="country">Country</label>
            <input type="text" id="country" {...register("country")} />
          </div>
           <div>
            <p>Favorite Alpaca Colors</p>
            <label>Black <input type ="checkbox" value="black" {...register("favColor")} /> </label>
            <label>Brown <input type ="checkbox" value="brown" {...register("favColor")} /> </label>
            <label>White <input type ="checkbox" value="white" {...register("favColor")}/> </label>
            <label>Grey <input type ="checkbox" value="grey" {...register("favColor")}/> </label>
            <label>Spotted <input type ="checkbox" value="spotted" {...register("favColor")} /> </label>
          </div>
          
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
)
}

export default App
