import './Instructions.css';

export default function Instructions ({ strInstructions }) {
  return (
    <section className='instructions-component'>
      <h1>Instructions:</h1>
      <p className='instructions'>{strInstructions}</p>
    </section>
  );
}