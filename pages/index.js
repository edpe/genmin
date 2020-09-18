import { useState, useEffect } from "react";

const Home = () => {
  const [Tone, setTone] = useState();
  const [synth, setSynth] = useState();
  const [sequence, setSequence] = useState();
  const [start, setStart] = useState(0);

  useEffect(() => {
    import("tone").then((_Tone) => {
      setTone(_Tone);

      setSynth(new _Tone.Synth().toMaster());
    });

    setSequence(
      new Tone.Sequence(
        (time, note) => {
          synth.triggerAttackRelease(note, 0.1, time);
        },
        ["C4", ["E4", "D4", "E4"], "G4", ["A4", "G4"]]
      ).start(0)
    );
  }, [setTone, setSynth, setSeq]);

  const clickHandler = () => {
    Tone.Transport.start();
    console.log(seq._events);
  };

  return <div>{synth && <button onClick={clickHandler}>start</button>}</div>;
};

export default Home;
