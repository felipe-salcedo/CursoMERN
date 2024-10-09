import { useState } from 'react';
import './styles.css';
import Title from '../title';
import SubmitButton from '../button/submitButton.jsx';
import DeleteButton from '../button/deleteText.jsx';

function App() {
  const [text, setText] = useState("");
  const [submittedTexts, setSubmittedTexts] = useState([]);

  const handleInput = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    setSubmittedTexts([...submittedTexts, text]);
    setText("");
  };

  const handleDelete = (index) => {
    const newSubmittedTexts = submittedTexts.filter((_, i) => i !== index);
    setSubmittedTexts(newSubmittedTexts);
  };

  return (
    <>
      <Title />
      <input value={text} onChange={handleInput} type='text' />
      <div className="card">
        <SubmitButton handleSubmit={handleSubmit} />
        {submittedTexts.length > 0 && (
          <div className="submitted-texts">
            <h3>Tarefas:</h3>
            <table>
              <tbody>
                {submittedTexts.map((submittedText, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{submittedText}</td>
                    <td>
                      <DeleteButton handleDelete={handleDelete} index={index} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
