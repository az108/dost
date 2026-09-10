# Bildnachweise

Die meisten Bilder stammen von Unsplash und sind für die kommerzielle
Nutzung freigegeben (Unsplash License). Einzelne Bilder kommen aus anderen
Quellen; die Spalte „Lizenz" nennt sie jeweils. Bei Unsplash, Pexels und
CC0 erfolgt die Nennung freiwillig zur Nachvollziehbarkeit — verpflichtend
ist sie bei keiner der hier verwendeten Lizenzen.

Alle Bilder auf dieser Seite sind Stockfotos. Sobald das Center in Landshut
eröffnet ist, werden die Räume und das Team mit eigenen Aufnahmen gezeigt und
die entsprechenden Zeilen hier entfernt.

Die zehn Dateien unter `src/assets/center/` und das og-Bild sind auf eine
gemeinsame Bildsprache ausgewählt: warmes, gerichtetes Tageslicht, geringe
Schärfentiefe, viel Fläche. Farbtemperatur und Sättigung sind beim Export
angeglichen, damit sie als eine Serie zusammenfinden.

`src/assets/aesthetik/faltenbehandlung.webp` gehört seit dem Austausch zu
dieser Serie und ist nach demselben Rezept exportiert (Ausschnitt
`2100x1400+300+120` aus dem 2400-px-Original, R ×1,04 / B ×0,93,
`-modulate 96,102`, 1400×933, WebP q82). Das vorherige Bild zeigte eine
Spritze an einer Stirn — und auf dem Kasack der behandelnden Person gut
lesbar den Namen und die Qualifikation einer fremden Fachkraft. Ein fremder
Name auf einer deutschen Behandlungsseite legt eine Empfehlung nahe, die
diese Person nie gegeben hat; das ist derselbe Fall wie das Praxiswappen,
das in Slice 1 entfernt wurde. Das neue Bild trägt keinen Namen, kein
Abzeichen und keine Marke.

`src/assets/laser/arme-komplett.webp` ist aus demselben Grund ausgetauscht
worden und gehört ebenfalls zu dieser Serie. Das vorherige Bild stammte aus
demselben Shooting wie das oben beschriebene: derselbe Kasack mit demselben
fremden Namen und derselben Qualifikation, hier zusätzlich mit vollständig
erkennbarem Gesicht, dazu schwarze Nitrilhandschuhe und ein lesbarer
Geräteschriftzug. Das neue Bild zeigt nur einen Unterarm vor einer hellen
Wand — kein Gerät, keine Person im Bild, keine Schrift. Export nach
demselben Rezept (Ausschnitt `1800x1200+0+900` aus dem 2000-px-Original,
R ×1,05 / G ×0,99 / B ×0,93, `-modulate 98,104`, 1400×933, WebP q82). Bei
einem nahezu weißen Bild führt das Verhältnis R/B in die Irre — hier ist
zusätzlich Grün leicht abgesenkt, sonst kippt die Wand ins Olivgrüne statt
ins warme Creme der übrigen Serie.

`standort-landshut.webp` ist ausgetauscht und stammt als einziges Bild
dieser Serie von Wikimedia Commons (CC0, gemeinfrei, keine Namensnennung
nötig). Das vorherige Bild war ein Straßenausschnitt, der den goldenen
Schriftzug eines fremden Gastronomiebetriebs über das linke Fünftel der
Karte trug, dazu ein Sponsorenbanner einer Segelsport-Serie am rechten Rand
und eine rote Ampel — auf genau der Karte, die „das ist unsere Stadt" sagen
soll. Ein Wahrzeichen war nicht zu sehen und Himmel auch nicht. Das neue
Bild zeigt den Blick von der Burg Trausnitz über die Altstadt auf St.
Martin, den höchsten Backsteinturm der Welt. Export:

```
-crop 2880x1920+480+0    # links eine Plakatwand, unten ein Fassadenname
R ×1,105 / G ×1,02 / B ×0,855
-modulate 104,62         # Sättigung runter: der Postkartenhimmel muss in
+level 10%,99.5%         # den Dunst von München und Stuttgart
-resize 1200x800 -quality 55
```

Bei einer Stadtansicht führt das Verhältnis R/B ebenso in die Irre wie bei
einem fast weißen Bild: Ein großer blauer Himmel drückt es unter 1,0, ohne
dass das Bild kalt wirkt. Maßgeblich war der Blick auf die drei
Standort-Karten nebeneinander, nicht die Zahl.

