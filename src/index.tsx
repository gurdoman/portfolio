import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { IntlProvider } from "react-intl";

import '@formatjs/intl-pluralrules/polyfill';
import '@formatjs/intl-pluralrules/polyfill-locales';

import messages_es from "./translations/es.json";
import messages_en from "./translations/en.json";

type SupportedLanguages = 'es' | 'en';

const messages: Record<SupportedLanguages, Record<string, string>> = {
    'es': messages_es,
    'en': messages_en
};

const language = navigator.language.split(/[-_]/)[0] as SupportedLanguages;
const selectedMessages = messages[language] || messages['en'];

const container = document.getElementById('root');
if (!container) throw new Error("Failed to find the root element");
const root = createRoot(container);


root.render(
  <React.StrictMode>
    <IntlProvider locale={navigator.language} messages={selectedMessages}>
      <App />
    </IntlProvider>
  </React.StrictMode>
);
