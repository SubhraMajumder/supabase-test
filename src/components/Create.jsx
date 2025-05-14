import { useState } from "react";
import supabase from "../../config/supabaseClient";

const Create = () => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!name || !status){
        setFormStatus("Please fill out the fields!");
        return;
    }

    const { data, error } = await supabase
    .from('projects')
    .insert([{ name, status }])

    if(error){
        console.log(error)
        setFormStatus("Please fill out all the fields");
    }
    if(data){
        console.log(data);
        setFormStatus(null);
    }
  }

  return (
    <>

      <div className="page create">
        <form onSubmit={handleSubmit}>
            <div className="form-element">
                <input type="text" name="form--name" value={name} onChange={(e)=> setName(e.target.value)} />
                <label>Name</label>
            </div>
            <div className="form-element">
                <input type="text" name="form--status" value={status} onChange={(e)=> setStatus(e.target.value)} />
                <label>Status</label>
            </div>
            <button>Submit</button>
        </form>
        {formStatus && <p className="error">{formStatus}</p>}
      </div>
      
    </>
  )
}

export default Create;