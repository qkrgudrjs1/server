let users = [
    {
        id: '1',
        username:'apple',
        password: '1111',
        name: '김사과',
        email: 'apple@apple.com',
        url: 'https://img.freepik.com/free-photo/ai-generated-image-of-banana_23-2150683018.jpg'
    }
]

export async function createUser(username, password, name, email){
    const user = {
        id: '10',
        username,
        password,
        name,
        email,
        url:'https://img.freepik.com/free-photo/ai-generated-image-of-banana_23-2150683018.jpg'
    }
    users = [user, ...users]
    return users
}

export async function login(username){
    const user = user.find((user) => user.username === username)
    return user
}