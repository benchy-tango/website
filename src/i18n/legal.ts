/**
 * Legal notice (Impressum, § 5 DDG) and privacy policy (Art. 13 GDPR), per
 * language. The German text is the legally relevant one (Aaron is based in
 * Berlin); English and Spanish are translations.
 *
 * Written for what this site actually does (checked 2026-10-17): static
 * site on Netlify, no cookies, no local storage, no analytics, no
 * third-party resources (fonts, images and map are served from this
 * domain), contact form via Netlify Forms, e-mail via Gmail, plain links to
 * WhatsApp, Instagram and Facebook. If any of that changes (analytics, an
 * embedded video, a newsletter…), update the privacy policy and check
 * whether a consent banner becomes necessary.
 *
 * `block` inserts data from src/data/legal.ts: 'address' (name + postal
 * address), 'contact' (e-mail + phone), 'vat' (only if a VAT ID exists).
 */
import type { Language } from './languages';

export interface LegalSection {
  heading: string;
  body?: string[];
  block?: 'address' | 'contact' | 'vat';
  links?: { label: string; href: string }[];
}

export interface LegalPageText {
  title: string;
  description: string;
  updated: string;
  sections: LegalSection[];
}

export interface LegalTexts {
  imprint: LegalPageText;
  privacy: LegalPageText;
  labels: { email: string; phone: string; vat: string; pending: string; pendingNote: string };
}

