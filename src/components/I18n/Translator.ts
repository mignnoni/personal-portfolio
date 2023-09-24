import { useTranslation } from 'react-i18next'
// Importamos o hook

interface TranslatorProps {
    path: string
}

export function Translator({ path }: TranslatorProps): string {

  const { t } = useTranslation();

  return t(path)
}

export function GetTranslation(path: string) {
  const { t } = useTranslation();

  return t(path)
}
