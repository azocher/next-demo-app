import { useRouter } from 'next/router'

export default function UserIdPage() {
    const router = useRouter()
    let { uid } = router.query

    return (
        <h1>Hello, user {uid}!</h1>
    )
}