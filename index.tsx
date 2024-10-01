import Header from "./components/header";
export default function Home() {
  return (
    <div>
      <Header />
      <div className="intro">
        <div>
          <h1 className="name">AMBER KHANUM</h1>
          <h2 className="css">Computer Science Student</h2>
        </div>

        <div className="section">
          <div className="edu">
            <ul className="title1">Education:</ul>
            <li>A'Levels</li>
            <li> O'Levels</li>
          </div>
          <div className="skills">
            <ul className="title2">Skills:</ul>
            <li>Typescript</li>
            <li>HTML/CSS</li>
            <li>English Language</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Home1() {
  return <Header />;
}


