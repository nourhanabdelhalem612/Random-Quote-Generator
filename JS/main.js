var quoteList=[
    {
        quote: `“Be yourself; everyone else is already taken.”` ,
        qouteAuther: `― Oscar Wilde` ,
        quoteImg: '<img style="border-radius:50% ;width:150px;height:150px;" src="../Images/01.jpg" alt="">'
    },
    {
        quote: `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”` ,
        qouteAuther: `― Marilyn Monroe` ,
        quoteImg: '<img style="border-radius:50% ;width:150px;height:150px;" src="../Images/02.jpg" alt="">'
    },
    {
        quote: `“So many books, so little time.”` ,
        qouteAuther: `― Frank Zappa` ,
        quoteImg: '<img style="border-radius:50% ;width:150px;height:150px;" src="../Images/03.jpg" alt="">'
    },
    {
        quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”` ,
        qouteAuther: `― Albert Einstein` ,
        quoteImg: '<img style="border-radius:50% ;width:150px;height:150px;" src="../Images/04.jpg" alt="">'
    },
    {
        quote: `“A room without books is like a body without a soul.”` ,
        qouteAuther: `― Marcus Tullius Cicero` ,
        quoteImg: '<img style="border-radius:50% ;width:150px;height:150px;" src="../Images/05.jpg" alt="">'
    },
    {
        quote: `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”` ,
        qouteAuther: `― Bernard M. Baruch` ,
        quoteImg: '<img style="border-radius:50% ;width:150px;height:150px;" src="../Images/06.jpg" alt="">'
    },
    {
        quote: `“You've gotta dance like there's nobody watching,
                Love like you'll never be hurt,
                Sing like there's nobody listening,
                And live like it's heaven on earth.”` ,
        qouteAuther: `― William W. Purkey` ,
        quoteImg: '<img style="border-radius:50% ;width:150px;height:150px;" src="../Images/07.jpg" alt="">'
    },
    {
        quote: `“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”` ,
        qouteAuther: `― J.K. Rowling, Harry Potter and the Goblet of Fire` ,
        quoteImg: '<img style="border-radius:50% ;width:150px;height:150px;" src="../Images/08.jpg" alt="">'
    },
    {
        quote: `“If you tell the truth, you don't have to remember anything.”` ,
        qouteAuther: `― Mark Twain` ,
        quoteImg: '<img style="border-radius:50% ;width:150px;height:150px;" src="../Images/09.jpg" alt="">'
    },
    {
        quote: `“You only live once, but if you do it right, once is enough.”` ,
        qouteAuther: `― Mae West` ,
        quoteImg: '<img style="border-radius:50% ;width:150px;height:150px;" src="../Images/10.jpg" alt="">'
    },
    {
        quote: `“Be the change that you wish to see in the world.”` ,
        qouteAuther: `― Mahatma Gandhi` ,
        quoteImg: '<img style="border-radius:50% ;width:150px;height:150px;" src="../Images/11.jpg" alt="">'
    },
    {
        quote: `“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”` ,
        qouteAuther: `― Maya Angelou` ,
        quoteImg: '<img style="border-radius:50% ;width:150px;height:150px;" src="../Images/12.jpg" alt="">'
    },
    {
        quote: `“Don’t walk in front of me… I may not follow
                Don’t walk behind me… I may not lead
                Walk beside me… just be my friend”` ,
        qouteAuther: `― Albert Camus` ,
        quoteImg: '<img style="border-radius:50% ;width:150px;height:150px;" src="../Images/13.jpg" alt="">'
    },
    {
        quote: `“Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.”` ,
        qouteAuther: `― Marilyn Monroe` ,
        quoteImg: '<img style="border-radius:50% ;width:150px;height:150px;" src="../Images/14.jpg" alt="">'
    },
    {
        quote: `“It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.”` ,
        qouteAuther: `― Maurice Switzer, Mrs. Goose, Her Book` ,
        quoteImg: '<img style="border-radius:50% ;width:150px;height:150px;" src="../Images/15.jpg" alt="">'
    },
    {
        quote: `“It is never too late to be what you might have been.”` ,
        qouteAuther: `― George Eliot` ,
        quoteImg: '<img style="border-radius:50% ;width:150px;height:150px;" src="../Images/16.jpg" alt="">'
    },
    {
        quote: `“Without music, life would be a mistake.”` ,
        qouteAuther: `― Friedrich Nietzsche, Twilight of the Idols` ,
        quoteImg: '<img style="border-radius:50% ;width:150px;height:150px;" src="../Images/17.jpg" alt="">'
    },
    {
        quote: `“Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.”` ,
        qouteAuther: `― H. Jackson Brown Jr., P.S. I Love You` ,
        quoteImg: '<img style="border-radius:50% ;width:150px;height:150px;" src="../Images/18.jpg" alt="">'
    },
    {
        quote: `“There is never a time or place for true love. It happens accidentally, in a heartbeat, in a single flashing, throbbing moment.”` ,
        qouteAuther: `― Sarah Dessen, The Truth About Forever` ,
        quoteImg: '<img style="border-radius:50% ;width:150px;height:150px;" src="../Images/19.jpg" alt="">'
    },
    {
        quote: `“You love me. Real or not real?"
                I tell him, "Real.”` ,
        qouteAuther: `― Suzanne Collins, Mockingjay` ,
        quoteImg: '<img style="border-radius:50% ;width:150px;height:150px;" src="../Images/20.jpg" alt="">'
    },
]
var quoteImg= document.getElementById('quoteImg');
var quote= document.getElementById('quote');
var quoteAuther= document.getElementById('quoteAuther');
var prevNum= -1;

function getQoute(){
    do{
        var randomNum= Math.floor(Math.random()*quoteList.length);
    }while(randomNum==prevNum);
    prevNum= randomNum;

    quoteImg.innerHTML= quoteList[randomNum].quoteImg;
    quote.innerHTML= quoteList[randomNum].quote;
    quoteAuther.innerHTML= quoteList[randomNum].qouteAuther;
}