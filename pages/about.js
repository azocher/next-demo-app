import Image from 'next/image'

export default function About() {
    return (
        <div>
            <h1>Hi - my name is Anna! 🐳</h1>
            <Image src="/jpod.jpg" alt="my profile pic" width={125} height={125} />
        </div>
    )
}