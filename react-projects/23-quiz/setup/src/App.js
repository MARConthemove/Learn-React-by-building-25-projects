import React from 'react'
import { useGlobalContext } from './context'

import SetupForm from './SetupForm'
import Loading from './Loading'
import Modal from './Modal'

function App() {
  const { loading, waiting, questions, index, correct } = useGlobalContext()

  if (waiting) {
    return <SetupForm />
  }

  if (loading) {
    return <Loading />
  }

  // console.log()
  console.log(questions)
  console.log(questions[index])

  const { correct_answer, question, incorrect_answers } = questions[index]

  const answers = [...incorrect_answers, correct_answer]
  console.log(answers)
  return (
    <main>
      {/* <Modal /> */}
      <section className='quiz'>
        <p className='correct-answers'>
          Correct Answers: {correct}/{index}
        </p>

        <article className='container'>
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className='btn-container'>
            {answers.map((answer, index) => {
              return (
                <button
                  key={index}
                  className='answer-btn'
                  dangerouslySetInnerHTML={{ __html: answer }}
                />
              )
            })}
          </div>
        </article>
        <button className='next-question'>next question</button>
      </section>
    </main>
  )
}

export default App
