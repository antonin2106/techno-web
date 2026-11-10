
function MyFirstComponent(){
  return (
    <p className="text-2xl text-red-900"> Ceci est mon premier composant</p>
  );
}

function Hello (props : { name : string}){
  return <p> Bonjour {props.name}</p>;
}

export default function MyFirstPage(){
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="bg-blue-50 rounded-xl shadow p-4 container mx-auto mt-6">
        <MyFirstComponent/>
        <Hello name="thomas"/>
      </div>
    </main>
  );
}