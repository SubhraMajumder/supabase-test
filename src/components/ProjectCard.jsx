export default function ProjectCard({val}) {
  return (
    <div className="project-card" key={val.id}>
        <div className="project-card-wrap">
            <h3>{val.name}</h3>
            <p>{val.status}</p>
        </div>
    </div>
  )
}