| Datei | Quelle | Fotograf:in | Lizenz |
|---|---|---|---|
| src/assets/center/hero-home.webp | https://unsplash.com/photos/w4Dj3MshHQ0 | Fleur Kaan | Unsplash License |
| src/assets/center/hero-about.webp | https://unsplash.com/photos/VRoK8MxTlHY | Maverick Frame | Unsplash License |
| src/assets/center/hero-contact.webp | https://unsplash.com/photos/lwLreiMS25k | Franco Debartolo | Unsplash License |
| src/assets/center/pillar-laser.webp | https://unsplash.com/photos/0nav_aD3YZ4 | ActionVance | Unsplash License |
| src/assets/center/pillar-physio.webp | https://unsplash.com/photos/LRcPNV8HQ3Q | Maryjoy Caballero | Unsplash License |
| src/assets/center/pillar-kosmetik.webp | https://unsplash.com/photos/16mHHrY3PUk | Ionela Mat | Unsplash License |
| src/assets/center/ablauf.webp | https://unsplash.com/photos/7yeqemd-p90 | Jakub Klucký | Unsplash License |
| src/assets/center/standort-landshut.webp | https://commons.wikimedia.org/wiki/File:Blick_Landshut_Trausnitz_02.jpg | Helmlechner | CC0 1.0 (Public Domain Dedication) |
| src/assets/center/standort-muenchen.webp | https://unsplash.com/photos/ySICq4GkcsQ | Jan Antonin Kolar | Unsplash License |
| src/assets/center/standort-stuttgart.webp | https://unsplash.com/photos/h05F6pnxedo | Fabian Kleiser | Unsplash License |
| src/assets/laser/oberlippe.webp | https://unsplash.com/photos/hR3ecKHpq7k | Studio Michael França | Unsplash License |
| src/assets/laser/wangen.webp | https://unsplash.com/photos/MrH55xfdLp4 | Ace Maxwell | Unsplash License |
| src/assets/laser/kinn.webp | https://unsplash.com/photos/iN2ObRIy5Mc | Sum Sum | Unsplash License |
| src/assets/laser/gesicht-und-kopf.webp | https://unsplash.com/photos/w2zkMmyMyc4 | Ace Maxwell | Unsplash License |
| src/assets/laser/achseln.webp | https://unsplash.com/photos/IgAa6frsVyQ | Sam Moghadam | Unsplash License |
| src/assets/laser/arme-komplett.webp | https://unsplash.com/photos/H4STV63ICrs | Lívia Rocha | Unsplash License |
| src/assets/laser/ruecken-komplett.webp | https://unsplash.com/photos/ENMjfGTcLHM | DIEGO SÁNCHEZ | Unsplash License |
| src/assets/laser/bikinizone.webp | https://unsplash.com/photos/2mzUaunCeI4 | Mathaus Heringer | Unsplash License |
| src/assets/laser/intim-komplett.webp | https://unsplash.com/photos/7GCHCT-y1HI | Murat Ts. | Unsplash License |
| src/assets/laser/oberschenkel.webp | https://unsplash.com/photos/_A0jYQvTm9M | Farhad Ibrahimzade | Unsplash License |
| src/assets/laser/unterschenkel.webp | https://unsplash.com/photos/szpFxaqS658 | Farhad Ibrahimzade | Unsplash License |
| src/assets/laser/beine-komplett.webp | https://unsplash.com/photos/wgSoYEdlVQE | P Shakoori | Unsplash License |
| src/assets/laser/achseln-intim.webp | https://unsplash.com/photos/upw_biZkIKU | Jason Briscoe | Unsplash License |
| src/assets/laser/achseln-intim-unterschenkel.webp | https://unsplash.com/photos/npE_I2GzpHY | Sherzod Gulomov | Unsplash License |
| src/assets/laser/achseln-intim-beine.webp | https://unsplash.com/photos/6xlyKFFvufg | Atikah Akhtar | Unsplash License |
| src/assets/laser/ganzkoerper.webp | https://unsplash.com/photos/m7bO4otxOiE | Ahmet Kurt | Unsplash License |
| src/assets/laser/gefaessbehandlung.webp | https://unsplash.com/photos/oSHy8iUzMRk | engin akyurt | Unsplash License |
| src/assets/laser/pigmentflecken.webp | https://unsplash.com/photos/7m_jsxQRqoI | Sam Badmaeva | Unsplash License |
| src/assets/laser/aknenarben.webp | https://unsplash.com/photos/o4PXAgfXCNw | Olga Thelavart | Unsplash License |
| src/assets/physio/schmerztherapie.webp | https://unsplash.com/photos/Nt5eeIKH-1s | Annie Spratt | Unsplash License |
| src/assets/physio/manuelle-therapie.webp | https://unsplash.com/photos/uLWW09LLG04 | Marc Zeman | Unsplash License |
| src/assets/physio/sportmedizin.webp | https://unsplash.com/photos/DzRPpycVHEY | Vitaly Gariev | Unsplash License |
| src/assets/physio/akupunktur-tcm.webp | https://unsplash.com/photos/QgcdtM9rA5s | Katherine Hanlon | Unsplash License |
| src/assets/physio/stosswellentherapie.webp | https://unsplash.com/photos/QBzckSn4fpo | Julius Toltesi | Unsplash License |
| src/assets/aesthetik/faltenbehandlung.webp | https://unsplash.com/photos/hYljdqK315s | Shoham Avisrur | Unsplash License |
| src/assets/aesthetik/hyaluron.webp | https://unsplash.com/photos/1rEpbWlm7dA | Mina Rad | Unsplash License |
| src/assets/aesthetik/kryolipolyse.webp | https://unsplash.com/photos/FIkfmwPTKqM | Corinne Sawers | Unsplash License |
| src/assets/aesthetik/farblichttherapie.webp | https://unsplash.com/photos/BqEvVaqcLXc | Imran Ali | Unsplash License |
| src/assets/aesthetik/aesthetische-medizin.webp | https://unsplash.com/photos/xREEa0dZmLY | Sum Sum | Unsplash License |
| public/og-image.jpg | https://unsplash.com/photos/w4Dj3MshHQ0 | Fleur Kaan | Unsplash License |

