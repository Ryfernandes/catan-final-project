import Tile from './components/Tile';
import Settlement from './components/Settlement/';
import Road from './components/Road';
import Marker from './components/Marker';

import {useState} from 'react';

import './App.css';

interface historyPoint {
  location: number;
  prospect: number;
  all_locations: number[];
  yields: number[];
}

interface resourcePair {
  resource: number;
  number: number;
}

interface summary {
  used_k: number;
  chosen: number[];
  chosen_roads: number[];
  scores: number[];
  history: historyPoint[][];
  board: resourcePair[];
}

function App() {
  const [text, setText] = useState<string>("");
  const [data, setData] = useState<summary | null>();
  const [error, setError] = useState<string>("");

  const [step, setStep] = useState<number>(8);

  const order = [0, 1, 2, 3, 3, 2, 1, 0];

  const updateText = (newText: string) => {
    if (!newText) {
      setText("");
      setData(null);
      setError("");
      return;
    }

    try {
      const newData: summary = JSON.parse(newText);
      setStep(0);
      setData(newData);
      setText(newText);
      setError("");
    } catch (e) {
      setError(String(e));
    }
  }

  const incStep = () => {
    setStep(prev => (prev + 1) % 9);
  }

  const decStep = () => {
    setStep(prev => prev == 0 ? 8 : (prev - 1) % 9);
  }

  const rounded = (num: number, to: number) => {
    return Math.round(num * Math.pow(10, to)) / Math.pow(10, to);
  }

  return (
    <>
      <div className='page'>
        {data ? (
          <div className='board'>
            {
              data.board.map((pair, index) => (
                <Tile key={index} hex={index} type={pair.resource} number={pair.number}/>
              ))
            }

            {step > 0 ? (
              <>
                {
                  data.chosen.slice(0, step).map((location, index) => (
                    <>
                      <Settlement player={order[index]} position={location}/>
                      <Road player={order[index]} index={data.chosen_roads[index]}/>
                    </>
                  ))
                }
              </>
            ) : (
              <>
              </>
            )}

            {step < 8 ? (
                <>
                  {
                    data.history[step].map((point, index) => (
                      <Marker 
                        key={index} 
                        position={point.location} 
                        type={point.location == data.chosen[step] ? 2 : index == data.used_k - 1 ? 1 : 0}
                        text={
                          `Location: ${point.location}\nPreliminary Eval: ${point.prospect}\nPreliminary Rank: ${data.used_k - index}\nPlayer Yield: ${rounded(point.yields[order[step]], 3)}\nYields: ${point.yields.map(val => rounded(val, 3))}\nChoices: ${point.all_locations}`
                        }
                      />
                    ))
                  }
                </>
              )
              : (
                <>
                </>
              )
            }

            {/*
              {
                Array.from({ length: 72 }).map((_, i) => (
                  <Road player={i % 4} index={i}/>
                ))
              }

              {
                Array.from({ length: 54 }).map((_, i) => (
                  <Settlement player={i % 4} position={i}/>
                ))
              }

              {
                Array.from({ length: 54 }).map((_, i) => (
                  <Marker position={i}/>
                ))
              }
            */}
          </div>
        ) : (
          <div className="board">
            {
              Array.from({ length: 19 }).map((_, index) => (
                <Tile key={index} hex={index} type={index % 5 + 1} number={0}/>
              ))
            }
          </div>
        )}

        <div className="step-indicator">
          <button onClick={decStep}>
            -1
          </button>
          <span className="step-text">
            Step: {step == 8 ? "Final" : step + 1}
          </span>
          <button onClick={incStep}>
            +1
          </button>
        </div>

        {error ? (
          <div className="error-text">
            {error}
          </div>
        ) : (
          <>
          </>
        )}

        <textarea
          onChange={(e) => {updateText(e.target.value)}}
        />
      </div>
    </>
  )
}

export default App
