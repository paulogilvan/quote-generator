import { useState, useEffect } from 'react';
import axios from 'axios';
import { Quote } from './components/Quote';
import * as C from './globalStyles';

type QuoteData = {
  content: string;
  author: string;
}

const App = () => {
  const [quote, setQuote] = useState<QuoteData | null>(null);

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/random');
      setQuote(response.data);
    } catch (error) {
      console.error('Erro ao buscar a citação:', error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <C.Container>
     <C.Title>Gerador de citações</C.Title>
     {quote && <Quote content={quote.content} author={quote.author} />}
     <C.Button onClick={fetchQuote}>Nova Citação</C.Button>
    </C.Container>
  )
}

export default App;
