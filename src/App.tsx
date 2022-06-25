import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

interface Lesson {
  id: string;
  title: string;
}

function App() {
  const { data }= useQuery<{ lessons: Lesson[]}>(GET_LESSONS_QUERY) //No TS posso tanto tipar aqui dizendo que o retorno da query vai ser um array de lessons
                                                      // como não é só um array e sim um objeto contendo o array de lessons ficou assim.
  return (
    <ul>
      {data?.lessons.map(lesson => { // ou dessa forma: {data.lessons.map((lesson: Lesson)  => {
        return <li key={lesson.id}>{lesson.title}</li>
      })}
    </ul>
  )
}

export default App
