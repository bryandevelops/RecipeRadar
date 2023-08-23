import './Video.css';

export default function Video ({ strMeal, strYoutube }) {
  return (
    <section className='video-component'>
      <h1>Video</h1>
      <iframe 
        src={`https://www.youtube.com/embed/${strYoutube.split("=")[1]}`}
        width="420" height="315"
        title={strMeal}>
      </iframe>
    </section>
  );
}