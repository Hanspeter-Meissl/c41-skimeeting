# Anmeldeseite Skimeeting Flachau, Club 41

Anmeldung zum Skimeeting in Flachau (10. bis 13. Jänner 2027, Quartier Reslwirt) für die Mitglieder
des Club 41 Grieskirchen-Hausruck. Veröffentlicht über GitHub Pages, gebaut nach dem Muster der
Filzmoos-Anmeldung `c41-filzmoos`.

Nur Mitglieder fahren mit, eine Begleitung gibt es nicht. Das Mitglied wählt „Ich nehme teil“ oder
„Ich nehme nicht teil“. Wer teilnimmt, wählt Einzel- oder Doppelzimmer (beim Doppelzimmer freiwillig
den Zimmerpartner; der Wunsch gilt je nach Verfügbarkeit) und die Anreise: „Ich fahre selbst und habe
Platz für 0 bis 8 Personen“ oder „Ich möchte mitfahren“. Die Vorauszahlung beträgt 200 € je
Teilnehmer. „Anmeldung prüfen“ zeigt die Anmeldung noch einmal, „Anmeldung abschicken“ schickt sie an
die Google-Web-App „Skimeeting Anmeldung“ (Konstante `GOOGLE` in `index.html`, Quelle
`03 Bereiche/Club C41/Skimeeting Flachau/Google/Code.gs` im Vault). Die Web-App prüft das Mitglied
und die Angaben und schreibt eine Zeile in die Google-Tabelle „Skimeeting Anmeldungen 2027“.

Ersatzweg ist eine vorbereitete Mail an Hanspeter: Die Seite bietet sie an, wenn Google nicht
antwortet, der Link keine Kennung trägt oder `GOOGLE` leer ist.

Der persönliche Link trägt die Kennung des Mitglieds (`m`) und den Vornamen für die Anrede (`n`):
`?m=Nr.%2018%20Meissl&n=Hanspeter`. Erzeugt von `C41 Skimeeting Links erzeugen.py` im Vault. Der
Bestätigungslink für bereits Angemeldete trägt zusätzlich `t=1`; die Seite wählt damit die Teilnahme
vor und bittet um Zimmerwunsch und Anreise.

## Dateien

- `index.html`: Seite, Eckdaten, Adresse der Google-Web-App
- `anmeldung.js`: Vorauszahlung je Teilnehmer, erlaubte Werte für Zimmer, Anreise und Plätze
- `test/anmeldung.test.js`: Prüfung der Regel, `node test/anmeldung.test.js`
- `bilder/`: Wappen und Vorschaubild 1200 × 630 für geteilte Links, erzeugt von
  `C41 Skimeeting Vorschaubild erzeugen.py` im Vault

Die Regel steht außerdem in der Auswertung im Vault (`C41 Skimeeting auswerten.py`) und in
`Code.gs`. Bei einer Änderung alle Stellen nachziehen.

Das Repository ist öffentlich. Die Adresse der Web-App darf hinein, der Exportschlüssel nie.

## Lokal ansehen

`python -m http.server 8151 --directory .` und dann `http://localhost:8151/?m=Nr.%2018%20Meissl&n=Hanspeter`.
