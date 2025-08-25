# Hướng dẫn sử dụng i18n với URL đơn giản

## Cấu trúc URL

- `/` - Trang chính tiếng Việt (mặc định)
- `/en` - Trang chính tiếng Anh
- `/vi` - Tự động redirect về `/`

## Cách hoạt động

1. **Khi truy cập `/`:**
   - Hiển thị nội dung tiếng Việt
   - URL vẫn là `/`

2. **Khi truy cập `/vi`:**
   - Middleware tự động redirect về `/`
   - Hiển thị nội dung tiếng Việt

3. **Khi truy cập `/en`:**
   - Hiển thị nội dung tiếng Anh
   - URL vẫn là `/en`

4. **Khi chuyển đổi ngôn ngữ:**
   - Từ tiếng Việt → tiếng Anh: `/` → `/en`
   - Từ tiếng Anh → tiếng Việt: `/en` → `/`

## Cấu trúc dự án

### Các file quan trọng:

1. **Middleware:**
   - `middleware.ts` - Xử lý redirect và routing

2. **File ngôn ngữ:**
   - `src/translations/index.ts` - Bản dịch tiếng Việt và tiếng Anh

3. **Components:**
   - `src/components/SimpleI18nProvider.tsx` - Provider cho i18n
   - `src/components/LanguageSwitcher.tsx` - Component chuyển đổi ngôn ngữ

4. **Pages:**
   - `src/app/page.tsx` - Trang chính (tiếng Việt)
   - `src/app/[locale]/page.tsx` - Trang cho tiếng Anh
   - `src/app/layout.tsx` - Layout gốc với provider tiếng Việt
   - `src/app/[locale]/layout.tsx` - Layout cho tiếng Anh

## Cách sử dụng

### 1. Sử dụng useTranslation trong component:

```tsx
'use client';

import { useI18n } from '../components/SimpleI18nProvider';

export default function MyComponent() {
  const { t } = useI18n();

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('getStarted')}</p>
    </div>
  );
}
```

### 2. Chuyển đổi ngôn ngữ:

```tsx
import { useI18n } from '../components/SimpleI18nProvider';

export default function LanguageSwitcher() {
  const { changeLanguage, locale } = useI18n();

  return (
    <div>
      <button onClick={() => changeLanguage('vi')}>Tiếng Việt</button>
      <button onClick={() => changeLanguage('en')}>English</button>
    </div>
  );
}
```

### 3. Thêm bản dịch mới:

1. Thêm key vào `src/translations/index.ts`:
```ts
export const viCommon = {
  // ... existing translations
  "newKey": "Bản dịch tiếng Việt"
};

export const enCommon = {
  // ... existing translations
  "newKey": "English translation"
};
```

2. Sử dụng trong component:
```tsx
const { t } = useI18n();
return <div>{t('newKey')}</div>;
```

## Tính năng

- ✅ URL đơn giản: `/` cho tiếng Việt, `/en` cho tiếng Anh
- ✅ Tự động redirect `/vi` → `/`
- ✅ Chuyển đổi ngôn ngữ động
- ✅ Middleware xử lý routing
- ✅ Hook tùy chỉnh useI18n
- ✅ Component LanguageSwitcher
- ✅ TypeScript support

## Chạy ứng dụng

```bash
npm run dev
```

Truy cập: http://localhost:3000
