import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {IntlProvider} from "react-intl";
import '@formatjs/intl-pluralrules/polyfill';
import '@formatjs/intl-pluralrules/polyfill-locales';
import messages_es from "./translations/es.json";
import messages_en from "./translations/en.json";

const messages = {
    'es': messages_es,
    'en': messages_en
};
const language = navigator.language.split(/[-_]/)[0];
ReactDOM.render(
  <IntlProvider locale={navigator.language} messages={messages[language]}>
      <App/>
  </IntlProvider>,
  document.getElementById('root')
);
