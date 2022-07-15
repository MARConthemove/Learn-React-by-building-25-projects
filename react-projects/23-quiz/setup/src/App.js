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

  console.log(questions[index])
  const { correct_answer, question, incorrect_answers } = questions[index]

  const answers = [...incorrect_answers, correct_answer]
  console.log(answers)
  return (
    <main>
      <Modal />
      <section className='quiz'>
        <p className='correct-answers'>Correct Answers: {correct} / </p>

        <article className='container'>
          <h2>{question}</h2>
          <div className='btn-container'>
            {answers.map((answer, index) => {
              return (
                <button key={index} className='answer-btn'>
                  {answer}
                </button>
              )
            })}
          </div>
        </article>
      </section>
    </main>
  )
}

export default App
