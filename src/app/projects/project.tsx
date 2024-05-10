type Project = {
    name: string, 
    description: string
}

export default function Project({ name, description }: Project) {
    return(
        <div>
            <div className="bg-white w-full h-[200px]"></div>
            <h1 className="font-bold text-xl">{name}</h1>
            <p className="max-w-[65ch]">{description}</p>
        </div>
    )
}