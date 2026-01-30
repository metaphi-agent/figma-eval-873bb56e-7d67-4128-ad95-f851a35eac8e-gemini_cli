import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Store = lazy(() => import('./pages/Store'));

function App() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-bg-main flex items-center justify-center text-text-dim">Loading Steam...</div>}>
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="*" element={<div className="min-h-screen bg-bg-main flex items-center justify-center text-text-dim">Page Not Found</div>} />
      </Routes>
    </Suspense>
  );
}

export default App;