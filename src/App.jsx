import { useState, useEffect } from "react";
import supabase from '../config/supabaseClient'
import './App.css'
import ProjectCard from "./components/ProjectCard";
import Create from "./components/Create";

function App() {
  const [fetchError, setFetcherror] = useState(null);
  const [projects, setProjects] = useState(null);

  useEffect(()=> {
    const handleProjects = async () => {
      const { data, error } = await supabase
        .from('projects')
        .select()

        if(error) {
          setFetcherror("Could not fetch projects");
          setProjects(null);
          console.log(error);
        }
        if(data){
          setProjects(data);
          setFetcherror(null);
        }
    }
    handleProjects();
  }, []);

  return (
    <>
      <Create />
      {fetchError && (<p>{fetchError}</p>)}
      {projects && (
        <ul className="hello">
          {
            projects.map((val, i)=>(
              <ProjectCard key={i} val={val} />
            ))
          }
        </ul>
      )}
    </>
  )
}

export default App
