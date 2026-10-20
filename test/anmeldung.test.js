// Prüft die Vorauszahlung an denselben Fällen wie die Auswertung (FAELLE in C41 Skimeeting auswerten.py).
// Aufruf: node test/anmeldung.test.js
const { anmeldung } = require("../anmeldung.js");

const faelle = [
  { teilnahme: 0, betrag: 0, gueltig: true },     // nicht dabei
  { teilnahme: 1, betrag: 200, gueltig: true },
  { teilnahme: 2, betrag: 0, gueltig: false },    // nicht vorgesehen, keine Begleitung
];

let fehler = 0;
for (const f of faelle) {
  const a = anmeldung(f.teilnahme);
  const ok = a.betrag === f.betrag && a.gueltig === f.gueltig;
  if (!ok) fehler++;
  console.log(`${ok ? "ok    " : "FEHLER"} Teilnahme ${f.teilnahme}: ${a.betrag} € (erwartet ${f.betrag}), gültig ${a.gueltig}`);
}
process.exit(fehler ? 1 : 0);
