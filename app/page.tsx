export default function Home() {
  return (
    <main style={{ width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden', background: '#050505' }}>
      <iframe
        src="/dusttrace.html"
        title="DustTrace Fullstack Dashboard"
        style={{ width: '100%', height: '100%', border: 0, display: 'block' }}
      />
    </main>
  );
}
