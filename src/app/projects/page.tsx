import {ProjectType} from "../types"
import Project from "./project"

const projects: {[key: string]: ProjectType[]} = {
    "Work": [
        { 
            name: 'Aeon Mall Plus', 
            url: 'https://aeonmalllogiplus.com.kh/en',
            role: 'Frontend Web Developer',
            duration: '2022-2023',
            description: 'This was one of the first major projects I worked on at Coolbeans Digital. The project has since evolved since its start in 2022. In the first phase of the project, I was part of developing the design and functionality from start to launch. For the recent major update to relaunch of the website, I worked primarily on web optimization of the code base as well as reshaped some of the project\'s structures and dependencies.'
        }, 
        { 
            name: 'Legend Cinema', 
            url: 'https://www.legend.com.kh/', 
            role: 'Frontend Web Developer',
            duration: '2023',
            description: 'I was part of the frontend developer team at Coolbeans Digital in building the redesigned website for one of the top cinemas in Cambodia. I was involved in the project\'s development from start to finish, working on core functions such as seat selection, booking and payment.'
        }
    ], 
    "Personal Projects": [
        { 
            name: 'In Six Words',
            url: 'https://in-six-words.glitch.me/',  
            role: 'Designer, Developer', 
            duration: '2022', 
            description: 'An interactive web project i built when i was first starting to learn web development. The project was inspired by the famous story of the author Ernest Hemmingway taking on the challenge of writing a six-word short story. A word count for the users’ input is implemented to give feedback on whether they are above or below six words. Users also have the option of sharing their story on Twitter and using the site in dark mode.'
        }, 
        { 
            name: 'Random Recipes', 
            url: 'https://random-recipe.glitch.me/', 
            role: 'Designer, Developer', 
            duration: '2022', 
            description: 'A recipe generator website integrating with MealDB\'s REST API. I designed the look and feel of the website, and implemented responsive mode for the design.'
        }
    ]
}

export default function Projects() {
    return(
        <div className="w-full space-y-8 md:space-y-12">
            {Object.keys(projects).map((key) => (
                <div key={key} className="space-y-4">
                    <h2 className="font-bold text-xl md:text-3xl md:mb-6">{key}</h2>
                    {projects[key].map(({name, url, role, description, duration}) => (
                        <Project key={key} name={name} url={url} role={role} duration={duration} description={description}></Project>
                    ))}
                </div>
            ))}
        </div>
    )
}