import * as Tone from "tone";

const synth = new Tone.Synth().toMaster();

const Home = () => {
  const clickHandler = () => {
    const seq = new Tone.Sequence(
      (time, note) => {
        synth.triggerAttackRelease(note, 0.1, time);
      },
      ["C4", ["E4", "D4", "E4"], "G4", ["A4", "G4"]]
    ).start(0);
    Tone.Transport.start();
  };

  return (
    <div>
      <button onClick={clickHandler}>start</button>
    </div>
  );
};

export default Home;
