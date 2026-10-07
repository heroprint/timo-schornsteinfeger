# Timo Fülbier Schornsteinfeger

Statische, responsive Webseite in Anthrazit und Gold. Die Single Page enthält Leistungen, Team, Kehrbezirk, FAQ und Kontakt. Impressum und Datenschutz haben eigene HTML-Seiten. Bilder und Systemschriften benötigen keine externen Anbieter. Die schematische Gebietsgrafik bildet keine verbindlichen Bezirksgrenzen ab. Porträts für Timo Fülbier und Jan Hannig sind noch Platzhalter.

## Strato als Produktionshosting

`node build.cjs` erstellt die Website in `dist/`. Diese Dateien in den der Domain zugewiesenen Webspace hochladen; vorhandene Dateien vorher sichern. Keine iFrame-Einbettung und keine Weiterleitung zu GitHub Pages verwenden. Upload-Anleitung: `strato/README.txt`. Aktuelles Gesamtpaket: `output/strato-direkt-upload.zip`.

Die Datenschutzerklärung beschreibt direktes Strato-Hosting und das Strato-E-Mail-Postfach. Der Betreiber hat den abgeschlossenen AVV bestätigt. Der Code verwendet keine Cookies, Tracker, externen Schriftarten oder eingebetteten Dienste. Nach dem Upload die tatsächliche Serverkonfiguration prüfen und HTTPS sicherstellen.

Im Impressum stehen Inhaber, Anschrift, Kontakt, Handwerkskammer Dortmund, Berufsbezeichnung, Kreis Unna und berufsrechtliche Regelungen. Identifikationsnummern sind auf Wunsch noch als Platzhalter enthalten und müssen vor Fertigstellung geklärt werden. Persönliche Steuernummern gehören nicht auf die Webseite.

`robots.txt` und `sitemap.xml` verwenden die Produktionsdomain https://fuelbier-schornsteinfeger.de/. Nach dem Upload beide URLs aufrufen und die Sitemap in der Google Search Console einreichen.

## Entwicklung und bisherige GitHub-Vorschau

Hauptdateien: `index.html`, `styles.css`, `modern.css`, `enhancements.css`, `script.js`, `impressum.html`, `datenschutz.html`. `modern.html` ist nur ein lokaler kompatibler Vorschauzugang. Der Designvergleich wurde entfernt.

Der vorhandene GitHub-Actions-Workflow veröffentlicht bei einem Push auf main nach GitHub Pages. Die aktuelle Strato-Datenschutzerklärung beschreibt diesen Hostingbetrieb nicht; die Produktionsfassung daher direkt bei Strato bereitstellen. Die GitHub-Vorschau wurde mit diesen lokalen Änderungen nicht aktualisiert. Es wurde nichts auf Strato hochgeladen.
