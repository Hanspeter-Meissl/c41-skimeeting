// Vorauszahlung und Aufenthalt der Anmeldung zum Skimeeting in Flachau 2027.
// Dieselben Regeln stehen in der Auswertung (Zweites Gehirn, 03 Bereiche/Club C41/Skimeeting Flachau/
// C41 Skimeeting auswerten.py) und in Google/Code.gs. Bei einer Änderung alle nachziehen.
//
// Nur Mitglieder, keine Begleitung. Teilnahme 1 kostet 200 € Vorauszahlung, 0 heißt nicht dabei.
// Aufenthalt, Zimmerwunsch und Mitfahrgelegenheit ändern den Betrag nicht.

const VORAUSZAHLUNG = 200;
const TEILNAHME = [0, 1];
const ZIMMER = ["Einzelzimmer", "Doppelzimmer"];
const SELBST = "fahre selbst", MITFAHREN = "möchte mitfahren";
const PLAETZE = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// Tage als ISO-Datum; die Abreise liegt nach der Anreise.
const ANREISETAGE = ["2027-01-10", "2027-01-11", "2027-01-12"];
const ABREISETAGE = ["2027-01-11", "2027-01-12", "2027-01-13"];
const TAGNAME = { "2027-01-10": "Sonntag, 10. Jänner", "2027-01-11": "Montag, 11. Jänner",
                  "2027-01-12": "Dienstag, 12. Jänner", "2027-01-13": "Mittwoch, 13. Jänner" };

function anmeldung(teilnahme) {
  const gueltig = TEILNAHME.includes(teilnahme);
  return { gueltig, teilnahme: gueltig ? teilnahme : 0, betrag: gueltig ? teilnahme * VORAUSZAHLUNG : 0 };
}

// Zahl der Nächte, null wenn ein Tag nicht vorgesehen ist oder die Abreise nicht nach der Anreise liegt.
function naechte(von, bis) {
  if (!ANREISETAGE.includes(von) || !ABREISETAGE.includes(bis) || bis <= von) return null;
  return Math.round((Date.parse(bis) - Date.parse(von)) / 86400000);
}

if (typeof module !== "undefined") {
  module.exports = { VORAUSZAHLUNG, TEILNAHME, ZIMMER, SELBST, MITFAHREN, PLAETZE, ANREISETAGE, ABREISETAGE,
                     TAGNAME, anmeldung, naechte };
}
