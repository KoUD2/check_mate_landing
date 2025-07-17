# Оптимизация производительности CheckMate

Этот документ описывает все оптимизации производительности, реализованные для платформы CheckMate.

## 🚀 Реализованные оптимизации

### 1. Next.js конфигурация (next.config.ts)

- **SWC минификация** - быстрая компиляция и минификация
- **Удаление console.log** в production
- **Оптимизация изображений** - WebP/AVIF форматы, кэширование
- **Bundle splitting** - разделение vendor и common chunks
- **Заголовки кэширования** - долгосрочное кэширование статических ресурсов
- **Bundle analyzer** - анализ размера бандла в development

### 2. Компоненты производительности

#### LazyImage (`src/components/Performance/LazyImage.tsx`)

- Ленивая загрузка изображений с Intersection Observer
- Автоматический fallback при ошибках
- Плавные переходы при загрузке
- Приоритетная загрузка для критических изображений

#### DynamicLoader (`src/components/Performance/DynamicLoader.tsx`)

- Динамическая загрузка компонентов
- Error boundaries для graceful degradation
- Настраиваемые loading состояния
- Утилита createLazyComponent для простого создания lazy компонентов

#### PerformanceMonitor (`src/components/Performance/PerformanceMonitor.tsx`)

- Мониторинг Core Web Vitals (FCP, LCP, FID, CLS, TTFB)
- Автоматическая отправка метрик в Google Analytics и Yandex.Metrica
- Performance Observer API для точных измерений
- Console логирование для разработки

#### ResourcePreloader (`src/components/Performance/ResourcePreloader.tsx`)

- Предзагрузка критических ресурсов
- Поддержка fonts, images, scripts, styles
- Приоритезация ресурсов (high/low priority)
- CheckMateCriticalPreloader для критических ресурсов CheckMate

### 3. Оптимизированные хуки

#### useOptimizedWindowSize (`src/hooks/useOptimizedWindowSize.ts`)

- Дебаунсинг resize событий
- Мемоизация для предотвращения лишних ре-рендеров
- SSR-безопасные значения по умолчанию
- Дополнительные хуки: useWindowWidth, useBreakpoints

## 📊 Мониторинг производительности

### Core Web Vitals

- **FCP (First Contentful Paint)** - < 1.8s
- **LCP (Largest Contentful Paint)** - < 2.5s
- **FID (First Input Delay)** - < 100ms
- **CLS (Cumulative Layout Shift)** - < 0.1
- **TTFB (Time to First Byte)** - < 600ms

### Автоматическое отслеживание

Все метрики автоматически отправляются в:

- Google Analytics (event_category: 'Web Vitals')
- Yandex.Metrica (goal: 'web_vital')

## 🛠 Команды для разработчиков

### Анализ производительности

```bash
# Анализ размера бандла
npm run analyze

# Комбинированная команда build + analyze
npm run build:analyze

# Lighthouse анализ (требует запущенного приложения)
npm run lighthouse

# Полный performance анализ
npm run perf
```

### Оптимизация изображений

```bash
# Все изображения автоматически оптимизируются Next.js
# Поддерживаются форматы: WebP, AVIF
# Автоматическое изменение размера для разных устройств
```

## 🎯 Рекомендации по использованию

### 1. Ленивая загрузка компонентов

```tsx
import { createLazyComponent } from "@/components/Performance/DynamicLoader";

const LazyComponent = createLazyComponent(() => import("./HeavyComponent"), {
  loading: CustomLoader,
  error: CustomErrorFallback,
});
```

### 2. Оптимизированные изображения

```tsx
import LazyImage from "@/components/Performance/LazyImage";

<LazyImage
  src="/large-image.jpg"
  alt="Description"
  priority={false} // true только для hero изображений
  threshold={0.1}
  rootMargin="50px"
/>;
```

### 3. Оптимизированный размер окна

```tsx
import useOptimizedWindowSize, {
  useBreakpoints,
} from "@/hooks/useOptimizedWindowSize";

// Полная информация
const { width, height, isMobile, isTablet, isDesktop } = useOptimizedWindowSize(
  {
    debounceMs: 150,
    mobileBreakpoint: 768,
    tabletBreakpoint: 1024,
  }
);

// Только брейкпоинты
const { isMobile, isTablet, isDesktop } = useBreakpoints();
```

### 4. Предзагрузка ресурсов

```tsx
import ResourcePreloader from "@/components/Performance/ResourcePreloader";

<ResourcePreloader
  images={["/hero.jpg", "/logo.svg"]}
  fonts={["/fonts/custom.woff2"]}
  priority="high"
/>;
```

## 📈 Метрики производительности

### Bundle размеры (целевые значения)

- **Main bundle** < 200KB (gzipped)
- **Vendor bundle** < 300KB (gzipped)
- **Total bundle** < 500KB (gzipped)

### Загрузка страницы

- **First Load JS** < 130KB
- **TTI (Time to Interactive)** < 3.8s
- **Speed Index** < 3.4s

### Изображения

- **Автоматическое сжатие** - до 85% качества
- **Responsive images** - оптимальные размеры для устройств
- **Modern formats** - WebP/AVIF с fallback

## 🔧 Настройка мониторинга

### Google Analytics

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Yandex.Metrica

```env
NEXT_PUBLIC_YM_ID=XXXXXXXX
```

### Production monitoring

```tsx
<PerformanceMonitor
  reportToAnalytics={process.env.NODE_ENV === "production"}
  onMetric={(name, value) => {
    // Кастомная обработка метрик
    console.log(`${name}: ${value}ms`);
  }}
/>
```

## 🚨 Предупреждения и ограничения

### 1. Intersection Observer

- Не поддерживается в IE
- Используется полифил в production

### 2. Performance Observer

- Современные браузеры only
- Graceful degradation в старых браузерах

### 3. Bundle analyzer

- Работает только в development
- Устанавливается как devDependency

## 📋 Чек-лист оптимизации

### Перед релизом

- [ ] Проверить Bundle analyzer отчет
- [ ] Запустить Lighthouse audit
- [ ] Проверить Core Web Vitals
- [ ] Тестировать на медленном интернете
- [ ] Проверить мобильную производительность

### Регулярный мониторинг

- [ ] Отслеживать метрики в Analytics
- [ ] Мониторить размер бандла
- [ ] Проверять скорость загрузки
- [ ] Анализировать пользовательские сессии

## 🎯 Цели производительности

### Lighthouse Score

- **Performance**: > 90
- **Accessibility**: > 90
- **Best Practices**: > 90
- **SEO**: > 90

### Real User Metrics

- **Bounce Rate**: < 40%
- **Session Duration**: > 2 минуты
- **Page Load Time**: < 3 секунды

---

_Документ обновлен: 20.12.2024_  
_Ответственный: Performance Team_
