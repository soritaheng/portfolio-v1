const skills = [
  {
    category: 'Languages', 
    list: 'HTML, CSS, Javascript, Typescript, Python, C#, SQL'
  }, 
  {
    category: 'Frameworks', 
    list: 'Vue, Nuxt JS, React, Next JS, Tailwind CSS, SASS'
  }, 
  {
    category: 'Technologies', 
    list: 'MySQL, Git'
  }
]

export default function Home() {
  return (
      <div className="max-w-[65ch]">
        <p className="mb-8 md:mb-12 md:text-lg">Hi there, I&apos;m Sorita. Thanks for stopping by my small corner of the internet! Here you&apos;ll find projects I took part in building during my time as a Frontend Web Developer at Coolbeans Digital, as well as mini personal projects I made when I first started learning web development.</p>
        <div className="space-y-6">
          <div>
            <p className="italic font-semibold mb-1">My Skills At A Glance:</p>
            <ul className="list-disc ml-4">
              {skills.map((skill) => (
                <li key={skill.category}><span className="font-medium">{skill.category}</span>: {skill.list}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="italic font-semibold mb-1">What I&apos;m up to now:</p>
            <p>Pursuing my master&apos;s degree in Information Technology at Queensland University of Technology (QUT) in Brisbane.</p>
          </div>
        </div>
      </div>
  );
}
