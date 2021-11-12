import { Home } from '@pages/home';
import { colors } from '@styles/colors';

const { BLACK } = colors;

export default function App() {
  return (
    <div
      style={{
        backgroundColor: BLACK,
        height: '100vh',
      }}
    >
      <Home />
    </div>
  );
}
