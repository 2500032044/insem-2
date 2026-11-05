function PageHeader({ title }) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}

function App() {
  return (
    <>
      <PageHeader title="Home" />
      <PageHeader title="About" />
      <PageHeader title="Contact" />
    </>
  );
}

export default App;