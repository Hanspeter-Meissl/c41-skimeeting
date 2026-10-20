// Prüft die Vorauszahlung an denselben Fällen wie die Auswertung (FAELLE in C41 Skimeeting auswerten.py)
// und die Nächte an den Fällen der Testdaten (naechte() in der Auswertung).
// Aufruf: node test/anmeldung.test.js
const { anmeldung, naechte } = require("../anmeldung.js");

const faelle = [
  { teilnahme: 0, betrag: 0, gueltig: true },     // nicht dabei
  { teilnahme: 1, betrag: 200, gueltig: true },
  { teilnahme: 2, betrag: 0, gueltig: false },    // nicht vorgesehen, keine Begleitung
];
const aufenthalte = [
  { von: "2027-01-10", bis: "2027-01-13", naechte: 3 },
  { von: "2027-01-11", bis: "2027-01-13", naechte: 2 },
  { von: "2027-01-10", bis: "2027-01-12", naechte: 2 },
  { von: "2027-01-12", bis: "2027-01-11", naechte: null },  // Abreise vor der Anreise
  { von: "2027-01-12", bis: "2027-01-12", naechte: null },  // Abreise am Tag der Anreise
  { von: "2027-01-09", bis: "2027-01-13", naechte: null },  // Anreisetag nicht vorgesehen
];

let fehler = 0;
for (const f of faelle) {
  const a = anmeldung(f.teilnahme);
  const ok = a.betrag === f.betrag && a.gueltig === f.gueltig;
  if (!ok) fehler++;
  console.log(`${ok ? "ok    " : "FEHLER"} Teilnahme ${f.teilnahme}: ${a.betrag} € (erwartet ${f.betrag}), gültig ${a.gueltig}`);
}
for (const f of aufenthalte) {
  const n = naechte(f.von, f.bis);
  const ok = n === f.naechte;
  if (!ok) fehler++;
  console.log(`${ok ? "ok    " : "FEHLER"} ${f.von} bis ${f.bis}: ${n} Nächte (erwartet ${f.naechte})`);
}
process.exit(fehler ? 1 : 0);
