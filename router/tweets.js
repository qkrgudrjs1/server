import express from "express"
import * as tweetController from '../controler/tweet.js'

const router = express.Router()



// 해당 아이디에 대한 트윗 가져오기
// Get 방식
// http://localhost:8080/tweets?username=:username
// .query()
// .params()
// .body()
router.get('/', tweetController.getTweet)

// 글번호에 대한 트윗 가져오기
// Get
// http://localhost:8080/tweets/:id
// .find()
router.get('/:id',(req,res,next)=>{
    const id = req.params.id;
    const tweet = tweet.find((tweet)=> tweet.id === id);
    if(tweet){
        res.status(200).json(tweet);
    }else{
        res.status(404).json({message:`${id}의 트윗이 없습니다.`});
    }
})
// 트윗하기(글쓰기)
// Post
// http://localhost:8080/tweets
// name, username, text을 등록받아 글을 입력할 수 있게 만들어주자.
// json형태로 입력 후 추가된 데이터까지 모두 json으로 출력
router.post('/',(req,res,next)=>{
    const {text,name,username} = req.body;
    const tweet = {
        id: '10',
        text: text,
        createdAt: Date.now().toString(),
        name: name,
        username:username,
        url: ''
    };
    tweets = [tweet, ... tweets];
    res.status(201).json(tweets);
});
// 트윗수정하기(글수정)
// Put
// http://localhost:8080/tweets/:id
// id, username, text
// json 형태로 입력 후 변경된 데이터까지 모두 json으로 출력
router.put('/:id',(req,res,next)=>{
    const id = req.params.id;
    const text = req.body.text;
    const tweet = tweets.find((tweet)=>tweet.id === id);
    if(tweet){
        tweet.text = test;
        res.status(201).json(tweet);
    }else{
        res.status(404).json({message:`${id}의 트윗이 없습니다.`});
    }
});

router.put('/:id', )
// 트윗삭제하기(글삭제)
// Delete
// http://localhost:8080/tweets/:id
// id
router.delete('/:id',(req,res,next)=>{
    const id = req.params.id;
    tweet_temp = tweets.filter((tweet)=> tweet.id !==id);
    res.status(204).json(tweets);
});
export default router;

