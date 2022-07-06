import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

let testString = `### markdown preview
---

**bold**
*italicized text*

> blockquote

${`code style syntax`}

[MARConthemove LINK](https://github.com/MARConthemove)`

function App() {
  const [markdown, setMarkdown] = useState(testString)

  return (
    <main>
      <section className='markdown'>
        <textarea
          className='input'
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className='result'>
          <ReactMarkdown children={markdown} />
        </article>
      </section>
    </main>
  )
}

export default App
