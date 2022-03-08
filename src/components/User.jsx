const DisplayUser = () => {
    const [firstName, setFirstName] = useState(initialState: 'Loading...')
    const [lastName, setLastName] = useState(initialState: 'Loading...')

    const getUser = async () => {
        const resonse = await fetch(input: 'https://reqres.in/api/users/1')
        const data = await response.json()
        setFirstName(data.data.firstname)
        setLastName(data.data.lastname)
    }
getUser()

    return <div>
        <h1>{firstName</h1>
        <h2>{lastName}</h2>
    </div>

}