import Form from "../components/Form";
import Participants from "../components/Participants";
export default function Home() {
  return (
    <main className="border-1 border-y border-accent/50 shadow-inner h-[calc(100vh-12rem)] overflow-y-scroll">
      <Form />
      <Participants />
    </main>
  );
}
