import * as C from './styles'

type QuoteProps = {
    content: string;
    author: string;
}

export const Quote = ({ content, author }: QuoteProps) => {
    return (
        <C.QuoteContainer>
            <C.QuoteText>"{content}"</C.QuoteText>
            <C.QuoteAuthor>- {author}</C.QuoteAuthor>
        </C.QuoteContainer>
    );
}