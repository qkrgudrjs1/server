let tweets =[
    {
        id:'1',
        text: '안녕하세요!',
        createdAt: Date.now().toString(),
        name: '김사과',
        username: 'apple',
        url: 'https://img.freepik.com/free-psd/photo-of-apples-isolated-on-transparent-background_125540-5155.jpg'
    },
    {
        id:'2',
        text: '안녕하세요~~!!',
        createdAt: Date.now().toString(),
        name: '반하나',
        username: 'banana',
        url: 'https://img.freepik.com/free-photo/ai-generated-image-of-banana_23-2150683018.jpg'
    }
]

// 모든 트윗을 리턴
export async function getAll(){
    return tweets
}

// 해당 아이디에 대한 트윗을 리턴
export async function getAllByUsername(username){
    return tweets.filter((tweet) => tweet.username ===username)
}

//글번호에 대한 트윗을 리턴
export async function getById(id){
    return tweets.find((tweet) => tweet.id === id)
}

// 트윗을 작성
export async function create(text, name, username){
    const tweet ={
        id : '10',
        text,
        createdAt: Date.now().toString(),
        name,
        username
    }
    tweets = [tweet, ...tweets]
    return tweets
}

// 트윗을 변경
export async function update(id, text){
    const tweet = tweets.find((tweet) => tweet.id === id)
    if(tweet){
        tweet.text = text
    }
    return tweet
}

// 트윗을 삭제
//
export async function remove(id){
    tweets = tweets.filter((tweet) => tweet.id !== id)
}