<!-- Eine Zeile pro Bild. Keine Zeile darf leer bleiben. -->

## Logo

`public/favicon.svg` ist ein eigenes Zwischenzeichen: ein einfaches
Monogramm aus dem Arbeitsnamen der Marke, gezeichnet in der Palette dieser
Website (`--color-brand-ink`, `#1A73E8`). Es ist nicht von fremdem
Bildmaterial abgeleitet, die Rechte liegen bei uns.

Es ist ausdruecklich ein Provisorium. Das endgueltige Zeichen des Centers
kommt vom Kunden bzw. aus Slice 2; solange `center.brandApproved` false ist,
steht auch der Markenname selbst noch nicht fest, und das Monogramm muss mit
ihm neu gezeichnet werden.

Das frueher hier gefuehrte Wappen der Praxis Dr. Dost (`public/logo.png`,
uebernommen von drdosthealth.com) und alle daraus erzeugten Dateien —
`public/logo-80.webp`, `public/logo-320.webp`, `public/favicon.ico`,
`public/favicon-192.png`, `public/apple-touch-icon.png` — sind geloescht.
Die Rechte daran liegen bei der Praxis, nicht beim Center. Ein Center, das
mit dieser Praxis nichts zu tun hat, darf ihr Wappen nicht im Browser-Tab
und nicht auf dem iOS-Homescreen tragen.

Damit gibt es bewusst keinen `.ico`-Fallback fuer sehr alte Browser und kein
Apple-Touch-Icon mehr. Beides ist der ehrliche Preis des Zwischenzustands:
kein Icon ist besser als das Icon einer fremden Praxis.

## Noch offen

Rechtlich nichts. Der Ordner `src/assets/praxis/` ist gelöscht. Er enthielt
sechs eigene Aufnahmen der Praxis Dr. Dost — identifizierbare Bilder ihrer
Räume und ihres Arztes, geführt unter „Rechte bei der Praxis“. Das Center ist
ein anderes Unternehmen und durfte sie nicht zeigen; fünf davon waren nach
Slice 1 unbenutzt, das sechste hing noch am Laser-Bereich.

Offen bleibt eigenes Bildmaterial. Zwei der neuen Bilder zeigen Innenräume
(`hero-about.webp`, `hero-contact.webp`), und ein Besucher wird sie für die
Räume des Centers halten — sie sind es nicht. Deshalb behauptet kein Alt-Text
und keine Bildunterschrift, dass hier das Center zu sehen ist; beschrieben
wird nur, was im Bild steht. Sobald es das Center in Landshut wirklich gibt,
gehören seine eigenen Räume und sein eigenes Team an diese Stellen, und diese
beiden Zeilen verschwinden aus der Tabelle oben.
