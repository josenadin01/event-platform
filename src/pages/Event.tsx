import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

interface Params {
  slug: string;
}

export function Event() { //flex-col min-h-screen e flex-1 é um trick para fazer o main ocupar 100% da tela
  const { slug } = useParams<{ slug: string }>()

  return (
    <div className="flex flex-col min-h-screen"> 
      <Header />       
      <main className="flex flex-1"> 
        { slug 
        ? <Video lessonSlug={slug} /> 
        : <div className="flex-1" />
        }
        <Sidebar />
      </main>
    </div>
  );
}
