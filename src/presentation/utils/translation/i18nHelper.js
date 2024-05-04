import { useTranslation as translate} from 'react-i18next';

export const t = (key) => {
    const { t } = translate();
    return t(key);
};
