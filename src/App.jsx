import Markdown from "react-markdown";
import './App.css';

function App() {
    const markdown = `
# Learn Jujutsu

## Hello, jj

Jujutsu has some basic commands:
- Create new repositories with \`jj git init\`.
- To start working on a new change, use \`jj new\`.
- To describe a change so humans can understand them, use \`jj describe\`.
- We can look at our work with \`jj st\`.
- When we are done, we can start our next change with \`jj new\`.
- We can review our repository's contents with \`jj log\`
`;

    return <Markdown>{markdown}</Markdown>;
}

export default App;
