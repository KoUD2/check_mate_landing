import { NextResponse } from "next/server";

export const dynamic = "force-static";
export const revalidate = 86400; // раз в сутки

export async function GET() {
  const now = new Date().toISOString().slice(0, 19);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE yml_catalog SYSTEM "shops.dtd">
<yml_catalog date="${now}">
  <shop>
    <name>CheckMate</name>
    <company>CheckMate</company>
    <url>https://checkmateai.ru</url>
    <email>support@checkmateai.ru</email>
    <currencies>
      <currency id="RUR" rate="1"/>
    </currencies>
    <categories>
      <category id="1">Образовательные сервисы</category>
      <category id="2" parentId="1">Подписки CheckMate</category>
    </categories>
    <offers>

      <offer id="cm-plus-month" available="true">
        <url>https://checkmateai.ru/#tariffs</url>
        <price>549</price>
        <currencyId>RUR</currencyId>
        <categoryId>2</categoryId>
        <name>CheckMate Plus — подписка на месяц</name>
        <description>50 автоматических проверок заданий ЕГЭ по английскому языку в месяц. Проверка по официальным критериям ФИПИ, детальная обратная связь для ученика.</description>
        <vendor>CheckMate</vendor>
        <vendorCode>PLUS-M</vendorCode>
        <picture>https://checkmateai.ru/og-image.jpg</picture>
        <param name="Количество проверок">50 в месяц</param>
        <param name="Период">1 месяц</param>
        <param name="Тип проверки">Задания 37 и 38 ЕГЭ</param>
      </offer>

      <offer id="cm-pro-month" available="true">
        <url>https://checkmateai.ru/#tariffs</url>
        <price>990</price>
        <currencyId>RUR</currencyId>
        <categoryId>2</categoryId>
        <name>CheckMate Pro — подписка на месяц</name>
        <description>200 автоматических проверок заданий ЕГЭ по английскому языку в месяц. Проверка по официальным критериям ФИПИ, детальная обратная связь для ученика.</description>
        <vendor>CheckMate</vendor>
        <vendorCode>PRO-M</vendorCode>
        <picture>https://checkmateai.ru/og-image.jpg</picture>
        <param name="Количество проверок">200 в месяц</param>
        <param name="Период">1 месяц</param>
        <param name="Тип проверки">Задания 37 и 38 ЕГЭ</param>
      </offer>

      <offer id="cm-plus-year" available="true">
        <url>https://checkmateai.ru/#tariffs</url>
        <price>5490</price>
        <currencyId>RUR</currencyId>
        <categoryId>2</categoryId>
        <name>CheckMate Plus — подписка на год</name>
        <description>600 автоматических проверок заданий ЕГЭ по английскому языку в год. Выгода 20% по сравнению с месячной подпиской.</description>
        <vendor>CheckMate</vendor>
        <vendorCode>PLUS-Y</vendorCode>
        <picture>https://checkmateai.ru/og-image.jpg</picture>
        <param name="Количество проверок">600 в год</param>
        <param name="Период">1 год</param>
        <param name="Тип проверки">Задания 37 и 38 ЕГЭ</param>
      </offer>

      <offer id="cm-pro-year" available="true">
        <url>https://checkmateai.ru/#tariffs</url>
        <price>8900</price>
        <currencyId>RUR</currencyId>
        <categoryId>2</categoryId>
        <name>CheckMate Pro — подписка на год</name>
        <description>2400 автоматических проверок заданий ЕГЭ по английскому языку в год. Выгода 25% по сравнению с месячной подпиской.</description>
        <vendor>CheckMate</vendor>
        <vendorCode>PRO-Y</vendorCode>
        <picture>https://checkmateai.ru/og-image.jpg</picture>
        <param name="Количество проверок">2400 в год</param>
        <param name="Период">1 год</param>
        <param name="Тип проверки">Задания 37 и 38 ЕГЭ</param>
      </offer>

    </offers>
  </shop>
</yml_catalog>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
