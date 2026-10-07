# Timo Fülbier Schornsteinfeger — erster Entwurf

Statische Webseite für das bestehende Strato-Hosting. Keine Installation oder Build-Schritte erforderlich.

## Lokale Ansicht

Im Projektordner `node preview.cjs` starten und http://127.0.0.1:4174 öffnen. Alternativ index.html direkt im Browser öffnen.

## Inhalt

Eine Seite mit Sprungmarken, mobiler Navigation, Telefon- und E-Mail-Links. Alle Schriften und Grafiken sind lokal. Das Haus und die schematische Gebietsgrafik sind dekorative SVG-Illustrationen; die Gebietsgrafik stellt keine tatsächlichen Bezirksgrenzen dar. Foto-Platzhalter für Timo Fülbier und Jan Hanneck.

Das gewählte moderne Design ist die Hauptseite in `index.html`, mit `styles.css` und `modern.css`. `modern.html` enthält dieselbe Ansicht als kompatiblen Zugang zur bisherigen Vorschau. Der Designvergleich wurde entfernt.

## Vor Veröffentlichung

- Entwurf und Leistungstexte mit dem Betrieb abstimmen.
- Impressum vervollständigen und Datenschutzerklärung auf das tatsächliche Hosting abstimmen. Die Dialoge enthalten ausdrücklich nur Entwurfshinweise.
- Foto-Platzhalter durch freigegebene Porträts ersetzen, sobald vorhanden.
- Bestehende Inhalte bei Strato sichern; anschließend index.html, styles.css, modern.css, script.js, Logo.jpeg und assets/ in das Webverzeichnis übertragen.

Es wurde nichts auf Strato veröffentlicht.

## GitHub Pages als Live-Vorschau

Der Workflow `.github/workflows/pages.yml` veröffentlicht die Webseite bei einem Push auf `main` und kann manuell unter Actions gestartet werden. Im Repository muss unter Settings → Pages → Build and deployment die Quelle **GitHub Actions** gewählt sein.

`node build.cjs` stellt ausschließlich die benötigten Webseiten-Dateien in `dist/` bereit. Screenshots, Dokumentation und der lokale Vorschauserver werden nicht veröffentlicht. Die Dateien verwenden relative Pfade, damit die Seite auch unter einer GitHub-Pages-Projektadresse funktioniert.

Die Strato-Domain bleibt unverändert. Die Live-Vorschau enthält weiterhin die gekennzeichneten Entwürfe für Impressum und Datenschutz.
