
let quoteArray = [];

const generateRandomNumber = () =>{
 return Math.floor(Math.random()*4);
}

const collectiveData = {
    quotesAboutPower:['You have power over your mind - not outside events. Realize this, and you will find strength.','Leadership is a privilege to better the lives of others. It is not an opportunity to satisfy personal greed.','The strong is not the one who is physically powerful, but indeed, the one who controls himself when angry.','Never underestimate the power of human stupidity.'],
    quotesAuthor:['Marcus Aurelius','Mwai Kibaki','Muhammad','Robert A.Heinlein'],
    dailyMission:['Smile at an stranger','Help an old lady over the road','Donate money to charity','Call an old friend']
};


const generateTheQuote = () =>{
let indexNum = generateRandomNumber();
  const quote = `Todays quote: "${collectiveData.quotesAboutPower[indexNum]}"`;
  const author = `Author of the quote: ${collectiveData.quotesAuthor[indexNum]}`;
  const dailyMission = `You should today: ${collectiveData.dailyMission[indexNum]}!`;
  quoteArray.push(quote,author,dailyMission);
};



const getTodaysQuote=()=>{
generateTheQuote();
 console.log(quoteArray.join('\n'));
}


getTodaysQuote();

//The end result whole be like thease 
//Your sign right now is a "star".
//You are having: "great luck".
//You should: "go out and eat".