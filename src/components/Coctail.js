export default function Coctail({ image, name }) {
  return (
    <div className="col-12 col-sm-12 col-md-6">
      <img className="image" src={image} alt={name} />
      <h2>{name}</h2>
    </div>
  )
}
