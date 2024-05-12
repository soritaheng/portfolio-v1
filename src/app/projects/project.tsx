import type { ProjectType } from "../types"

export default function Project({ name, url, role, duration, description }: ProjectType) {
    return(
        <div>
            <h1 className="font-semibold md:text-xl leading-relaxed">{name}</h1>
            <a href={url} target="_blank" className="italic underline text-sm leading-relaxed">View live site</a>
            <div className="flex gap-8 text-sm leading-relaxed mb-2">
                <p><strong>Role: </strong>{role}</p>
                <p><strong>Duration: </strong>{duration}</p>
            </div>
            <p className="max-w-[65ch]">{description}</p>
        </div>
    )
}