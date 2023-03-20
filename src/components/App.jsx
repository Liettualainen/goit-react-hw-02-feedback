import { GlobalStyle } from './GlobalStyle';
import 'modern-normalize';

import Section from './Section.js'
import { Layout } from './Layout.js';



export const App = () => {
  return (

     <Layout>
      <Section />
      <GlobalStyle />
      
    </Layout>

  );
};
