import React, { useState, useEffect } from 'react';
import {
  Button,
  TextField,
  Container,
  Typography,
  Box,
  List,
  ListItem,
} from '@material-ui/core';
import { useRouter } from 'next/navigation';

// ランダムな3桁の数字を生成
const generateRandomNumber = () => {
  let number = '';
  while (number.length < 3) {
    const digit = Math.floor(Math.random() * 10).toString();
    if (!number.includes(digit)) {
      number += digit;
    }
  }
  return number;
};

// ヒットとブロウを計算
const calculateHitAndBlow = (guess: string | any[], answer: string | any[]) => {
  let hits = 0;
  let blows = 0;

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === answer[i]) {
      hits++;
    } else if (answer.includes(guess[i])) {
      blows++;
    }
  }

  return { hits, blows };
};

interface GuessRecord {
  guess: string;
  hits: number;
  blows: number;
}

const Home = () => {
  const router = useRouter();
  const [answer, setAnswer] = useState('');
  const [guess, setGuess] = useState('');
  const [pastGuesses, setPastGuesses] = useState<GuessRecord[]>([]);
  const [result, setResult] = useState({ hits: 0, blows: 0 });

  // コンポーネントのマウント時にランダムな数字を生成
  useEffect(() => {
    setAnswer(generateRandomNumber());
  }, []);

  useEffect(() => {
    if (result.hits === 3) {
      alert(`正解です!!3桁の数は${answer}でした`);
    }
  }, [result.hits, answer]);

  // 推測を処理
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (guess.length === 3) {
      const { hits, blows } = calculateHitAndBlow(guess, answer);
      setPastGuesses([...pastGuesses, { guess, hits, blows }]);
      setResult({ hits, blows });
    } else {
      alert('3桁の数字を入力してください');
    }
  };

  // リセット処理
  const handleReset = () => {
    if (window.confirm('リセットしますか？')) {
      setAnswer(generateRandomNumber());
      setGuess('');
      setResult({ hits: 0, blows: 0 });
      setPastGuesses([]);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Hit & Blowゲーム
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => router.back()}
        >
          戻る
        </Button>
        <form onSubmit={handleSubmit}>
          <TextField
            type="number"
            value={guess}
            onChange={e => {
              if (e.target.value.length <= 3) {
                setGuess(e.target.value);
              }
            }}
            variant="outlined"
            color="primary"
            size="medium"
            fullWidth
          />
          <Button type="submit" variant="contained" color="primary">
            推測
          </Button>
        </form>
        <Button onClick={handleReset} variant="contained" color="secondary">
          リセット
        </Button>
        <Typography>
          ヒット: {result.hits}, ブロウ: {result.blows}
        </Typography>
        <Typography>最後の推測:</Typography>
        <List>
          {pastGuesses.map((guessRecord, index) => (
            <ListItem key={index}>
              {guessRecord.guess} - ヒット: {guessRecord.hits}, ブロウ:{' '}
              {guessRecord.blows}
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default Home;
