import {ProjectType} from "../types"
import Project from "./project"

const projects: {[key: string]: ProjectType[]} = {
    "Work": [
        { 
            name: 'Aeon Mall Plus', 
            url: 'https://aeonmalllogiplus.com.kh/en',
            role: 'Frontend Web Developer',
            duration: '2022-2023',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus quam aliquam rhoncus placerat. Mauris placerat egestas lorem vitae scelerisque. Maecenas a quam malesuada, ornare lacus at, congue diam. Fusce id purus vulputate, tincidunt libero a, blandit ipsum. Suspendisse potenti. Integer urna quam, porta quis tortor id, suscipit hendrerit erat.'
        }, 
        { 
            name: 'Legend Cinema', 
            url: 'https://www.legend.com.kh/', 
            role: 'Frontend Web Developer',
            duration: '2023',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus quam aliquam rhoncus placerat. Mauris placerat egestas lorem vitae scelerisque. Maecenas a quam malesuada, ornare lacus at, congue diam. Fusce id purus vulputate, tincidunt libero a, blandit ipsum. Suspendisse potenti. Integer urna quam, porta quis tortor id, suscipit hendrerit erat. '
        }
    ], 
    "Personal Projects": [
        { 
            name: 'In Six Words',
            url: 'https://in-six-words.glitch.me/',  
            role: 'Designer, Developer', 
            duration: '2022', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus quam aliquam rhoncus placerat. Mauris placerat egestas lorem vitae scelerisque. Maecenas a quam malesuada, ornare lacus at, congue diam. Fusce id purus vulputate, tincidunt libero a, blandit ipsum. Suspendisse potenti. Integer urna quam, porta quis tortor id, suscipit hendrerit erat.'
        }, 
        { 
            name: 'Random Recipes', 
            url: 'https://random-recipe.glitch.me/', 
            role: 'Designer, Developer', 
            duration: '2022', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus quam aliquam rhoncus placerat. Mauris placerat egestas lorem vitae scelerisque. Maecenas a quam malesuada, ornare lacus at, congue diam. Fusce id purus vulputate, tincidunt libero a, blandit ipsum. Suspendisse potenti. Integer urna quam, porta quis tortor id, suscipit hendrerit erat. '
        }
    ]
}

export default function Projects() {
    return(
        <div className="w-full space-y-12">
            {Object.keys(projects).map((key) => (
                <div className="space-y-4">
                    <h2 className="font-bold text-3xl mb-6">{key}</h2>
                    {projects[key].map(({name, url, role, description, duration}) => (
                        <Project key={key} name={name} url={url} role={role} duration={duration} description={description}></Project>
                    ))}
                </div>
            ))}
        </div>
    )
}