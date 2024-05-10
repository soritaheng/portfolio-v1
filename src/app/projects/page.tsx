import Project from "./project"

const projects = [
    { 
        name: 'Aeon Mall Plus', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus quam aliquam rhoncus placerat. Mauris placerat egestas lorem vitae scelerisque. Maecenas a quam malesuada, ornare lacus at, congue diam. Fusce id purus vulputate, tincidunt libero a, blandit ipsum. Suspendisse potenti. Integer urna quam, porta quis tortor id, suscipit hendrerit erat.'
    }, 
    { 
        name: 'Legend Cinema', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus quam aliquam rhoncus placerat. Mauris placerat egestas lorem vitae scelerisque. Maecenas a quam malesuada, ornare lacus at, congue diam. Fusce id purus vulputate, tincidunt libero a, blandit ipsum. Suspendisse potenti. Integer urna quam, porta quis tortor id, suscipit hendrerit erat. '
    }
]

export default function Projects() {
    return(
        <div className="w-full">
            {projects.map((project) => (
                <Project key={project.name} name={project.name} description={project.description}></Project>
            ))}
        </div>
    )
}