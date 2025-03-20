import { Destination } from "../../types/destination";

const DestinationCard = ({
  destination_name,
  destination_description,
  destination_img,
}: Destination) => {
  return (
    <div
      className="rounded-lg"
      style={{
        backgroundImage: `url(${destination_img})`,
      }}
    >
      <h1>{destination_name}</h1>
      <p>{destination_description}</p>
      <div className="">{/* destination of  */}</div>
    </div>
  );
};

export default DestinationCard;
