
const Item = ({event}) => {
  return (
    <div className="flex gap-5 items-center">
      <span className="bg-gray-300 text-gray-700 p-2 rounded-2xl font-bold w-16 h-16 text-center">{event.date}</span>
      <div>
        <h2 className="font-bold text-xl">{event.title}</h2>
        <p className="text-gray-400">{event.description}</p>
      </div>
    </div>
  )
}

export default Item
