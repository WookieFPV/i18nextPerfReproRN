// import the original type declarations
import 'i18next';
import ns1 from './translations/en.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    // custom namespace type if you changed it
    defaultNS: 'ns1';
    // custom resources type
    resources: {
      ns1: typeof ns1;
    };
  }
}
