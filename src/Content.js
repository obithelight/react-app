const Content = () => {
    const handleNameChange = () => {
        const names = ['Obi', 'Ada', 'Ugo', 'Nne', 'Chi'];
        const int = Math.floor(Math.random() * 5);
        return (names[int]);
    }

    const handleClick = () => {
      alert('Hello there!')
    }

  return (
    <main>
      <p>
        Hello {handleNameChange()}!
      </p>
      <button onClick={handleClick}>
        Click me
      </button>
    </main>
  )
}

export default Content;