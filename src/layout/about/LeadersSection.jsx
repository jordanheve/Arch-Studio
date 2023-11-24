import { leadersData } from "./data"
export default function LeadersSection() {
  return (
    <section className="flex ">
    <div>
    <h3 className=" text-7xl my-10 font-bold">The Leaders</h3>
    </div>
    <div className=" grid grid-cols-2 gap-6">
    {leadersData.map(item =>  (
      <div key={item.id}>
        <img src={item.image} alt={item.name+' image'}></img>
        <h4 className="text-3xl font-semibold mt-4">{item.name}</h4>
        <span className="text-slate-600">{item.position}</span>
      </div>
    ))}
    </div>
    </section>
  )
}
