import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() { //flex-col min-h-screen e flex-1 é um trick para fazer o main ocupar 100% da tela
  return (
    <div className="flex flex-col min-h-screen"> 
      <Header />       
      <main className="flex flex-1"> 
        <Video />
        <Sidebar />
      </main>
    </div>
  );
}
