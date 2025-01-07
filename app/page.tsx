import TableOne from "./components/TableOne";
import TableTwo from "./components/TableTwo";



export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-8">Mulah Technologies Assessment</h1>
      <TableOne />
      <TableTwo />
    </main>
  );
}