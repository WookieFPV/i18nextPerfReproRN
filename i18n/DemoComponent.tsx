import React from 'react';
import {Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import {KeyType} from './keys';

export const DemoComponent = ({translationKey}: {translationKey: KeyType}) => {
  const {t} = useTranslation();
  return (
    <>
      <Text>{t('foo')}</Text>
      <Text>{t('bar')}</Text>
      <Text>{t('baz')}</Text>
      <Text>{t(translationKey)}</Text>
    </>
  );
};