const de: LegalTexts = {
  labels: {
    email: 'E-Mail',
    phone: 'Telefon / WhatsApp',
    vat: 'Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG',
    pending: 'Angabe fehlt',
    pendingNote: 'Entwurf: Die Anschrift fehlt noch. Diese Seite darf so nicht veröffentlicht werden.',
  },
  imprint: {
    title: 'Impressum',
    description: 'Impressum der Website Benchy Tango von Aaron Benchimol.',
    updated: 'Stand: Oktober 2026',
    sections: [
      { heading: 'Angaben gemäß § 5 DDG', block: 'address' },
      { heading: 'Kontakt', block: 'contact' },
      { heading: 'Umsatzsteuer-ID', block: 'vat' },
      {
        heading: 'Haftung für Inhalte',
        body: [
          'Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann ich jedoch keine Gewähr übernehmen. Sobald mir Rechtsverletzungen bekannt werden, entferne ich die betreffenden Inhalte umgehend.',
        ],
      },
      {
        heading: 'Haftung für Links',
        body: [
          'Diese Website enthält Links zu externen Websites (zum Beispiel Instagram, Facebook und WhatsApp), auf deren Inhalte ich keinen Einfluss habe. Für diese Inhalte ist der jeweilige Anbieter verantwortlich. Bei Bekanntwerden von Rechtsverletzungen entferne ich solche Links umgehend.',
        ],
      },
      {
        heading: 'Urheberrecht',
        body: [
          'Texte, Fotos und Gemälde auf dieser Website sind urheberrechtlich geschützt. Jede Verwendung außerhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung.',
          'Flaggen: flag-icons (MIT-Lizenz). Weltkarte: Natural Earth (gemeinfrei).',
        ],
      },
    ],
  },
  privacy: {
    title: 'Datenschutzerklärung',
    description: 'Wie die Website Benchy Tango mit personenbezogenen Daten umgeht.',
    updated: 'Stand: Oktober 2026',
    sections: [
      {
        heading: '1. Verantwortlicher',
        body: ['Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:'],
        block: 'address',
      },
      { heading: 'Kontakt', block: 'contact' },
      {
        heading: '2. Das Wichtigste in Kürze',
        body: [
          'Diese Website setzt keine Cookies, speichert nichts auf deinem Gerät, verwendet keine Analyse- oder Tracking-Werkzeuge und bindet keine Inhalte Dritter ein. Schriften, Bilder und die Karte werden direkt von dieser Website geladen. Personenbezogene Daten werden nur verarbeitet, wenn du die Website aufrufst (Server-Logdateien) oder mir eine Nachricht schickst.',
        ],
      },
      {
        heading: '3. Hosting und Server-Logdateien',
        body: [
          'Diese Website wird bei Netlify, Inc. (San Francisco, USA) gehostet. Beim Aufruf der Website verarbeitet Netlify automatisch Daten, die dein Browser übermittelt: IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite, Referrer-URL sowie Browser und Betriebssystem.',
          'Zweck ist die sichere und stabile Bereitstellung der Website. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren Betrieb). Netlify verarbeitet die Daten als Auftragsverarbeiter. Für die Übermittlung in die USA gelten die Standardvertragsklauseln der EU-Kommission (Art. 46 Abs. 2 lit. c DSGVO).',
        ],
        links: [{ label: 'Datenschutzerklärung von Netlify', href: 'https://www.netlify.com/privacy/' }],
      },
      {
        heading: '4. Kontaktformular',
        body: [
          'Wenn du das Kontaktformular nutzt, verarbeite ich die Angaben, die du eingibst: Name, E-Mail-Adresse, Art der Anfrage, Ort oder Datum des Events (freiwillig) und deine Nachricht, außerdem die Sprache der Seite, von der die Anfrage kommt.',
          'Das Formular wird über Netlify Forms übermittelt. Netlify speichert die Anfrage, prüft sie automatisch auf Spam und leitet sie per E-Mail an mich weiter. Zweck ist die Beantwortung deiner Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, wenn es um eine Buchung oder einen Vertrag geht, sonst Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).',
          'Ich lösche die Daten, sobald deine Anfrage erledigt ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.',
        ],
      },
      {
        heading: '5. Kontakt per E-Mail',
        body: [
          'Wenn du mir eine E-Mail schreibst (auch über das Kontaktformular weitergeleitete Nachrichten), wird sie über Gmail empfangen und gespeichert, einen Dienst von Google Ireland Limited (Dublin, Irland). Dabei kann eine Übermittlung in die USA nicht ausgeschlossen werden; Google stützt sich dafür auf das EU-U.S. Data Privacy Framework und Standardvertragsklauseln. Zweck und Rechtsgrundlage wie beim Kontaktformular.',
        ],
        links: [{ label: 'Datenschutzerklärung von Google', href: 'https://policies.google.com/privacy' }],
      },
      {
        heading: '6. WhatsApp',
        body: [
          'Der WhatsApp-Button und die WhatsApp-Links sind einfache Links. Erst wenn du darauf klickst, öffnet sich WhatsApp, ein Dienst von WhatsApp Ireland Limited (Dublin, Irland), und es gelten dessen Datenschutzbestimmungen. Wenn du mir über WhatsApp schreibst, verarbeite ich deine Nachricht und Telefonnummer, um dir zu antworten (Art. 6 Abs. 1 lit. b bzw. f DSGVO).',
        ],
        links: [{ label: 'Datenschutzerklärung von WhatsApp', href: 'https://www.whatsapp.com/legal/privacy-policy-eea' }],
      },
      {
        heading: '7. Links zu sozialen Netzwerken',
        body: [
          'Die Verweise auf Instagram und Facebook sind einfache Links, keine Plugins. Beim Besuch dieser Website werden keine Daten an diese Netzwerke übertragen. Erst wenn du einem Link folgst, gelten die Datenschutzbestimmungen von Meta Platforms Ireland Limited.',
        ],
      },
      {
        heading: '8. Cookies',
        body: [
          'Diese Website verwendet keine Cookies und keine vergleichbaren Technologien (wie Local Storage) und speichert keine Informationen auf deinem Gerät. Deshalb ist auch keine Einwilligung (Cookie-Banner) erforderlich. Wenn du auf der Karte ein Land oder einen Kontinent wählst, steht diese Auswahl nur in der Adresszeile des Browsers (zum Beispiel „?country=de“) und wird nicht gespeichert.',
        ],
      },
      {
        heading: '9. Deine Rechte',
        body: [
          'Du hast das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21). Eine erteilte Einwilligung kannst du jederzeit mit Wirkung für die Zukunft widerrufen (Art. 7 Abs. 3). Schreib mir dafür einfach eine E-Mail.',
          'Widerspruchsrecht: Soweit ich Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO verarbeite, kannst du dieser Verarbeitung aus Gründen, die sich aus deiner besonderen Situation ergeben, jederzeit widersprechen.',
          'Du hast außerdem das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO). Zuständig ist die Berliner Beauftragte für Datenschutz und Informationsfreiheit.',
        ],
        links: [{ label: 'Berliner Beauftragte für Datenschutz und Informationsfreiheit', href: 'https://www.datenschutz-berlin.de' }],
      },
      {
        heading: '10. Weitere Hinweise',
        body: [
          'Du bist nicht verpflichtet, mir personenbezogene Daten zu geben; ohne Kontaktdaten kann ich dir allerdings nicht antworten. Es findet keine automatisierte Entscheidungsfindung oder Profilbildung statt. Die Website wird verschlüsselt über HTTPS übertragen.',
          'Ich passe diese Datenschutzerklärung an, wenn sich die Website oder die Rechtslage ändert.',
        ],
      },
    ],
  },
};

