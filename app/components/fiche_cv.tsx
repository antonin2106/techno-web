export function MyFirstCv() {
  return (
    <>
      <p className="text-2xl text-blue-900"> Antonin Menet </p>
      <Moncv />
    </>
  );
}
function Description(props: {
  âge: string;
  cursus: string;
  nom: string;
  prénom: string;
  hobbits: string;
}) {
  return (
    <p>
      Pour parler de moi : -Nom : {props.nom}
      -prénom : {props.prénom}- âge : {props.âge}- hobbits : {props.hobbits}
      -cursus : {props.cursus}
    </p>
  );
}
export default function Moncv() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="bg-blue-50 rounded-xl shadow p-4 container mx-auto mt-6">
        <Description
          nom="Menet"
          prénom="Antonin"
          âge="20 ans"
          hobbits="programmation"
          cursus="ecam"
        />
      </div>
    </main>
  );
}
