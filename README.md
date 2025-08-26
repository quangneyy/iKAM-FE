# IKAM OEM - Đa ngôn ngữ

Dự án này hỗ trợ đa ngôn ngữ với tiếng Việt (vi) và tiếng Anh (en).

## Cấu trúc Dự án

```
ikam-oem/
├── src/
│   ├── app/
│   │   └── [locale]/          # Dynamic routing cho ngôn ngữ
│   │       ├── layout.tsx     # Layout với SimpleI18nProvider
│   │       ├── page.tsx       # Trang chủ
│   │       └── products/      # Trang sản phẩm
│   │           └── page.tsx   # Trang sản phẩm với đa ngôn ngữ
│   ├── components/
│   │   └── i18n/
│   │       ├── SimpleI18nProvider.tsx  # Provider cho i18n
│   │       └── LanguageSwitcher.tsx    # Component chuyển đổi ngôn ngữ
│   ├── translations/
│   │   └── index.ts           # Các bản dịch
│   └── hooks/
│       └── useI18n.ts         # Hook cho i18n
├── public/
│   └── locales/               # File ngôn ngữ
│       ├── en/
│       │   └── common.json    # Bản dịch tiếng Anh
│       └── vi/
│           └── common.json    # Bản dịch tiếng Việt
├── next-i18next.config.js     # Cấu hình i18n
└── middleware.ts               # Middleware xử lý routing
```

## Cách Sử Dụng

### 1. Thêm Bản Dịch Mới

Để thêm bản dịch mới, cập nhật file `src/translations/index.ts`:

```typescript
export const viCommon = {
  // ... existing translations
  "newKey": "Bản dịch tiếng Việt"
};

export const enCommon = {
  // ... existing translations
  "newKey": "English translation"
};
```

### 2. Sử Dụng Trong Component

```typescript
import { useI18n } from "../../../components/i18n/SimpleI18nProvider";

export default function MyComponent() {
  const { t } = useI18n();
  
  return (
    <div>
      <h1>{t("newKey")}</h1>
    </div>
  );
}
```

### 3. Routing

- `/` hoặc `/vi` → Tiếng Việt (mặc định)
- `/en` → Tiếng Anh

### 4. Chuyển Đổi Ngôn Ngữ

Sử dụng component `LanguageSwitcher` hoặc hook `useI18n`:

```typescript
const { changeLanguage } = useI18n();

// Chuyển sang tiếng Anh
changeLanguage('en');

// Chuyển sang tiếng Việt
changeLanguage('vi');
```

## Tính Năng

- ✅ Hỗ trợ tiếng Việt và tiếng Anh
- ✅ Dynamic routing với `[locale]`
- ✅ Middleware xử lý routing tự động
- ✅ Provider pattern cho state management
- ✅ Type-safe translations
- ✅ Responsive design với SCSS modules

## Chạy Dự Án

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build production
npm run build

# Start production server
npm start
```

## Cấu Trúc Dịch Thuật

Tất cả text trong ứng dụng đều được dịch thông qua hệ thống key-value:

- **Key**: Định danh duy nhất cho mỗi đoạn text
- **Value**: Bản dịch tương ứng cho từng ngôn ngữ

Ví dụ:
```typescript
"mobility": {
  "vi": "Di động",
  "en": "Mobility"
}
```

## Lưu Ý

1. Luôn sử dụng `useI18n()` hook từ `SimpleI18nProvider`
2. Không hardcode text trực tiếp trong component
3. Cập nhật cả hai ngôn ngữ khi thêm key mới
4. Sử dụng key có ý nghĩa và dễ hiểu
