import { useSelector } from "react-redux"

export const Header = () => {
    const user = useSelector((state)=> state.user)
    return (
        <header>
            <h1>Redux Toolkit Example</h1>
            <ul>
                <li>name: {user.name}</li>
                <li>email: {user.email}</li>
                <li>username: {user.username}</li>
            </ul>
        </header>
    )
}