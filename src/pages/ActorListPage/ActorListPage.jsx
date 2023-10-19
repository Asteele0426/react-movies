import ActorCard from "./ActorCard";
export default function ActorPage({ movieList }) {
  const actorList = movieList.reduce((actors, x) => {
    x.cast.forEach((y) => {
      if (!actors.includes(y)) actors.push(y);
    });
    return actors;
  }, []);

  return (
    <div className="actors-container">
      {actorList.map((actor) => {
        return <ActorCard key={actor} actor={actor} />;
      })}
    </div>
  );
}