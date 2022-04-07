import QuoteList from "../quotes/QuoteList";

const  DUMMY_QUOTES = [
    {id: 'q1', author: 'Erin', text: "Learning React is Fun!"},
    {id: 'q2', author: 'Erin', text: "Learning React is great!"},
    {id: 'q3', author: 'Erin', text: "Learning Redux is Fun!"},
    {id: 'q4', author: 'Erin', text: "Learning Next.js is Fun!"},
]

const AllQuotes = () => {
    return <QuoteList quotes={DUMMY_QUOTES}></QuoteList>
};

export default AllQuotes;