const en: LegalTexts = {
  labels: {
    email: 'Email',
    phone: 'Phone / WhatsApp',
    vat: 'VAT identification number (§ 27a UStG)',
    pending: 'missing',
    pendingNote: 'Draft: the postal address is still missing. This page must not be published like this.',
  },
  imprint: {
    title: 'Legal Notice',
    description: 'Legal notice (Impressum) of the Benchy Tango website by Aaron Benchimol.',
    updated: 'Last updated: October 2026',
    sections: [
      { heading: 'Information according to § 5 DDG (German Digital Services Act)', block: 'address' },
      { heading: 'Contact', block: 'contact' },
      { heading: 'VAT ID', block: 'vat' },
      {
        heading: 'Liability for content',
        body: [
          'The content of this website has been created with great care. However, I cannot guarantee that it is correct, complete and up to date. As soon as I become aware of any legal violation, I will remove the content concerned.',
        ],
      },
      {
        heading: 'Liability for links',
        body: [
          'This website contains links to external websites (for example Instagram, Facebook and WhatsApp) whose content I have no influence on. The respective provider is responsible for that content. If I become aware of any legal violation, I will remove such links.',
        ],
      },
      {
        heading: 'Copyright',
        body: [
          'Texts, photographs and paintings on this website are protected by copyright. Any use beyond the limits of copyright law requires prior written consent.',
          'Flags: flag-icons (MIT licence). World map: Natural Earth (public domain).',
        ],
      },
    ],
  },
  privacy: {
    title: 'Privacy Policy',
    description: 'How the Benchy Tango website handles personal data.',
    updated: 'Last updated: October 2026',
    sections: [
      {
        heading: '1. Controller',
        body: ['The controller responsible for data processing on this website under the General Data Protection Regulation (GDPR) is:'],
        block: 'address',
      },
      { heading: 'Contact', block: 'contact' },
      {
        heading: '2. In short',
        body: [
          'This website sets no cookies, stores nothing on your device, uses no analytics or tracking tools and embeds no third-party content. Fonts, images and the map are loaded directly from this website. Personal data is only processed when you visit the website (server log files) or send me a message.',
        ],
      },
      {
        heading: '3. Hosting and server log files',
        body: [
          'This website is hosted by Netlify, Inc. (San Francisco, USA). When you visit it, Netlify automatically processes data sent by your browser: IP address, date and time of access, the page requested, the referrer URL, and browser and operating system.',
          'The purpose is to deliver the website securely and reliably. The legal basis is Art. 6(1)(f) GDPR (legitimate interest in secure operation). Netlify processes the data as a processor. Transfers to the USA are covered by the European Commission’s Standard Contractual Clauses (Art. 46(2)(c) GDPR).',
        ],
        links: [{ label: 'Netlify privacy policy', href: 'https://www.netlify.com/privacy/' }],
      },
      {
        heading: '4. Contact form',
        body: [
          'When you use the contact form, I process the information you enter: name, email address, type of enquiry, place or date of the event (optional) and your message, plus the language of the page the enquiry comes from.',
          'The form is sent through Netlify Forms. Netlify stores the enquiry, checks it automatically for spam and forwards it to me by email. The purpose is to answer your enquiry. The legal basis is Art. 6(1)(b) GDPR when it concerns a booking or a contract, otherwise Art. 6(1)(f) GDPR (legitimate interest in answering enquiries).',
          'I delete the data once your enquiry has been dealt with, unless legal retention obligations apply.',
        ],
      },
      {
        heading: '5. Contact by email',
        body: [
          'If you email me (including messages forwarded from the contact form), the email is received and stored with Gmail, a service of Google Ireland Limited (Dublin, Ireland). A transfer to the USA cannot be ruled out; Google relies on the EU-U.S. Data Privacy Framework and Standard Contractual Clauses for it. Purpose and legal basis as for the contact form.',
        ],
        links: [{ label: 'Google privacy policy', href: 'https://policies.google.com/privacy' }],
      },
      {
        heading: '6. WhatsApp',
        body: [
          'The WhatsApp button and links are plain links. Only when you click them does WhatsApp open, a service of WhatsApp Ireland Limited (Dublin, Ireland), and its privacy policy applies. If you write to me on WhatsApp, I process your message and phone number to answer you (Art. 6(1)(b) or (f) GDPR).',
        ],
        links: [{ label: 'WhatsApp privacy policy', href: 'https://www.whatsapp.com/legal/privacy-policy-eea' }],
      },
      {
        heading: '7. Links to social networks',
        body: [
          'The references to Instagram and Facebook are plain links, not plugins. No data is sent to these networks when you visit this website. Only when you follow a link does the privacy policy of Meta Platforms Ireland Limited apply.',
        ],
      },
      {
        heading: '8. Cookies',
        body: [
          'This website uses no cookies or similar technologies (such as local storage) and stores no information on your device, so no consent (cookie banner) is needed. When you choose a country or continent on the map, the choice only appears in your browser’s address bar (for example “?country=de”) and is not stored.',
        ],
      },
      {
        heading: '9. Your rights',
        body: [
          'You have the right of access (Art. 15 GDPR), rectification (Art. 16), erasure (Art. 17), restriction of processing (Art. 18), data portability (Art. 20) and objection (Art. 21). You can withdraw any consent at any time with effect for the future (Art. 7(3)). Just send me an email.',
          'Right to object: where I process data on the basis of Art. 6(1)(f) GDPR, you can object to this processing at any time on grounds relating to your particular situation.',
          'You also have the right to lodge a complaint with a data protection supervisory authority (Art. 77 GDPR). The competent authority is the Berlin Commissioner for Data Protection and Freedom of Information.',
        ],
        links: [{ label: 'Berlin Commissioner for Data Protection and Freedom of Information', href: 'https://www.datenschutz-berlin.de' }],
      },
      {
        heading: '10. Further information',
        body: [
          'You are not obliged to give me personal data, but without contact details I cannot answer you. There is no automated decision-making or profiling. The website is transmitted encrypted over HTTPS.',
          'I update this privacy policy when the website or the law changes.',
        ],
      },
    ],
  },
};

