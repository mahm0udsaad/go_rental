import { useTranslation } from '@/app/i18n'; // Import your translation hook

const TranslationWrapper = ({ children, lng }) => {
  const { t } = useTranslation(lng);

  // Pass the 't' function to children via props
  return children({ t });
};

export default TranslationWrapper;
