import Script from "next/script";

interface AnalyticsProps {
  googleAnalyticsId?: string;
  yandexMetricaId?: string;
}

const Analytics: React.FC<AnalyticsProps> = ({
  googleAnalyticsId,
  yandexMetricaId,
}) => {
  return (
    <>
      {/* Google Analytics */}
      {googleAnalyticsId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleAnalyticsId}', {
                page_title: document.title,
                page_location: window.location.href,
                send_page_view: true,
                anonymize_ip: true,
                storage: 'none',
                client_storage: 'none',
                ads_data_redaction: true
              });
              
              // Отслеживание конверсий
              gtag('event', 'page_view', {
                event_category: 'engagement',
                event_label: 'CheckMate Landing'
              });
            `}
          </Script>
        </>
      )}

      {/* Yandex.Metrica */}
      {yandexMetricaId && (
        <>
          <Script id="yandex-metrica" strategy="afterInteractive">
            {`
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
              
              ym(${yandexMetricaId}, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:false,
                trackHash:true,
                ecommerce:"dataLayer",
                defer: true,
                params: {
                  nohit: false
                }
              });
            `}
          </Script>
          <noscript>
            <div>
              <img
                src={`https://mc.yandex.ru/watch/${yandexMetricaId}`}
                style={{ position: "absolute", left: "-9999px" }}
                alt=""
              />
            </div>
          </noscript>
        </>
      )}

      {/* Structured Data для отслеживания событий */}
      {(googleAnalyticsId || yandexMetricaId) && (
        <Script id="conversion-tracking" strategy="afterInteractive">
          {`
            // Функция для отслеживания кликов по кнопкам
            function trackButtonClick(buttonName, section) {
              ${
                googleAnalyticsId
                  ? `
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'click', {
                    event_category: 'button',
                    event_label: buttonName,
                    event_location: section
                  });
                }
              `
                  : ""
              }
              
              ${
                yandexMetricaId
                  ? `
                if (typeof ym !== 'undefined') {
                  ym(${yandexMetricaId}, 'reachGoal', 'button_click', {
                    button: buttonName,
                    section: section
                  });
                }
              `
                  : ""
              }
            }

            // Функция для отслеживания скролла
            function trackScroll() {
              let scrollTracked = false;
              window.addEventListener('scroll', function() {
                if (!scrollTracked && window.scrollY > window.innerHeight * 0.5) {
                  scrollTracked = true;
                  ${
                    googleAnalyticsId
                      ? `
                    if (typeof gtag !== 'undefined') {
                      gtag('event', 'scroll', {
                        event_category: 'engagement',
                        event_label: '50% page scroll'
                      });
                    }
                  `
                      : ""
                  }
                }
              });
            }

            // Инициализация отслеживания
            document.addEventListener('DOMContentLoaded', function() {
              trackScroll();
            });

            // Экспорт функций для использования в компонентах
            window.trackButtonClick = trackButtonClick;
          `}
        </Script>
      )}
    </>
  );
};

export default Analytics;
