const TextWithWordLimit = ({ text, limit=20 }) => {
    const words = text.split(' ');
    const limitedWords = words.slice(0, limit);
  
    return (
      <div>
        {limitedWords.join(' ')}
        {words.length > limit && '...'}
      </div>
    );
  }


  export default TextWithWordLimit