const es: LegalTexts = {
  labels: {
    email: 'Email',
    phone: 'Teléfono / WhatsApp',
    vat: 'Número de identificación fiscal a efectos del IVA (§ 27a UStG)',
    pending: 'falta',
    pendingNote: 'Borrador: falta la dirección postal. Esta página no debe publicarse así.',
  },
  imprint: {
    title: 'Aviso legal',
    description: 'Aviso legal (Impressum) de la web Benchy Tango de Aaron Benchimol.',
    updated: 'Actualizado: octubre de 2026',
    sections: [
      { heading: 'Datos según el § 5 DDG (ley alemana de servicios digitales)', block: 'address' },
      { heading: 'Contacto', block: 'contact' },
      { heading: 'Número de IVA', block: 'vat' },
      {
        heading: 'Responsabilidad por los contenidos',
        body: [
          'Los contenidos de esta web se han elaborado con el máximo cuidado. Sin embargo, no puedo garantizar que sean correctos, completos y actuales. En cuanto tenga conocimiento de una infracción legal, retiraré el contenido afectado.',
        ],
      },
      {
        heading: 'Responsabilidad por los enlaces',
        body: [
          'Esta web contiene enlaces a sitios externos (por ejemplo Instagram, Facebook y WhatsApp) sobre cuyo contenido no tengo influencia. Del contenido es responsable cada proveedor. Si tengo conocimiento de una infracción legal, retiraré esos enlaces.',
        ],
      },
      {
        heading: 'Derechos de autor',
        body: [
          'Los textos, las fotografías y las pinturas de esta web están protegidos por derechos de autor. Cualquier uso fuera de los límites de la ley requiere autorización previa por escrito.',
          'Banderas: flag-icons (licencia MIT). Mapa del mundo: Natural Earth (dominio público).',
        ],
      },
    ],
  },
  privacy: {
    title: 'Política de privacidad',
    description: 'Cómo trata los datos personales la web Benchy Tango.',
    updated: 'Actualizado: octubre de 2026',
    sections: [
      {
        heading: '1. Responsable',
        body: ['El responsable del tratamiento de datos en esta web según el Reglamento General de Protección de Datos (RGPD) es:'],
        block: 'address',
      },
      { heading: 'Contacto', block: 'contact' },
      {
        heading: '2. En resumen',
        body: [
          'Esta web no usa cookies, no guarda nada en tu dispositivo, no usa herramientas de analítica ni de seguimiento y no incrusta contenido de terceros. Las fuentes, las imágenes y el mapa se cargan directamente desde esta web. Solo se tratan datos personales cuando visitas la web (registros del servidor) o cuando me envías un mensaje.',
        ],
      },
      {
        heading: '3. Alojamiento y registros del servidor',
        body: [
          'Esta web está alojada en Netlify, Inc. (San Francisco, EE. UU.). Al visitarla, Netlify trata automáticamente los datos que envía tu navegador: dirección IP, fecha y hora del acceso, página solicitada, URL de procedencia, y navegador y sistema operativo.',
          'La finalidad es ofrecer la web de forma segura y estable. La base jurídica es el art. 6.1.f RGPD (interés legítimo en un funcionamiento seguro). Netlify trata los datos como encargado del tratamiento. Las transferencias a EE. UU. se amparan en las cláusulas contractuales tipo de la Comisión Europea (art. 46.2.c RGPD).',
        ],
        links: [{ label: 'Política de privacidad de Netlify', href: 'https://www.netlify.com/privacy/' }],
      },
      {
        heading: '4. Formulario de contacto',
        body: [
          'Si usas el formulario de contacto, trato los datos que introduces: nombre, email, tipo de consulta, lugar o fecha del evento (opcional) y tu mensaje, además del idioma de la página desde la que llega la consulta.',
          'El formulario se envía a través de Netlify Forms. Netlify guarda la consulta, la revisa automáticamente para filtrar spam y me la reenvía por email. La finalidad es responder a tu consulta. La base jurídica es el art. 6.1.b RGPD cuando se trata de una contratación, y en los demás casos el art. 6.1.f RGPD (interés legítimo en responder consultas).',
          'Borro los datos cuando la consulta está resuelta, salvo que existan obligaciones legales de conservación.',
        ],
      },
      {
        heading: '5. Contacto por email',
        body: [
          'Si me escribes un email (también los mensajes reenviados desde el formulario), se recibe y guarda en Gmail, un servicio de Google Ireland Limited (Dublín, Irlanda). No se puede descartar una transferencia a EE. UU.; Google se basa para ello en el Marco de Privacidad de Datos UE-EE. UU. y en cláusulas contractuales tipo. Finalidad y base jurídica como en el formulario.',
        ],
        links: [{ label: 'Política de privacidad de Google', href: 'https://policies.google.com/privacy' }],
      },
      {
        heading: '6. WhatsApp',
        body: [
          'El botón y los enlaces de WhatsApp son enlaces simples. Solo cuando haces clic se abre WhatsApp, un servicio de WhatsApp Ireland Limited (Dublín, Irlanda), y se aplica su política de privacidad. Si me escribes por WhatsApp, trato tu mensaje y tu número de teléfono para responderte (art. 6.1.b o 6.1.f RGPD).',
        ],
        links: [{ label: 'Política de privacidad de WhatsApp', href: 'https://www.whatsapp.com/legal/privacy-policy-eea' }],
      },
      {
        heading: '7. Enlaces a redes sociales',
        body: [
          'Las referencias a Instagram y Facebook son enlaces simples, no plugins. Al visitar esta web no se envía ningún dato a esas redes. Solo cuando sigues un enlace se aplica la política de privacidad de Meta Platforms Ireland Limited.',
        ],
      },
      {
        heading: '8. Cookies',
        body: [
          'Esta web no usa cookies ni tecnologías similares (como el almacenamiento local) y no guarda información en tu dispositivo, por lo que no hace falta consentimiento (banner de cookies). Cuando eliges un país o un continente en el mapa, la elección solo aparece en la barra de direcciones del navegador (por ejemplo «?country=de») y no se guarda.',
        ],
      },
      {
        heading: '9. Tus derechos',
        body: [
          'Tienes derecho de acceso (art. 15 RGPD), rectificación (art. 16), supresión (art. 17), limitación del tratamiento (art. 18), portabilidad (art. 20) y oposición (art. 21). Puedes retirar en cualquier momento un consentimiento dado, con efecto para el futuro (art. 7.3). Basta con que me escribas un email.',
          'Derecho de oposición: cuando trato datos con base en el art. 6.1.f RGPD, puedes oponerte en cualquier momento por motivos relacionados con tu situación particular.',
          'También tienes derecho a presentar una reclamación ante una autoridad de control (art. 77 RGPD). La autoridad competente es la Comisionada de Berlín para la Protección de Datos y la Libertad de Información.',
        ],
        links: [{ label: 'Berliner Beauftragte für Datenschutz und Informationsfreiheit', href: 'https://www.datenschutz-berlin.de' }],
      },
      {
        heading: '10. Otra información',
        body: [
          'No estás obligado a darme datos personales, aunque sin datos de contacto no puedo responderte. No hay decisiones automatizadas ni elaboración de perfiles. La web se transmite cifrada mediante HTTPS.',
          'Actualizo esta política de privacidad cuando cambian la web o la ley.',
        ],
      },
    ],
  },
};

export const LEGAL_TEXTS: Record<Language, LegalTexts> = { en, es, de };
