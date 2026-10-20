// Vorauszahlung der Anmeldung zum Skimeeting in Flachau 2027.
// Dieselbe Regel steht in der Auswertung (Zweites Gehirn, 03 Bereiche/Club C41/Skimeeting Flachau/
// C41 Skimeeting auswerten.py). Bei einer Änderung beide nachziehen.
//
// Nur Mitglieder, keine Begleitung. Teilnahme 1 kostet 200 € Vorauszahlung, 0 heißt nicht dabei.
// Zimmerwunsch und Anreise ändern den Betrag nicht.

const VORAUSZAHLUNG = 200;
const TEILNAHME = [0, 1];
const ZIMMER = ["Einzelzimmer", "Doppelzimmer"];
const SELBST = "fahre selbst", MITFAHREN = "möchte mitfahren";
const PLAETZE = [0, 1, 2, 3, 4, 5, 6, 7, 8];

function anmeldung(teilnahme) {
  const gueltig = TEILNAHME.includes(teilnahme);
  return { gueltig, teilnahme: gueltig ? teilnahme : 0, betrag: gueltig ? teilnahme * VORAUSZAHLUNG : 0 };
}

if (typeof module !== "undefined") module.exports = { VORAUSZAHLUNG, TEILNAHME, ZIMMER, SELBST, MITFAHREN, PLAETZE, anmeldung };
