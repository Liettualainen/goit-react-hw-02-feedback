import { GlobalStyle } from './GlobalStyle';
import 'modern-normalize';

import Section from './Section.js'

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Section />
       <GlobalStyle />
    </div>
  );
};
