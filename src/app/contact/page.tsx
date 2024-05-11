import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
    return(
        <div className="max-w-[65ch] space-y-8">
            <p>If you&apos;re interested in discussing an opportunity to work together or think I could be the right fit for your project, feel free to reach out to me through my contacts below:</p>
            <div className='flex gap-6'>
                <a href="mailto:soritahg@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} className='w-8'></FontAwesomeIcon>
                </a>
                <a href="https://github.com/soritaheng" target='_blank'>
                    <FontAwesomeIcon icon={faGithub} className='w-8'></FontAwesomeIcon>
                </a>
                <a href="https://www.linkedin.com/in/sorita-heng-4b15b7178/" target='_blank'>
                    <FontAwesomeIcon icon={faLinkedin} className='w-8'></FontAwesomeIcon>
                </a>
            </div>
        </div>
    )
}